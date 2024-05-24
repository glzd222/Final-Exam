import "../HomePage/index.scss";
import { Col, Row } from 'antd';
import { Card } from 'antd';
import Meta from "antd/es/card/Meta";
import { FaRegMinusSquare } from "react-icons/fa";
import { CiUnlock } from "react-icons/ci";
import { FaRepeat } from "react-icons/fa6";
import { getAllData } from "../../Services";
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet";

const HomePage = () => {

const [product, setproduct] = useState(null)

useEffect(() => {
  getAllData().then((res)=>{
    setproduct(res.data.data)
  })
  
  
}, [])

  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>eCommerce</title>
                <link rel="icon" type="image/svg+xml" href="https://th.bing.com/th/id/OIP.VPnliezroWOAZAPVvh3iDQHaHa?w=150&h=181&c=7&r=0&o=5&pid=1.7" />

            </Helmet>
    <div>
      <section id="section1">
        <div className="container">
          <div className="section1">
            <div className="img">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
                alt=""
              />
            </div>
            <div className="text">
              <h3>60% Discount</h3>
             <div className="h1">
             <h1>WINNER</h1>
              <h1>COLLACTİON</h1>
             </div>
              <p>Best collection for 2020 model</p>

              <button className="button">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="container">
          <div className="category">
            <h1 className="h1">Shop by Category</h1>
            <Row className="row" gutter={16}>
      <Col className="gutter-row" span={6}>
        <div>
          <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg" alt="" />
          <h2></h2>
          <button></button>
          <h1></h1>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div>
          <img  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg" alt="" />
          <h2></h2>
          <button></button>
          <h1></h1>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
      <div>
          <img className="img3" src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg" alt="" />
          <h2></h2>
          <button></button>
          <h1></h1>
        </div>
      </Col>
     
    </Row>

          </div>
        </div>
        

      </section>

      <section id="section3">
        <div className="container">
          <div className="latestproduct">
            <h1>Latest Products</h1>
            <br />
            <hr />
            <br />
            <br />
            <br />
            <div className="cards">

            <Row gutter={16}>
      { product && product.map((w)=>{
        return   <Col className="gutter-row" span={8}>
        <Card
hoverable
style={{
  width: 240,
}}
cover={<img alt="example" src={w.imageUrl} />}
>
<Meta title={w.title} description={w.price} />
</Card>
    
  </Col>
      })
      
      }

    </Row>

              
            </div>
          </div>
        </div>

      </section>

      <section id="section7">
        <div className="container">
          <div className="cards">
            <div className="card1">
            <FaRegMinusSquare className="icon" />

              <h1>Free Shipping Method</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates!</p>
            </div>
            <div className="card1">
            <CiUnlock className="icon"/>

              <h1>Secure Payment System</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates!</p>
            </div>
            <div className="card1">
            <FaRepeat className="icon" />

              <h1>Secure Payment System</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, voluptates!</p>
            </div>
          </div>
        </div>

      </section>

      <section id="section8">
        <div className="section8">
          <div className="cards">
            <div className="card1"><img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery1.jpg" alt="" /></div>
            <div className="card1"><img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery2.jpg" alt="" /></div>
            <div className="card1"><img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery3.jpg" alt="" /></div>
            <div className="card1"><img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery4.jpg" alt="" /></div>
            <div className="card1"><img src="https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery5.jpg" alt="" /></div>
            
            
          </div>
        </div>

      </section>
    </div>
    </>
  );
};

export default HomePage;
