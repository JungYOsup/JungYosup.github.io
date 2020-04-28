class Time {
  constructor(start, end) {
    this._start = start;
    this._end = end;
    this._duration = end - start;
  }
}
const time = new Time(0, 20);
time._start = 5;
time._duration -= 5;
console.log(time._start);

class Time2 {
  constructor(start, end) {
    this._start = start;
    this._end = end;
    this._duration = end - start;
  }
  setStart(newStart) {
    this._start = newStart;
    this._duration = this._end - this._start;
  }
  getStart() {
    return this._start;
  }
}
const time2 = new Time2(0, 20);
time2.setStart(5);
console.log(time2.getStart());

class Time3 {
  constructor(start, end) {
    this._start = start; //0
    this._end = end; //20
    this._duration = end - start; //-20
  }
  set start(newStart) {
    this._start = newStart;
    this._duration = this._end - this._start;
  }
  get start() {
    return this._start;
  }
}
const time3 = new Time3(0, 20);
time3.start = 5;
console.log(time3.start);
