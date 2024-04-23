function lastItem(items){
    document.getElementById('originalArray').textContent = `The original array is [Watermelon, Apple, Orange, Kiwi], and I sorted it alphabetically.`;
    const lastAlphabetically = items.slice().sort()[items.length - 1];
    //backtick ` used
    document.getElementById('lastItem').textContent = `The last item of the sorted array is ${lastAlphabetically}`;

}





function sortUserInput() {
  
    let itemCount = prompt('How many items would you like to enter? 2-4.', '');

    itemCount = parseInt(itemCount);


    if(itemCount < 2 || itemCount > 4 || isNaN(itemCount)) {
        alert('Please enter a number between 2 and 4.');
        return;
    }


 
    let categories = [];

  
    for(let i = 0; i < itemCount; i++) {
        let categoryInput = prompt(`Enter category ${i+1} of ${itemCount}:`, '');
        categories.push(categoryInput);
    }

    let userItems = [];

    for(let i = 0; i < itemCount; i++) {
        let itemInput = prompt(`Enter one ${categories[i]}:`, '');
        userItems.push(itemInput);
    }

  
    const itemsSorted = [...userItems].sort();

    document.getElementById('userInput').textContent = `You entered ${userItems.join(', ')}.`;
    document.getElementById('sortedResult').textContent = `I sorted them: ${itemsSorted.join(', ')}.`;
}
