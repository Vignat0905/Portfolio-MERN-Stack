import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import Timeline from './Components/AdminPanel/Timeline';
import Project from './Components/AdminPanel/Project';
import Loader from './Components/Loader/Loader';

function App() {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.login);

	const { loading, user } = useSelector((state) => state.user);
	useEffect(() => {
		dispatch(getUser());
		dispatch(loadUser());
	}, [dispatch])
	return (
		<Router>
			{
				loading ? <Loader />
					:
					<>
						<Header />
						<Routes>
							<Route path="/" element={
								<Home
									timelines={user && user.timeline}
									skills={user && user.skills}
								/>
							}
							/>
							<Route path="/about" element={<About about={user && user.about} />} />
							<Route path="/projects" element={<Projects
								projects={user && user.projects}
							/>} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/account" element={isAuth ? <AdminPanel user={user} /> : <Admin />} />
							<Route path="/admin/timeline" element={isAuth ? <Timeline /> : <Admin />} />
							<Route path="/admin/project" element={isAuth ? <Project /> : <Admin />} />
						</Routes>
						<Footer />
					</>
			}
		</Router>
	);
}

export default App;
