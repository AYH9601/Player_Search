import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

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

            <ConTentsSub></ConTentsSub>
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

function ConTentsSub() {
    return (
        <ContentsSubDiv lots>
            <h1>ARCHIVE</h1>
            <div className="swiperSection">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </ContentsSubDiv>
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
    margin-bottom: 100px;
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
        /* height: 450px; */
        height: ${props=>props.log ? "450px" : "380px"};
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

const ContentsSubDiv = styled.div`
    padding: 90px;
    h1 {
        text-align: left;
        font: bold 40px/1 "Lato";
        margin-bottom: 30px;
    }
    .swiperSection {
        .swiper {
            width: 100%;
            height: 500px;
            /* background-color: crimson; */
            background-color: ${props=>props.lots ? "royalblue" : "blue"};
            text-align: center;
            font: bold 20px/500px "Lato";
            color: #fff;
        }
    }
`;