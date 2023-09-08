import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import lists from '../lists.json';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiTrash2 } from 'react-icons/fi'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width: '100%',
  height: '100px',
}));

const ProjectCard = (({project}) => {
  const [show, setShow] = useState(false);
return(
  <div>
    <div className="projectcontainer">
      <div className="container">
        <h4> {`${project.name}`}</h4>
        {
            show? <button type="button" onClick={ () => setShow(false)}> <FiChevronUp/> </button>
            : <button type="button" onClick={ () =>  setShow(true)}> <FiChevronDown/> </button>
        }
      </div>
      <button className="delete">  <FiTrash2 /> </button>
    </div>
    {
      show? 
          <div className="branch">
              {`${project.defaultBranch['@id']}`}
          </div>
          :
          null
    } 
  </div>
);

})

function ProjectBox({setName, setDescription, setBranch}) {

  const handleSelect = (project) => {
    setName(project.name);
    setDescription(project.description);
    setBranch(project.defaultBranch['@id']);
  }
  return (
    <div className="project">
        {lists.map((project, idx) => (
            project.defaultBranch.lenght === 0 ?
                <div className="boxes" key={idx}>
                    <Item> <h4> {`${project.name}`} </h4> </Item>
                </div>
                :
            <>
            <Card className="cardproject" key={idx} onClick={() => handleSelect(project)}>
                <ProjectCard project = {project} />
            </Card> 
            </>
        ))}
    </div>
  )
}

export default ProjectBox