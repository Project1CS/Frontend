import React, { useState } from 'react';
import '../css/Home.css';
import Header from '../components/Header';
import img1 from '../images/f1.jpg'
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import brand6 from '../images/brand6.png'
import collection from '../images/collection.jpg'
import insta1 from '../images/insta1.jpg'
import insta3 from '../images/insta3.jpg'
import insta4 from '../images/insta4.jpg'
import insta5 from '../images/insta5.jpg'
import insta6 from '../images/insta6.jpg'
import musthave1 from '../images/musthave1.png'
import musthave2 from '../images/musthave2.png'
import musthave3 from '../images/musthave3.png'
import musthave4 from '../images/musthave4.png'
import musthave5 from '../images/musthave5.png'
import musthave6 from '../images/musthave6.png'
import musthave7 from '../images/musthave7.png'
import musthave8 from '../images/musthave8.png'
import musthave9 from '../images/musthave9.png'
import musthave10 from '../images/musthave10.png'
import musthave11 from '../images/musthave11.png'
import musthave12 from '../images/musthave12.png'
import news1 from '../images/news1.jpg'
import news2 from '../images/news2.jpg'
import news3 from '../images/news3.jpg'
import sale1 from '../images/sale1.jpg'
import sale2 from '../images/sale2.jpg'
import sale3 from '../images/sale3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
    <div class="header__bar">Free Shipping on Orders Over $50</div>
    <Header/>

    <header>
      <div class="section__container header__container">
        <div class="header__content">
          <p>EXTRA 55% OFF IN SPRING SALE</p>
          <h1>Discover & Shop<br />The Trend Ss19</h1>
          <Link to={'/Signin'}>
              <button class="btn sale__btn">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </header>

    <section class="section__container collection__container">
      <img src={collection} alt="collection" />
      <div class="collection__content">
        <h2 class="section__title">New Collection</h2>
        <p>#35 ITEMS</p>
        <h4>Available on Store</h4>
        <Link to={'/Signin'}>
              <button class="btn sale__btn">SHOP NOW</button>
        </Link>
      </div>
    </section>

    <section class="section__container sale__container">
      <h2 class="section__title">On Sale</h2>
      <div class="sale__grid">
        <div class="sale__card">
          <img src={sale1} alt="sale" />
          <div class="sale__content">
            <p class="sale__subtitle">MAN OUTERWEAR</p>
            <h4 class="sale__title">sale <span>40%</span> off</h4>
            <p class="sale__subtitle">- DON'T MISS -</p>
            <Link to={'/Signin'}>
              <button class="btn sale__btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div class="sale__card">
          <img src={sale2} alt="sale" />
          <div class="sale__content">
            <p class="sale__subtitle">WOMAN T-SHIRT</p>
            <h4 class="sale__title">sale <span>25%</span> off</h4>
            <p class="sale__subtitle">- DON'T MISS -</p>
            <Link to={'/Signin'}>
              <button class="btn sale__btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div class="sale__card">
          <img src={sale3} alt="sale" />
          <div class="sale__content">
            <p class="sale__subtitle">JACKETS</p>
            <h4 class="sale__title">sale <span>20%</span> off</h4>
            <p class="sale__subtitle">- DON'T MISS -</p>
            <Link to={'/Signin'}>
              <button class="btn sale__btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container musthave__container">
      <h2 class="section__title">Must Have</h2>
      <div class="musthave__nav">
        <a href="#">ALL</a>
        <a href="#">MAN</a>
        <a href="#">WOMEN</a>
        <a href="#">BAG</a>
        <a href="#">SHOES</a>
      </div>
      <div class="musthave__grid">
        <div class="musthave__card">
          <img src={musthave1} alt="must have" />
          <h4>Basic long sleeve T-shirt</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave2} alt="must have" />
          <h4>Ribbed T-shirt with buttons</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave3} alt="must have" />
          <h4>Jacket withside strips</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave4} alt="must have" />
          <h4>High-heel tubular sandals</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave5} alt="must have" />
          <h4>Coral fabric belt bag</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave6} alt="must have" />
          <h4>Piggy skater slogan T-shirt</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave7} alt="must have" />
          <h4>White platform boots</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave8} alt="must have" />
          <h4>Sweater vest with sleeves</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave9} alt="must have" />
          <h4>Slim fit pants</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave10} alt="must have" />
          <h4>Gray backpack</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave11} alt="must have" />
          <h4>Neon sweatshirt</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
        <div class="musthave__card">
          <img src={musthave12} alt="must have" />
          <h4>Hooded nautical jacket</h4>
          <p><del>$45.00</del> $75.00</p>
        </div>
      </div>
    </section>

    <section class="news">
      <div class="section__container news__container">
        <h2 class="section__title">Latest News</h2>
        <div class="news__grid">
          <div class="news__card">
            <img src={news1} alt="news" />
            <div class="news__details">
              <p>
                FASHION <i class="ri-checkbox-blank-circle-fill"></i>
                <span>JAMES SIMSON</span>
                <i class="ri-checkbox-blank-circle-fill"></i> FEB 2, 2019
              </p>
              <h4>Seasonal Trends</h4>
              <hr />
              <p>
                Discuss the latest fashion trends for the current season and
                offer tips and ideas on how to incorporate these trends into
                your wardrobe.
              </p>
              <a href="#"><i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div class="news__card">
            <img src={news2} alt="news" />
            <div class="news__details">
              <p>
                TRENDS <i class="ri-checkbox-blank-circle-fill"></i>
                <span>JAMES SIMSON</span>
                <i class="ri-checkbox-blank-circle-fill"></i> APR 15, 2019
              </p>
              <h4>Fashion Tips and Advice</h4>
              <hr />
              <p>
                Provide your readers with practical tips and advice on how to
                dress for different occasions, body types, or style preferences.
              </p>
              <a href="#"><i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
          <div class="news__card">
            <img src={news3} alt="news" />
            <div class="news__details">
              <p>
                STYLE <i class="ri-checkbox-blank-circle-fill"></i>
                <span>JAMES SIMSON</span>
                <i class="ri-checkbox-blank-circle-fill"></i> JUL 22, 2019
              </p>
              <h4>Sustainable Fashion</h4>
              <hr />
              <p>
                Cover the growing trend of eco-conscious fashion and explore the
                various ways to be sustainable in your fashion choices.
              </p>
              <a href="#"><i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container brands__container">
      <div class="brand__image">
        <img src={brand1} alt="brand" />
      </div>
      <div class="brand__image">
        <img src={brand2} alt="brand" />
      </div>
      <div class="brand__image">
        <img src={brand3} alt="brand" />
      </div>
      <div class="brand__image">
        <img src={brand4} alt="brand" />
      </div>
      <div class="brand__image">
        <img src={brand5} alt="brand" />
      </div>
      <div class="brand__image">
        <img src={brand6} alt="brand" />
      </div>
    </section>

    <hr />

    <footer class="section__container footer__container">
      <div class="footer__col">
        <h4 class="footer__heading">CONTACT INFO</h4>
        <p>
          <i class="ri-map-pin-2-fill"></i> 123, London Bridge Street, London
        </p>
        <p><i class="ri-mail-fill"></i> support@monsa.com</p>
        <p><i class="ri-phone-fill"></i> (+012) 3456 789</p>
      </div>
      <div class="footer__col">
        <h4 class="footer__heading">COMPANY</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Work With Us</p>
        <p>Our Blog</p>
        <p>Terms & Conditions</p>
      </div>
      <div class="footer__col">
        <h4 class="footer__heading">USEFUL LINK</h4>
        <p>Help</p>
        <p>Track My Order</p>
        <p>Men</p>
        <p>Women</p>
        <p>Shoes</p>
      </div>
      <div class="footer__col">
        <h4 class="footer__heading">INSTAGRAM</h4>
        <div class="instagram__grid">
          <img src={insta1} alt="instagram" />
          <img src={insta3} alt="instagram" />
          <img src={insta4} alt="instagram" />
          <img src={insta5} alt="instagram" />
          <img src={insta6} alt="instagram" />
        </div>
      </div>
    </footer>
    <Footer/>

    <hr />
    </>
    
  );
}

export default Home;