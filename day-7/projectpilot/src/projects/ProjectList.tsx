import { Project } from './Project';

//Componente reutilizable para parsear lista de proyectos
//Interface con la lista de proyectos
interface ProjectListProps {
    projects: Project[]
}

//function que retorna el componente listo para usar con la lista de proyectos
function ProjectList({ projects }: ProjectListProps) {
    return <pre>{JSON.stringify(projects, null, ' ')}</pre>
}

export default ProjectList;