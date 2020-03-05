


//Creating the queen object



function transformFirstAndLast(array) {
    var arrayList = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
    var arrayList2 = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
    var myObject = {};
    key = arrayList.shift();
    value = arrayList.pop();
    myObject[key] = value
    var myObj2 = {};
    key = arrayList2.shift();
    value = arrayList2.pop();
    myObj2[key] = value;
    console.log(myObject);
    console.log(myObj2);
}
transformFirstAndLast();