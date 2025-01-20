import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://nikhilsaiportfolio-1.onrender.com/api/v1/${url}`);

                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = response.data;
                setData(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }

        if (url) {
            fetchData(url);
        }
    }, [url]);

    return { data, loading, error }
}

export default useFetch;