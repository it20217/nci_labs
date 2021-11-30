let subjectNum = prompt("How many subjects you have?");
let subjectArray = [];
let gradeArray = [];
let avgGrade = 0;


for(i=0; i<subjectNum; i++) {
  subName = prompt("Enter subject name");
  subjectArray.push(subName);
  subGrade = prompt("Enter subject result")
  gradeArray.push(subGrade);
  avgGrade += gradeArray[i] / subjectNum; 
}


for(i=0; i<subjectNum; i++) {
let newDiv = document.createElement('div');
newDiv.classList.add('result_table');
let text = document.createTextNode("The grade for the subject "+subjectArray[i]+" is "+gradeArray[i]+".");
newDiv.appendChild(text);
document.body.appendChild(newDiv);
} 
document.getElementById("average").innerHTML = avgGrade;


