import ProductItem from './../../product-item';
import { ProductTypeList } from 'types';

type ProductsCarouselType = {
  products: ProductTypeList[]
}

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) { return <div>Loading</div> }
  else { var requireProduct = products.slice(0, 4) }

  return (
    <div className="product-item-container">
      {requireProduct.map(item => (
        <ProductItem
          id={item.id}
          name={item.name}
          price={item.price}
          color={item.color}
          discount={item.discount}
          currentPrice={item.currentPrice}
          key={item.id}
          images={item.images}
        />
      ))}
    </div>
  )
}

export default ProductsCarousel