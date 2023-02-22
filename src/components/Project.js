import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project }) => {
  return (
  <div class="card">
    <img class="card__img" src={project.image} alt="" />
    <div style={{marginTop: '1rem'}}>
      <h5 class="card-title">{project.title}</h5>
      <a class="card-link" href={project.link} target="_blank" className='asdf'>
          <FontAwesomeIcon icon={ faUpRightFromSquare } size="2x" fixedWidth/>
      </a>
    </div>
  </div>
  )
}
export default Project;
