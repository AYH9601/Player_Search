import styled from "styled-components";

function Page1() {
    return (
        <>
            <HeaderCSS>
                <div className="headerLeft">
                    <h1>NAME</h1>
                </div>

                <div className="headerRight">
                    <div className="buttonBox">
                        <div className="buttonBoxIcon">
                            <div className="btnLineBox"></div>
                            <div className="btnLineBox"></div>
                        </div>
                        <h2>Menu</h2>
                    </div>
                </div>
            </HeaderCSS>
        </>
    );
};

export default Page1;

const HeaderCSS = styled.header`
    position: fixed;
    top: 0; left: 0;
    padding: 0px 50px 0px 50px;
    width: 100%;
    height: 150px;
    line-height: 150px;
    background-color: none;

    &::after {content:""; display:block; clear:both;}
    .headerLeft {
        float: left;
        width: 20%;
        h1 {
            font: 35px/150px "Lato";
        }
    }

    .headerRight {
        float: left;
        width: 80%;
        .buttonBox {
            .buttonBoxIcon {
                cursor: pointer;
                width: 60px; height: 60px; border-radius: 50%;
                /* background-color: crimson; */
                display: inline-block;
                margin-right: 30px;
                transform: translateY(25px);
                .btnLineBox {
                    width: 60px;
                    margin: 0 auto;
                    height: 2px;
                    background-color: #000;
                    margin-bottom: 5px;
                    transform: translateY(25px);
                }
            }
            h2 {
                display: inline-block;
                font: 20px/150px "Lato";
            }
        }
    }
`;