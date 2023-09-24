import { Card } from 'react-bootstrap';
import './Category.css'


// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Category({ name, imageSrc, itemCount }){
  const href = `/${name}`;
  return(
    <Card>
      <div className='imgDiv'>
      <Card.Img src={imageSrc} variant='top'/>
         </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="uiverse">
    <span className="tooltip">{itemCount}</span>
    <span>
      <a href={href}>Open it!</a>
    </span>
</div>
      </Card.Body>
    </Card>
    
  )
}

function categoryitems(){
  const categoriesData = [
    {
      name: 'Fruit',
      imageSrc: "src/category/fruit.jpg",
      itemCount: '7 items',
    },
    {
      name: 'Vegitable',
      imageSrc: "src/category/Vegitable.jpg",
      itemCount: '304 items',
    },
    {
      name: 'Frozen food',
      imageSrc: 'src/category/Frozen-food.jpg',
      itemCount: '203 items',
    },
    {
      name: 'Snacks',
      imageSrc: 'src/category/Snaks.jpg',
      itemCount: '100 items',
    },
    {
      name: 'Beverage',
      imageSrc: 'src/category/Beverage.jpg',
      itemCount: '120 items',
    },
    {
      name: 'Bread',
      imageSrc: 'src/category/Bread.jpg',
      itemCount: '40 items',
    },
    {
      name: 'Canned Goods',
      imageSrc: 'src/category/CannedGoods.jpg',
      itemCount: '400 items',
    },
  ];
  return (
    <div className='Grid'>
      {categoriesData.map((category,index)=>(
        <Category
        key={index}
        name={category.name}
        imageSrc={category.imageSrc}
        itemCount={category.itemCount}
      />
      ))}
    </div>
  )

}


export default categoryitems ;