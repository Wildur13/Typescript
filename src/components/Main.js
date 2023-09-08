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
import lists from '../lists.json';


function Main() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [branch, setBranch] = useState();
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

  function saveJSON(filename='', json = '""'){
    //var FileSaver = require('file-saver');
    //FileSaver.saveAs(filename, json);
    //fs.writeFile(filename, json);
  }
  return (
    <div className='main'>
       <div className='projectBox'>
        <div className="projecthead">
            <h3> ProjectBox </h3>
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
              
                localStorage.setItem('newProject', JSON.stringify({
                  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  type: "Project",
                  created: "1970-01-01T00:00:00.000Z",
                  defaultBranch: {
                  "@id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                  },
                  description: newProjectDescription,
                  name: newProjectName
                }))
                const newProject = localStorage.getItem('newProject')
                JSON.parse(newProject)
                console.log(newProject)
                lists.push(newProject)
                saveJSON('src/lists.json', lists)
                console.log(lists);

              }} id='create'>Create</Button>
            </DialogActions>
          </Dialog>

        <SearchBox />
        
        <div className="line"></div>

        <ProjectBox setName={setName} setDescription={setDescription} setBranch={setBranch}/>
    </div>
      <DisplayBox name={projectName} description={projectDescription} mainBranch={projectMainBranch}/>
    </div>
  )
}

export default Main