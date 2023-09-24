import Header from "../Header/Header";
import Item from "./Item";


function VegitableCategory(){
  let Vegitableitems = [
    {
    title:"Potatoes",
    price: "2.95",
    src: "https://www.coop.ch/img/produkte/310_310/RGB/6377083_001.jpg?_=1695026643645"
    },
    {
      title:"Carrots 1 Kg",
      price: "1.2",
      src: "https://www.coop.ch/img/produkte/310_310/RGB/4644033_001.jpg?_=1630547255426"
      },
      {
        title: "Celery 500 g",
        price: "2.5",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/3090928_001.jpg?_=1581388637800"
      },
      {
        title: "Tomatoes 1 Kg",
        price: "4.5",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/3091367_001.jpg?_=1688361483840"
      },
      {
        title: "Red Bell paperonis 1 Piece",
        price: "2.49",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/3090903_001.jpg?_=1685710760667"
      },
      {
        title: "Broccoli 500 g",
        price: "4.5",
        src: "https://www.coop.ch/img/produkte/310_310/RGB/6471085_001.jpg?_=1581974704342"
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

export default VegitableCategory;