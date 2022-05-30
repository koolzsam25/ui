import { students,examData } from './Data';
export function getExamData(examData) {
    const dataList = examData;
    return dataList;
}
export function getExamDetails(examId) {
    const data = examData.find(_ =>_.Id == examId);
    return data;
}
export function filterExamData(filterType, examData) {
    let filtredExamData;
    switch (filterType) {
        case 'next7days':
            filtredExamData = getExamData(examData).filter(_ => new Date(_.Expiry).getDate() - new Date().getDate() <= 7 && new Date(_.Expiry).getDate() - new Date().getDate() > 0);
            break;
        case 'nextMonths':
            filtredExamData = getExamData(examData).filter(_ => new Date(_.Expiry).getDate() - new Date().getDate() <= 30 && new Date(_.Expiry).getDate() - new Date().getDate() > 0);
            break;
        case 'pastExams':
            filtredExamData = getExamData(examData).filter(_ => new Date(_.Expiry) < new Date());
            break;
        default:
            filtredExamData = getExamData(examData);
            break;

    }
    return filtredExamData;
}
export function isExamOver(expiry) {
    return new Date() > new Date(expiry);
}
export function getStudentResult(scores, studentId, examId) {
    return scores.find(_ => _.StudentId == studentId && _.ExamId == examId)?.Result;
}
export function getStudentDetails(studentId) {
    return students.find(_ => _.Id == studentId);
}
//to-do need work to return in hour , min and sec format 
export function getTimeRemaining(expiryDate) {
    const diffInMs = Math.round(new Date(expiryDate) - new Date());
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}