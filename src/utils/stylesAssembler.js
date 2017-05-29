/**
 * Created by thiago on 29/04/2017.
 */


const getStyleFromProps = (propStyleKeys = [], props = {}) =>{
    let style = {};
    propStyleKeys.map((propStyleKey) => {
        const propStyleValue = props[propStyleKey];
        if(propStyleValue !== undefined && propStyleValue !== null && propStyleValue !== false){
            style = {
                ...style,
                [propStyleKey]: propStyleValue
            }
        }
        return propStyleKey;
    });
    if(props.style){
        style = {
            ...style,
            ...props.style
        }
    }
    return style;
};

export default getStyleFromProps;