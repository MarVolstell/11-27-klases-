(()=>{
    const students = [
        {
            id:1,
            name:"Tomas",
            lastName:"Jonaitis",
            grade: 8.1
        },
        {
            id:2,
            name:"Karolis",
            lastName:"Jonaitis",
            grade: 4.1
        },
        {
            id:3,
            name:"Vardenis",
            lastName:"Pavardenis",
            grade: 5.6
        },
        {
            id:4,
            name:"Lukas",
            lastName:"Lukaitis",
            grade: 9.2
        },
        {
            id:5,
            name:"Kristina",
            lastName:"Jonaite",
            grade: 4.2
        },
        {
            id:6,
            name:"Ignasiukas",
            lastName:"Ignaitis",
            grade: 8
        }
    ]
    const filteredStudents = students.filter((student)=>(student.grade>6 && student.name.length>6))
    console.log("filtruoti Duomenys")
    console.log(filteredStudents)


    const updatedGrades = students.map(student=>({
        ...student, 
        grade:(student.grade * 1.10).toFixed(2)
    }))
    console.log("mapinti duomenys")
    console.log(updatedGrades)
    const updatedNames = students.map(student=>({
        ...student,
        name:(student.name.substring(0, 3))
    }))
    console.log(updatedNames)

    const numbers = [12, 23, 45, 3, 6, 9]
    const items = ["Ieva", "Tomas", "Antanas"]
    console.log("sortinti duomenys")
    console.log(numbers.sort())
    console.log(items.sort())

    console.log("sorted students")
    const sortedStudents = students.sort((a, b)=>{
        if(a.grade < b.grade) return 1
        if(a.grade > b.grade) return -1
        return 0
    })

    console.log(sortedStudents)

    console.log("min-inti duomenys")

    const grades = students.map(student => student.grade)
    const minGrade = Math.min(...grades)
    const studentWithMinGrade = students[grades.indexOf(minGrade)]
    console.log(studentWithMinGrade)

    const sumNumbers = (...number)=>{
        return number.reduce((acc, current)=> acc + current, 0)
    }
    console.log(sumNumbers(2,4,5,7,8,912,12))


    console.log((grades.reduce((a, b)=> a + b, 0)/grades.length).toFixed(2))
})()