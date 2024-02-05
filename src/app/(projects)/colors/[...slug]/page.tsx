'use client'
import React, {FC, useLayoutEffect} from 'react';
import classes from "./colorsPage.module.scss";
import ColorBlock from "@/components/ColorBlock/ColorBlock";
import {checkColorValidation, generateRandomColor} from "@/helpers/colorsHelper";
import {useParams, useRouter} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {colorsActions} from "@/store/slices/colorsSlice/colorsSlice";

const ColorsPage:FC = () => {
    const dispatch = useAppDispatch();
    const colorsCanChange = useAppSelector(state => state.colorsReducer.colorsCanChange);
    const router = useRouter();
    const params = useParams<{ slug : string[]}>();
    useLayoutEffect(() => {
        const temp = params.slug.slice(0,5);
        for(let i = 0;i<5;i++){
            if(!temp[i]||!checkColorValidation(temp[i])&&!colorsCanChange[i]){
                temp[i] = generateRandomColor();
            }
        }
        router.push(`/colors/${temp[0]}/${temp[1]}/${temp[2]}/${temp[3]}/${temp[4]}`);
    }, []);
    function regenerateColors(event: React.KeyboardEvent<HTMLDivElement>){
        event.preventDefault();
        if(event.key === ' '){
            router.push(`/colors/${colorsCanChange[0]?params.slug[0]:generateRandomColor()}/${colorsCanChange[1]?params.slug[1]:generateRandomColor()}/${colorsCanChange[2]?params.slug[2]:generateRandomColor()}/${colorsCanChange[3]?params.slug[3]:generateRandomColor()}/${colorsCanChange[4]?params.slug[4]:generateRandomColor()}`);
        }
    }
    return (
        <div className={classes.container} onKeyDown={regenerateColors} tabIndex={0}>
            {params.slug.map((currentColor, index) => <ColorBlock key={index} color={currentColor} changeColorState={() => dispatch(colorsActions.setColorCanChange(index))} colorCanChange={colorsCanChange[index]}/>)}
        </div>
    );
};

export default ColorsPage;