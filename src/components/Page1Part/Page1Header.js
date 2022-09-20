import styled from "styled-components";

function Page1Header() {
    return (
        <Page1HeaderStyle>
            <div className="headerLeft">
                <h1>NAME</h1>
            </div>

            <div className="headerRight toggle">
                <div className="toggleLeft"></div>
                <div className="toggleRight"></div>
                <div className="buttonBox" id="tabPage">
                    <div className="buttonBoxIcon">
                        <div className="btnLineBox"></div>
                        <div className="btnLineBox"></div>
                    </div>
                    <h2>Menu</h2>
                </div>
            </div>
        </Page1HeaderStyle>
    )
};

export default Page1Header;

const Page1HeaderStyle = styled.header`
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
            color: #2C2C2C;
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
                transform: translateY(24px);
                transition: 0.2s;

                .btnLineBox {
                    width: 60px;
                    margin: 0 auto;
                    height: 2px;
                    background-color: #2C2C2C;
                    margin-bottom: 5px;
                    transform: translateY(26px);
                    transition: 0.2s;
                }

                &:hover {
                    background-color: #2C2C2C;
                    transition: 0.2s;

                    .btnLineBox {
                        width: 35px;
                        background-color: #fff;
                        transition: 0.2s;
                    }
                }
            }

            h2 {
                cursor: pointer;
                display: inline-block;
                font: 20px/150px "Lato";
                color: #2C2C2C;
            }
        }
    }

    .toggle {
        .toggleLeft {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 20%;
            height: 100vh;
            background-color: #2C2C2C;
        }
        
        .toggleRight {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            width: 80%;
            height: 100vh;
            background-color: #000;
        }
    }
`;