import styled from "styled-components"

function Header() {
    return (
        <HeaderMain>
            <video loop autoPlay muted playsInline>
                {/* <source src="img/homepage-uhd.webm"/> */}
            </video>
            <div className="mainText">
                <h1>SEARCH</h1>
            </div>
        </HeaderMain>
    )
}

export default Header


// CSS
const HeaderMain = styled.header`
    width: 100%;
    height: 100vh;
    line-height: 100vh;
    background-color: #2C2C2C;
    overflow: hidden;
    position: relative;

    video {
        width: 100vw;
        height: 100vh;
    }

    .mainText {
        position: absolute;
        width: 100%;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);

        h1 {
            font: bold 240px/1 "Lato";
            letter-spacing: 50px;
            text-align: center;
            color: #fff;
        }
    }
`;