import styled from "styled-components";

function Page1() {
    return (
        <>
            <Page1Header>
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
            </Page1Header>

            <Page1Contents>
                <h1>Page 1 Contents Subject</h1>
                <div className="contentsBox">
                    <div className="contentsBoxLeft">
                        <p className="leftP">
                            Page 1 Contents Texture Left. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quas?
                        </p>
                    </div>
                    <div className="contentsBoxRight">
                        <p className="rightP">
                            Page 1 Contents Texture Right. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius.
                        </p>
                    </div>
                </div>
                <div className="contentsBoxBot">
                    <div className="oneBox">
                        <ul>
                            <li>
                                <p>A</p>
                            </li>
                            <li>
                                <p>B</p>
                            </li>
                            <li>
                                <p>C</p>
                            </li>
                            <li>
                                <p>D</p>
                            </li>
                            <li>
                                <p>E</p>
                            </li>
                            <li>
                                <p>F</p>
                            </li>
                            <li>
                                <p>G</p>
                            </li>
                            <li>
                                <p>H</p>
                            </li>
                        </ul>
                    </div>

                    <div className="twoBox">
                        
                    </div>
                </div>
            </Page1Contents>
        </>
    );
};

export default Page1;

const Page1Header = styled.header`
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
`;

const Page1Contents = styled.div`
    width: 100%;
    height: 200vh;
    padding: 150px 200px 150px 200px;
    h1 {
        font: bold 80px/1 "Lato";
        letter-spacing: 2px;
        color: #2C2C2C;
        margin-bottom: 40px;
    }

    .contentsBox {
        border-top: 1px solid rgb(230,230,230);
        padding: 40px 0px 40px 0px;

        &::after {content:""; display:block; clear:both;}
        .contentsBoxLeft {
            float: left;
        }
        .contentsBoxRight {
            float: right;
        }
        .contentsBoxLeft, .contentsBoxRight {
            width: 40%;
            font: bold 30px/1 "Lato";
            letter-spacing: 1px;
            line-height: 1.5;
            color: #2C2C2C;
        }
    }
    .contentsBoxBot {
        margin-top: 200px;
        width: 100%;
        .oneBox {
            ul {
                &::after {content:""; display:block; clear:both;}
                li {
                    float: left;
                    width: 70px;
                    height: 70px;
                    background-color: #2C2C2C;
                    margin-right: 40px;
                    border-radius: 8px;
                    color: #fff;
                    text-align: center;
                    line-height: 70px;
                    p {
                        transform: translateY(60px);
                        color: #2C2C2C;
                        display: inline-block;
                        font: 16px/1 "Lato";
                    }
                }
            }
        }

        .twoBox {

        }
    }
`;