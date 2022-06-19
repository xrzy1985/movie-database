import React from 'react';

import './footer.css';

export default function Footer() {
    return ( 
        <footer className="page-footer font-small bg-primary" id="footer-parent">
            <div className="footer-copyright text-center py-3" data-testid="footer-id" id="footer-child">
                © Copyright | 2022
            </div>
        </footer>
     );
}
