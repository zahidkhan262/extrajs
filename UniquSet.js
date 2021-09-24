let fruits = ["🍎", "🍎", "🥭", "🍌", "🍌", "🍇"];

let uniqueValue = [...new Set(fruits)];

console.log(uniqueValue);
// with the help of Set we can filter unique value from an array
// o/p---------------->
// ) ['🍎', '🥭', '🍌', '🍇']