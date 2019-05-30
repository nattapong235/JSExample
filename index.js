console.log('Hello world')

var t = setTimeout(function(){ //ทำงานเพียงครั้งเดียวเมื่อครบกำหนดเวลา
  console.log("test2")
},1000)

var x ; setInterval(function(){  //ทำงานตลอดเมื่อครบกำหนดเวลา ยกเลิกด้วย clearInterval
console.log('Hello')
},1000)
clearInterval(x)

var list = ["a", "b", "c", "d", "e", "f"];
var x = list.push('g')  //push ใช้เพิ่มสมาชิกต่อท้ายอาร์เรย์
var x = list.pop() //pop ใช้ลบสมาชิกตัวสุดท้ายอาร์เรย์
var x = list.shift() //shift ใช้ลบสมาชิกตัวแรกออก
var x = list.unshift('x') //unshift ใช้แทรกสมาชิกตัวแรก
var x = list.splice(list.length,0,'h') //ตำแหน่ง,จำนวนที่จะเพิม,item1,item2...=> push
var x = list.splice(list.length-1,1) //ลบตำแหน่งสุดท้าย =>pop
var x = list.splice(1,1) //ตำแหน่ง,จำนวนที่จะลบ,item1,item2... => a,c,d,e,f => shift
var x = list.splice(0,0,'x') //เพิ่มตำแหน่งแรกสุด =>unshift

//JSON.stringify , ใช้แปลงข้อมูลชนิดต่างๆ ให้กลายเป็นสตริงในรูปแบบ JSON ใช้ได้ทุกภาษา
//JSON.parse , ใช้แปลงสตริงที่อยู่ในรูปแบบ JSON ให้กลายเป็นสตริงในรูปแบบข้อมูลชนิดต่างๆ ใช้ได้ทุกภาษา
text = JSON.stringify(student) //รูปแบบที่ใช้ทั่วไป ครอบคลุมทุกภาษา
$data = serailize($student) //แบบ PHP

student = JSON.parse(text) 
$student = unserailize($row['data']) //PHP

