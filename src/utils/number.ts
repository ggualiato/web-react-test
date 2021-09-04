export const percent = (value: number, options?: Intl.NumberFormatOptions): string => {
    if (!value) {
        return "";
    }

    const formatter = Intl.NumberFormat("pt-br", {
        maximumFractionDigits: 3,
        minimumFractionDigits: 2,
        ...options,
    });
    const result = formatter.format(value);

    return result + "%";
};

export const currency = (value: number): string => {
    if (!value) {
        return "";
    }

    const formatter = Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" });
    const result = formatter.format(value);

    return result;
};
