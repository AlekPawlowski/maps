import User from "./User";
import Company from "./Company";
import CustomMap from "./CustomMap";


const user  = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);


/* 
    important things about our project that i learn
    i learn about classes can implements interfaces 
    to be sure that our class contains method and properties
    that is required to work with other classes

    other important thing is that we can pass
    other objects as an arguments of our class
    like up we pass through the user object and company
    object to our addMarker method and specifed in
    that method and argument with interface
*/