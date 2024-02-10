/**
 * @param {number[]} flowerbed
 * @param {number} 
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed.length===1&&flowerbed[0]===0){
            n--;
            flowerbed[0]=1;
        }
        if(i===0){
            if(flowerbed[i]===0&&flowerbed[i+1]===0){
                flowerbed[i]=1;
                n--;
                i++;
            }
        }
        else if(flowerbed[i]===0&&flowerbed[i+1]===0&&flowerbed[i-1]===0){
            flowerbed[i]=1;
            n--;
            i++;
          
        }
        if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
            flowerbed[flowerbed.length - 1] = 1;
            n--;
        }
    }
    if(n<=0){
        return true;
    }
    else{
        return false;
    }
};


var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            // Check if the current position is valid for planting a flower
            if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1;
                n--;
                i++;  // Skip the next position, as flowers cannot be planted in adjacent plots
            }
        }
    }

    return n <= 0;
};

console.log(canPlaceFlowers([1,0,0,1,0,0,0,0,0,1], 2));

// var canPlaceFlowers = function(flowerbed, n) {
//     for (let i = 0; i < flowerbed.length - 1; i++) {
//         if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
//             flowerbed[i] = 1;
//             n--;
//             i++;
//         } else if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
//             flowerbed[i] = 1;
//             n--;
//             i++; 
//         }
//     }
//     if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
//         flowerbed[flowerbed.length - 1] = 1;
//         n--;
//     }

//     return n <= 0;
// };

// console.log(canPlaceFlowers([1,0,0,1,0,0,0,0,0,0,1], 2));
