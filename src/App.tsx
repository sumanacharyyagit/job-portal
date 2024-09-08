import "./App.css";
import { Button } from "./components/ui/button";

function App() {
    return (
        <div>
            <Button variant={"outline"} onClick={() => console.log("Clicked")}>
                Click here
            </Button>
        </div>
    );
}

export default App;
