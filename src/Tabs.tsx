import * as React from 'react'
import Tab from "./Tab";

interface TabsProps{
    MenuName: string;
}


class Tabs extends React.Component<TabsProps, {}>{
    render() {
        return(
        <div>{this.props.MenuName} 
         <ul>
                <li><Tab tabTitle = "Main Subject" tabContent="Content" tabIsVisible = {false}/></li>
        
         </ul>
         </div>
        );
    }

}


export default Tabs;