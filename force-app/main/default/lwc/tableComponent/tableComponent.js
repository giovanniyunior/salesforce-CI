import { LightningElement, track } from 'lwc';
const columns = [{ label: 'Name', apiName: 'value' }, { label: 'Date', apiName: 'value' },];
const data = [{ key: 0, fields: [{ value: 'test 1' }, { value: 'dates 3' }] }, { key: 1, fields: [{ value: 'test 2' }, { value: 'date 2' }] }, { key: 2, fields: [{ value: 'test 3' }, { value: 'date 3' }] },];

export default class TableComponent extends LightningElement {
    data = data;
    @track columns = columns;
    @track records = this.data;
    @track sortedDirection = 'asc';
    arrowIcon = 'utility:arrowdown';

    // The method onsort event handler
    updateColumnSorting(event) {
        if (this.sortedDirection === 'desc') {
            this.sortedDirection = 'asc';
        }
        else {
            this.sortedDirection = 'desc';
        }
        this.arrowIcon = this.sortedDirection === 'desc' ? 'utility:arrowdown' : 'utility:arrowup';

        let fieldName = event.target.name;
        let sortDirection = this.sortedDirection;
        // assign the latest attribute with the sorted column fieldName and sorted direction
        //this.sortedBy = fieldName;
        //this.sortedDirection = sortDirection;
        console.log('sort fieldName:' + fieldName);
        console.log('sort direction:' + sortDirection);
        let reverse = sortDirection !== 'asc';
        let data_clone = JSON.parse(JSON.stringify(this.records));
        this.records = data_clone.sort(this.sortBy(fieldName, reverse));
    }

    sortBy(field, reverse, primer) {

        var key = primer ?
            function (x) { return primer(x[field]) } :
            function (x) { return x[field] };

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    }



}