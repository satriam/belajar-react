import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import TodoList from "../Todo/TodoList";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
           <Container>
            <HelloWorld/>
            <TodoList/>
           </Container>
        </StrictMode>
    )