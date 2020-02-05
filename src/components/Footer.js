import React from 'react'

export default () => (
    <section id="footer">
        <ul className="icons">
            <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
        </ul>
        <ul className="copyright">
            <li>tabs AND spaces &copy; {new Date().getFullYear()} </li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            <li>Show intro music: <a href="https://www.youtube.com/watch?v=n8X9_MgEdCg">Unity by The FatRat</a></li>
        </ul>
    </section>
)