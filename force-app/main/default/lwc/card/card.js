import { LightningElement, api } from 'lwc';
export default class Card extends LightningElement {

    @api recordId;
    @api iconName;
    @api title;
    @api subTitle;
    @api component;

    scanComponent = false;
    recordComponent = false;
    tableComponent = false;
    assistComponent = false;
    
    connectedCallback() {
        if (this.component === "scanComponent") {
            this.scanComponent = true;
        }
        else if(this.component === "recordComponent") {
            this.recordComponent = true;
        }
        else if(this.component === "tableComponent") {
            this.tableComponent = true;
        }
        else if(this.component === "assistComponent") {
            this.assistComponent = true;
        }

    }




}