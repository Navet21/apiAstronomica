

import React, { useState } from "react";

    export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        
        <div>
            <h1>Contador de clics</h1>
            <button onClick={handleClick}>Clics: {count}</button>
        </div>
    );
    }
