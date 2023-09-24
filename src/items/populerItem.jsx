import Item from "./Item";

function PopulerItem (){

  let populerCategoryItems=[
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
  ]

  return(
    <>
    <div className='CategoryHead'>&apos; Populer &apos;</div>
    <div className='Grid-items'>
    {populerCategoryItems.map((populer,index)=>(
      <Item 
      key={index}
      title={populer.title}
      price={populer.price}
      src={populer.src}/>
    ))}
    </div> 
    </>
  )
}
export default PopulerItem;