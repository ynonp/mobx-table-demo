import { observable, decorate } from 'mobx';

class Data {
  constructor(headers) {
    this.lastGivenId = 0;
    this.data = [];
    this.size = 50;
  }

  setHeaders(headers) {
    this.headers = ['id', ...headers];
  }

  // receives an array and adds it to the data frame
  // returns the ID of the newly added row
  addRow(row) {
    if (this.data.length >= this.size) {
      this.data.shift();
    }
    const id = this.lastGivenId++;
    this.data.push([id, ...row]);
    return id;
  }

  // deletes a row by its id
  deleteRow(id) {
    this.data = this.data.filter(row => row.id !== id);
  }
}

decorate(Data, {
  data: observable,
});

export default new Data();

