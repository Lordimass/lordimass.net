import TemplateElement from "../../scripts/modules/TemplateElement.js";
export default class ProjectCard extends TemplateElement {
    html = `
    <article class="projectCard">
        <div>
            <p class="projectType"></p>
            <h3></h3>
            <p></p>
        </div>
        <div class="tagRow"></div>
        <a>Open project</a>
    </article>
    `
    project;

    constructor({project}) {
        super();
        let proj;
        if ("project_type" in project) { // Modifold project
            proj = {
                name: project.title,
                href: `https://modifold.com/${project.project_type}/${project.slug}`,
                description: project.summary,
                tags: project.tags,
                image: project.icon_url,
                imageAlt: project.title
            }
        } else { // Standard project
            proj = project
        }
        this.project = proj

        this.parsedHtml = `
        <article class="projectCard">
            ${proj.image ? `<img src=${proj.image} width="500" alt=${proj.imageAlt ?? ""}>` : null}
            <div>
                <p class="projectType">${proj.type}</p>
                <h3>${proj.name}</h3>
                <p>${proj.description}</p>
            </div>
            <div class="tagRow">
                ${proj.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <a href=${proj.href} class="btn">Open project</a>
        </article>`
    }
}