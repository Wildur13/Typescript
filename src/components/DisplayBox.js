import {FiInfo, FiEdit2} from 'react-icons/fi';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import projectsList from '../projectsList.json';
import branchesList from '../branchesList.json';
import React,  { useState }  from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonGroup } from 'react-bootstrap';



function getBranches(props){
    
    let branchesProject = [];
    branchesList.forEach( (branch) => {
        if (branch.owningProject['@id'] === props.projectId) {
            branchesProject.push(branch);
        }
    })

    return branchesProject;

}

function getBranchesAtStart(){
    let listOfBranches = [];
    const firstProjectId = projectsList[0]['@id'];
    branchesList.forEach( (branch) => {
        if (branch.owningProject['@id'] === firstProjectId) {
            listOfBranches.push(branch);
        }
    })

    return listOfBranches
}

function getCommits(props){
    
    const branchesProjekt = [];
    branchesList.forEach( (branch) => {
        if (branch.owningProject['@id'] === props.projectId) {
            branchesProjekt.push(branch);
        }
    })

    return branchesProjekt.length;

}

function getFirstProjectName(){
    const projectName = projectsList[0].name;
    return projectName
}



function DisplayBox(props) {
    
    const [open, setOpen] = useState(false);
    const listBranches = getBranches(props);

    const branchesName = []

    console.log(props.name)

    listBranches.forEach((branch) => {
        if (branch.owningProject['@id'] === props.projectId) branchesName.push(branch['name']);
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
    <div className='displayBox'>
        <div className="head">
            <div className="projectname">
                <h3>{props.name === undefined || props.name === ''? getFirstProjectName() : props.name} </h3>
                <button type="button"> <FiEdit2 /> </button>
            </div>
            <div className="info">
                <div className="inficon"><FiInfo /> info:</div> &nbsp;&nbsp; &nbsp;&nbsp;
                <strong>Branches({props.projectId === undefined ? getBranchesAtStart(props).length : listBranches.length})</strong> &nbsp;&nbsp; &nbsp;&nbsp;
                <strong>Commits({props.projectId === undefined? getBranchesAtStart(props).length :getCommits(props)})</strong>
            </div>
        </div>
        <div className="description">
                <h5>Description:</h5>
                <p id="text">
                    {props.description === undefined || props.description === ''? projectsList[0].description : props.description}
                </p>
        </div>

        <div className="branch">
            <div className="branches">
                <h6> Branch </h6>
                <div className="add">
                    <Button variant="text" id="btn" onClick={handleClickOpen}>New Branch</Button>
                    
                        <Dialog open={open} onClose={handleClose} className="dialog">
                            <DialogTitle>Create a new branch</DialogTitle>
                            <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Branch name"
                                type="text"
                                fullWidth
                                variant="standard"
                                autoComplete='Project Name'
                            />
                            <label htmlFor="" id='addText'> Create from:</label>
                            <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle  id="dropdown-basic">
                                {props.projectId === undefined? getBranchesAtStart(props)[0]['name'] : getBranches(props)[0]['name']}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                {
                                    props.projectId === undefined? 
                                        getBranchesAtStart(props).map((branch, idx) =>(
                                            <Dropdown.Item href="#/action-1" key={idx}>{branch.name}</Dropdown.Item>
                                        ))
                                    :
                                        getBranches(props).map((branch) =>(
                                            <Dropdown.Item href="#/action-1">{branch.name}</Dropdown.Item>
                                        ))
                                }            
                                </Dropdown.Menu>
                            </Dropdown>
                            </DialogContent>
                            <DialogActions>
                    <Button onClick={handleClose} id='cancel'>Cancel</Button>
                    <Button onClick={ () => {

                                    var projectData = {

                                    }
                                
                                    localStorage.setItem('newProject', JSON.stringify(projectData))
                                    //const newProject = localStorage.getItem('newProject')
                                    console.log(projectsList);
                                    projectsList.push(projectData)
                                    //JSON.parse(projectData)
                                    //console.log(newProject['name'])
                                    console.log(projectsList);
                                    //saveJSON('src/lists.json', projectsList)
                                    console.log(projectsList);
                                    setOpen(false);

                                }} id='create'>         Create</Button>
                    </DialogActions>
                    </Dialog>
                    <Button variant="text" id="btn">New Commit</Button>
                </div>
            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    {props.mainBranch === undefined || props.mainBranch === ''? projectsList[0].defaultBranch['name'] : props.mainBranch}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                                    props.projectId === undefined? 
                                        getBranchesAtStart(props).map((branch, idx) =>(
                                            <Dropdown.Item href="#/action-1" key={idx}>{branch.name}</Dropdown.Item>
                                        ))
                                    :
                                        getBranches(props).map((branch, idx) =>(
                                            <Dropdown.Item href="#/action-1" key={idx}>{branch.name}</Dropdown.Item>
                                        ))
                                }       
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="show commit"></div>
    </div>
    )
}

export default DisplayBox