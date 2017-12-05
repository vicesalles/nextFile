function nextFile(fileName){

    //0.Check for fileName proper format

    //1.Split letters from numbers
    const extension = fileName.split('.')[1];
    const nums = fileName.match(/[0-9]+/g);  
    const lletres = fileName.match(/[A-Z,a-z,_]+/g)[0];  
    const nom = lletres.split(extension)[0];    
    const int = parseInt(nums[0]);
        
    //2.Add one
    const newInt = int + 1;
    
    //3.Handle dummy zeroes
    const numLength = nums[0].split('').length;
    const newIntLength = (""+newInt).split('').length;
    
    const neededZeroes = numLength-newIntLength;
    const dummyZeroes = "0".repeat(neededZeroes);
    
    //4.Return
    const nextFileName = nom+dummyZeroes+newInt+'.'+extension;
    console.log('nextFileName',nextFileName);

    return nextFileName; 
}

module.exports = nextFile;