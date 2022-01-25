import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: "#f9feff", marginTop: "2rem" }}>
      <div>
        <div style={{ textAlign: "left", marginLeft: "5%" }}>
          <h1 style={{ color: "rgb(25, 80, 230" }}>Delivery India</h1>
        </div>
        <div
          style={{
            // backgroundColor: "green",
            display: "flex",
            flexWrap: "wrap",
            // margin: "1rem",
            padding: "1rem",
            justifyContent: "space-evenly",
          }}
        >
          <div className="footerElement">
            <h5>COMPANY</h5>
            <p>Who We Are</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Report Fraud</p>
            <p>Contact</p>
            <p>Investor Relations</p>
          </div>
          <div className="footerElement">
            <h5>FOR FOODIES</h5>
            <p>Who We Are</p>
            <p>Blog</p>

            <p>Contact</p>
            <p>Investor Relations</p>
          </div>
          <div className="footerElement">
            <h5>FOR RESTAURANTS</h5>
            <p>Who We Are</p>

            <p>Careers</p>
            <p>Report Fraud</p>
            <p>Contact</p>
            <p>Investor Relations</p>
          </div>
          <div className="footerElement">
            <h5>FOR YOU</h5>
            <p>Who We Are</p>
            <p>Blog</p>

            <p>Contact</p>
            <p>Investor Relations</p>
          </div>
          <div className="footerElement">
            <h5>SOCIAL LINKS</h5>
            <div>
              <img
                src="https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.rsquare.w1200.jpg"
                alt="icon"
                height="40rem"
                width="40rem"
              />
              <img
                src="https://images.indianexpress.com/2020/09/instagram-logo-main.jpg?w=389"
                alt="icon"
                height="34rem"
                width="60rem"
              />
            </div>
            <div>
              <img
                style={{ margin: "0.25rem" }}
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="icon"
                height="45rem"
                width="150rem"
              />
              <img
                style={{ margin: "0.25rem" }}
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="icon"
                height="45rem"
                width="150rem"
              />
            </div>
          </div>
          ________________________________________________________
        </div>

        <div style={{ textAlign: "left", marginLeft: "5%" }}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2022 ©DeliveryIndia™ Ltd. All
          rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
