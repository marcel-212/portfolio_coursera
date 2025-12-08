const InfoBox = ({children, style, className}) => {
    return ( 
        <div
            style={style}
            className={`${className} infobox`}
        >
            {children}
        </div>
     );
}
 
export default InfoBox;