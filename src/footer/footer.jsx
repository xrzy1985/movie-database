import React from 'react';

import './footer.css';

const style = { "height": "100%", "width": "100%", "backgroundColor": "#343A40", "color": "white" };
const styles = { position: "relative", top: "15%" };

function Footer() {
    return ( 
        <footer className="page-footer font-small blue" style={style}>
            <div className="footer-copyright text-center py-3" style={styles}>
                © Copyright | 2022
            </div>
        </footer>
     );
}

export default Footer;
