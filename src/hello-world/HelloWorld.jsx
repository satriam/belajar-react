export default function HelloWorld(){
    return (
        <div>
            <Header text="belajar react "/>
            <Paragraf/>
        </div>
    )
}

function Header({text="LUPA KASIH TEXT"}){
    return(
        <h1 style={{
            color:"grey",
            backgroundColor:"cyan"
        }}>{text.toUpperCase()}</h1>
    )
}

function Paragraf(){
    const text = "Hello"
    return (
        <p>{text.toLowerCase()}</p>
    )
}