import { List, Card, Typography, Badge} from "antd";

const AntList = (props) => {

    const data = [
        {text: 'Racing car sprays burning fuel into crowd',icon:<Badge color="blue"/>},
        {text: 'Japanese princess to wed commoner',icon:<Badge color="blue"/>},
        {text: 'Japanese princess to wed commoner',icon:<Badge color="blue"/>},
        {text: 'Australian walks 100km after outback crash',icon:<Badge color="green"/>},
        {text: 'Man charged over missing wedding girl',icon:<Badge color="blue"/>},
        {text: 'Los Angeles battles huge wildfires',icon:<Badge color="yellow"/>},
        {text: 'Los Angeles battles huge wildfires',icon:<Badge color="yellow"/>},
        {text: 'Los Angeles battles huge wildfires',icon:<Badge color="yellow"/>},
        {text: 'Los Angeles battles huge wildfires',icon:<Badge color="yellow"/>},
    ];
    return (
        <>
            <List 
                dataSource={data}
                style={{maxHeight:"41.8vh", overflowY:"scroll"}}
                renderItem={(item) => (
                    <List.Item>
                        <div style={{width:"inherit"}}>
                            {item.text}
                            <span style={{right:10, position:"absolute"}}>{item.icon}</span>
                        </div>
                       
                    </List.Item>
                )}
            />
        </>
    )

}

export default AntList