
function isItFriday() {
    fetch('/api/times')
    .then( response => response.json())
    .then(dayResult => {
        console.log(dayResult);
        const fridayDiv = document.getElementById('verify-day-wrapper');
        fridayDiv.innerText ="";
        const createFridayP = document.createElement('p');
        
        if (dayResult.data === 'Friday') {
            createFridayP.innerText = "Yes! It's " + dayResult.data;
        } else {
            createFridayP.innerText = `No it's not it's ${dayResult.data}!!!!!`
        }
        fridayDiv.appendChild(createFridayP);
    });

}