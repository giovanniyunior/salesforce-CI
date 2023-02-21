import { LightningElement, track } from 'lwc';

export default class AsistenteDeTasas extends LightningElement {
  //Variables to control modal window
  @track showModal = false;
  @track showNegativeButton;
  @track showPositiveButton = true;
  @track positiveButtonLabel = 'Close';
  @track negativeButtonLabel = 'save';

  closeModal() {
    this.showModal = false;
  }

  showModalPopup() {
    this.showModal = true;
  }
}