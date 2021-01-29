function Date() {
let d = new Date();
let time = d.toLocateTimeString();
console.log(time);
}
setInterval(Date, 1000);
