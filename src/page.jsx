import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"

function Page() {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.background }}>
            <h1 style={{ color: theme.color }}>{`Current Color Value: ${theme.color}`}</h1>
        </div>
    )
}

export default Page;