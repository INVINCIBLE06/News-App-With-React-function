import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const HomePage = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true, // Enable arrows for navigation
      });
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div
            id="slider"
            style={{
              paddingTop: '70px',
              border: '10px solid black',
              marginTop: '58px',
              marginLeft: '-225px',
              maxWidth: '600px',
            }}
          >
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDAFRv78iF4sLnZ_6M8i_lpqoqhFMCrw0eN_yg0enRpeDyDO45sp3CVSUfyqW61wUfY8&usqp=CAU"
                alt="Slide 1"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-XkySihon_1vO738aeah1NEASxQ07vLTe"
                alt="Slide 2"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

