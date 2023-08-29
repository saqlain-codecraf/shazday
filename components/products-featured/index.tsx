import ProductsCarousel from './carousel';
import useSwr from 'swr';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);

  return (
    <section className="section section-products-featured">
        <div className='story-container'>
          <span className='story-heading' style={{color: '#454343'}}>TASTEFUL DRY FRUITS</span>
            <img className='dry-fruit-icon' src="/images/icons/dry-fruits.jpg" width={90} height={90} alt="perfect dry fruits" />
          <p className='story-discovery'>The Perfect Blend</p>
        </div>
        <ProductsCarousel products={data} />
    </section>
  )
};

export default ProductsFeatured