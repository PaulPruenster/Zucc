function gradeStringtoNumber(grade: string) {
    if (!grade) return NaN

    let ret = Number.parseInt(grade[0])

    switch (grade[1]) {
        case 'a': ret += 0.1; break;
        case 'b': ret += 0.2; break;
        case 'c': ret += 0.3; break;
        default: break;
    }

    if (grade.length > 2 && grade[2] == '+')
        ret += 0.05

    return ret
}

function gradeNumbertoString(grade: number) {
    if (!grade) return 'NA'

    let strGrade = grade.toString()
    console.log(strGrade)

    let ret = strGrade[0]

    // 7.15 => 1
    const digit = strGrade[2]
    const map: any = {
        '1': 'a',
        '2': 'b',
        '3': 'c'
    }
    ret += map[digit]

    if (strGrade.length > 3 && (strGrade[3] == '5' || strGrade[3] == '4' || strGrade[3] == '3'))
        ret += '+'

    return ret
}

export default {
    gradeNumbertoString,
    gradeStringtoNumber
}