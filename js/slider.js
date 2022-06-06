$(
  (function () {
    $(".slider-products").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      nextArrow: `
       <button type='button' class='slick-next slider-products__next'>
       	<svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
       		<path d="M0.5 1L20.5 21L0.5 41" stroke="black" />
       		<path d="M0.5 1L20.5 21L0.5 41" stroke="black" />
      	</svg>
      </button>
      `,
      prevArrow: `
      <button type='button' class='slick-prev slider-products__prev'>
      	<svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      		<path d="M21 1L1 21L21 41" stroke="black" />
      		<path d="M21 1L1 21L21 41" stroke="#000" />
      	</svg>
      </button>
      `,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            infinite: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            prevArrow: false,
            nextArrow: false,
          },
        },
      ],
    });
    $(".slider-portfolio").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: "20px",
      nextArrow: `
       <button type='button' class='slick-next slider-portfolio__next'>
       	<svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      		<path d="M1 0.812988L25 24.813L1 48.813" stroke="black"/>
      	</svg>
      </button>
      `,
      prevArrow: `
      <button type='button' class='slick-prev slider-portfolio__prev'>
      	<svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      		<path d="M25 0.812988L1 24.813L25 48.813" stroke="black"/>
      	</svg>
      </button>
      `,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            prevArrow: false,
            nextArrow: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  })()
);
