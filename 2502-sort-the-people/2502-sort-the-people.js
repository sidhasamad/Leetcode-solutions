/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const people = heights.map((height,index)=>[height, names[index]])
    people.sort((a,b)=>b[0]-a[0])
    return people.map(person => person[1]);
};