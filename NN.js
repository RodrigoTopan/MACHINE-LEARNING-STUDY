<script>
/**
* AUTHOR: Rodrigo Garcia Topan Moreira
* DESCRIPTION: NN ALGORITHM SAMPLE -> NEAREST NEIGHBOR
*/

// DATASET OBJECT TO TRAIN THE MODEL
const people = [
{ 
  weight: 250,
  hair: 0,
  age: 36,
  name: 'Homer',
  class: 'M'
},
{ 
 weight:150,
 hair:10,
 age:34,
 name: 'Margie',
 class:'F'
},
{ 
 weight:90,
 hair:2,
 age:10,
 name: 'Bart',
 class:'M'
},
{ 
 weight:200,
 hair:6,
 age:45,
 name: 'Teste',
 class:'M'
}];

//INPUT OBJECT TO BE CLASSIFIED
const input =
{
  weight: 290,
  hair: 8,
  age: 38	
};


//NN WITH ALL ATRIBUTES
//RETURNS AN OBJECT ARRAY WITH ALL OBJECTS  
const CalculateDistancesALL = (people, input)=>{
	let distances = [];
	 people.map((person) => {
		let distance = 0;
		for(var property in input){
		    //console.log(person[property
		    distance = distance + Math.pow((person[property]-input[property]),2);
		}
		distance = Math.sqrt(distance);
		//console.log(distance);
		distances.push({
			name: person.name,
			distance: distance,
			class : person.class
		});		
	   });
	return distances;
}

//KNN WITH ONE ATRIBUTE
// RETURNS ALL THE DISTANCES BETWEEN ONLY ONE FEATURE
const CalculateDistancesONE = (people, input, ATRIBUTE_NAME)=>{
	let distances = [];
	people.map((person) => {
	const distance = Math.sqrt(Math.pow((person[ATRIBUTE_NAME]-input[ATRIBUTE_NAME]),2));
		distances.push({
			name: person.name,
			distance: distance,
			class : person.class
		});
	});
	return distances;
}




const EuclidianDistancesALL = CalculateDistancesALL(people,input);

const EuclidianDistancesONE = CalculateDistancesONE(people,input, 'hair');

//order the euclidian distannces 
const knnAll = EuclidianDistancesALL.sort(function(a,b) {
    return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0;
});

//order the euclidian distannces
const knnOne = EuclidianDistancesONE.sort(function(a,b) {
    return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0;
});

console.log("KNN COM UM ATRIBUTO ",knnOne[0]);
console.log("KNN COM TODOS OS ATRIBUTOS DO OBJETO ",knnAll[0]);


