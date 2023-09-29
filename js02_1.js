// Task 1. Create a "shopping list" array. Each element of the array is an object
// that contains product name, the required quantity and whether it is
// purchased or not. Write several functions to work with such an array.


// let shoppingList = [
//     {name: 'Iphone 15', quantity: 3, purchased: false},
//     {name: 'Iphone 15 Pro Max', quantity: 5, purchased: true},
//     {name: 'Iphone 15 Pro', quantity: 7, purchased: false},
//     {name: 'Iphone 14', quantity: 2, purchased: true},
//     {name: 'Iphone 14 Pro Max', quantity: 10, purchased: false},
//     {name: 'Iphone 14 Plus', quantity: 9, purchased: true},
// ]


// 1. Displaying the entire list on the screen in such a way that first go uncharged products, and then bought.


// let unpaidItems = shoppingList.filter(item => !item.purchased);

// console.log("Unpaid Items:")

// unpaidItems.forEach(item => {
//     console.log(`${item.name} - ${item.quantity} ${item.purchased ? '(Item Paid)' : '(Item Unpaid)'}`)
// });



// console.log("Paid Items:")

// let paidItems = shoppingList.filter(item => item.purchased);

// paidItems.forEach(item => {
//     console.log(`${item.name} - ${item.quantity} ${item.purchased ? '(Item Paid)' : '(Item Unpaid)'}`)
// });




// 2. Adding a purchase to the list. Note that when adding a purchase with the already existing product in the list, you need to increase the quantity in the existing purchase instead of adding a new one.


// function addItem(name, quantity){
//     let existingItem = shoppingList.find(item => item.name === name);
//     if(existingItem){
//         existingItem.quantity += quantity;
//     }
//     else{
//         shoppingList.push({name, quantity, purchased: false});
//     }
// }


// addItem('Samsung Galaxy S23', 4);
// addItem('Iphone 15', 5);

// shoppingList.forEach(element => {
//     console.log(`${element.name} ${element.quantity} ${element.purchased}`)
// });




// 3. Purchase of the product. Function takes product name and marks it as purchased.



// function purchaseItem(name){
//     let itemToPurchase = shoppingList.find(item => item.name === name);
//     if(itemToPurchase){
//         itemToPurchase.purchased = true;
//     }
// }


// purchaseItem('Iphone 15')

// shoppingList.forEach(element => {
//     console.log(`${element.name} ${element.quantity} ${element.purchased}`)
// });




// Task 2. Create an array that describes receipt in a store. Each element of
// the array consists of the product name, quantity, and price per unit.
// Write the following functions.



let receipt = [
    {productName: 'Apple', quantity: 4, pricePerUnit: 2},
    {productName: 'Bread', quantity: 5, pricePerUnit: 4},
    {productName: 'Water', quantity: 10, pricePerUnit: 1},
    {productName: 'Cola', quantity: 7, pricePerUnit: 3},
]



// 1. Displaying a receipt on the screen.

// function showReceipt(){
//     console.log('Receipt:')
//     receipt.forEach(item => {
//         console.log(`Name: ${item.productName} \nQuantity: ${item.quantity} \nPrice: ${item.pricePerUnit}`)
//     });
// }


// showReceipt();


// 2. Calculation of the total amount of purchase


// function calculateTotal(){
//     let totalPrice = 0;
//     receipt.forEach(item => {
//         totalPrice += item.quantity * item.pricePerUnit;
//     });

//     return totalPrice;
// }

// let total = calculateTotal();
// console.log(`Total Amount: ${total}`)




// 3. Getting the most expensive purchase in the receipt.


// function getMostExpensivePurchase(){
//     let prices = receipt.map(item => item.pricePerUnit);
//     prices.sort((a,b) =>{
//         if(a > b) return 1;
//         else if(a < b) return -1;
//         else return 0;
//     })

//     let MostPrice = prices.pop();

//     let pricePerUnit = receipt.find(item => item.pricePerUnit === MostPrice);

//     return pricePerUnit;
// }

// let most = getMostExpensivePurchase();
// console.log(most);





// 4. Calculate the average cost of a single item in the receipt. 


// function calculateAverageCost(){
//     let totalQuantity = 0;
//     let totalCost = 0;

//     receipt.forEach(item => {
//         totalQuantity += item.quantity;
//     });


//     receipt.forEach(item => {
//         totalCost += item.quantity * item.pricePerUnit;
//     });


//     return totalCost / totalQuantity
// }

// let average = calculateAverageCost();
// console.log(average);





// Task 3. Create an array of CSS styles (color, font size, alignment, underline,
// etc.). Each element of the array is an object consisting of two properties:
// the style name and the style value.
// And write a function that takes an array of styles and text and
// prints this text using document.write() in the <p> </p> tags, adding
// the style attribute to the opening tag with all the styles listed in the
// array. 



// let styles = [
//     {name: 'color', value: 'blue'},
//     {name: 'font-size', value: '20px'},
//     {name: 'text-align', value: 'center'},
//     {name: 'text-decoration', value: 'underline'}
// ];


// function showStyledText(styles, text){
//     let styleString = styles.map(style => `${style.name}: ${style.value}`).join(';');
//     document.write(`<p style="${styleString}">${text}</p>`)
// }

// showStyledText(styles, 'Hakuna Matata')




// Task 4. Create an array of the Academy classrooms. The classroom object
// consists of name, number of seats (from 10 to 20), and name of the
// department for which it is intended. 
//  And write a few functions to work with it


let classrooms = [
    { name: 'Classroom A', seats: 15, department: 'Computer Science' },
    { name: 'Classroom B', seats: 12, department: 'Mathematics' },
    { name: 'Classroom C', seats: 18, department: 'Physics' },
    { name: 'Classroom D', seats: 20, department: 'Chemistry' },
    { name: 'Classroom E', seats: 10, department: 'Biology' }
];


// 1. Display all classrooms.

// function showAllClassrooms(){
//     console.log('All Classrooms:')
//     classrooms.forEach(item => {
//         console.log(`Class Name: ${item.name}, Seats: ${item.seats}, Department: ${item.department}`);
//     });
// }

// showAllClassrooms();



// 2. Display classrooms for the specified department.

// function showClassroomsByDepartment(department){
//     console.log(`"${department}" classrooms:`);
//     let filteredClassrooms = classrooms.filter(classroom => classroom.department === department);
//     filteredClassrooms.forEach(item => {
//         console.log(`Class Name: ${item.name}, Seats: ${item.seats}`)
//     });
// }


// showClassroomsByDepartment('Mathematics');



// 3. Display only those classrooms that are suitable for the transferred
//group. The object-group consists of name, number of students,
// and department name. 


// function showSuitableClassrooms(group){
//     console.log(`Classes suitable to group ${group.name}`)
//     let suitableClassrooms = classrooms.filter(classroom => classroom.seats >= group.seats && classroom.department === group.department);
//     suitableClassrooms.forEach(item => {
//         console.log(`Class Name: ${item.name}, Seats: ${item.seats}`);
//     });
// }


// let group = {name: 'Group H', seats: 11, department: 'Mathematics'};
// showSuitableClassrooms(group);




// 4. The function of classroom sorting by number of seats.

// function sortClassroomsBySeats() {
//     let sortedClassrooms = [...classrooms];
//     sortedClassrooms.sort((a, b) => a.seats - b.seats);
//     return sortedClassrooms;
// }

// let classroomsSortedBySeats = sortClassroomsBySeats();
// console.log('Sorted Classrooms:', classroomsSortedBySeats);




// 5. Function of classroom sorting by name (alphabetically)


function sortClassroomsByName() {
    let sortedClassrooms = [...classrooms];
    sortedClassrooms.sort((a, b) => a.name.localeCompare(b.name));
    return sortedClassrooms;
}


let classroomsSortedByName = sortClassroomsByName();
console.log('Sorted Classrooms:', classroomsSortedByName);