import Header from "../Header/Header";
import Item from "./Item";


function FrozenCategory(){
  let Vegitableitems = [
    {
    title:"Vanilla Dream",
    price: "11.95",
    src: "https://www.coop.ch/img/produkte/310_310/RGB/3518079_001.jpg?_=1646301473528"
    },
    {
      title:"Fish sticks",
      price: "1.2",
      src: "https://www.coop.ch/img/produkte/310_310/RGB/4959593_001.jpg?_=1581044764624"
      },
  ]

  return (
    <>
    <Header/>
     <div className='CategoryHead'>&apos; Vegitable &apos;</div>
    <div className='Grid-items'>
      {Vegitableitems.map((Fruit,index)=>(
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

export default FrozenCategory;