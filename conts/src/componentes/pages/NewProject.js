import { useNavigate } from 'react-router-dom'
import ProjetForm from '../project/ProjetForm'
import styles from './NewProjects.module.css'
function NewProject(){

    const navigate = useNavigate()
    
    function createPost(project){
        // initialize cst and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços </p>
            <ProjetForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}
export default NewProject