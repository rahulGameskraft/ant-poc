import { Button, Checkbox, Col, Row } from 'antd';
import { useState } from 'react';

const AntCheckbox = () => {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const toggleChecked = () => {
        setChecked(!checked);
    };
    const toggleDisable = () => {
        setDisabled(!disabled);
    };
    const onChange = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };
    return (
        <>
        <div style={{marginTop:90, marginLeft:'6vw', background:'#fff', width:'26vw'}}>
            <Row
                style={{paddingTop:'2vh', paddingBottom:'1.5vh', paddingLeft:'3vw', paddingRight:'3vw'}}
            >
                <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
                    Option
                </Checkbox>
            </Row>
            <Row style={{paddingBottom:'2vh', paddingLeft:'3vw', paddingRight:'3vw'}}>
                <Button type="primary" size="small" onClick={toggleChecked}>
                    {!checked ? 'Check' : 'Uncheck'}
                </Button>
                <Button
                    style={{
                        margin: '0 10px',
                    }}
                    type="primary"
                    size="small"
                    onClick={toggleDisable}
                >
                    {!disabled ? 'Disable' : 'Enable'}
                </Button>
            </Row>
        </div>
        
        </>
    );
};
export default AntCheckbox;