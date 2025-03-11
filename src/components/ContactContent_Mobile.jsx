import React from 'react';
import { Card, Row, Col, Container} from 'react-bootstrap';
import NTUST_logo from '../assets/NTUST_logo.png';



function ContactContent_Mobile(props) {
  return (
<div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", textAlign: "center", borderRadius: "8px" }}>
      <img
        src={NTUST_logo}
        alt="National Central University Logo"
        style={{ width: "150px", marginBottom: "20px"  }}
      />
        <h2>國立臺灣科技大學 資訊工程學系</h2>
        <p>台北市大安區基隆路四段43號<br />
            綜合研究大樓307-3研究室</p>
        <h2><strong>聯絡窗口(Contact to):  </strong><a href="mailto:xoxyzx@gmail.com" style={{ textDecoration: 'none', color: '#007bff' }}>xoxyzx@gmail.com</a></h2>
      <h2>National Taiwan University of Science and Technology</h2> 
      <p>No. 43, Sec. 4, Keelung Rd., Da'an Dist., Taipei City 106335, Taiwan (R.O.C.)K<br /></p>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d89485.68335883974!2d121.45896126080987!3d25.014276094880472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3442aa216b3fafe7%3A0x6dd04abf8f45b55e!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5Z-66ZqG6Lev5Zub5q61NDPomZ_omZ8!3m2!1d25.014301699999997!2d121.54135989999999!5e1!3m2!1szh-TW!2stw!4v1741696282426!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7909.350848137567!2d121.53633416542827!3d25.016462516332393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3442aa216b3fafe7%3A0x6dd04abf8f45b55e!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5Z-66ZqG6Lev5Zub5q61NDPomZ_omZ8!3m2!1d25.014301699999997!2d121.54135989999999!5e1!3m2!1szh-TW!2stw!4v1741695583562!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.582498118015!2d121.53878250967843!3d25.01429877773673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa216b3fafe7%3A0x6dd04abf8f45b55e!2z5Y-w56eR5aSnIOe2nOWQiOeglOeptuWkp-aokw!5e0!3m2!1szh-TW!2stw!4v1741359239253!5m2!1szh-TW!2stw"
            width="100%"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"

            ></iframe>
        </div>
    </div>
  );
}

export default ContactContent_Mobile;
