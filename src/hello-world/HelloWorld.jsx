export default function HelloWorld(){
    return (
        <div>
            <Header/>
            <Paragraf/>
        </div>
    )
}

function Header(){
    const text = "Belajar React JS Dasar"
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