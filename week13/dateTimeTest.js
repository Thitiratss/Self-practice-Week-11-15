// create date object
//1. no parameter, display current date and time
const today = new Date()
console.log(today) // 2025-11-19T12:31:48.908Z
console.log(today.getTime()) // getTime - return millisecond 1763555667571

//2. input parameter - millisecond 
const now = Date.now()
console.log(now) // 1763555508913
const now2 = new Date(now) 
console.log(now2) // 2025-11-19T12:31:48.913Z

//3. input parameter - date string
const utcDate = new Date ('2025-11-18T10:30:00z')  // ใส่ z = เวลาตามมาตรฐานสากลละ
console.log(utcDate) // 2025-11-18T10:30:00.000Z
const localDate = new Date ('2025-11-18T10:30:00') // มันต้องบวกลบ timezone ตามพื้นที่
console.log(localDate) // 2025-11-18T03:30:00.000Z 

//4. input parameter - date/time parameter
const myDate1 = new Date(2025, 12, 10, 11, 15, 25,) // year, monthIndex, day, hh, mm, ss
// จริง ๆ 12 = มกราคม เพราะ มีแค่ 0-11
console.log(myDate1) // 2026-01-10T04:15:25.000Z

console.log("=========================================================")

const startBooking = new Date('2025-11-15T12:00:00') // get millisecond, 1763182800000
const stopBooking = new Date('2025-11-16T12:00:00') // get millisecond, 1763182800000
console.log(startBooking.getTime())
console.log(stopBooking.getTime())

const bookingTime = new Date('2025-11-16T12:00:0')
if(bookingTime >= startBooking && bookingTime <= stopBooking){
    console.log(`vaild booking time`)
}else{
    console.log(`invalid booking time`)
}

// === compare แบบนี้ไม่ได้ 
// console.log(startBooking === stopBooking) // false forever, compare reference
// console.log(startBooking.getTime() === stopBooking.getTime())

//compare >, <, <=, >= สามารถ compare ได้เลย
// console.log(startBooking > stopBooking) // false
// console.log(startBooking < stopBooking) // true 
console.log(stopBooking.toISOString()) // 2025-11-16T05:00:00.000Z
console.log(stopBooking.toString()) // Sun Nov 16 2025 12:00:00 GMT+0700 (Indochina Time) ตาม local

console.log(stopBooking.toLocaleString('th-TH', {
    dateStyle: "full",
    timeStyle: "full",
})) // 16/11/2025, 12:00:00 จัด format ได้

// ตัวแรก th language ตัวสอง TH area
const formatter = Intl.DateTimeFormat('en-GB', {
    dateStyle: "long",
    timeStyle: "long",
    timeZone: "Asia/Bangkok",
}) 
console.log(formatter.format(stopBooking))
console.log("=========================================================")
console.log("get user date/time")
const systemOptions = new Intl.DateTimeFormat().resolvedOptions()
console.log(systemOptions.timeZone)
console.log(systemOptions.locale)