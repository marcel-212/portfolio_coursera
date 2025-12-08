import Card from './Card'
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
    const mock = [
        {
            "id": 1, "title": "React Space", "link": "https://www.coursera.org/", "description": "Handy tool belt to create amazing AR components in a React app with Redux integration via middleware", "img_url": "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            "id": 2, "title": "React Space", "link": "https://www.coursera.org/", "description": "Handy tool belt to create amazing AR components in a React app with Redux integration via middleware", "img_url": "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            "id": 3, "title": "React Space", "link": "https://www.coursera.org/", "description": "Handy tool belt to create amazing AR components in a React app with Redux integration via middleware", "img_url": "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            "id": 4, "title": "React Space", "link": "https://www.coursera.org/", "description": "Handy tool belt to create amazing AR components in a React app with Redux integration via middleware", "img_url": "https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323552.jpg?semt=ais_se_enriched&w=740&q=80"
        },
    ]

    return ( 
        <section className="projects" ref={ref}>
            <h1>Featured Projects</h1>
            <div className="projects-list">
                {mock.map((item)=> (
                    <Card key={item.id} {...item}/>
                ))}
            </div>
        </section>
     );
})
 
export default Projects;