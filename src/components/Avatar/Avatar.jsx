import React   from "react";

const Avatar = ({ children,backgroundColor,padding,fontsize, color ,borderRadius, textAlign,px ,py, cursor ,textDecoration}) => {

    const style= {
      backgroundColor,
      padding  :`${py} ${px}`,
      fontsize,
      color : color || 'black',
      borderRadius,
      textAlign : "center",
      cursor : cursor || null,
      textDecoration :"none",
    }
     return(
        <div style={style}>
            { children}
        </div>
     )
}

export default Avatar