import { Avatar, Badge, Row, Col, Card} from "antd";

const IconCard = (props) => {

    return (
        <>
            <Card style={{height:88}}>
                <Row style={{marginTop:0}}>
                    <Col>
                        <Badge>
                            {props.avatar}
                        </Badge>
                    </Col>
                    <Col offset={2}>
                        <Row>
                            {props.rowText1}
                        </Row>
                        <Row style={{color:'#5c6b77'}}>
                            {props.rowText2}
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )

}

export default IconCard ;