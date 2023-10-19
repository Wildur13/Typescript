import React, { useState } from 'react'
import DisplayBox from './DisplayBox'
import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import ProjectBox from './ProjectBox';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import projectsList from '../projectsList.json';
import branchesList from '../branchesList.json';


function Main() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [branch, setBranch] = useState('');
  const [projectId, setProjectId] = useState();
  const [open, setOpen] = React.useState(false);
  const [newProjectName, setnewProjectName] = useState();
  const [newProjectDescription, setnewProjectDescription] = useState();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (e) => {
    setnewProjectName(e.target.value)
    console.log(e.target.value)
  };

  
  const handleChangeDescription = (e) => {
    setnewProjectDescription(e.target.value)
    console.log(e.target.value)
  }





  const projectName = name;
  const projectDescription = description;
  const projectMainBranch = branch;
  const selectedProjectId = projectId;

  return (
    <div className='main'>
        <div className='projectBox'>
          <div className="projecthead">
              <h3> Project </h3>
              <Button variant="text" id="btn" onClick={handleClickOpen}>New</Button>
          </div>
            <Dialog open={open} onClose={handleClose} className="dialog">
              <DialogTitle>Add a new project</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Project name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChangeName}
                  value={newProjectName}
                  autoComplete='Project Name'
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChangeDescription}
                  autoComplete='Project Description'
                  value={newProjectDescription}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} id='cancel'>Cancel</Button>
                <Button onClick={ () => {
                  const date = new Date();
                  let day = date.getDate();
                  let month = date.getMonth();
                  let year = date.getFullYear();
                  console.log(date);
                  var projectData = {
                    id:"3fa85f64-5717-4562-b3fc-2c963f66afa12",
                    type:"Project",
                    created: `${year}-${month + 1}-${day}T`,
                    defaultBranch: {
                    "@id": "3fa85f64-5717-4562-b3fc-2c963f66afa20"
                    },
                    description: newProjectDescription,
                    name: newProjectName

                  }

                
                  localStorage.setItem('newProject', JSON.stringify(projectData))
                  //const newProject = localStorage.getItem('newProject')
                  console.log(projectsList);
                  projectsList.push(projectData);
                  //JSON.parse(projectData)
                  //console.log(newProject['name'])
                  console.log(projectsList);
                  console.log(projectsList);
                  setOpen(false);

                }} id='create'>Create</Button>
              </DialogActions>
            </Dialog>

          <SearchBox />
          
          <div className="line" ></div>

          <ProjectBox setName={setName} setDescription={setDescription} setBranch={setBranch} setProjectId={setProjectId} projectId={selectedProjectId}/>
        </div>

        <div id="separatedline"></div>
              
        <DisplayBox name={projectName} description={projectDescription} mainBranch={projectMainBranch} projectId={selectedProjectId}/>
    </div>
  )
}

export default Main