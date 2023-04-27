import { Form, Radio, Space, Switch, Table  } from 'antd';
import "../styles/row.css"
import { LinkOutlined } from '@ant-design/icons';
const SimpleTable = (props) => {

    const values = [
                        [<span>/ <LinkOutlined style={{color:'blue'}}/></span>, '4,896', '3,654','82.54%'],
                        [<span>/home.html <LinkOutlined style={{color:'blue'}}/></span>, '4,890', '3,550','70.50%'],
                        [<span>/index.html <LinkOutlined style={{color:'blue'}}/></span>, '901', '800','12.54%'],
                        [<span>/icons.html <LinkOutlined style={{color:'blue'}}/></span>, '1,896', '3,654','33.89%'],
                        [<span>/accordion.html <LinkOutlined style={{color:'blue'}}/></span>, '2,096', '3,654','45.7%'],
                        [<span>/form-elements.html <LinkOutlined style={{color:'blue'}}/></span>, '1,196', '3,654','83.54%'],
                        [<span>/pages/ <LinkOutlined style={{color:'blue'}}/></span>, '4,896', '3,654','82.54%'],
                    ];
    
    const columns = [
        {
            title: 'Page Name',
            dataIndex: 'pageName',
            key:'pageName'
        },
        {
            title: 'Visitors',
            dataIndex: 'visitors',
            key:'visitors',
            sorter: (a, b) => parseInt(a.visitors.replace(',','')) - parseInt(b.visitors.replace(',','')),
        },
        {
            title: 'Unique',
            dataIndex: 'unique',
            key:'unique',
        },
        {
            title: 'Bounce Rate',
            dataIndex: 'bounceRate',
            key:'bounceRate',
        },
    ];

    const data = []
    values.map((val,idx)=>{
        let row = {
            key:idx,
            pageName:val[0],
            visitors:val[1],
            unique:val[2],
            bounceRate:val[3],
        } ;
        console.log(row, val[3]);

        data.push(row) ;
    });
   
    const tableProps = {
        bordered:true,
        loading:false,
        size:"small",
        showHeader:true
    };
    return (
        <Table
            {...tableProps}
            pagination={true}
            columns={!!!props.columns ? columns : props.columns}
            dataSource={data}
            rowClassName={(record)=>(!!record.disabled  ? 'disabled-row': '')}
            style={{borderRadius:8}}
        />
    )
    

}

export default SimpleTable ;