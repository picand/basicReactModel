import React from 'react';
import './Footer.css';

const defaultProps = {
    footerInfo: 'Pie de pagina'
};
class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                <p className="Footer__info">
                    {this.props.footerInfo}
                </p>
            </div>
        );
    }
}
Footer.defaultProps = defaultProps;
export default Footer;