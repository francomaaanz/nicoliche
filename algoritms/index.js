





















function isValid(s) {
    const YES = "YES";
    const NO = "NO";

    if (s) {
        const obj = {};
        for (let i = 0; i < s.length; i++) {
            const letter = s[i];
            if (!obj[letter]) {
                obj[letter] = 1;
            } else if (obj[letter] == 1) {
                obj[letter] += 1;                            
            } else {
                return NO;
            }
        }
        return YES;
    }
    
    return NO;
}
console.log("alternatingCharacters", isValid("aabbcd"));
console.log("alternatingCharacters", isValid("aabbccddeefghi"));
function alternatingCharacters(s) {
 if (typeof s === "string" && s.length > 0) {
     let removeCounter = 0;
    for(let i =  0; i < s.length; i++) {
        const letter = s[i];
        const lastLetter = s[i - 1];

        if (lastLetter && lastLetter === letter) {
            removeCounter++;
        }
        
    }
    return removeCounter;
 }
 return 0;
}

// console.log("alternatingCharacters", alternatingCharacters("AAAA"));
// console.log("alternatingCharacters", alternatingCharacters("BBBBB"));
// console.log("alternatingCharacters", alternatingCharacters("ABABABAB"));
// console.log("alternatingCharacters", alternatingCharacters("BABABA"));
// console.log("alternatingCharacters", alternatingCharacters("AAABBB"));

function minimumBribes(q) {    
    const TOO_CHAOTIC = "Too chaotic";
    let total = 0;

    for (let current_pos = 0; current_pos < q.length; current_pos++) {
        //getting original position using index 0
        const original_pos = q[current_pos] - 1;
        // how far a person has moved
        const diff = original_pos - current_pos;
        // if the personed moved more than 2 positions
        if (diff > 2) return console.log(TOO_CHAOTIC);
        // if the person moved as much as 2 positions
        if (diff <= 2) {
            //checl each person starting from one person ahead or original pos
            //until curren position
            for(let i = Math.max(0, original_pos -1); i < current_pos; i++) {
                const start_pos_of_forward_person = q[i] - 1;
                //if a person in fron of current person started BEHIND
                //current person, then current person MUST have been brived by them
                if (start_pos_of_forward_person > original_pos) {
                    total++;
                }
            }
        }
    }
    console.log(total);
};
//console.log("minimumBribes", minimumBribes([ 2, 1, 5, 3, 4 ]));
//console.log("minimumBribes", minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
/*          Expected
            3
            Too chaotic
*/
function rotLeft(a, d) {    
    if (d === 0) {
        return a;
    } else {
        for(let i = 0; i <= d; i++){
            console.log(a)
            a.push(a.shift());            
        }
        return a;
    }
}
//console.log("rotLeft", rotLeft([ 1, 2, 3, 4, 5 ], 4 )) //28 es la suma maxima
// espera un array de 2 dimensiones
const arr2D = [
[-9, -9, -9,  1 ,1, 1],
[ 0, -9,  0,  4 ,3 ,2],
[-9, -9, -9,  1, 2 ,3],
[0,  0,  8,  6, 6 ,0],
[0,  0,  0, -2, 0, 0],
[0,  0,  1,  2, 4, 0],
];

/*
The 16  hourglass sums are:
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
9,  17, 25, 18
*/
function hourglassSum(arr) {
    // Write your code here
    let maxSum = -63;
    //1 2 3 4 5 6
    //en el ejemplo solo puedo moverme y sumar hasta la posicion 4 por eso itero solo hasta 4
    //tengo que forma la figura haciendo iteracion
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
             
             let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
             let med =             arr[i+1][j+1];
             let bot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
             
             let sum = top + med + bot;
            
            maxSum = Math.max(maxSum, sum);
            
        }
    }    
    return maxSum;    
}

//console.log("hourglassSum", hourglassSum(arr2D)) //28 es la suma maxima

function repeatedString(s, n) {
    const arrLeters = [...s];    
    const k = arrLeters.length;
    let counter = 0;
        
    if (n >= k) {        
        
        for(let i = 0; i < arrLeters.length; i++) {
            if(arrLeters[i] === "a") counter ++;
        }
                
        counter *= Math.floor(n/k); 
        
        for (let i = 0; i < n%k; i++) {
            if(arrLeters[i] === "a") counter ++;
        }
    }
    if (n < k) {
        const newArr = s.slice(0, n);
        for (const letter of newArr) {
            if(letter === "a") counter++
        }
    }    
    return counter;
}

function circularRotation(a, k, queries) {
    const auxArr = [];
    for(let i = 0; i < k; i++) {        
        a.unshift(a.pop())        
        console.log(a);
    }

    for (let i = 0; i < queries.length; i++) {
        const indexQueries = queries[i];
        const elementFromA = a[indexQueries];
        auxArr.push(elementFromA);
    }

    return auxArr

}

//console.log(circularRotation([1, 2, 3], 3, [1,2]));
//console.log(repeatedString("aba", 10));
//console.log(repeatedString("ababa", 3));

function jumpingOnClouds(c) {
    if (!Array.isArray(c) || c.length === 0) {
        return 0;
    }

    let jumps = 0; 
    let i = 0; 
    
    for(i = 0; i < c.length -1;) {
        jumps++;        
        i = (c[i+2] === 0) ? (i+2) : (i+1);
        console.log("jumps", jumps,"i", i);    
    }    
    return jumps
}

//console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
//console.log(jumpingOnClouds([0,0,0,0,1,0]));

function countingValleys(steps, path) {
    const arrSteps = Array.from(path);
    let valleys = 0;
    let count = 0;
    const arrtSavesteps = [];
    for (let i = 0; i < arrSteps.length; i++) {
        const step = arrSteps[i];
        const lastStep = arrtSavesteps[i -1];
        if (step === "U") {
            count++;
            arrtSavesteps.push(count)
        } else if (step === "D") {
            count--;
            arrtSavesteps.push(count)
        }
        if (count === 0 && i > 0 && lastStep && lastStep === -1) {
            valleys++;
        }
    }
    return valleys;
    
}

//console.log(countingValleys(8, "UDDDUDUU"));
