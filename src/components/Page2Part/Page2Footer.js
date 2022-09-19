import styled from "styled-components";

function Footer() {
    return (
        <FooterBox>
            <h1>SEARCH</h1>
            <ul>
                <li>SEARCH Tech.</li>
                <li>SEARCH ORBIT.</li>
                <li>PORTAL. Inc</li>
            </ul>
            <h2>&copy; SEARCH. Inc. All Rights Reserved</h2>
        </FooterBox>
    )
};

export default Footer;

const FooterBox = styled.footer`
    padding: 60px;
    background-color: #000;
    width: 100%;
    height: 250px;
    h1 {
        text-align: left;
        font: bold 35px/1 "Lato";
        color: #fff;
        margin-bottom: 30px;
        letter-spacing: 2px;
    }
    ul {
        width: 100%;
        margin-bottom: 30px;
        &::after {content:""; display:block; clear:both;}
        li {
            float: left;
            text-align: left;
            width: 150px;
            height: 30px;
            font: bold 15px/30px "Lato";
            letter-spacing: 1px;
            line-height: 30px;
            color: #fff;
            border-right: 2px solid #fff;
            &:nth-child(2), :nth-child(3) {
                padding-left: 10px;
            }
            &:last-child {
                border-right: none;
            }
        }
    }
    h2 {
        text-align: left;
        font: bold 15px/1 "Lato";
        letter-spacing: 1px;
        color: #999;
    }
`;