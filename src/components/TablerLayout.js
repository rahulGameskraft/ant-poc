import { Card, Progress, Row, Table, Col, Select, Avatar} from "antd";
import SimpleTable from "./common/AntSimpleTable";
import AntInvoiceTable from "./common/AntInvoiceTable";
import AntList from "./AntList";
import AntExpandableTable from "./common/AntExpandableTable";
import ProgressCard from "./ProgressCard";
import IconCard from "./IconCard";
import { DollarOutlined, FacebookFilled, FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import TaskList from "./TaskList";

const TablerLayout = (props) => {

    const visitorColumns = [
        {
            title: 'Network',
            dataIndex: 'network',
            key:'network'
        },
        {
            title: 'Visitors',
            dataIndex: 'visitor',
            key:'visitor',
        },
        {
            title: 'Progress',
            dataIndex: 'progress',
            key:'progress',
        },
    ];

    const visitorValues = [
        ['abc','abc',<Progress percent={50} showInfo={false} />],
        ['abc','abc',<Progress percent={10} showInfo={false} />],
        ['abc','abc',<Progress percent={43} showInfo={false} />],
        ['abc','abc',<Progress percent={90} showInfo={false} />],
        ['abc','abc',<Progress percent={96} showInfo={false} />],
        ['abc','abc',<Progress percent={20} showInfo={false} />],
        ['abc','abc',<Progress percent={30} showInfo={false} />],
    ]

    const data = []
    visitorValues.map((val,idx)=>{
        let row = {
            key:idx,
            network:val[0],
            visitor:val[1],
            progress:val[2],
        } ;
        data.push(row) ;
    });

    const tableProps = {
        bordered:true,
        loading:false,
        size:"small",
        showHeader:true
    };

    return (
        <div style={{backgroundColor:"rgb(242,245,249)", height:'90vh', marginLeft:140, paddingRight:140}}>

            <Row style={{marginTop:90,}}>
                <Col style={{width:'24%'}}><ProgressCard /></Col>
                <Col style={{width:'24%', marginLeft:16}}><ProgressCard /></Col>
                <Col style={{width:'24%', marginLeft:16}}><ProgressCard /></Col>
                <Col style={{width:'24%', marginLeft:16}}><ProgressCard /></Col>
            </Row>
            <Row style={{marginTop:20}}>
                <Col style={{width:'24%'}}><IconCard rowText1={'132 Sales'} rowText2={'12 waiting payments'} avatar={<Avatar shape="square" style={{backgroundColor:'rgb(32,107,196)', color:'#fff', width:40, height:40}}><DollarOutlined style={{fontSize:25, marginTop:6}}/></Avatar>}/></Col>
                <Col style={{width:'24%', marginLeft:16}}><IconCard avatar={<Avatar shape="square" style={{backgroundColor:'rgb(29,161,242)', color:'#fff', width:40, height:40}}><TwitterOutlined style={{fontSize:25, marginTop:6}}/></Avatar>} rowText1={'623 Shares'} rowText2={'16 Today'}/></Col>
                <Col style={{width:'24%', marginLeft:16}}><IconCard avatar={<Avatar shape="square" style={{backgroundColor:'rgb(29,161,242)', color:'#fff', width:40, height:40}}><FacebookOutlined style={{fontSize:25, marginTop:6}}/></Avatar>} rowText1={'132 Likes'} rowText2={'21 Today'}/></Col>
                <Col style={{width:'24%', marginLeft:16}}><IconCard avatar={<Avatar shape="square" style={{backgroundColor:'rgb(47,179,68)', color:'#fff', width:40, height:40}}><svg style={{marginTop:6}} xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg></Avatar>} rowText1={'78 Orders'} rowText2={'23 Shipped'}/></Col>
            </Row>
            <Row style={{marginTop:20}}>
                <Col style={{width:'calc(49.2%)',}} >
                    <Card title={"Alerts"}>
                        <AntList />
                    </Card>
                </Col>
                <Col style={{width:'calc(49%)', marginLeft:16}}>
                    <TaskList />
                </Col>
            </Row>
            <Row style={{marginTop:20, paddingBottom:70}}>
                <Col style={{width:'99.3%'}}>
                    <Card
                        title={'Past Alerts'}
                    >
                        <AntExpandableTable />
                    </Card>
                </Col>
            </Row>
            
        </div>
    )

}

export default TablerLayout;