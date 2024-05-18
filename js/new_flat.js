/*
City String
Street name String
Street number Number
Area size Number
Has AC Boolean
Year built Number
Rent price Number
Date available Date
 */

class flat{
    constructor(city, streetName, streetNumber, areaSize, hasAc, yearBuilt, rentPrice, dateAvailable){
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.areaSize = areaSize;
        this.hasAc = hasAc;
        this.yearBuilt = yearBuilt;
        this.rentPrice = rentPrice;
        this.dateAvailable = dateAvailable;
    }
    validacionSqlInyectionFlat(){
    }
    saveFlat(){
        var User = JSON.parse(localStorage.getItem('flat'));
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
}