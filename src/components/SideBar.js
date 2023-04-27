import {
  AppstoreOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import { Menu, Button} from 'antd';
import { useState } from 'react';

const SideBar = (props)=>{

    const [collapsed, setCollapsed] = useState(false) ;

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('Navigation One', 'sub1', <MailOutlined />, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
        ]),
        getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
    ]

    return (
            <div style={{ display:"flex", height:'90vh',position:"sticky",background: 'rgb(242, 245, 249)'}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                    items={items}
                    style={{height:'90vh'}}
                />
                <div style={{opacity:1, marginTop:'80vh'}} onClick={()=>{setCollapsed(!collapsed)}}>
                    {!collapsed ? (<svg width="16" height="40" viewBox="0 0 16 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H8C12.4183 0 16 3.58172 16 8V32C16 36.4183 12.4183 40 8 40H0V0Z" fill="#E6E7E9"/>
                        <g clip-path="url(#clip0_2511_536)">
                            <path d="M9.74847 24.5703L10.8228 23.496L7.33326 19.9989L10.8228 16.5017L9.74847 15.4275L5.17707 19.9989L9.74847 24.5703Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2511_536">
                                <rect width="16" height="16" fill="white" transform="translate(16 28) rotate(-180)"/>
                            </clipPath>
                        </defs>
                    </svg>) : 
                    (<svg width="16" height="40" viewBox="0 0 16 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H8C12.4183 0 16 3.58172 16 8V32C16 36.4183 12.4183 40 8 40H0V0Z" fill="#E6E7E9"/>
                        <g clip-path="url(#clip0_2513_675)">
                            <path d="M6.25202 15.4297L5.17773 16.504L8.66723 20.0011L5.17774 23.4983L6.25202 24.5725L10.8234 20.0011L6.25202 15.4297Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2513_675">
                                <rect width="16" height="16" fill="white" transform="translate(0 12)"/>
                            </clipPath>
                        </defs>
                    </svg>)}
                </div>
            </div>
    )

}

export default SideBar ;