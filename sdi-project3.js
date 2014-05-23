//Christopher Stalls
//SDI 1405
//Project 3
//Stocking Fruit

//list global variables
var damagedFruit = false;
var shelfFull = false;
var damageStatus = "All fruit checked";
var i = 0;

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
function damageCheck ()
{
do
{	
	for(i = 0; i <= availableFruit.Fruit.length; i++)
	{	
		var damagedFruit = confirm("Is the " + availableFruit.Fruit[i].Name + " ok for consumption?");
		if (damagedFruit == true)
		{
			var goodFruit = "The " + availableFruit.Fruit[i].Name + " is OK.";
			console.log(goodFruit);
		} else {
			console.log("The " + availableFruit.Fruit[i].Name + " needs to be discarded.")
		}
	}
}while (i <= availableFruit.Fruit.length);
}

function checkShelfCapacity()
{
do 
{
	for (l=0; l<= availableFruit.Fruit.length; l++)
	{
	var shelfStatus = prompt("What is the shelf capacity perecntage of the " + availableFruit.Fruit[l].Name + "?", 100);
	var shelfCapacity = parseInt(shelfStatus);
	if (shelfCapacity != 100)
	{
		console.log("Shelf needs to be filled.");
	} else {
		console.log("Shelf is full.");	
		}
	}
}while(l <= availableFruit.Fruit.length);
}

do
{
	//if shelf is full you don't need to check this item
	shelfFull = confirm("Do you need to fill the fruit section?")
	if (shelfFull == true)
	{
		//check shelf capacity
		checkShelfCapacity();

		//call damangeCheck
		damageCheck();
	} else {
		shelfFull = false;
		console.log("All fruit filled. Great job.");
	}
}while (shelfFull == true);