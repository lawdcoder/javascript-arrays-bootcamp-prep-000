var chocolateBars = [ "snickers", "hundred", "grand", "kitkat","skittles"]
var element1 =1;
var arrayElement = new Array();

function addElementToBeginingOfArray(element1, arrayElement )
{
  return arrayElement.unshift(element1);
 
}
var element2 =2;
var arrar2 = new Array();
function destructivelyAddElementToBginingOfArray( array1, element2)
{
  arrar2.push(element2);
  arrar2.unshift(element2);
}