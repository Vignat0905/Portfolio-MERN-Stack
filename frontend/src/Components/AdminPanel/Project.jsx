import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { addProject, getUser } from '../../actions/user';
import { BiArrowBack } from 'react-icons/bi'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { ProjectCard } from '../Projects/Projects';

const Project = () => {
  const dispatch = useDispatch();

  const { loading, message, error } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const [url, setUrl] = useState("");
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addProject(url, title, image, description, techStack));
    dispatch(getUser());
  }

  const handleImage = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();

    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
    if (loginMessage) {
      toString.success(loginMessage);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch, loginMessage])
  return (

    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant='h4'>
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1vmax" }}>N</p>

          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder='TechStack'
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder='Link'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="file"
            onChange={handleImage}
            className="adminPanelFileUpload"
            accept='image/*'
          />


          <Link to="/account">
            BACK <BiArrowBack />
          </Link>
          <Button type='submit' variant='contained' disabled={loading}>
            Add
          </Button>
        </form>
        <div className="adminPanelTimeline">
          {user &&
            user.projects &&
            user.projects.map((item) => (
              <ProjectCard
                id={item._id}
                key={item._id}
                url={item.url}
                projectImage={item.image && item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAd={true}
              />
            ))}
        </div>

      </div>
    </div>
  )
}

export default Project
