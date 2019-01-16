//Put the start of your program in a main function.
// Create an attendance array. Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array,
// then log the option they chose. Repeat this five times.

// main();
// function main()
// {
//
//     var attendance = [];
//
//
//     for (var i=0; i<5; i++)
//     {
//         var checkIn = prompt("Is a teacher, student, or parent checking in?");
//         switch (checkIn)
//         {
//             case "teacher":
//                 console.log(checkIn);
//                 break;
//             case "student":
//                 console.log(checkIn);
//                 break;
//             case "parent":
//                 console.log(checkIn);
//                 break;
//         }
//         attendance.push(checkIn);
//         console.log(attendance);
//     }
//
// }

// Challenge: Do the above program until the user enter's 'q'.
// Also, print and add to the array via a function call to the appropriate teacher/student/parent function.

main();
function main()
{
    var attendance = [];
    var checkIn = '';
    
    while (checkIn !== "q")
    {
        checkIn = prompt("Is a teacher, student, or parent checking in?");
        switch (checkIn)
        {
            case "teacher":
                attendance.push(checkIn);
                break;
            case "student":
                attendance.push(checkIn);
                break;
            case "parent":
                attendance.push(checkIn);
                break;
            default:
                console.log("ERROR")
        }

        console.log(attendance);
    }

}