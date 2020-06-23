//***************chapter 21 - 25 *****************

// task 01
// var firstname = prompt("Enter your First Name")
// var lastname = prompt("Enter your Lastname")
// var fullname = firstname+" "+lastname
// alert("Hello  "+fullname)

//task 02
// var mobile_model = prompt("Enter the Favouite Mobile Phone Model")
// var mobile_model_len = mobile_model.length;
// document.write("My Favorite phone is : "+mobile_model+"<br>")
// document.write("Length o String : "+mobile_model_len)

// //task 03
// var Str = "pakistan";
// document.write("String : "+Str+"<br>"+"Index of n : "+Str.indexOf("n"))

//task 04
// var Str = "Hello World";
// document.write("String : "+Str+"<br>"+"Index of 'l' : "+Str.lastIndexOf("l"))

// //task 05
// var str = "pakistani"
// document.write("String: "+str+"<br>"+"Character at index 3: "+str.charAt(3))

//task 06
// var firstname = prompt("Enter your First Name")
// var lastname = prompt("Enter your Lastname")
// var greet = "Hello "
// var fullname = greet.concat(firstname, " " , lastname)
// alert(fullname)

// //task 07
// var city = 'Hyderabad';
// var replace = city.replace('Hyder', 'Islam')
// document.write("City : "+city+"<br>"+"After replacement : "+replace)

// //task 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, '&')
// document.write("before replacement: "+message+"<br>"+"After replacemnet : "+replace)

//task 09
// var value = "472"
// document.write("Value: "+value+"<br>"+"Type: "+typeof(value)+"<br>"
// +"Value: "+value+"<br>"+"Type: "+typeof(parseInt(value)))

//task 10
// var input= prompt("Enter lowercase letters")
// var upper_case = input.toUpperCase();
// document.write("User Input: "+input+"<br>"+"Upper Case: "+upper_case)

//task 11
// var input = prompt("Enter the All lower or All upper case letters")
// var input_first_char = input.charAt(0)
// var f_upper_case = input_first_char.toUpperCase(input_first_char)
// var input_other_char = input.slice(1)
// var f_input_other_char = input_other_char.toLowerCase()
// var result = f_upper_case+f_input_other_char
// document.write("User Input: "+input+"<br>"+"Title Case: "+result) 

// //task 12
// var num = "35.36"
// var Str = num.toString()
// var result = Str.replace(".", "")
// document.write("Number: "+num+"<br>"+"String: "+result)

//task 13
// var name = prompt("Enter the your name")
// if(name.includes('&')  ||name.includes('!')|| name.includes('.')|| name.includes('@')){
//     alert("enter valid username")
// }

//task 14
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt("Enter the item Name")

//task 15
// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var input_password = prompt("Enter the password")
// if(input_password= ""  ){
//     alert("Enter the password")

// }
// if(input_password.length<6){
//     alert("enter the valid password ")
// }
// if (input_password.charAt(0) = nums[i]) {
//     alert("enter the valid password")

// }
// if(input_password !=/^[A-Za-z0-9]/){
//     alert("Enter the valid password ")
// }

//task 16
// var arr = [];
// var res ;
//   var str = "University of Karachi";
//    var str1 =str.replace(/ /g , "")
//   for(var i=0 ; i<=str1.length; i=i+1){
//    res = str1.charAt(i);
//   arr[i]= res;
//   document.writeln(arr[i]+"<br>")
//   }
  
//task 17
// var input= prompt("Enter the String Value")
// var res = input.charAt(input.length-1); 
// document.write("User Input : "+input+"<br>"+"Last Character of input : "+res)

// //task 18
// var text =  "the quick brown fox jumps over the lazy dog"
// var count = (text.match(/the/g)).length; 
// document.write("There are  "+count+" occourance  of word 'the ' ")


//*************chapter 26 - 30**************
//task 01
// var input_num = prompt ("Enter the positive integer value ")
// var round = Math.round(input_num)
// var floor = Math.floor(input_num)
// var ceil = Math.ceil(input_num)
// document.write("Number: "+input_num+"<br>"+"Round off value: "+round+"<br>"
// +"floor value: "+floor+"<br>"+"Ceil value: "+ceil)

//task 02 
// var input_num = prompt ("Enter the positive integer value ")
// var round = Math.round(input_num)
// var floor = Math.floor(input_num)
// var ceil = Math.ceil(input_num)
// document.write("Number: "+input_num+"<br>"+"Round off value: "+round+"<br>"
// +"floor value: "+floor+"<br>"+"Ceil value: "+ceil)

// //task 03 
//  var input_num = prompt ("Enter the positive integer value ")
//  var abs = Math.abs(input_num)
//  document.write("The absolute value of "+input_num+" is "+abs)

// //task04
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.writeln('Random dice value is :  ' + diceRoll);

// task 05
// var toss = Math.floor( Math.random() * 2 ) +1;
// if (toss == 2){
//  document.writeln( toss+"<br>"+'Random dice value is : Head ');
// }
// else if  (toss = 1){
//     document.writeln( toss+"<br>"+'Random dice value is : Tails ');
//    }

// //task 06
// var ran_num = Math.floor( Math.random() * 100 ) ;
// document.writeln( 'Random number value between 1 to 100 is  : '+ran_num);

//task 07
// var input = prompt("Enter your weight in kilogramns")
// if(input.includes('kgs')){
//    var rep = input.replace("kgs", " kilograms")
// }
// else if (input.includes('kg')){
//     var rep = input.replace("kg", " kilograms")
// }
// else if(input.includes('')){
//     var rep = input+" Kilograms"
// }
// else{
//     var rep = input
// }
// document.write("The weight of user is  "+rep)


//task 08
// var rand_num =Math.random();
// var input = prompt("Enter the  number between 1 t 10")
// if (input == rand_num){
//     alert(" congratulation : number matched ")
// }
// else if (input !== rand_num){
//     alert(" Sorry try again! ")
// }


//************* chapter 31- 34******************
//task 01

// var date = new Date();
// document.write(date)

//task 02
// var arr = ["january", "Febuary", "March", "April", "May", "June", "July","August","September","Octember", "November","Decemeber"]
// var d = new Date();
// var currentMonth = d.getMonth();
// document.write("Current Month:  "+arr[currentMonth])

//task 03
// var arr = ['Sun', 'Mon', 'Tues', 'wed','thrus','Fri','Sat']
// var d = new Date();
// var currentday = d.getDay();
// document.write("Today is   "+arr[currentday])


//task 04
// var arr = ['Sun', 'Mon', 'Tues', 'wed','thrus','Fri','Sat']
// var d = new Date();
// var currentday = d.getDay();
// if(arr[currentday]== "Sun" || arr[currentday]== "Sat"){
//     document.write("It's Fun day .")
// }
// else{
//     document.write("It's  not a Fun day .")

// }

//task 05

// var d = new Date();
// var currentdate = d.getDate();
// if(currentdate<=  "16"){
//     document.write("First Fifteen Days of Month")
// }
// else if (currentdate > "16"){
//     document.write("Last  Days of Month")
// }

//task 06

// var d1 = new Date('01/01/1970');
// var d2 = new Date('06/23/2020');
// var dif = d2.getTime() - d1.getTime();
// var sec = dif/1000;
// var min = sec/60;
// document.write("Current Date : "+new Date()+"<br>"+
// "Elapsed Milliseconds Since Jan 1 1970 :  "+dif+"<br>"+"Elapsed Minutes  Since Jan 1 1970 : "+min)

//task 07
// var today = new Date();
// var timestamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var h = today.getHours()
// if(today.getHours() >= "12"){
//     document.write(timestamp +"<br>"+"it's  PM")
// }
// else if(today.getHours() <= "12"){
//     document.write(timestamp+"<br>"+"it's  AM")
// }

//task 08
//  var arr = ['Sun', 'Mon', 'Tues', 'wed','thrus','Fri','Sat']
// var date = ("Dec 31, 2020")
// var day = getDay(date)
// document.write("Later date: "+ arr[day] + "  "+ date )

// //task 09 
// var date1 = new Date("05/18/2015"); 
// var date2 = new Date("06/23/2020"); 

// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

// document.write(Difference_In_Days + "  days  have passed  Since 1st Ramadan <br>");

//task 10

// var date1 = new Date("01/01/2015"); 
// var date2 = new Date("06/23/2020"); 

// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// var Difference_In_Seconds = Difference_In_Time / (1000 * 60 * 24); 

// document.write("On  reference  date : "+date1 +"<br>"
// +Difference_In_Seconds + " Seconds   had passed  Since the beginnig of 2015<br>");

// //task 11
// var date = new Date();   
// var durationInMinutes = 60;
// var myStartDate = date - durationInMuntes
// document.write("Current date : "+date+"<br>"+"1 hour after : "+myStartDate)

// //task 12
// var d = new Date();
// var hun_year = d.setFullYear(d.getDate() - 100);
// document.write("Current Date : "+d+"<br>"+"100 year  back : "+hun_year)

// //tak 13
// var age_years = prompt("Enter the age ")
// var date = new Date("June  23, 2020 21:25:10")
// var current_year = date.getFullYear()
// var doy = current_year-age_years
// document.write("Your Age:  "+age_years+"<br>"+"Your Birth year : "+doy)

//task 14
// var user_Name= prompt("Enter the Customer Name")
// var Current_Month = prompt ("Enter the month")
// var  No_units = prompt("Enter the no of Units ")
// var charge_per_unit = "16"
// var Late_Payment_Surcharge = "350"
// var Net_Amount_Payable = No_units * charge_per_unit
// var  Gross_Amount_Payable  = Net_Amount_Payable+ Late_Payment_Surcharge
// document.write("Customer  Name: "+user_Name+"<br>")
// document.write("Month: "+Current_Month+"<br>")
// document.write("Number of units: "+No_units+"<br>")
// document.write("Charges per Unit: "+charge_per_unit+"<br>")
// document.write("Net Amount Payable (within Due Date) : "+Net_Amount_Payable+"<br>")
// document.write("Late Payment surcharges: "+Late_Payment_Surcharge+"<br>")
// document.write("Gross Amount Payable (after Due Date) = : "+Gross_Amount_Payable+"<br>")


// **************chapter 35 to 38******************
//task 01
// function current_Date(){
//     var a = new Date()
//     document.write(a)
// }
// current_Date()

//task 02
// function greet(){
//     var first_name = prompt("Enter the first name")
//     var Last_name = prompt("Enter the Last Name ")
//     var fullname = first_name + " "+Last_name
//     document.write("Hello "+fullname)
// }
// greet()

//task 03 
// function add(){
//         var num1 = prompt("Enter the first num")
//         var num2= prompt("Enter the Second num ")
//         var add =  +num1 + +num2
//         return add
//     }
//     a= add()
//     document.write(a)

//task 4
//calculater
// function calc(num1 , opr , num2){
//     if(opr==="+"){
//         return +num1+ +num2
//     } 
//     else if(opr==="-"){
//         return num1-num2
//     }
//     else  if(opr==="*"){
//         return num1*num2
//     }
//     else if(opr==="/"){
//         return num1/num2
//     }
//     else{
//         return "Incorrect operator"
//     }
    
// }

// var result = calc(9,"-",6)
// var result1 = calc(9,"+",6)
// document.write(result+"<br>")
// document.write(result1)

//task 05
// function Square(a){
//     var sq = a**2
//     return sq
// }
// var result = Square(3)
// document.write(" Square is :  "+result)

//task 06
// var b = '1'
// function  factorial(a){
//     for(var i = a ; i>=1 ; i--){
//          b = b*i
//     }
//     return b
// }
// var result = factorial(4)
//  document.write(" factorial  :  "+result)

//task 07
// function Count(){
// var fst = prompt("Enter the First number")
// var Second = prompt ("Enter the second number")
//  for(fst ;fst<Second ; fst++){
//      document.write(fst+"<br>")
//  }
// }
// Count()

//task 08
// var b_2
// var p_2
// var h_2
// function  calculateHypotenuse(){
//     function  calculateSquare(b, p){
//         b_2 = b**2
//         p_2 = p**2
//     }
//     calculateSquare(3, 4)
//     h_2 = +b_2 + +p_2
//     return h_2
// }

// var result = calculateHypotenuse()
// document.write("Hypotenuse: "+ result)

// //task 09 (i)
// function area(w= 5, h=3){
//     var A = w*h
//     return A
// }
// var result = area()
// document.write("Area of a rectangle : "+result)


//task 09 (ii)
// function area(w, h){
//     var A = w*h
//     return A
// }
// var result = area( 5,6)
// document.write("Area of a rectangle : "+result)

//task 10

// function palindrome_check(){
// var word = prompt("Enter your word");
// var check = "";
// for(var i= word.length-1; i>=0 ; i++){
//     check+= word[i]
// }
// if(check === word){
// document.write(word+"is  palindrome ")

// }
// }
// palindrome_check()

//task 11
// function case_upp(){
//     var input_string = prompt("Enter the input String ")
//      for(var k = 0 ; k <= input_string.length ; k++) {
//         document.write(input_string[k].charAt[k]+"<br>")

//         if ( input_string[k] === " "){
//              var indx = input_string.indexOf(input_string[k])
//              document.write(indx+"<br>")
//              }
        
//     }
     
// }
// case_upp()

//task 12




//task 13
// var str = prompt("enter the string ")
// var letter = prompt("enter the character")
// function char_count(){  
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write("Occurence of "+letter+" is "+char_count()+" in "+str);

//task 14
// function calcCircumference(radius){
// var Pie = 3.142;
// var Circumference = 2*Pie*radius;
// document.write("Radius of the Circle : "+radius+"<br>");

// }
// calcCircumference(5)

// function calcArea(Radius){
//     var Pie = 3.142;
//     var Area = Pie*Radius**2;
//      document.write("The Area is : "+Area);
// }
// calcArea(5)