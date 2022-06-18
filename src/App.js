import { Header } from "./components/Header";
import "./App.css";
import { TaskCards } from "./components/task/TaskCards";

function App() {
	return (
		<div className="app">
			<Header />
			<TaskCards />
		</div>
	);
}

export default App;
