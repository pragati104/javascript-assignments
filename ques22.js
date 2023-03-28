// // The following is an array of 10 students ages:
// //     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// //     - Sort the array and find the min and max age
// //     - Find the median age(one middle item or two middle items divided by two)
// //     - Find the average age(all items divided by number of items)
// //     - Find the range of the ages(max minus min)
// //     - Compare the value of (min - average) and (max - average), use abs() method


// const ages = [1, 19, 22, 24, 20, 25, 26];
// // Sort the array and find the min and max age
// for(i=0;i<ages.length;i++){
//      for(j=1;j<i;j++){
//         temp=0
//         if(ages[i]<ages[j]){
            
//            temp=ages[i];
//            ages[i]=ages[j];
//            ages[j] = temp
//         }
//     }

// }
//  console.log("After sorting",ages);

// // Find the median age(one middle item or two middle items divided by two)
 
// // if(ages.length %2 === 0){
// // console.log(`First Value: ${ages[(ages.length/2)-1]} and Second Value: ${ages[(ages.length/2)]}`);
// // }else{
// //    console.log(`First Value: ${ages[Math.floor(ages.length/2)]}`);
// // }
 


// // Find the average age(all items divided by number of items)
// let sum=0;
//  for(i=0;i<ages.length;i++){
//   sum = sum + ages[i];
//  }
//  console.log(sum);
//  console.log("Average=",sum/ages.length);

// // Find the range of the ages(max minus min)
// const range = ages[(ages.length)-1] - ages[0]
// console.log("range=",range);

// // Compare the value of (min - average) and (max - average), use abs() method

// let minav=Math.abs(ages[0]-sum/ages.length);
// let maxav=Math.abs(ages[(ages.length)-1]-sum/ages.length);
// console.log("mini average=",minav);
// console.log("maximum average=",maxav);