import { Table , Select, Row, Col} from 'antd';
import "../styles/row.css"

const AntExpandableTable = (props) => {

    const fields = ["Mode","Instrument","Severity","Start Time","End Time","Duration","Alert Source","Action"];
    const subFields = ["Message On UI", "Message", "Created At", "Created By"];

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    function getSelectButton(disabled=false) {

        return (<Select
                    showSearch={true}
                    placeholder="Action"
                    disabled={disabled}
                    defaultValue={"edit"}
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'edit',
                            label: 'Edit',
                        },
                        {
                            value: 'view',
                            label: 'View',
                        },
                    ]}
                />)
    } 
    const values = [{
                        details: [
                            'Debit Card', 
                            'Mastercard - Axis Bank',
                            'High',
                            '05 Apr 23 02:11 pm',
                            '05 Apr 23 05:11 pm',
                            '3h',
                            'CRM',
                            getSelectButton()
                        ],
                        subDetails: ["Yes" ,"Observing high failures","05 Apr 23 02:12 pm", "lazyguy300@gmail.com"],
                    },
                    {
                        details: [
                            'Credit Card', 
                            'Visa - HDFC Bank',
                            'High',
                            '06 Apr 23 05:30 pm',
                            '07 Apr 23 11:00 pm',
                            '29h',
                            'JUSPAY',
                            getSelectButton()
                        ],
                        subDetails: ["Yes" ,"Observing high failures","05 Apr 23 02:12 pm", "-"],
                    },
                    {
                        details: [
                            'UPI Intent', 
                            'Google Pay (iOS)',
                            'Moderate',
                            '05 Apr 23 07:11 pm',
                            '05 Apr 23 08:11 pm',
                            '1h',
                            'CRM',
                            getSelectButton(true)
                        ],
                        subDetails: ["Yes" ,"Observing high failures","05 Apr 23 02:12 pm", "lazyguy300@gmail.com"],
                        disabled: true
                    },
                    {
                        details: [
                            'Debit Card', 
                            'Mastercard - Axis Bank',
                            'High',
                            '05 Apr 23 02:11 pm',
                            '05 Apr 23 05:11 pm',
                            '3h',
                            'CRM',
                            getSelectButton()
                        ],
                        subDetails: ["Yes" ,"Observing high failures","05 Apr 23 02:12 pm", "-"],
                    },
                    {
                        details: [
                            'Debit Card', 
                            'Mastercard - Axis Bank',
                            'Moderate',
                            '05 Apr 23 02:11 pm',
                            '05 Apr 23 05:11 pm',
                            '3h',
                            'CRM',
                            getSelectButton()
                        ],
                        subDetails: ["Yes" ,"Observing high failures","05 Apr 23 02:12 pm", "lazyguy300@gmail.com"],
                    },
                    {
                        details: [
                            'Net Banking', 
                            'Bank of Maharashtra',
                            'High',
                            '05 Apr 23 01:00 am',
                            '05 Apr 23 08:11 am',
                            '7h',
                            'JUSPAY',
                            getSelectButton()
                        ],
                        subDetails: ["Yes" ,"Observing high failures","05 Apr 23 02:12 pm", "lazyguy300@gmail.com"],
                    },];

    const columns = [];

    fields.map((f,idx)=>{
        columns.push({
            title: f,
            dataIndex: f.replace(' ','').toLowerCase(),
            key: f.replace(' ','').toLowerCase(),
        })
    })

    columns[0] = {
        ...columns[0],
        filters: [
            {
                text: 'Debit Card',
                value: 'Debit Card',
            },
            {
                text: 'Credit Card',
                value: 'Credit Card',
            },
            {
                text: 'UPI Intent',
                value: 'UPI Intent'
            },
            {
                text: 'Net Banking',
                value: 'Net Banking'
            }
        ],
        onFilter: (value, record) => record.mode.startsWith(value),
        filterSearch: true,
    }

    const data = [];

    values.map((val,idx)=>{
        let row = {key : idx};
        val['details'].map((v,i) => {
            row = {...row, [columns[i].dataIndex]:v}
        })
        row = {...row, subDetails:val.subDetails}
        data.push(row) ;
    })

    data[2] = {...data[2], disabled:true} ;

    for(let k=0; k<5; k++) {
        values.map((val,idx)=>{
            let row = {key : 10*(k+1) + idx};
            val['details'].map((v,i) => {
                row = {...row, [columns[i].dataIndex]:v}
            })
            row = {...row, subDetails:val.subDetails}
            data.push(row) ;
        })
    }

    return (
        <Table
            columns={columns}
            size='small'
            style={{borderRadius:8, border:"1px solid rgb(240, 240, 240)", width:'100%'}}
            expandable={{
            expandedRowRender: (record) => (
                <div>
                    <div
                        style={{
                            
                            paddingTop: 10,
                            paddingBottom: 10,
                        }}
                    >
                        <Row
                            justify={'space-evenly'}
                            className="row align-items-center m-0 pe-4 text-center"
                        >
                            {subFields.map(
                                (label, idx) => (
                                    <Col className="col text-justify">
                                        <Row style={{
                                            fontFamily: "inherit",
                                            fontWeight: 500,
                                            color: "#616876",
                                            justifyContent:"center",
                                            paddingBottom: 0,
                                        }}>{label}</Row>
                                        <Row style={{ paddingTop: 4, justifyContent:"center"}}>{record["subDetails"][idx]}</Row>
                                    </Col>
                                )
                            )}
                        </Row>
                    </div>
                </div>
            ),
            rowExpandable: (record) => {
                console.log(!!!record.disabled)
                return !!!record.disabled},
            }}
            dataSource={data}
            rowClassName={(record)=>(!!record.disabled  ? 'disabled-row': '')}
        />
    )
}

export default AntExpandableTable ;