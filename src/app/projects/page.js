import ProjectItem from "@/components/projects/project-item";
import { DATABASE_ID, TOKEN } from "@/config/config";

export default async function Projects() {
    console.log('Projects invoked...')

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          'authorization': `Bearer ${TOKEN}`
        },
        next: { revalidate: 600 },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "이름",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
    const projects = await res.json();

    const projectNames = projects.results.map(project => project.properties.이름.title[0].plain_text);

    console.log(`프로젝트이름: ${projectNames}`)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-4">
            <h1 className="text-xl font-bold sm:text-2xl mt-5">
                총 프로젝트: 
                <span className="pl-4 text-blue-500">{projects.results.length}</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-10 w-full">
                {
                    projects.results.map(project => (
                        <ProjectItem key={project.id} data={project}/>                    
                    ))
                }   
            </div>            
        </div>
    )
}