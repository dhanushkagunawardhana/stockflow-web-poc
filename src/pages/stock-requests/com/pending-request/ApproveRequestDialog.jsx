import { CircleCheck } from "lucide-react";

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

function ApproveRequestDialog({ request, disabled = false }) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            type="button"
            size="sm"
            disabled={disabled}
            className="bg-[#f25522] text-white hover:bg-[#dd4617]"
          />
        }
      >
        <CircleCheck />
        Approve Request
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Approve Stock Request {request.id}?</DialogTitle>
          <DialogDescription className="space-y-2">
            <span className="block">
              You are about to approve the complete request from{" "}
              <strong className="text-foreground">{request.fdo}</strong> for{" "}
              <strong className="text-foreground">{request.totalUnits} units</strong>{" "}
              across{" "}
              <strong className="text-foreground">
                {request.products.length} products
              </strong>
              .
            </span>
            <span className="block">
              The full requested quantity will be approved exactly as submitted.
              Warehouse stock will be reduced and a new Distribution Run will be
              created automatically.
            </span>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose render={<Button type="button" variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose
            render={
              <Button
                type="button"
                className="bg-[#f25522] text-white hover:bg-[#dd4617]"
              />
            }
          >
            Confirm Approval
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ApproveRequestDialog;
