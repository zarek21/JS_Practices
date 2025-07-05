const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const shouldDrive = hasDriversLicense && hasGoodVision;
const isTired = false; // C

//We declare isTired as false so when using this boolean variable on a conditional statements comparison it outputs true statement and the condition gives the expected output.
 
 if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!')
}else{
     console.log('Someone else should drive...!')
 }