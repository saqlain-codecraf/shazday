import Link from 'next/link';
// import { some } from 'lodash';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavProduct } from 'store/reducers/user';
// import { RootState } from 'store';
import { ProductTypeList } from 'types';

const ProductItem = ({ images, id, name, price }: ProductTypeList) => {
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
      <div className='tasteful-container'>
        {/* <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button> */}

          <a>
            <img src={images ? images[0] : ''} alt="dry fruits image" />
          </a>
      <div className="">
        <p><i className='icon-cash'></i>{price}</p>
        <h2>
        <Link href={`/product/${id}`}>
          {name}
          </Link>
        </h2>
      {/* </div> */}
      </div>

    </div>
  )
};


export default ProductItem