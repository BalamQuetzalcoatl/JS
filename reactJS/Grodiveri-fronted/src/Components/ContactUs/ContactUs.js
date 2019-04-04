import React, {Component} from 'react';
import './ContactUsCSS.css';

class ContactUs extends Component {

  state = {stard:'g'}

  optionWhatsappRef = React.createRef();
  messageWhatsappRef = React.createRef();

  defaultSocial = () => {
    if(this.state.stard === 'g' || !this.state.stard){
      return(
        <div className="animated fadeIn">
          <div className="row">
            <div className="text-center">
              <img className="heithg-q" src="images/social/gmail.svg" alt={'error gmail'} />
            </div>
          </div>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-control" name="name" id="name" autoComplete="off"/>
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" className="form-control" name="email" id="email" autoComplete="off"/>
            </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" className="form-control" name="subject" id="subject" autoComplete="off"/>
            </div>

            <div className="form-group">
              <textarea rows="6" placeholder="Message" className="form-control" name="message" id="message" autoComplete="off"></textarea>
            </div>
            <div id="cf-submit">
              <input type="submit" id="contact-submit" className="btn btn-transparent" value="Submit"/>
            </div>
          </form>
        </div>
      )
    }
    else{
      return (
        <div className="animated fadeIn">
          <div className="row">
            <div className="text-center">
              <img className="heithg-q" src="images/social/whatsapp.svg" alt={'error gmail'} />
            </div>
          </div>
          <form onSubmit={this.sendMsWhatsapp}>
            <div className="form-group">
              <label>Selecciona un aréa a contactar</label>
            <select className="form-control" ref={this.optionWhatsappRef}>
                <option value="+525523983731">Imagenología</option>
                <option value="+525523983731">Análisis clínicos</option>
                <option value="+525523983731">Cirugia</option>
                <option value="+525523983731">Diseño gráfico</option>
              </select>
            </div>
            <div className="form-group">
              <textarea rows="6" placeholder="Escribe el mensaje" className="form-control" name="message" id="message" autoComplete="off" ref={this.messageWhatsappRef}></textarea>
            </div>
            <div id="cf-submit">
              <button type="submit" id="contact-submit" className="btn btn-transparent">Enviar mensaje</button>
            </div>
          </form>
        </div>
      )
    }
  }

whatsapp = () => {this.setState({stard:'w'});};
email = () => {this.setState({stard:'g'});};

sendMsWhatsapp = (e) => {
  e.preventDefault();
  const con = {numberWhats: this.optionWhatsappRef.current.value, messageWhats:this.messageWhatsappRef.current.value}
  window.open(`https://web.whatsapp.com/send?phone=${con.numberWhats}&text=${con.messageWhats}`, "_blank");
  this.messageWhatsappRef.current.value = '';
}

  render(){
    return(
      <div>
        <section className="single-page-header ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Contactanos</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us" id="contact">
        		<div className="container">
        			<div className="row">
        				<div className="title text-center">
        					<h2>Get In Touch</h2>
        					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis eveniet maiores ab maxime nam ut numquam molestiae quaerat incidunt?</p>
        					<div className="border"></div>
        				</div>
        				<div className="contact-details col-md-6 ">
        					<h3>Contact Details</h3>
        					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.</p>
        					<ul className="contact-short-info">
        						<li>
        							<i className="tf-ion-ios-home"></i>
        							<span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
        						</li>
        						<li>
        							<i className="tf-ion-android-phone-portrait"></i>
        							<span>Phone: +880-31-000-000</span>
        						</li>
        						<li>
        							<i className="tf-ion-android-globe"></i>
        							<span>Fax: +880-31-000-000</span>
        						</li>
        						<li>
        							<i className="tf-ion-android-mail"></i>
        							<span>Email: hello@meghna.com</span>
        						</li>
        					</ul>
        					<div className="social-icon">
        						<ul>
                      <li><img className="heith" src="images/social/facebook.svg" alt={'error facebook'}/></li>
                    <li><img className="heith marg-l" src="images/social/twitter.svg" alt={'error twitter'} onClick={this.raiseInvoiceClicked}/></li>
                      <li><img className="heith marg-l" src="images/social/whatsapp.svg" alt={'error whatsapp'} onClick={this.whatsapp}/></li>
                      <li><img className="heith marg-l" src="images/social/gmail.svg" alt={'error gmail'} onClick={this.email}/></li>
        						</ul>
        					</div>
        				</div>
        				<div className="contact-form col-md-6 ">
                  {this.defaultSocial()}
        				</div>
        			</div>
        		</div>
        	</section>
      </div>
    )
  }
}

export default ContactUs;
