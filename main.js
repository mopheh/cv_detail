const skills = [
  { name: "React.js", category: "Front-End", percent: 75 },
  { name: "Next.js", category: "Front-End", percent: 70 },
  { name: "Redux", category: "State Management", percent: 65 },
  { name: "Node.js + Express", category: "Back-End", percent: 70 },
  { name: "PostgreSQL", category: "Database", percent: 50 },
  { name: "Clerk", category: "Authentication", percent: 65 },
  { name: "Tailwind CSS", category: "Styling/UI", percent: 85 },
  { name: "Postman", category: "Tools/Testing", percent: 70 },
]

const container = document.getElementById("skills-container")

skills.forEach((skill) => {
  const skillItem = document.createElement("div")
  skillItem.className = "d-flex my-3 align-items-center col-md-6 col-12 smstack"

  skillItem.innerHTML = `
      <div class="progress-ring" style="--percent: ${skill.percent}">
        <svg width="100" height="100">
          <circle class="progress-bg" r="45" cx="50" cy="50" stroke-width="10" />
          <circle class="progress-value" r="45" cx="50" cy="50" stroke-width="10" />
        </svg>
        <div class="progress-text">${skill.percent}%</div>
      </div>
      <div class="tool pl-4">
        <span class="category d-block mb-1">${skill.category}</span>
        <h6 class="m-0">${skill.name}</h6>
      </div>
    `

  container.appendChild(skillItem)
})

document.querySelectorAll(".progress-ring").forEach((ring) => {
  const percent = parseFloat(ring.style.getPropertyValue("--percent"))
  const circle = ring.querySelector(".progress-value")
  const radius = circle.getAttribute("r")
  const circumference = 2 * Math.PI * radius

  circle.style.strokeDasharray = circumference
  circle.style.strokeDashoffset =
    circumference - (percent / 100) * circumference
  circle.style.stroke = "darkgreen"
  circle.style.fill = "none"
  circle.style.strokeLinecap = "round"

  const bg = ring.querySelector(".progress-bg")
  bg.style.stroke = "#d6f5d6"
  bg.style.strokeDasharray = circumference
  bg.style.strokeDashoffset = 0
  bg.style.fill = "none"
})
