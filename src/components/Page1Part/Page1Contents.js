import styled from "styled-components";
import axios from "axios";
import {useEffect,useState} from "react";

function Page1Contents() {
    let [posts,setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/dbs/card.json`

    useEffect(()=>{
        axios
            .get(url)
            .then(data=>{
                setPosts(data.data.data);
            })
    },[]);

    return (
        <Page1ContentsCSS>
            <h1>Page 1 Contents Subject</h1>
            <div className="contentsBox">
                <div className="contentsBoxLeft">
                    <p className="leftP">
                        Page 1 Contents Texture Left. Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. Quia, quas?
                    </p>
                </div>
                <div className="contentsBoxRight">
                    <p className="rightP">
                        Page 1 Contents Texture Right. Lorem, ipsum 
                        dolor sit amet consectetur adipisicing elit. Fugiat, eius.
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
                    <h2>Box2 Subject</h2>
                    {
                        posts.map((data)=>{
                            return (
                                <div className="twoBoxCard" key={data.id}>
                                    <div className="cardImg"></div>
                                    <div className="cardText">
                                        <h3 className="cardH3">{data.title}</h3>
                                        <p className="cardP">{data.volume}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Page1ContentsCSS>
    )
};

export default Page1Contents;

const Page1ContentsCSS = styled.div`
    width: 100%;
    height: 100%;
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
            width: 100%;
            height: 400px;
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
            border-top: 1px solid rgb(230,230,230);
            padding-top: 100px;
            h2 {
                font: 40px/1 "Lato";
                letter-spacing: 1px;
                margin-bottom: 40px;
            }
            .twoBoxCard {
                width: 100%;
                height: 300px;
                border-radius: 20px;
                overflow: hidden;
                margin-bottom: 30px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

                &::after {content:""; display:block; clear:both;}
                .cardImg {
                    float: left;
                    width: 300px;
                    height: 300px;
                    background-color: #2C2C2C;
                }
                .cardText {
                    float: left;
                    padding: 30px;
                    .cardH3 {
                        margin-bottom: 30px;
                        font: 25px/1 "Lato";
                        letter-spacing: 1.5px;
                    }
                    .cardP {
                        font: 20px/1 "Lato";
                        letter-spacing: 1px;
                    }
                }
            }
        }
    }
`;