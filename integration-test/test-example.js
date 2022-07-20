//Dao nguoc chuoi
function reverseString(string) {
    let result = [];
    for(let i = string.length-1; i >=0; i--) {
        result.push(string[i]);
    }

    return result.join('');
}

console.log(reverseString("sdbwuzxoiaow"))

//Tim kiem phan tu trong mang
function linearSearch(array, x) {
    let low = 0;
    let high = array.length-1;

    while (low <= high) {
        if(array[low] === x) {
            return low;
        } else {
            low += 1; 
        }
    }
    return "Not found!";
}

let array = [3,21,5,7,42,6,32,1222,562,4]
console.log(linearSearch(array, 6))

const resultPromise = function(idea) {
    return new Promise(function(resolve, reject) {
        if (idea.isGood) {
            resolve(idea);
        } else {
            reject({idea: idea, reason: "Not Realistic"});
        }
    });
};
   
resultPromise({idea: "Make Gold from Iron", isGood: true}).then(function() {console.info("I'm Rich!")}, function(err) {console.info("Rejected as: " + err.reason);});

//Tra ve tan suat ki tu xuat hien trong chuoi
function computeFrequency(s) {
    // Create the freq hashtable
    const freqTable = new Map();
    // for each char in the string
    for (ch of s) 
    {
        // Check if we have seen it already
        if (!freqTable.has(ch)) 
        {
            freqTable.set(ch, 1);
        } 
        else 
        {
            // Just increase the existing entry
            freqTable.set(ch, freqTable.get(ch) + 1);
        }
    }
    // Return result
    return freqTable;
   }
    console.info(computeFrequency("qwertreewqezweweqewqe"));