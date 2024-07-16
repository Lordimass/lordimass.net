const homePageURL = "https://lordimass.github.io/RFFundraising/index.html"

// Get root element
const headerContainer = document.getElementById("header")

// Create elements and set attributes for logo
const headerContent = document.createElement("div")
headerContent.setAttribute("id", "header-content")

const logo = document.createElement("div")
logo.setAttribute("id", "logo")

const logoIcon = document.createElement("div")
logoIcon.setAttribute("id", "logo-icon")

const logoIconLink = document.createElement("a")
logoIconLink.setAttribute("href", homePageURL)

const logoIconImg = document.createElement("img")
logoIconImg.setAttribute("src", "images/logosmol.png")

const logoText = document.createElement("div")
logoText.setAttribute("id", "logo-text")

const logoTextLink = document.createElement("a")
logoTextLink.setAttribute("href", homePageURL)
logoTextLink.innerText = "Reformation Fundraising"


// Create elements and set attribute for navbox
const navBox = document.createElement("div")
navBox.setAttribute("id", "nav-box")

const archive = document.createElement("div")
archive.setAttribute("id", "archive")
archive.setAttribute("class", "nav")
archive.innerText = "Archive"

const dropdownContent = document.createElement("div")
dropdownContent.setAttribute("class", "dropdown-content")

const latestYear = 2024
for (let i = 2020; i <= latestYear; i++) {
    const year = document.createElement("a")
    year.setAttribute("href", `${i}-stream.html`)
    year.setAttribute("id", `stream${i}`)
    year.innerText = i
    dropdownContent.appendChild(year)
}

const members = document.createElement("div")
members.setAttribute("class", "nav")
members.setAttribute("id", "members")

const membersLink = document.createElement("a")
membersLink.setAttribute("href", "members.html")
membersLink.innerText = "Members"

// Nest elements
headerContainer.appendChild(headerContent)
headerContent.appendChild(logo)
logo.appendChild(logoIcon)
logoIcon.appendChild(logoIconLink)
logoIconLink.appendChild(logoIconImg)
logo.appendChild(logoText)
logoText.appendChild(logoTextLink)
headerContent.appendChild(navBox)
navBox.appendChild(archive)
archive.appendChild(dropdownContent)
navBox.appendChild(members)
members.appendChild(membersLink)

