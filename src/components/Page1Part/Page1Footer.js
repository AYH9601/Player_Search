import styled from "styled-components";

function Page1Footer() {
    return (
        <Page1FooterCSS>
            <div className="footerTop"></div>
            <div className="footerBot">
                <p className="footerPL">2022 AYH9601.</p>
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