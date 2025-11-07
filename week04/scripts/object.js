let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {section: "001", enrolled: 30, instructor: "Bob"},
        {section: "002", enrolled: 30, instructor: "Anneliese"}
    ]
};

function setCourseInformation(course){
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTable(section) {
    return `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(course) {
  const html = sections.map(sectionTable);
  document.querySelector("#sections tbody").innerHTML = html.join("");
}