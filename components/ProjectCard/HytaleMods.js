import ProjectCard from "./ProjectCard.js";
async function get() {
    const resp = await fetch("https://api.modifold.com/users/lordimass/projects?page=1&limit=20")
    return await resp.json()
}
get().then((data) => {
    const projects = data.projects
    const parent = document.getElementById("hytale-mods")
    if (!parent) {
        console.warn("Couldn't find hytale-mods to add projects to")
        return;
    }
    for (let project of projects) {
        if (project.project_type === "prefab") return;
        const projectCard = new ProjectCard({project})
        projectCard.lastChildTo(parent)
    }
})