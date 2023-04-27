import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import "../styles/row.css"

const fields = ['ID','Type','Stats','Value', 'Created At','Updated At','Attr_name','Expression','Actions'] ;

const values = [['252','T','SUM','10','2023-04-06T09:40:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','<',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['251','T','SUM','10, 20','2023-04-05T10:35:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','>',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['250','T','AVG','10, 20 , 30','2023-04-04T10:30:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','>',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['249','T','SUM','10, 20','2023-04-04T08:55:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','<',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['248','T','AVG','10','2023-04-04T08:47:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','<',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['247','T','SUM','10','2023-04-03T11:46:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','>',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['246','T','SORT','10, 15','2023-04-03T10:20:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','>',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['245','T','SUM','10','2023-04-03T09:40:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','<',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['244','T','SORT','10, 20','2023-04-01T09:40:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','<',<i style={{fontSize:14}} className="ti ti-edit"></i>],
                ['243','T','SUM','10','2023-04-01T09:40:37.846382Z','2023-04-06T09:40:37.846382Z','abcScore','>',<i style={{fontSize:14}} className="ti ti-edit"></i>]]	


const AntInvoiceTable = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
            style={{
            padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
                marginBottom: 8,
                display: 'block',
            }}
            />
            <Space>
            <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                width: 90,
                }}
            >
                Search
            </Button>
            <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                width: 90,
                }}
            >
                Reset
            </Button>
            <Button
                type="link"
                size="small"
                onClick={() => {
                confirm({
                    closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
                }}
            >
                Filter
            </Button>
            <Button
                type="link"
                size="small"
                onClick={() => {
                close();
                }}
            >
                close
            </Button>
            </Space>
        </div>
        ),
        filterIcon: (filtered) => (
        <SearchOutlined
            style={{
            color: filtered ? '#1890ff' : undefined,
            }}
        />
        ),
        onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
        if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
        }
        },
        render: (text) => text
        
    });

    const columns = [];

    fields.map((f,idx)=>{
        columns.push({
            title: f,
            dataIndex: f.replace(' ','').toLowerCase(),
            key: f.replace(' ','').toLowerCase(),
        })
    })

    columns[2] = {...columns[2],...getColumnSearchProps('stats'),}
    columns[6] = {...columns[6],...getColumnSearchProps('attr_name'),}
    
    const data = [];

    values.map((val,idx)=>{
        let row = {key : idx};
        val.map((v,i) => {
            row = {...row, [columns[i].dataIndex]:v}
        })
        data.push(row) ;
    })

    data[2] = {...data[2], disabled:true}
    
    return <Table className='table table-responsive' size='small' style={{border:"1px solid rgb(240, 240, 240)", borderRadius:8}} columns={columns} dataSource={data} rowClassName={(record)=>(!!record.disabled  ? 'disabled-row': '')}/>;
};
export default AntInvoiceTable;