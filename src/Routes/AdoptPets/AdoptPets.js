import React, { Component } from "react";
import ApiContext from "../../Contexts/ApiContext";
import "./AdoptPets.css";
import Line from "../../Components/Line/Line";
import ApiService from "../../Services/api-service";

export default class adoptCat extends Component {
	static contextType = ApiContext;
	state = {
		index: 0
	};
	//increments or decrements index of current object; loops through when gets to the end
	changeIndex = num => {
		if (this.state.index <= 1 && !num) {
			return;
		}
		let petListLength = this.context.dogsList.length;
		console.log(petListLength);
		//if we're at the last pet in the array, loop
		if (num === 1 && petListLength - 1 === this.state.index) {
			//resets state
			num = -this.state.index;
		}
		this.setState({
			index: this.state.index + num
		});
	};

	handleAdopt = petType => {
		ApiService.deletePet(petType).then(res =>
			petType === "dogs"
				? this.context.setDogList(res)
				: this.context.setCatList(res)
		);
		ApiService.deleteAdopter().then(res => {
			this.context.setAdopters(res);
		});
	};
	componentDidMount = () => {
		const petType = this.context.petType;
		//get dogs
		ApiService.getPetList(petType).then(res =>
			petType === "dogs"
				? this.context.setDogList(res)
				: this.context.setCatList(res)
		);

		this.interval = setInterval(() => {
		 this.handleAdopt(petType);
		
		}, 3000);
	};
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	//pass list into adopt main
	render() {
		let petType = this.context.petType || "";
		let index = this.state.index;
		let petList =
			petType === "dogs" ? this.context.dogsList : this.context.catsList || [];
		
		let currPet = petList[index] || {};
		let length = this.context.adopters.length || 0;
	
		let adoptionStatus;
		let color;
		if (length === 1) {
			clearInterval(this.interval);
		}
		//if not adopted and front of the array, return 'available'
		if (index === 0) {
			adoptionStatus = "Available";
			color = "green";
		}
		//if not adopted but not in front of the array, return 'available after first is adopted'
		else {
			adoptionStatus = `Not currently available (not first in line for adoption)`;
			color = "orange";
		}

	
		return (
			<>
				<div className='AdoptMain__div'>
					<h1>FIDO & FIFO ADOPTION</h1>
					<div className='AdoptMain__div body'>
						<div className='AdoptMain__div petInfo'>
							<h2 className='AdoptMain__header'>{petType} for Adoption</h2>
							<div className='photoButtonsContainer'>
								{this.state.index < 1 ? (
									<button className='AdoptMain__button disabled'>
										<i className='fas fa-chevron-left'></i>
									</button>
								) : (
									<button
										className='AdoptMain__button'
										onClick={() => this.changeIndex(-1)}
									>
										<i className='fas fa-chevron-left'></i>
									</button>
								)}{" "}
								<img
									src={currPet.imageURL}
									alt={currPet.imageDescription}
									className='AdoptMain__img'
								></img>
								<button
									className='AdoptMain__button'
									onClick={() => this.changeIndex(1)}
								>
									<i className='fas fa-chevron-right'></i>
								</button>
							</div>
							<h3>
								{this.context.adopters.length === 1
									? `Congratulations on your new pet, ${currPet.name}!`
									: currPet.name}

							</h3>
							<ul>
								<li>
									<span className='bold'>
										Adoption Status:{" "}
										<span className={color}>{adoptionStatus}</span>
									</span>
								</li>
								<li>
									<span className='bold'>Sex:</span> {currPet.sex}
								</li>
								<li>
									<span className='bold'>Age:</span> {currPet.age}
								</li>
								<li>
									<span className='bold'>Breed:</span> {currPet.breed}
								</li>
								<li>
									<span className='bold'>Story:</span> {currPet.story}
								</li>
							</ul>
						</div>
						<div className='AdoptMain__div lineInfo'>
							<Line />
							{/* <AdoptMain/> */}
						</div>
					</div>
				</div>
			</>
		);
	}
}