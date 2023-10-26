import "./css/contactus.css";

const ContactUs = () => {
  return (
    <section className="contact">
      <h1>আমাদের সাথে যোগাযোগ করুন এবং আপনার অভিমত আমাদের সাথে শেয়ার করুন </h1>

      <div className="contact-us">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6995106751083!2d91.8259882!3d22.2514771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdfe7392eb52d%3A0x84a2c32ece853857!2sPatenga%20Online!5e0!3m2!1sen!2sbd!4v1698297687321!5m2!1sen!2sbd"
            width={700}
            height={600}
            style={{ border: "1px solid #1ABC9C", borderRadius: "5px" }}
            allowfullscreen={""}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form">
          <form action="">
            <div className="inputBox">
              <div className="input">
                <span>আপনার নাম*</span>
                <input type="text" placeholder="আপনার নাম লিখুন" />
              </div>
            </div>
            <div className="inputBox">
              <div className="input">
                <span>আপনার ইমেইল*</span>
                <input type="email" placeholder="আপনার ইমেইল লিখুন" />
              </div>
            </div>
            <div className="inputBox">
              <div className="input">
                <span>আপনার ফোন নম্বর*</span>
                <input type="text" placeholder="আপনার নাম্বার লিখুন" />
              </div>
            </div>
            <div className="inputBox">
              <div className="input">
                <span>আপনার বার্তা*</span>
                <textarea
                  name=""
                  placeholder="আপনার বার্তা লিখুন"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <input type="submit" value="সেন্ড করুন " className="btn" />
          </form>
        </div>
      </div>
      <div className="pattern"></div>
    </section>
  );
};

export default ContactUs;
