import Todo from "./Todo";

export default function TodoList(){
    return(
        <ul>
            <Todo isComplete={true}text="DATA1"/>        
            <Todo isComplete={true}text="DATA2"/>        
            <Todo isComplete={false}text="DATA3"/>        
        </ul>
    )
}