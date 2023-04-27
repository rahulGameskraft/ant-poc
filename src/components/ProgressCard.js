import { Card, Select, Row, Col, Progress } from "antd"

const ProgressCard = (props) => {

    return (
        <Card >
            <Row justify={'space-between'}>
                <Col>
                    <span style={{color:'#5c6b77'}}>Sales</span>
                    <h2 style={{marginTop:1}}>75%</h2>
                </Col>
                <Col>
                    <Select
                        showSearch={false}
                        disabled={false}
                        style={{color:'#5c6b77'}}
                        defaultValue="sevenDays"
                        optionFilterProp="children"
                        onChange={()=>{}}
                        onSearch={()=>{}}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'sevenDays',
                                label: 'Last 7 Days',
                            },
                            {
                                value: 'lastMonth',
                                label: 'Last 1 Month',
                            },
                            {
                                value: 'lastYear',
                                label: 'Last 1 Year',
                            },
                        ]}
                    />
                </Col>
            </Row>
            <Row justify={'space-between'}>
                <Col><span>Conversion Rate</span></Col>
                <Col><span style={{color:"rgb(47,179,68)"}}>7 %</span></Col>
            </Row>
            <Row>
                <Progress style={{margin:0}} percent={70}/>
            </Row>
        </Card>
    )

}

export default ProgressCard