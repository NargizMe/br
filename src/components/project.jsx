import React from 'react';
import {projectDataOne} from '../data/projects-data';
import {projectDataTwo} from '../data/projects-data';

function Project(){
    return (
    <div>
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>
        <div className="w3-row-padding">
        {
            projectDataOne.map((project) => {
                return <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">{project.title}</div>
                    <img src={project.img} alt="House" style={{width: '100%'}} />
                    </div>
                </div>
            })
        }
        </div>
        <div className="w3-row-padding">
        {
            projectDataTwo.map((project) => {
                return <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">{project.title}</div>
                    <img src={project.img} alt="House" style={{width: '99%'}} />
                    </div>
                </div>
            })
        }
        </div>
      </div>
    )
}

export {Project};