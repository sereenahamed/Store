import Header from "../Header/Header";
import Item from "./Item";


function FruitCategory(){
  let Fruititems = [
    {
    title:"Avocado 1 Piece",
    price: "1.6",
    src: "https://www.coop.ch/img/produkte/310_310/RGB/6869110_001.jpg?_=1648187647246"
    },
    {
      title:"Charentais melon 1 Piece",
      price: "2.8",
      src: "https://www.coop.ch/img/produkte/310_310/RGB/3090782_001.jpg?_=1581105597542"
      },
      {
        title: "Lemon 1 piece",
        price: "3.99",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/6869246_001.jpg?_=1679960014505"
      },
      {
        title: "Bananas 1 Bunch",
        price: "0.99",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/6832787_001.jpg?_=1641810264993"
      },
      {
        title: "Pineapple 1 Piece",
        price: "2.49",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/3090545_001.jpg?_=1628156780750"
      },
      {
        title: "Grapes 1 Pound",
        price: "2.79",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/6639982_001.jpg?_=1662451095237"
      },
      {
        title: "Watermelon 1 Piece",
        price: "4.99",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/6986451_001.jpg?_=1688478774487"
      }
  ]

  return (
    <> 
    <Header/>
    <div className='CategoryHead'>&apos; Fruit &apos;</div>
    <div className='Grid-items'>
      {Fruititems.map((Fruit,index)=>(
        <Item
        key={index}
        title={Fruit.title}
        price={Fruit.price}
        src={Fruit.src}
      />
      ))}
    </div>
    </>
  )
  
}

export default FruitCategory;