import React, { useEffect, useState } from 'react';

const useBuyers = (email) => {
    const [isBuyers, setIsBuyers] = useState(false);
    const [isBuyersLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://server-to-side.vercel.app/users/Buyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyers(data.isBuyers);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isBuyers, isBuyersLoading]
};

export default useBuyers;