import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderCSS.css';

class Header extends React.Component{
  backdrop = () => {
      if(window.location.href !== 'http://localhost:3000/'){
        return (
          <p classNameNameName="logo-white ht ht-s gt-title">GGS | Grodivari Graphics S.A. de C.V.</p>
        )
      }
  }
  render(){
    return(
      <header id="header" className="transparent-header full-header dark" data-sticky-class="not-dark">

			<div id="header-wrap">

				<div className="container clearfix">

					<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

					<div id="logo">
						<a href="index.html" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo-dark.png" alt="Canvas Logo"/></a>
						<a href="index.html" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo-dark@2x.png" alt="Canvas Logo"/></a>
					</div>

					<nav id="primary-menu" className="dark">

						<ul className="sf-js-enabled t-touch">
							<li className="current sub-menu"><a href="index.html" className="sf-with-ul"><div>Home</div></a>
								<ul className="no-display">
									<li className="sub-menu"><a href="index-corporate.html" className="sf-with-ul"><div>Home - Corporate</div></a>
										<ul className="no-display">
											<li><a href="index-corporate.html"><div>Corporate - Layout 1</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="index-portfolio.html" className="sf-with-ul"><div>Home - Portfolio</div></a>
										<ul className="no-display">
											<li><a href="index-portfolio-4.html"><div>Portfolio - AJAX</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="index-blog.html" className="sf-with-ul"><div>Home - Blog</div></a>
										<ul className="no-display">
											<li><a href="index-blog.html"><div>Blog - Layout 1</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="index-shop.html" className="sf-with-ul"><div>Home - Shop</div></a>
										<ul className="no-display">
											<li><a href="index-shop.html"><div>Shop - Layout 1</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="index-magazine.html" className="sf-with-ul"><div>Home - Magazine</div></a>
										<ul className="no-display">
											<li><a href="index-magazine.html"><div>Magazine - Layout 1</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="landing.html" className="sf-with-ul"><div>Home - Landing Page</div></a>
										<ul className="no-display">
											<li><a href="landing.html"><div>Landing Page - Layout 1</div></a></li>
											<li><a href="landing-2.html"><div>Landing Page - Layout 2</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="index-fullscreen-image.html" className="sf-with-ul"><div>Home - Full Screen</div></a>
										<ul className="no-display">
											<li><a href="index-fullscreen-image.html"><div>Full Screen - Image</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="index-onepage.html" className="sf-with-ul"><div>Home - One Page</div></a>
										<ul className="no-display">
											<li><a href="index-onepage.html"><div>One Page - Default</div></a></li>
											<li><a href="index-onepage-3.html"><div>One Page - Dots Style</div></a></li>
										</ul>
									</li>
									<li><a href="index-wedding.html"><div>Home - Wedding</div></a></li>
								</ul>
							</li>
							<li className="sub-menu"><a href="no" className="sf-with-ul"><div>Features</div></a>
								<ul className="no-display">
									<li className="sub-menu"><a href="no" className="sf-with-ul"><div><i className="icon-stack"></i>Sliders</div></a>
										<ul className="no-display">
											<li className="sub-menu"><a href="slider-revolution.html" className="sf-with-ul"><div>Revolution Slider</div></a>
												<ul className="no-display">
													<li><a href="rs-demos.html"><div>Premium Templates</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="slider-canvas.html" className="sf-with-ul"><div>Canvas Slider</div></a>
												<ul className="no-display">
													<li><a href="slider-canvas.html"><div>Full Width</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="slider-flex.html" className="sf-with-ul"><div>Flex Slider</div></a>
												<ul className="no-display">
													<li><a href="slider-flex.html"><div>Default Layout</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="slider-owl.html" className="sf-with-ul"><div>Owl Slider</div></a>
												<ul className="no-display">
													<li><a href="slider-owl-full.html"><div>Full Width</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="static-parallax.html" className="sf-with-ul"><div>Static Media</div></a>
												<ul className="no-display">
													<li><a href="static-parallax.html"><div>Static - Parallax</div></a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="sub-menu"><a href="widgets.html" className="sf-with-ul"><div><i className="icon-gift"></i>Widgets</div></a>
										<ul className="no-display">
											<li><a href="widgets.html"><div>Links</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="no" className="sf-with-ul"><div><i className="icon-umbrella"></i>Headers</div></a>
										<ul className="no-display">
											<li><a href="header-light.html"><div>Light Version</div></a></li>
											<li className="sub-menu"><a href="header-semi-transparent.html" className="sf-with-ul"><div>Semi Transparent</div></a>
												<ul className="no-display">
													<li><a href="header-semi-transparent.html"><div>Light Version</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="header-side-left.html" className="sf-with-ul"><div>Left Side Header</div></a>
												<ul className="no-display">
													<li><a href="header-side-left.html"><div>Fixed Position</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="header-side-right.html" className="sf-with-ul"><div>Right Side Header</div></a>
												<ul className="no-display">
													<li><a href="header-side-right.html"><div>Fixed Position</div></a></li>
												</ul>
											</li>
											<li><a href="header-floating.html"><div>Floating Version</div></a></li>
										</ul>
									</li>
									<li><a href="forms.html"><div><i className="icon-wpforms"></i>Forms</div></a></li>
									<li className="sub-menu"><a href="side-panel.html" className="sf-with-ul"><div><i className="icon-line-layout"></i>Side Panel</div></a>
										<ul className="no-display">
											<li><a href="side-panel-left-overlay.html"><div>Left Overlay</div></a></li>
										</ul>
									</li>
									<li><a href="mega-menu.html"><div><i className="icon-line-columns"></i>Mega Menu</div></a></li>
									<li className="sub-menu"><a href="no" className="sf-with-ul"><div><i className="icon-align-justify2"></i>Menu Styles</div></a>
										<ul className="no-display">
											<li><a href="header-light.html"><div>Menu - Style 1</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="no" className="sf-with-ul"><div><i className="icon-ok-sign"></i>Page Titles</div></a>
										<ul className="no-display">
											<li><a href="page.html"><div>Left Align</div></a></li>
											<li className="sub-menu"><a href="page-title-parallax.html" className="sf-with-ul"><div>Parallax Background</div></a>
												<ul className="no-display">
													<li><a href="page-title-parallax.html"><div>Default Header</div></a></li>
												</ul>
											</li>
											<li><a href="page-title-video.html"><div>HTML5 Video</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="contact.html" className="sf-with-ul"><div><i className="icon-envelope-alt"></i>Contact Pages</div></a>
										<ul className="no-display">
											<li><a href="contact.html">Contact 1</a></li>
											<li><a href="contact-7.html">Contact 7</a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="#footer" data-scrollto="#footer" className="sf-with-ul"><div><i className="icon-th"></i>Footers</div></a>
										<ul className="no-display">
											<li><a href="sticky-footer.html"><div>Sticky Footer</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="vo" className="sf-with-ul"><div><i className="icon-calendar3"></i>Events</div></a>
										<ul className="no-display">
											<li><a href="events-calendar.html"><div>Full Width Calendar</div></a></li>
											<li className="sub-menu"><a href="events-list.html" className="sf-with-ul"><div>Events List</div></a>
												<ul className="no-display">
													<li><a href="events-list.html"><div>Right Sidebar</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="event-single.html" className="sf-with-ul"><div>Single Event</div></a>
												<ul className="no-display">
													<li><a href="event-single-right-sidebar.html"><div>Right Sidebar</div></a></li>
												</ul>
											</li>
											<li className="sub-menu"><a href="event-single-full-width-image.html" className="sf-with-ul"><div>Single Event - Full</div></a>
												<ul className="no-display">
													<li><a href="event-single-full-width-image.html"><div>Parallax Image</div></a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="sub-menu"><a href="modal-onload.html" className="sf-with-ul"><div><i className="icon-line-expand"></i>Modal OnLoad</div></a>
										<ul className="no-display">
											<li><a href="modal-onload.html"><div>Simple Layout</div></a></li>
										</ul>
									</li>
									<li className="sub-menu"><a href="coming-soon.html" className="sf-with-ul"><div><i className="icon-time"></i>Coming Soon</div></a>
										<ul className="no-display">
											<li><a href="coming-soon.html"><div>Simple Layout</div></a></li>
										</ul>
									</li>
									<li><a href="profile.html"><div><i className="icon-user"></i>User Profile</div></a></li>
								</ul>
							</li>
						</ul>

						<div id="top-cart">
							<a href="no" id="top-cart-trigger"><i className="icon-shopping-cart"></i><span>5</span></a>
							<div className="top-cart-content">
								<div className="top-cart-title">
									<h4>Shopping Cart</h4>
								</div>
								<div className="top-cart-items">
									<div className="top-cart-item clearfix">
										<div className="top-cart-item-image">
											<a href="no"><img src="images/shop/small/1.jpg" alt="Blue Round-Neck Tshirt"/></a>
										</div>
										<div className="top-cart-item-desc">
											<a href="no">Blue Round-Neck Tshirt</a>
											<span className="top-cart-item-price">$19.99</span>
											<span className="top-cart-item-quantity">x 2</span>
										</div>
									</div>
									<div className="top-cart-item clearfix">
										<div className="top-cart-item-image">
											<a href="no"><img src="images/shop/small/6.jpg" alt="Light Blue Denim Dress"/>></a>
										</div>
										<div className="top-cart-item-desc">
											<a href="no">Light Blue Denim Dress</a>
											<span className="top-cart-item-price">$24.99</span>
											<span className="top-cart-item-quantity">x 3</span>
										</div>
									</div>
								</div>
								<div className="top-cart-action clearfix">
									<span className="fleft top-checkout-price">$114.95</span>
									<button className="button button-3d button-small nomargin fright">View Cart</button>
								</div>
							</div>
						</div>

						<div id="top-search">
							<a href="no" id="top-search-trigger"><i className="icon-search3"></i><i className="icon-line-cross"></i></a>
							<form>
								<input type="text" name="q" className="form-control" placeholder="Type &amp; Hit Enter.."/>
							</form>
						</div>

					</nav>

				</div>

			</div>

		</header>
    )
  }
}

export default Header;
