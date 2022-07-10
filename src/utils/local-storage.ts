export const getFromLocalStorage = (key: string): any => {
    const response = localStorage.getItem(key);
    return response ? JSON.parse(response) : null;
};

export const setToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};
