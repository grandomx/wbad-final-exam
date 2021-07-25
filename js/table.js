var mgtData = [
    ["1", "MIS Management Information Systems DSST Exam ExamFOCUS Study Notes & Review Questions 2012", "6", "Samuel Christian", "10-06-2021"],
    ["2", "The Omaha System", "2", "Samuel Christian", "14-06-2021"],
    ["3", "Management Information Systems for the Information Age", "1", "Samuel Christian", "15-06-2021"],
    ["4", "Management Information Systems, Sixth Edition", "2", "Samuel Christian", "08-07-2021"],
    ["5", "Business Driven Information Systems", "5", "Samuel Christian", "10-07-2021"],
    ["6", "Introduction to Information Systems for Health Information Technology", "1", "Samuel Christian", "10-07-2021"],
    ["7", "Health Care Information Systems", "4", "Samuel Christian", "13-07-2021"],
    ["8", "Management Information Systems", "2", "Samuel Christian", "13-07-2021"],
    ["9", "Managing and Using Information Systems", "6", "Samuel Christian", "15-07-2021"],
    ["10", "The Oxford Handbook of Management Information Systems", "8", "Samuel Christian", "21-07-2021"]
];

$(document).ready(function() {
    $('#learnify').DataTable( {
        data: mgtData,
        columns: [
            { title: "ID" },
            { title: "Item Name" },
            { title: "Amount" },
            { title: "Created by" },
            { title: "Date" }
        ]
    } );
} );