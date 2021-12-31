//১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 
//1mon= 40seer...

// function seerToMon(seer){
//     let mon = seer / 40;
//         let total = mon;
//         return total;
// }
// const mySeer = 80;
// let total = seerToMon(mySeer);
// console.log('Total-Mon:', total);


// ২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
// ১ টি শার্টের দাম – ১০০ টাকা

// ১ টি প্যান্টের দাম – ২০০ টাকা 

// ১ টি জুতার দাম – ৫০০ টাকা 

// এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 

// function totalSales(shirt, pants, juta) {

//     //check innput negetive or not
//     if (totalSales < 0) {
//         return "Please Enter a Positive Value";
//     }
//     else{
//     //totalCosts
//     let totalCost = (shirt * shirtPrice) + (pants * pantsPrice) + (juta * jutaPrice);
//         return totalCost;

//     }
   
   
// }

// //shirtPrices
// const shirtPrice = 100;
// const  pantsPrice = 200;
// const  jutaPrice  = 500;
// //quentaties
// totalSales(shirt = 2, pants = 2, juta = 2);
// //totalCost
// let totalCost = totalSales(shirt, pants, juta);
// console.log(totalCost);

/*৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 

যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 

যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 
*/
// function deliveryCost(quantity) {
    
//     if(quantity < 0){
//         return 'Please Enter a Positive Value ';
//     }
//     else{
//         if (quantity < 100 ){
//             cost = quantity* 100;
//         }
//         else if (quantity < 200){
//             var upTo100Quantity = 100 * 100;
//             var reaminingQuantity = quantity -100;
//             var upTo200Quantity = 80 * reaminingQuantity;
//         }
//         else {
//             var upTo100Quantity = 100 * 100;
//             var upTo200Quantity = 80 * 100;
//             var reaminingQuantity = quantity -200;
//             var after200Quantity = 50 * reaminingQuantity;
//             cost = upTo100Quantity + upTo200Quantity  + after200Quantity ;
//         }
//     }
     

//     return cost;
    
// }
// var cost = deliveryCost(120);
// console.log(cost);

//4.

// const friendsList  = ['Nur','Nafish','Ahmed','Nobel','Tasnuva','Tabassum','Tisha','Sakib',]

// function perfectFriend(friendsList) {

// 	if(typeof friendsList !== 'object'){
// 		return "Please Input friend name in five charr letter"// aking when wond give 5 charr
// 	}
//     for (const bestFriend of friendsList) {
//         //five charr or not check
//         if (bestFriend.length == 5) {
//             return bestFriend
//         }
//     }
//     if (friendsList) {
//         return 'Please Enter a friend name'
//     }
// }
// //When
// console.log(perfectFriend(friendsList));