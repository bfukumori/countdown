export default class CountDown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _futureDate() {
    return new Date(this.futureDate);
  };
  get _actualDate() {
    return new Date();
  };
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  };
  get _days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  };
  get _hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  };
  get _minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  };
  get _seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  };
  get _total() {
    return {
      days: this._days,
      hours: this._hours % 24,
      minutes: this._minutes % 60,
      seconds: this._seconds % 60
    };
  };
};