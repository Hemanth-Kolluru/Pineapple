import React from 'react'
import '../css/footer.css'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="contact" id="contact_us">
                <br />
                <p className="text">Contact Us:</p>
                <br />
                <div className="contact_images">
                    <a href="#twitter" className="footer_logo"><img src={twitter} alt="Twitter" width="1.7%" /></a>
                    <a href="#facebook" className="footer_logo"><img src={facebook} alt="facebook" width="1.7%" /></a>
                    <a href="#linkedin" className="footer_logo"><img src={linkedin} alt="Linkedin" width="1.6%" /></a>
                    <a href="#instagram" className="footer_logo"><img src={instagram} alt="instagram" width="1.5%" /></a>
                </div>
                <br /><br /><br />
                <div className="about" id="about_us">
                    <p className="text">Meet the minds behind Pineapple Arcade, a diverse group of professionals united by a common goal: to provide a new way of gaming experience.</p><br />
                    <a href="https://github.com/Hemanth-Kolluru" target="_blank">@Hemanth K</a>
                    <a href="https://github.com/Gagansai9" target="_blank">@Gagan Sai G</a>
                    <a href="https://github.com/donleaguesss" target="_blank">@Sailesh Pulukuri</a>
                    <a href="https://github.com/vinay-2907" target="_blank">@Vinay Babu K</a>
                    <br /><br /><br /><br />
                    <div className="details">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Settings</p>
                    </div>
                    <p className="details">Pineapple Arcade © 2024</p>
                    <br />
                </div>
            </div>
    </footer>
    </div>
  )
}

export default Footer
