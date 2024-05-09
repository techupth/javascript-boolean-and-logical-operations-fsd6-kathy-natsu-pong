let isOver18 = true;
let hasCriminalBlacklist = true;

let isAllow = isOver18 || !hasCriminalBlacklist;

// Start coding here

console.log(isAllow);

 isOver18 = 18;
 hasCriminalBlacklist = "yes";

 //expression
 isAllow = ((isOver18 >= 18) && (hasCriminalBlacklist == "yes"));
 console.log(isAllow);
