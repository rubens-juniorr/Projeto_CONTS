import { useEffect, useState } from "react";

import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import Input from "../form/input";
import styles from "./ProjetForm.module.css";
function ProjetForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(project || {})

  useEffect(()=>{
      fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
      // redirect
      history.push('/projects', {message: 'Projeto criado com sucesso!'})
    })
    .catch((err) => console.log(err));
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }
  function handleChange(){
    setProject({...project, [e.target.name]: e.target.value})
    console.log(project)
  }

  return (
    <form  onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="nama"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
      />
      <Input
        type="namber"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
      />
      <div>
        <Select name="category_id" text="Selecione a categoria" options={categories}/>
      </div>
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjetForm;
