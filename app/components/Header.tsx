import React from 'react';
import Link from "next/link";

export const Header = () => {
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>about</Link>
            <Link href={"/page-2"}>Page 2</Link>

            </div>
    );
};