let nums=[2,2,3,4,3,2,7,7,5,2,2,2];
let i=0;
let itemsearch=2;
let cont=0;
while(i<nums.length){
    if(nums[i]==itemsearch){
        cont=cont+1;
    }
    i=i+1;
}
console.log("hay "+cont+" numeros "+itemsearch); 