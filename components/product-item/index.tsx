import Link from 'next/link';
// import { some } from 'lodash';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavProduct } from 'store/reducers/user';
// import { RootState } from 'store';
import { ProductTypeList } from 'types';

const ProductItem = ({ discount, images, id, name }: ProductTypeList) => {
  // const dispatch = useDispatch();
  // const { favProducts } = useSelector((state: RootState) => state.user);

  // const isFavourite = some(favProducts, productId => productId === id);

  // const toggleFav = () => { 
  //   dispatch(toggleFavProduct(
  //     {
  //       id,
  //     }
  //   ))
  // }

  return (
    <div className="product-item" style={{width: '362px'}}>
      <div className="product__image">
        {/* <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button> */}

          <a>
            <img src={images ? images[0] : ''} alt="dry fruits image" />
            {discount &&
              <span className="product__discount">{discount}%</span>
            }
          </a>
      </div>
      <div className="product__description">
        <Link href={`/product/${id}`}>
          {name}
          </Link>
      </div>

    </div>
  )
};


export default ProductItem