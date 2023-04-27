import AntExpandableTable from "./AntExpandableTable";
import AntInvoiceTable from "./AntInvoiceTable";
import SimpleTable from "./AntSimpleTable";
import { Card } from "antd";

const AntRoot = () => {

    return (
        <div style={{backgroundColor:"rgb(242,245,249)",overflow:"hidden"}}>
            <div style={{marginTop:90, marginBottom:90,marginLeft:"6vw",marginRight:"6vw", overflowX:'auto'}}>
                
                <Card title={'Bounce Rate'} >
                    <SimpleTable />
                </Card>
                <Card title={'Matchmaking Rules'} style={{marginTop:16}}>
                    <AntInvoiceTable />
                </Card>
                <Card title={'Past Alerts'} style={{marginTop:16}}>
                    <AntExpandableTable />
                </Card>
            </div>
        </div>
    )

}

export default AntRoot ;