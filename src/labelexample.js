export default function Labelexample(props){

    const text = props.text;
    const color = props.color;
    const number = props.number;

    return(
        <h1 style={{color:color}}>{text + ` ${number}`}</h1>
    )
}