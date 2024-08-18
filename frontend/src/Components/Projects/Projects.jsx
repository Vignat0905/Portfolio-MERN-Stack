import React from 'react'
import './Projects.css'
import { AiOutlineProject } from 'react-icons/ai'
import { Button, Typography } from '@mui/material'
import { deleteProject, getUser } from '../../actions/user';
import { useDispatch } from 'react-redux';
import {FaTrash} from 'react-icons/fa'
import {BsEmojiSmile} from 'react-icons/bs'
import { Delete } from '@mui/icons-material';
export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAd = false,
    id,
}) => {
    const dispatch=useDispatch();

    const deleteHandler=async(id)=>{
        await dispatch(deleteProject(id));
        dispatch(getUser());
    }
    return (
        <>
            <a href={url} className='projectCard' target="black">
                <div>
                    <img src={projectImage} alt="Project" />
                    <Typography variant='h5'>
                        {projectTitle}
                    </Typography>

                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {
                isAd && (
                    <Button style={{ color: "brown" }} onClick={()=>deleteHandler(id)}>
                        <FaTrash/>
                    </Button>
                )
            }
        </>
    );
};
const Projects = ({projects}) => {
    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject />
            </Typography>

            <div className="projectsWrapper">
            {
            projects &&
            projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image && item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAd={false}
              />
            ))}
            </div>
            <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
                click on the image to show my projects..<BsEmojiSmile/>
            </Typography>

        </div>
    )
}

export default Projects
