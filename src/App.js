import './App.css';
import Card from './components/Card';
import Milk from "./assets/milk.jpeg";
import SecondMilk from "./assets/secondMilk.jpeg";
import Flour from "./assets/flour.jpeg";
import SecondFlour from "./assets/secondFlour.jpeg";
import Oil from "./assets/oil.jpeg";
import SecondOil from "./assets/secondOil.jpeg";
import Eggs from "./assets/eggs.jpeg";
import SecondEggs from "./assets/secondEggs.jpeg";

function App() {
  const groceries = [
    {id: 1, name: 'Milk', img: Milk, price: 6.23, store: 'Shufersal', secondImg: SecondMilk, description: 'milk milk milk'},
    {id: 1, name: 'Flour', img: Flour, price: 4.50, store: 'Rami Levi', secondImg: SecondFlour, description: 'flour flour flour'},
    {id: 1, name: 'Oil', img: Oil, price: 15.90, store: 'Shufersal', secondImg: SecondOil, description: 'oil oil oil'},
    {id: 1, name: 'Eggs', img: Eggs, price: 22.40, store: 'Mega', secondImg: SecondEggs, description: 'eggs eggs eggs'},
  ];

  return (
   <div className="App"> 
    {groceries.map(grocery => (
      <Card grocery={grocery}/>
    ))}
   </div>
  );
}

export default App;
