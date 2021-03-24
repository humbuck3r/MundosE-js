import React from "react";
import LeftCircle from "../../assets/img/icon-feather-arrow-left-circle.svg";
import RightCircle from "../../assets/img/icon-feather-arrow-right-circle.svg";



const Products = () => {
  return (
    <section id="products" className="section products">
      <div className="products__content">
        <div className="products__cards">
          <div>
            <h3>Sed ut perspiciatis</h3>
            <h2>Nemo Enim</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="d-none">
            <h3>Sed ut perspiciatis</h3>
            <h2>Nemo Enim</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="d-none">
            <h3>Sed ut perspiciatis</h3>
            <h2>Nemo Enim</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="products__card-navs">
            <link href="" className="nav-left" />
            <img src="{LeftCircle}" alt="" />
            
            <link href="" className="nav-right" />
            <img src="{RightCircle}" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
