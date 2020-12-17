import React from "react";
import { Link } from "react-router-dom";
import "./HomeMain.css";

export default function HomeMain() {
	return (
		<div className='HomeMain__div'>
			<h2>Your Local Adoption Shelter</h2>
			<p>
				These pets have lost their way, we would like you to have one, but you don't get to pick.
			</p>
			<h3>The Adoption Process</h3>
			<p>
				We operate on a First in First out basis.{" "}
			</p>
			<div className='LinkContainer'>
				<Link to='/signup'>
					<div className='HomeMain__div photoLink cat'>
						<h3>Adopt a Cat</h3>
					</div>
				</Link>{" "}
				<Link to='/signup'>
					<div className='HomeMain__div photoLink dog'>
						<h3>Adopt a Dog</h3>
					</div>
				</Link>
			</div>
		</div>
	);
}