
/* Dit word ook wel Object Oriented Syntax genoend en is een slecht voorbeeld
// Als een object 1 of meer methodes heeft dan noemen we dat behavior(gedrag)

 const circle = {
    radius: 1,
    location: {
        x: 1, Dit worden in OOP properties oftewel eigenschappen genoemd
        y:1
    },
    draw: function() {  In OOP word een function een method genoemd dus ook in deze instantie is het een method
        console.log('draw');
    }
 };
*/
// Dit wordt een Factory Function genoemd
// Als wij de return keyword gebruiken dan heet dat een Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
// In een Constructor Function moet de functie naam altijd beginnen met een hoofdletter
// Als je de this key word gebruikt en de new operator dan noemen wij die functie een Constructor functie
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

/*
const Circle1 = new Function('radius', `


    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);
const circle = new Circle1(1);
*/


Circle.call({}, 1);
Circle.call({}, 1);

const another = new Circle(1);

