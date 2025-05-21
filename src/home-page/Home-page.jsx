import Headers from "./screens/headers";
import Home from "./screens/Home";
import Process from "./screens/Process";

function HomePage() {
    return (
        <div className="overflow-x-hidden">
            <Headers />
            <Home />
            <Process />
        </div>
    );
}

export default HomePage;
