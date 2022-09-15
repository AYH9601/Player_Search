import styled from "styled-components";

function Main() {
    return (
        <Contents>
            <ContentsHeader></ContentsHeader>

            <ContentsMain>
                <ContentsBox></ContentsBox>
                <ContentsBox></ContentsBox>
                <ContentsBox></ContentsBox>
                <ContentsBox></ContentsBox>
                <ContentsBox></ContentsBox>
                <ContentsBox></ContentsBox>
            </ContentsMain>
        </Contents>
    )
};

function ContentsHeader() {
    return (
        <ContentsHeaderDiv>
            <div className="contentsHeaderLogoBox">
                <div className="contentsHeaderLogo"></div>
            </div>

            <div className="contentsHeaderMenu">
                <ul>
                    <li>ABOUT</li>
                    <li>TECH</li>
                    <li>LOG</li>
                    <li>LOUNGE</li>
                    <li>GIT</li>
                </ul>
            </div>
        </ContentsHeaderDiv>
    )
};

function ContentsBox() {
    return (
        <ContentsMainBox>
            <div className="contentsMainImg"></div>
            <p className="boxTag">LOG 1</p>
            <h1 className="boxSubject">LOGLOGLOG 1</h1>
            <p className="boxText"> LOGTEXT 1</p>
            <p className="boxDate">LOG DATE</p>
        </ContentsMainBox>
    )
};

export default Main;

const Contents = styled.div`
    padding: 30px;
`;

const ContentsHeaderDiv = styled.div`
    padding: 30px;
    margin-bottom: 30px;

    &::after {content:""; display:block; clear:both;}
    .contentsHeaderLogoBox {
        float: left;
        width: 150px;
        height: 40px;

        .contentsHeaderLogo {
            width: 150px;
            height: 40px;
            background-color: crimson;
        }
    }

    .contentsHeaderMenu {
        float: right;
        ul {
            &::after {content:""; display:block; clear:both;}
            li {
                float: left;
                width: 90px;
                height: 40px;
                line-height: 40px;
                text-align: center;
            }
        }
    }
`;

const ContentsMain = styled.div`
    width: 100%;
    &::after {content:""; display:block; clear:both;}
`;

const ContentsMainBox = styled.div`
    float: left;
    width: 50%;
    height: 700px;
    padding: 100px;
    .contentsMainImg {
        margin-bottom: 20px;
        width: 100%;
        // 높이 가변
        height: 450px;
        background-color: royalblue;
    }
    .boxTag {
        margin-bottom: 10px;
        text-align: left;
        color: #999;
    }
    .boxSubject {
        margin-bottom: 10px;
        text-align: left;
        color: #000;
    }
    .boxText {
        margin-bottom: 10px;
        text-align: left;
        color: #000;
    }
    .boxDate {
        text-align: left;
        color: #999;
    }
`;