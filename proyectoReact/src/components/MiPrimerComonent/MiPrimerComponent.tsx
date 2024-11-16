import { FC } from "react"


interface IPropsMiPrimierComponent{
    text: string
    color: string
    fontSize?: number
}



export const MiPrimerComponent:
FC<IPropsMiPrimierComponent> = ({
    text, 
    color,
    fontSize
}) => {
  return <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}>
        <p>{text}</p>
        </div>;
};
