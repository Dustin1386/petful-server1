import React, { Component } from 'react';

const ApiContext = React.createContext({
  catsList: [],
  dogsList: [],
  adopters: [],
  petType: '',
  setDogList:()=>{},
  setAdopters:() => {},
  dequeue:() => {},
  setPetType:()=>{}
})
export default ApiContext

export class ApiProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catsList: [], 
      dogsList: [], 
      adopters: [],
      petType: "cats"
    };
   
  }

  setAdopters = adopters => {
		this.setState({ 
      adopters: adopters
     });
};


setCatList = catsList => {
  this.setState({ catsList });
};

setDogList = dogsList => {
  this.setState({ dogsList });
};
setPetType = petType=> {
  this.setState({ petType });
};


render(){

  const value = {
    catsList: this.state.catsList,
    dogsList: this.state.dogsList,
    adopters: this.state.adopters,
    petType:this.state.petType,
    setDogList: this.setDogList,
    setCatList: this.setCatList,
    setAdopters: this.setAdopters,
    setPetType:this.setPetType
  };

return(
  <ApiContext.Provider value={value}>
  {this.props.children}
</ApiContext.Provider>
  )
}
}