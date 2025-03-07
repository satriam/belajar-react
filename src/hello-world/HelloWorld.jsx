import "./Style.css";

export default function HelloWorld(){
    const data = {
        text: "kirim props spread syntax",
        text2: "bisa mengacu ke json api"
    }
    return (
        <div>
            <Header {...data} />
            <Paragraf {...data}/>
        </div>
    )
}

function Header({text="LUPA KASIH TEXT"}){
    return(
        <h1 className="content">{text.toUpperCase()}</h1>
    )
}

function Paragraf(props){
    return (
        <p className="judul">{props.text2.toLowerCase()}</p>
    )
}