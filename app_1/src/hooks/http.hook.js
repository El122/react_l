import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    // Функция для упрощения работы с Fetch-запросами
    const req = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true);

        if (body) {
            body = JSON.stringify(body);
            headers["Content-Type"] = "application/json";
        }

        try {
            const res = await fetch(url, { method, body, headers });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Что-то пошло не так");
            }

            setLoading(false);
            
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { loading, req, error, clearError };
}