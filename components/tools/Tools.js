import './tools.css'
export default function Tools() {
  return (<>
   <section className="tools-sec">
      <ul className="tools">
        <li>
          <img src="Icon-01.png" alt="" />
          <h5>TECHNOLOGY</h5>
        </li>
        <li>
          <img src="Icon-02.png" alt="" />
          <h5>QUALITY & SAFETY</h5>
        </li>
        <li>
          <img src="Icon-03.png" alt="" />
          <h5>FEEL AMAZING</h5>
        </li>
        <li>
          <img src="Icon-05.png" alt="" />
          <h5>ANTI-AGING</h5>
        </li>
      </ul>
    </section>
    <section className='quick-connect'>
      <div className="contact-method"><h1>Address</h1><p>Showroom No 2, Khalifa Park,
Eastern Road, Abu Dhabi,
United Arab Emirates</p></div>
      <div className="contact-method"><h1>Quick Contact</h1>
      <ul className="numbers">
        <li><span className="material-symbols-outlined span">phone</span>+971 50 633 3070</li>
        <li><span className="material-symbols-outlined span">phone</span>+971 26 226 002</li>
        <li><span className="material-symbols-outlined span">email</span>Appointments</li>
        <li><span className="material-symbols-outlined span"></span>career</li>
      </ul>
      </div>
      <div className="contact-method"><h1>Follow Us</h1>
      <ul><li><i className="fa fas-facebook"></i></li>
      <li><i className="fa fas-youtube"></i></li>
      <li><i className="fa fas-linkedin"></i></li>
      <li><i className="fa fas-whatsapp"></i></li>
      <li><i className="fa fas-snapchat"></i></li>
      </ul></div>
    </section>
  </>
   
  );
}
