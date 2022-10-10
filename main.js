var email=prompt('Enter any email id');
// console.log(typeof(email));
var oddNumbers=[];
var index=0;
for(i=0;i<email.length;i++){

    if(email[i]==1||email[i]==3||email[i]==5||email[i]==7||email[i]==9){
        oddNumbers[index]=email[i];
        index++;
    }
}
console.log('oddNumbers in given email Id '+oddNumbers);