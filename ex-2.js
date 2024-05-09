// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = 4010;
let isWeekday = "friday";
let hasBoughtProductFromITCategory = "no";
let hasAttendedDiscountEvent = "yes";
let isPlatinum = "no";

let hasPromotion = (((lastMonthPaidMoreThan4000 >= 4000) && (isWeekday == "monday" || isWeekday == "friday") && (hasBoughtProductFromITCategory == "no") && (hasAttendedDiscountEvent == "no")) ||(isPlatinum == "yes"));

console.log(hasPromotion);
