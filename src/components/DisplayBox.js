import {FiInfo, FiEdit2} from 'react-icons/fi';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import lists from '../lists.json';



function DisplayBox(props) {
  return (
    <div className='displayBox'>
        <div className="head">
            <div className="projectname">
                <h3>{props.name === undefined? lists[0].name : props.name} </h3>
                <button type="button"> <FiEdit2 /> </button>
            </div>
            <div className="info">
                <div className="inficon"><FiInfo /> info:</div> &nbsp;&nbsp; &nbsp;&nbsp;
                <strong>Branches()</strong> &nbsp;&nbsp; &nbsp;&nbsp;
                <strong>Commits()</strong>
            </div>
        </div>
        <div className="description">
                <h5>Description:</h5>
                <p id="text">
                    {props.description === undefined? lists[0].description : props.description}
                </p>
        </div>

        <div className="branch">
            <div className="branches">
                <h6> Branch </h6>
                <div className="add">
                    <Button variant="text" id="btn">New Branch</Button>
                    <Button variant="text" id="btn">New Commit</Button>
                </div>
            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    {props.mainBranch === undefined? lists[0].defaultBranch['@id'] : props.mainBranch}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                        {props.mainBranch === undefined? lists[0].defaultBranch['@id'] 
                                                        : props.mainBranch}
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="show commit"></div>
    </div>
  )
}

export default DisplayBox