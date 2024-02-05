'use client'
import {generateRandomColor} from "@/helpers/colorsHelper";
import {useRouter} from "next/navigation";
import {useLayoutEffect} from "react";

const ColorsPage = () => {
    const router = useRouter();
    useLayoutEffect(() => {
        router.push(`/colors/${generateRandomColor()}/${generateRandomColor()}/${generateRandomColor()}/${generateRandomColor()}/${generateRandomColor()}`);
    }, [])
    return null;
};

export default ColorsPage;