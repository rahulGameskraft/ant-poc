import { TimePicker, Row, Col, DatePicker } from "antd";

const AntDateTimePicker = () => {

    return (
        <> 
            <div style={{marginTop:90, marginLeft:'6vw', background:'#fff', width:'30vw'}}>
                <Row style={{paddingTop:'2vh', paddingBottom:'2vh', paddingLeft:'3vw', paddingRight:'3vw'}}>
                    <DatePicker showTime={{use12Hours:true}} />
                    <TimePicker style={{marginLeft:16}} format={'HH:mm'} showSecond={false}/>
                </Row>
            </div>
            <div style={{marginTop:20, marginLeft:'6vw', background:'#fff', width:'30vw'}}>
                <Row style={{paddingTop:'2vh', paddingBottom:'2vh', paddingLeft:'3vw', paddingRight:'3vw'}}>
                    <DatePicker.RangePicker style={{width:'10vw'}}/>
                    <TimePicker.RangePicker style={{width:'10vw', marginLeft:16}}/>
                </Row>
            </div>
                
        </>
    )
}

export default AntDateTimePicker ;
