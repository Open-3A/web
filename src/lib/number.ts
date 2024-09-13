export function formatCurrency(currency: number) {
    return currency.toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL", minimumFractionDigits: 2 }
    );
}

export function formatPercentage(percentage: number, precision = 2): string {
    return `${percentage.toFixed(precision)}%`;
}