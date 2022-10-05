import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import "./scss/main.scss";

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Footer />
		</div>
	);
};

export default App;
