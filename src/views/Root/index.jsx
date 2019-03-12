import React, { useState, useEffect } from "react";
import axios from "axios";

export const Root = () => {
    const [url, setBackgroundUrl] = useState(null);
    useEffect(async () => {
        const data = await axios.get(`https://picsum.photos/200`);
        console.log(data);
        setBackgroundUrl(data.result);
    });

    return (
        <div>
            <img alt="" src={url} />
        </div>
    );
};
