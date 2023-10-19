import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import projectsList from '../projectsList.json';
import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp} from 'react-icons/fi';
import  Delete  from '../img/delete.png';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width: '100%',
  height: '100px',
}));

function deleteProject(project){
  console.log('clicked')
  projectsList.forEach((elem) => {
    console.log(elem['@id'] === project['@id'])
    if (elem['@id'] === project['@id']) {
      projectsList.pop(elem);
      console.log(projectsList);
    }
  })
}

const ProjectCard = (({project}) => {
        const [show, setShow] = useState(false);
        const date = project.created.split("T");
        return(
          <div>
            <div className="projectcontainer">
              <div className="container">
                <div id="head">
                  
                <h4> {`${project.name}`}</h4>
                {
                    show? <button type="button" onClick={ () => setShow(false)}> <FiChevronUp/> </button>
                    : <button type="button" onClick={ () =>  setShow(true)}> <FiChevronDown/> </button>
                }
                </div>
                  
                <div id="date">
                  Created at: {`${date[0]}`}
                </div>
              </div>
            </div>
            {
              show? 
                  <div className="branch">
                      {`${project.defaultBranch['name']}`}
                  </div>
                  :
                  null
            } 
          </div>
        );

      })



function ProjectBox({setName, setDescription, setBranch, setProjectId, projectId}) {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [selected, setSelected] = useState('');

  const DeleteCard = (({project, projectIndex}) => {
    return <button className="delete" onClick={() => {
      console.log(project.projectIndex)
      handleClickOpen()
    }}> <img src={Delete} alt="" id="trash"/> 
            </button>
})

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelect = (project) => {
    setName(project.name);
    setDescription(project.description);
    setBranch(project.defaultBranch['name']);
    setProjectId(project['@id']);
  };

  return (
    <div className="project">
        {projectsList.map((project, idx) => 
            project.defaultBranch.lenght === 0 ?
                <div className="boxes" key={idx}>
                    <Item key={idx}> <h4> {`${project.name}`} </h4> </Item> 
                </div>
                :
            <>
            <div className="projectList">
              
            <Card className="cardproject" key={idx} onClick={() => {console.log(idx);handleSelect(project)}}>
                <ProjectCard project = {project} key={idx} />
            </Card> 
            <DeleteCard  project={project} projectIndex={idx}/>
            </div>
            </>
        )}
        <Dialog open={open} onClose={handleClose} className="dialog">
              <DialogTitle>Delete project </DialogTitle>
              <DialogContent>
                Do you really want to delete this project?
              </DialogContent>
              <DialogActions>
                <Button onClick={
                  (project) => {
                    projectsList.pop(project)
                    setOpen(false); 
                  }
                } id='cancel'>Delete</Button>
                <Button onClick={ handleClose } id='create'>Cancel</Button>
              </DialogActions>
            </Dialog>
    </div>
    
  )
}

export default ProjectBox