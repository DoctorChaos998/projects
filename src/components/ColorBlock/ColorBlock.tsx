import React, {FC, useMemo} from 'react';
import classes from "./ColorBlock.module.scss";
import {checkColorLightness} from "@/helpers/colorsHelper";
import {useAppDispatch} from "@/hooks";
import {colorsActions} from "@/store/slices/colorsSlice/colorsSlice";

interface IColorBlockProps{
    color: string;
    colorCanChange: boolean;
    changeColorState: () => void;
}
const ColorBlock:FC<IColorBlockProps> = ({color, colorCanChange, changeColorState}) => {
    const dispatch = useAppDispatch();
    const textColor = checkColorLightness(color)?"black":"white";
    return (
        <div className={classes.colorContainer} style={{backgroundColor: `#${color}`}}>
            <h1 style={{color: textColor}} className={classes.colorText} onClick={() => {
                navigator.clipboard.writeText(`#${color}`).then();
                dispatch(colorsActions.setNotificationIsVisible(true));
            }}>{`#${color}`}</h1>
            <button onClick={changeColorState} className={classes.button}>
                {colorCanChange?
                    <span className={`${classes.icon} material-icons`} style={{color: textColor}}>
                        lock
                    </span>
                :
                    <span className={`${classes.icon} material-icons`} style={{color: textColor}}>
                        lock_open
                    </span>
                }
            </button>
        </div>
    );
};

export default ColorBlock;
//5BF74B