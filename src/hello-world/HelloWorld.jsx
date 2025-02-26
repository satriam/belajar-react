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
        <h1>{text.toUpperCase()}</h1>
    )
}

function Paragraf(){
    const text = "Hello"
    return (
        <p>{text.toLowerCase()}</p>
    )
}