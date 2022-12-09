import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button} from "@material-ui/core"
import { useSelector } from "react-redux";

function Page3() {

    let a = useSelector((state)=>{return state})
    console.log(a.car)
    console.log(a.items)

    return (
        <Page3CSS>
            <header>
                <div className="header">
                    <ul>
                        <li><Link to="/Page1" className="linkA">Page1</Link></li><br/>
                        <li><a href="/Page2">Page2</a></li><br/>
                        <li><a href="/Page3">Page3</a></li><br/>
                        <li><a href="https://github.com/AYH9601" target="_blank" rel="noreferrer">GitHub</a></li>
                    </ul>
                </div>
                

                <div className="contents">
                    <Button variant="contained" color="primary">Material</Button>
                    <h1>{a.user}</h1>
                </div>
            </header>
        </Page3CSS>
    )
}

export default Page3;

const Page3CSS = styled.div`

`