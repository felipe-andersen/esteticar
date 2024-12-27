import { redisClient } from '@/vendor/redis';
import { useState, useEffect } from 'react';


export default function useSaveCacheData(key: any, value: any) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    try {
        redisClient.set(key, value)
    } catch(error) {
        // console.error("Error:", error.message)
        console.log('Error')
    }
  
    // const saveData = async (key, value) => {
    //     setLoading(true);
    //     setError(null);
    //     setSuccess(false);
    // };
  
    return { loading, error, success };
  }