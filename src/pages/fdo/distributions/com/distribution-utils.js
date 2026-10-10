export function formatDateTime(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function parseWholeNumber(value, { allowZero = false } = {}) {
  const pattern = allowZero ? /^(0|[1-9]\d*)$/ : /^[1-9]\d*$/;
  if (!pattern.test(value)) return null;

  const number = Number(value);
  return Number.isSafeInteger(number) ? number : null;
}

export function getStockRows(products, deliveries) {
  return products.map((product) => {
    const delivered = deliveries.reduce(
      (total, delivery) =>
        total +
        (delivery.products.find((item) => item.sku === product.sku)?.quantity ?? 0),
      0,
    );

    return { ...product, delivered, remaining: product.collected - delivered };
  });
}
