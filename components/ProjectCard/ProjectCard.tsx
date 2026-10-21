import "./ProjectCard.css"
import {Project} from "../../data/portfolio";
import Image from "next/image";

export default function ProjectCard({project}: {project: Project}) {
    return <article className="projectCard">
        {project.image ? <Image src={project.image} width={500} height={250} alt={project.imageAlt ?? ""}/> : null}
        <div>
            <p className="projectType">{project.type}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
        <div className="tagRow" aria-label={`${project.name} tags`}>
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <a href={project.href}>Open project</a>
    </article>
}