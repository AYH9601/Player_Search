import styled from "styled-components";
import { Link } from "react-router-dom";

function Page1Footer() {
    return (
        <Page1FooterCSS>
            <div className="footerTop">
                <h3>Link & Hub</h3>
                <ul>
                    <li><Link to="/Page1" className="linkA">Page1</Link></li><br/>
                    <li><a href="/Page2">Page2</a></li><br/>
                    <li><a href="https://github.com/AYH9601" target="_blank">GitHub</a></li>
                </ul>                
            </div>
            <div className="footerBot">
                <p className="footerPL">&copy; 2022 AYH9601. Inc</p>
            </div>
        </Page1FooterCSS>
    )
};

export default Page1Footer;

const Page1FooterCSS = styled.footer`
padding: 30px 60px 30px 60px;
    width: 100%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 13%, rgba(44,44,44,1) 66%);    .footerTop {
    height: 200px;
    }
    .footerTop {
        h3 {
            display: inline-block;
            border-bottom: 3px solid #fff;
            font: 25px/1 "Lato";
            color: #fff;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }
        li {
            display: inline-block;
            margin-bottom: 10px;
            transition: 0.15s;

            &:hover {
                transition: 0.15s;
                border-right: 10px solid #fff;
                transform: translateX(-10px);
            }
        }
        .linkA, a {
            display: block;
            font: 15px/1 "Lato";
            color: #fff;
            letter-spacing: 1px;
        }
    }
    .footerBot {
        height: 100px;
        border-top: 1px solid rgb(230,230,230);
        border-bottom: 1px solid rgb(230,230,230);
        .footerPL {
            display: inline-block;
            text-align: left;
            font: 15px/100px "Lato";
            letter-spacing: 1px;
            color: #FFF;
        }
    }
`;