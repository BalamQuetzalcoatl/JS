import React, {Component} from 'react';

class SliderElement extends Component{
    render(){
        return(
            <section id="slider" className="slider-element slider-parallax swiper_wrapper full-screen clearfix slider-parallax-visible header-top">
			<div className="slider-parallax-inner para-lax-2">

				<div className="swiper-container swiper-parent swiper-container-horizontal cursor-grab">
					<div className="swiper-wrapper para-lax-3">
						<div className="swiper-slide dark swiper-slide-active save-background">
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center trans-y">
									<h2 data-animate="fadeInUp" className="fadeInUp animated">Welcome to Canvas</h2>
									<p className="d-none d-sm-block fadeInUp animated" data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on your own Canvas.</p>
								</div>
							</div>
						</div>
						<div className="swiper-slide dark swiper-slide-next min-with">
							<div className="container clearfix">
								<div className="slider-caption slider-caption-center trans-y">
									<h2 data-animate="fadeInUp" className="not-animated">Beautifully Flexible</h2>
									<p className="d-none d-sm-block not-animated" data-animate="fadeInUp" data-delay="200">Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Powerful Layout with Responsive functionality that can be adapted to any screen size.</p>
								</div>
							</div>
							<div className="video-wrap">
								<video id="slide-video" poster="images/videos/explore.jpg" preload="auto" loop="" autoPlay={true} muted="" className="min-top">
									<source src="images/videos/explore.webm" type="video/webm"/>
									<source src="images/videos/explore.mp4" type="video/mp4"/>
								</video>
								<div className="video-overlay bg-colr"></div>
							<div className="video-placeholder bg-travel"></div>
							<div className="video-placeholder bg-travel"></div></div>
						</div>
						<div className="swiper-slide save-background">
							<div className="container clearfix">
								<div className="slider-caption gb">
									<h2 data-animate="fadeInUp" className="not-animated">Great Performance</h2>
									<p className="d-none d-sm-block not-animated" data-animate="fadeInUp" data-delay="200">You'll be surprised to see the Final Results of your Creation &amp; would crave for more.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-arrow-left swiper-button-disabled opa-state" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="true"><i className="icon-angle-left"></i></div>
					<div className="slider-arrow-right opa-state" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false"><i className="icon-angle-right"></i></div>
				<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
				<a href="nj" data-scrollto="#content" data-offset="100" className="dark one-page-arrow"><i className="icon-angle-down infinite animated fadeInDown"></i></a>

			</div>
		</section>
        );
    }
}

export default SliderElement;