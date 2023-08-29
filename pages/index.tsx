import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Link from 'next/link';
import useSwr from 'swr';

const IndexPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: products } = useSwr('/api/products', fetcher);
  console.log("list of products", products);

  const StoryContainer = () => {
    return (
      <section className="featured" style={{ marginBottom: "-53px" }}>
        <div className='story-container'>
          <span className='story-heading'>OUR STORY</span>
          <div className="icon-container avatar-bg" style={{ backgroundColor: '#FBB03B' }}>
            <i className="icon-avatar"></i>
          </div>
          <span className='story-discovery'>Discover</span>
          <p style={{ fontStyle: "italic" }}>Sed euismod, nunc at bibendum dapibus, leo ante scelerisque urna, sed rhoncus metus nisi vitae arcu. Vestibulum ante ipsum primis in
          </p>
          <p style={{ maxWidth: '1000px' }}>Duis bibendum, ex ac rutrum pharetra, tortor ipsum commodo est, et vehicula metus lectus sed metus. Pellentesque. Vestibulum consectetur risus id metus lacinia suscipit. Nunc tempus sem id mi tristique, et fringilla Lorem ipsum dolor sit amet, consectetur adipisicing elit.

          </p>
          <button className='common-btn'>
            <a href="#">
              ABOUT US
            </a>
          </button>
        </div>
      </section>
    )
  }

  const ProductsList: React.FC<ProductsListProps> = ({ product }) => {
    return (
      <div className='product-card'>
        <div className='image-container'>
          <img
            src={product.images}
            width={381}
            height={345}
            alt={product.name}
            className='product-image'
          />
          <div className='image-overlay'>
            <div className='product-info'>
              <div className='product-name'>{product.name}</div>
              <div className='product-price'><i className='icon-cash'></i>{product.price}</div>
              <div><br />
                <p className='common-btn' style={{ margin: 'auto' }}>
                  <Link href={`/product/${product.id}`}>
                    DETAILS
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ChooseComponent = () => {
    return (
      <section className="featured">
        <div className='story-container extra-choose-style'>
          <span className='story-heading' style={{ justifyContent: 'center' }}>Why Choose Our Products?</span>
          <span className='story-discovery'>Discover</span>
          <p style={{ fontStyle: "italic", fontSize: "13px" }}>
            Sed euismod, nunc at bibendum dapibus, leo ante scelerisque urna, sed rhoncus metus nisi vitae arcu. Vestibulum ante ipsum primis in
          </p>
          <div className="features-lists">
            <ul>
              <li className="animate-item extra-styles">
                <div className="icon-container payment-bg">
                  <i className="icon-payment"></i>
                </div>
                <div className="data-item__content extra-styles">
                  <h4>Easy Payments</h4>
                  <p className='item-details'>Secure and easy payment processing.</p>
                </div>
              </li>
              <li className="animate-item  extra-styles">
                <div className="icon-container cash-bg">
                  <i className="icon-cash"></i>
                </div>
                <div className="data-item__content extra-styles">
                  <h4>Money-Back Guarantee</h4>
                  <p className='item-details'>Full refund for damaged products or change of mind.</p>
                </div>
              </li>
              <li className="animate-item  extra-styles">
                <div className="icon-container  material-bg">
                  <i className="icon-materials"></i>
                </div>
                <div className="data-item__content extra-styles" >
                  <h4>Finest Quality</h4>
                  <p className='item-details'>High-quality Ingredients and Skilled Craftsmanship.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  const OrderComponent = () => {
    return (
      <section className="featured" style={{
        paddingBottom: '8%',
        paddingTop: '8%',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: "url(https://themify.org/ultra-restaurant/wp-content/uploads/sites/35/2023/01/ingredients-498199_1920.jpg)",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='story-container'>
          <span className='story-heading' style={{ color: "white", letterSpacing: '1px', fontWeight: '500' }}>REQUEST FOR ORDER</span>
          <hr />
          <p className='story-discovery' style={{ fontSize: '23px' }}>Order your favourite dry fruits</p>
          <p className='order-contents' style={{ fontStyle: 'italic', fontSize: '13px', letterSpacing: '1.5px' }} >
            Contact us today to secure your order and savor the finest dry fruits that promise an exceptional culinary journey.
          </p>
          <h2 style={{ fontSize: '13px', fontWeight: '600px', letterSpacing: '1px' }}>+92-343-349-6008</h2>
          <button className='order-btn'>
            {/* <Link href={`/products`}> */}
            <Link href={`#`}>
              ORDER NOW
            </Link>
          </button>
        </div>
      </section>
    )
  }

  const GoogleMapComponent = () => {
    return (
      <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-xxl pt-5 px-0">
          <div className="bg-dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833798.5768910806!2d74.48620114687498!3d35.2804875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463a59932b6ef%3A0xf00c47e7e4eab131!2sSoftware%20technology%20park%20skardu!5e0!3m2!1sen!2s!4v1690816197888!5m2!1sen!2s"
              frameBorder="0" style={{
                width: '100%',
                height: '450px',
                border: '0',
              }} allowFullScreen={true} aria-hidden={false}
              tabIndex={0}></iframe>
          </div>
        </div>
      </div>
    )
  }

  interface Product {
    id: string; // Adjust the type of id based on your actual data structure
    images: string;
    name: string;
    price: number; // Or adjust the type based on your actual data structure
  }

  interface ProductsListProps {
    product: Product;
  }

  return (
    <Layout>

      <PageIntro />
      <StoryContainer />
      <section className='products-section'>
        <div className='products-container'>
          {products && products.map((product:Product) => (
            <ProductsList key={product.id} product={product} />
          ))}
        </div>
      </section>
      <ChooseComponent />
      <OrderComponent />
      <ProductsFeatured />
      <GoogleMapComponent />

      <Footer />
    </Layout>
  )
}


export default IndexPage