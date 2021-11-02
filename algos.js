function rotateLeft(str, rotPoint ) {
    const r = rotPoint % str.length;
    return str.slice(r) + str.slice(0,r);
}

console.log (rotateLeft("ABCDE", 4))



var str1 = "AACDBDA";
var str2 = "CDBDAAA";

function areRotations(str1, str2){
    return (str1.length == str2.length) && ((str1 + str1).indexOf(str2) != -1);
}
    if (areRotations(str1, str2))
        console.log("Strings are rotations of each other")
    else
        console.log("Strings are not rotations of each other")
