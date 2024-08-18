import { Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './AdminPanel.css'
import { MdTimeline } from 'react-icons/md'
import { AiOutlineProject } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, updateUser } from '../../actions/user.js'
import { toast } from 'react-toastify'

const AdminPanel = ({ user }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [about, setAbout] = useState(user.about);
    const [skills, setSkills] = useState({});
    const [aboutFileName, setAboutFileName] = useState('');
    const [skillFileNames, setSkillFileNames] = useState({});

    const { message: loginMessage } = useSelector((state) => state.login);
    const { loading, message, error } = useSelector((state) => state.update);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser(name, email, password, skills, about));
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    const handleAboutImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        if (file) {
            setAboutFileName(file.name);
            Reader.readAsDataURL(file);
        }
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAbout({ ...about, avatar: Reader.result });
            }
        }
    };

    const handleImages = (e, val) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        if (file) {
            setSkillFileNames({ ...skillFileNames, [val]: file.name });
            Reader.readAsDataURL(file);
        }
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setSkills({ ...skills, [`image${val}`]: Reader.result });
            }
        }
    }

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
            toast.success(loginMessage);
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
                        style={{ fontWeight: 500 }}
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="adminPanelInputs"
                    />
                    <input
                        style={{ fontWeight: 500 }}
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="adminPanelInputs"
                    />
                    <input
                        style={{ fontWeight: 500 }}
                        type="text"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="adminPanelInputs"
                    />
                    <div className="adminPanelSkills">
                        <div className="fileInputContainer">
                            <Typography>Skill1</Typography>
                            <input
                                type="file"
                                className='adminPanelFileUpload'
                                onChange={(e) => handleImages(e, 1)}
                                accept="image/*"
                            />
                            {skillFileNames[1] && <p className="fileName">{skillFileNames[1]}</p>}
                        </div>
                        <div className="fileInputContainer">
                            <Typography>Skill2</Typography>
                            <input
                                type="file"
                                className='adminPanelFileUpload'
                                onChange={(e) => handleImages(e, 2)}
                                accept="image/*"
                            />
                            {skillFileNames[2] && <p className="fileName">{skillFileNames[2]}</p>}
                        </div>
                        <div className="fileInputContainer">
                            <Typography>Skill3</Typography>
                            <input
                                type="file"
                                className='adminPanelFileUpload'
                                onChange={(e) => handleImages(e, 3)}
                                accept="image/*"
                            />
                            {skillFileNames[3] && <p className="fileName">{skillFileNames[3]}</p>}
                        </div>
                        <div className="fileInputContainer">
                            <Typography>Skill4</Typography>
                            <input
                                type="file"
                                className='adminPanelFileUpload'
                                onChange={(e) => handleImages(e, 4)}
                                accept="image/*"
                            />
                            {skillFileNames[4] && <p className="fileName">{skillFileNames[4]}</p>}
                        </div>
                        <div className="fileInputContainer">
                            <Typography>Skill5</Typography>
                            <input
                                type="file"
                                className='adminPanelFileUpload'
                                onChange={(e) => handleImages(e, 5)}
                                accept="image/*"
                            />
                            {skillFileNames[5] && <p className="fileName">{skillFileNames[5]}</p>}
                        </div>
                        <div className="fileInputContainer">
                            <Typography>Skill6</Typography>
                            <input
                                type="file"
                                className='adminPanelFileUpload'
                                onChange={(e) => handleImages(e, 6)}
                                accept="image/*"
                            />
                            {skillFileNames[6] && <p className="fileName">{skillFileNames[6]}</p>}
                        </div>
                    </div>
                    <div className="adminPanelAbout">
                        <fieldset>
                            <legend>About</legend>
                            <input
                                style={{ fontWeight: 500 }}
                                type="text"
                                placeholder='Name'
                                value={about.name}
                                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                style={{ fontWeight: 500 }}
                                type="text"
                                placeholder='Title'
                                value={about.title}
                                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                style={{ fontWeight: 500 }}
                                type="text"
                                placeholder='Subtitle'
                                value={about.subtitle}
                                onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                style={{ fontWeight: 500 }}
                                type="text"
                                placeholder='Description'
                                value={about.description}
                                onChange={(e) => setAbout({ ...about, description: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <input
                                style={{ fontWeight: 500 }}
                                type="text"
                                placeholder='Quote'
                                value={about.quote}
                                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                                className="adminPanelInputs"
                            />
                            <div className="fileInputContainer">
                                <input
                                    type="file"
                                    className='adminPanelFileUpload'
                                    placeholder='Choose Avatar'
                                    onChange={handleAboutImage}
                                    accept="image/*"
                                />
                                {aboutFileName && <p className="fileName">{aboutFileName}</p>}
                            </div>
                        </fieldset>
                    </div>
                    <Link to="/admin/timeline">
                        TIMELINE <MdTimeline />
                    </Link>
                    <Link to="/admin/project">
                        PROJECTS <AiOutlineProject />
                    </Link>
                    <Button type='submit' variant='contained' disabled={loading}>
                        Update
                    </Button>
                    <Button
                        variant='contained'
                        color='error'
                        style={{ display: "block", color: "red", margin: "4vmax auto" }}
                        onClick={logoutHandler}
                    >
                        Logout
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AdminPanel

