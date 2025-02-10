import "./App.scss";

const App = () => {
	const [userName, setUserName] = useState("");

	const formSubmibmit = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<article className='App'>
			<form>
				<input type='text' className='userName' placeholder='Jméno' />
				<input onClick={formSubmibmit} type='submit' value='Odeslat' />
			</form>
		</article>
	);
};

export default App;
