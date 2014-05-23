//Christopher Stalls
//SDI 1405
//Project 3
//Stocking Fruit

//list global variables
var damagedFruit = false;
var shelfFull = false;

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