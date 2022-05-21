// 1. მოცემულია ობიექტი: ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


let  user = {
firstname:'giorgi',
lastname: 'smith',
age: 25,
studentstatus: 'active'
};

console.log(user.studentstatus);



// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;

let names = ['giorgi', 'nini', 'noe', ['tekla', 'kote']];
for (let x of names){
    console.log(x);
}




// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i = 0; i < numbers.length; i++){
    if(numbers[i]>5)
    console.log(numbers[i]);
}




// 4.მოცემულია ობიექტი:
// თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;


let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (user.age > 18 && user.studentstatus == 'active'){
    console.log('hello');
} else if (user.name == 'levani') {
    console.log('hello giorgi');
} else if (user.studentstatus == 'active' || user.age < 25){
    console.log('hello world'); 
} else {
    console.log('error');
}

// 5.მოცემულია მასივი: გამოიტანეთ მარტო სრტინგები;

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for(let x of array)
    if(typeof x=='string'){
        console.log(x);
    }



    
// 6. მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let y of array){
for (let x of y){
    if(x>0){
        console.log(x);
       }
    }
}



// 7. მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია
let array = [32, 10, 'hello', null,'hello2', 50 ]
for(let  i = 0; i < array.length; i++){
    if(array[i]!='string'&& array[i]%5==0&& array[i]!=null){
        console.log(array[i]);
    }
}