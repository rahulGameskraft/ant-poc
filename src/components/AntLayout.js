import DataGrid from "./DataGrid";
import Modal from "./Modals";
import AntExpandableTable from "./common/AntExpandableTable";
import AntInvoiceTable from "./common/AntInvoiceTable";
import SimpleTable from "./common/AntSimpleTable";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import AntRoot from "./common/AntRoot";
import { useState } from "react";
import TablerLayout from "./TablerLayout";
import AntModal from "./Modals";

const AntLayout = (props) => {

    const [current,setCurrent] = useState('antd') ;
    const componentMapping = {
        'antd': <TablerLayout />,
        'tables':<AntRoot />,
        'data_grid':<DataGrid />,
        'modal':<AntModal />
    }
    return (
        <>
            <div>
                <TopNav current={current} setCurrent={setCurrent}/>
            </div>
            <div style={{display:"flex"}}>
                <SideBar />

                <div style={{ width:"100%", overflowX:'overlay', minWidth:1390, height:'90vh', backgroundColor:"rgb(242, 245, 249)"}}>
                    {componentMapping[current]}
                </div>
            </div>
        </>
    )

}

export default AntLayout ;