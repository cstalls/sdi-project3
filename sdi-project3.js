//Christopher Stalls
//SDI 1405
//Project 3
//Stocking Fruit

//list global variables
var damagedFruit = false;
var shelfFull = false;
var damageStatus = "All fruit checked";

//declare JSON data
var availableFruit = {
	"Fruit": [
		{
			"Name": "Orange", 
			"Color": "Orange", 
			"Shape": "Round"
		},
		{
			"Name": "Apple", 
			"Color": "Red", 
			"Shape": "Round"
		},
		{
			"Name": "Pear", 
			"Color": "Green", 
			"Shape": "Bulb"
		},
		{
			"Name": "Grape", 
			"Color": "Green", 
			"Shape": "Oval"
		}
	]
}

//while fruits are available check for damage
function damageCheck (damageStatus)
{
do
{	
	for(i = 0; i <= availableFruit.Fruit.length; i++)
	{
		//check shelf capacity
		checkShelfCapacity();
		
		var damagedFruit = Boolean(confirm("Is the " + availableFruit.Fruit[i].Name + " ok for consumption?"));
		if (damagedFruit == true)
		{
			var goodFruit = "The " + availableFruit.Fruit[i].Name + " is OK.";
			console.log(goodFruit);
		} else {
			console.log("The " + availableFruit.Fruit[i].Name + " needs to be discarded.")
		}
	}
}while (i <= availableFruit.Fruit.length);

// return damage status to verfy all items checked in array
var damageStatus = "All fruit checked";
return damageStatus;
}

function checkShelfCapacity()
{
	var shelfStatus = prompt("What is the shelf capacity perecntage?", 100);
	var shelfCapacity = parseInt(shelfStatus);
	if (shelfCapacity != 100)
	{
		console.log("Shelf needs to be filled.");
	} else {
		console.log("Shelf is full.");	
		}
}

//call damangeCheck
damageCheck(checkShelfCapacity());

