export default function Todo({isComplete,text}){
    if(isComplete){
        return(
        <li>
            <del>{text}</del>
        </li>
        )
    }else{
        return(
        <li>
            {text}
        </li>
        )
    }
}