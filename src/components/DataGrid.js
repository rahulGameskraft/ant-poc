import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import { Descriptions, Card, Checkbox, Divider } from "antd";

const DataGrid = (props) => {

    return (
        <div style={{marginTop:'6vh', marginLeft:'6vw'}}>
            <Card title="Base Info" style={{width:'92%',}} className="card">
                <Descriptions colon={false} layout="vertical" column={4} >
                    <Descriptions.Item label="Registrar" style={{paddingBottom:4, paddingTop:4}} >Third party</Descriptions.Item>
                    <Descriptions.Item label="Name Servers" style={{paddingBottom:4}} >Third Party</Descriptions.Item>
                    <Descriptions.Item label="Port Number" style={{paddingBottom:4}} >3306</Descriptions.Item>
                    <Descriptions.Item label="Expiration Date" span={2} style={{paddingBottom:4}} >-</Descriptions.Item>
                    <Descriptions.Item label="Creator" style={{paddingBottom:4}} >Pawel Kuna</Descriptions.Item>
                    <Descriptions.Item label="Age" style={{paddingBottom:4}} >15</Descriptions.Item>
                    <Descriptions.Item label="Edge Network" style={{paddingBottom:4}} >Active</Descriptions.Item>
                    <Descriptions.Item label="Checkbox" style={{paddingBottom:4}} > <Checkbox /></Descriptions.Item>
                    <Descriptions.Item label="Icon" style={{paddingBottom:4}} ><CheckCircleOutlined style={{color:'#2fb344', fontSize:20}}/></Descriptions.Item>
                    <Descriptions.Item label="Form Control" style={{paddingBottom:4}} >Third party</Descriptions.Item>
                    <Descriptions.Item label="Registrar" style={{paddingBottom:4}} ><span style={{color:'rgb(92, 107, 119)'}}>Input Placeholder</span></Descriptions.Item>  
                    
                </Descriptions>
            </Card>
        </div>
    )

}   

export default DataGrid;