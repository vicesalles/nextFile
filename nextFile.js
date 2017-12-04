// Go pro GOPR9665

function nextFile(fileName){

    //1.Split letters from numbers
    const lletres = fileName.match(/[A-Z,a-z]+/g);        
    const nums = fileName.match(/[0-9]+/g);    
    const int = parseInt(nums[0]);
        
    //2.Add one number
    const newInt = int + 1;
    
    //3.Handle dummy zeroes
    const numLength = nums[0].split('').length;
    const newIntLength = (""+newInt).split('').length;
    
    const neededZeroes = numLength-newIntLength;
    const dummyZeroes = "0".repeat(neededZeroes);
    
    //4.Return
    const nextFileName = lletres+dummyZeroes+newInt;
    console.log('nextFileName',nextFileName);


    return nextFileName; 

}

module.exports = nextFile;