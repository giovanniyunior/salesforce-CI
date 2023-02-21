import { LightningElement, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';

export default class AsistenteMeli extends LightningElement {
    @api recordId;
    @api showPositive;
    @api showNegative;
    @api positiveButtonLabel = 'Save';
    @api negativeButtonLabel = 'Cancel';
    value = '';
    textValue;


    constructor() {
        super();
        this.showNegative = true;
        this.showPositive = true;
        this.showModal = false;
      }
    
    handlePositive() {
    this.dispatchEvent(new CustomEvent('positive'));
    }
    
    handleNegative() {
    this.dispatchEvent(new CustomEvent('negative'));
    }


    get options() {
        return [
            { label: 'Debit', value: 'Debit' },
            { label: 'Credit', value: 'Credit' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    handleInputChange(event) {
        this.value = event.detail.value;
    }




}