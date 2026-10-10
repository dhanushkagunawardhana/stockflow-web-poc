import { useState } from "react";
import { Plus, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  fdoAssignedWarehouse,
  fdoRequestProducts,
} from "@/data/mock/fdo-stock-requests";

function parseQuantity(value) {
  if (!/^[1-9]\d*$/.test(value)) return null;

  const quantity = Number(value);
  return Number.isSafeInteger(quantity) ? quantity : null;
}

function RequestStockDialog({ activeRequest, onSubmitRequest }) {
  const [open, setOpen] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [note, setNote] = useState("");

  const hasInvalidQuantity = fdoRequestProducts.some((product) => {
    const value = quantities[product.sku] ?? "";
    return value !== "" && parseQuantity(value) === null;
  });
  const selectedProducts = fdoRequestProducts.flatMap((product) => {
    const requested = parseQuantity(quantities[product.sku] ?? "");
    return requested ? [{ ...product, requested }] : [];
  });
  const totalUnits = selectedProducts.reduce(
    (total, product) => total + product.requested,
    0,
  );
  const canSubmit =
    !activeRequest &&
    !hasInvalidQuantity &&
    selectedProducts.length > 0 &&
    note.trim().length > 0;

  function resetForm() {
    setQuantities({});
    setNote("");
  }

  function handleOpenChange(nextOpen) {
    setOpen(nextOpen);
    if (!nextOpen) resetForm();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!canSubmit) return;

    onSubmitRequest({ note: note.trim(), products: selectedProducts });
    handleOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            type="button"
            className="bg-[#f25522] text-white hover:bg-[#dd4617]"
          />
        }
      >
        <Plus aria-hidden="true" />
        Request Stock
      </DialogTrigger>

      <DialogContent className="max-h-[90dvh] overflow-y-auto bg-white sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Request Stock</DialogTitle>
          <DialogDescription>
            Select products and quantities for your next distribution run. The stock
            manager will review your request.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          {activeRequest ? (
            <div className="flex gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-3 text-xs text-amber-900">
              <TriangleAlert aria-hidden="true" className="size-4 shrink-0" />
              <p>
                Submission is blocked while {activeRequest.distributionRun} is{" "}
                {activeRequest.runStatus === "in-progress"
                  ? "in progress"
                  : "awaiting collection"}
                . You can review the form now and submit after this run is finished.
              </p>
            </div>
          ) : null}

          <div className="grid gap-1.5">
            <p className="text-sm font-medium">Warehouse</p>
            <div className="rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm">
              {fdoAssignedWarehouse}
            </div>
          </div>

          <fieldset className="rounded-lg border border-border px-3">
            <legend className="px-1 text-sm font-medium">Products</legend>
            <p className="px-1 pb-1 text-xs text-muted-foreground">
              Enter a quantity for each product you need. Leave the rest blank.
            </p>
            {fdoRequestProducts.map((product) => {
              const value = quantities[product.sku] ?? "";
              const requested = parseQuantity(value);
              const isInvalid = value !== "" && requested === null;
              const exceedsAvailability = requested > product.available;
              const quantityId = `request-quantity-${product.sku}`;
              const messageId = `request-quantity-message-${product.sku}`;

              return (
                <div
                  key={product.sku}
                  className="grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-3 border-b border-border py-3 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_7rem_7rem]"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {product.sku}
                    </p>
                    <p className="text-xs text-muted-foreground sm:hidden">
                      {product.available.toLocaleString("en-US")} available
                    </p>
                  </div>
                  <p className="hidden text-right text-xs text-muted-foreground sm:block">
                    {product.available.toLocaleString("en-US")} available
                  </p>
                  <div>
                    <Label htmlFor={quantityId} className="sr-only">
                      Quantity for {product.name}
                    </Label>
                    <Input
                      id={quantityId}
                      type="number"
                      min="1"
                      step="1"
                      value={value}
                      onChange={(event) =>
                        setQuantities((current) => ({
                          ...current,
                          [product.sku]: event.target.value,
                        }))
                      }
                      placeholder="Qty"
                      aria-invalid={isInvalid || undefined}
                      aria-describedby={
                        isInvalid || exceedsAvailability ? messageId : undefined
                      }
                      className="bg-white text-right"
                    />
                  </div>
                  {isInvalid || exceedsAvailability ? (
                    <p
                      id={messageId}
                      className={`col-span-2 text-xs sm:col-span-3 ${
                        isInvalid ? "text-red-600" : "text-amber-700"
                      }`}
                    >
                      {isInvalid
                        ? "Enter a positive whole number or leave this blank."
                        : "This exceeds warehouse availability and will need stock manager review."}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </fieldset>

          <div className="grid gap-1.5">
            <Label htmlFor="fdo-request-note">Request Note</Label>
            <Textarea
              id="fdo-request-note"
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Explain what this stock is needed for..."
              rows={3}
              required
            />
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2 text-sm font-semibold">
            <span>Total Units</span>
            <span className="tabular-nums">
              {totalUnits.toLocaleString("en-US")}
            </span>
          </div>

          <DialogFooter className="sticky -bottom-4 z-10 bg-white">
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button
              type="submit"
              disabled={!canSubmit}
              className="bg-[#f25522] text-white hover:bg-[#dd4617]"
            >
              Submit Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default RequestStockDialog;
