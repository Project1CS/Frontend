export default function Header() {
    return (
        <div className="pro">
            <img src={img1} alt="" />
            <a>
            <FontAwesomeIcon icon={farHeart} onClick={() => toggleHeart(1)} id="heart-icon-1" className="far fa-heart" />
            </a>
            <div className="des">
              <span>adidas</span>
              <h5>Summer T-Shirts</h5>
              <h4>2500 DA</h4>
            </div>
            <div className='shopping' >
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
    )
}