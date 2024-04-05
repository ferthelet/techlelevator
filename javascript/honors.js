// Write the function getHonorsTag.
// getHonorsTag({art: 'B', math: 'A', science: 'C', honorsCourses: true, numberTimesAbsent: 1}) --> "Honors" // 3.2 GPA
// getHonorsTag({art: 'A', math: 'A', science: 'A', honorsCourses: false, numberTimesAbsent: 3}) --> "High Honors" // 4.0 GPA
// getHonorsTag({art: 'A', math: 'A', science: 'A', honorsCourses: false, numberTimesAbsent: 5}) --> "" // Too many absent
// getHonorsTag({art: 'D', math: 'A', science: 'A', honorsCourses: true, numberTimesAbsent: 0}) --> ""  // Includes a D
function getGradePoints (letterGrade) {
    let grade = 0;
    if (letterGrade === 'A') {
        grade = 4;
    } else if (letterGrade === 'B') {
        grade = 3;
    } else if (letterGrade === 'C') {
        grade = 2;
    } else if (letterGrade === 'D') {
        grade = 1;
    }
    return grade;
}

function calculateGPA (reportCard) {
    const HONORS = 0.2;
    let art = getGradePoints(reportCard.art);
    let math = getGradePoints(reportCard.math);
    let science = getGradePoints(reportCard.science);
    let totalCoursesPoints = (art + math + science) / 3;
    if (reportCard.honorsCourses) {
        totalCoursesPoints = totalCoursesPoints + HONORS;
    }
    return totalCoursesPoints;
}

function getHonorsTag (reportCard) {
    let honorsTag = '';
    let absent = false;
    let gotGradeD = false;  
    const GPA = calculateGPA(reportCard);
    
    if (reportCard.numberTimesAbsent > 3) {
        absent = true;
    };
    
    if (reportCard.art === 'D' || 
        reportCard.math === 'D' ||
        reportCard.science === 'D') {
            gotGradeD = true;
        }
                        
    if (!gotGradeD || !absent) {
        if (GPA >= 3.5) {
            honorsTag = 'High Honors';
        } else if (GPA >= 3) {
            honorsTag = 'Honors';
        }
    }
    return honorsTag;
}

console.log(getHonorsTag({art: 'D', math: 'A', science: 'A', honorsCourses: true, numberTimesAbsent: 0}));
