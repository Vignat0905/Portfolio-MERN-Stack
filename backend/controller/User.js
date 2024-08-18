// import { User } from '../model/User.js'
// import jwt from 'jsonwebtoken';
// import { sendMail } from '../middlewares/sendMail.js';
// import cloudinary from "cloudinary"
// export const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email, password });
//         if (!user) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid email or password",
//             });
//         }
//         const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
//         res.status(200).cookie("token", token, {
//             expires: new Date(Date.now() + 432000000),
//             httpOnly: true,
//         }).json({
//             success: true,
//             message: "Logged in Successfully",
//         })
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: error.message,
//         });
//     }
// }
// export const logout = async (req, res) => {
//     try {
//         res.status(200).cookie("token", null, {
//             expires: new Date(Date.now()),
//             httpOnly: true,
//         }).json({
//             success: true,
//             message: "Logged Out Successfully",
//         })
//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             message: error.message,
//         });
//     }
// }
// export const getUser = async (req, res) => {
//     try {
//         const user = await User.findOne().select("-password -email");
//         res.status(200).json({
//             success: true,
//             user,
//         })
//     } catch (error) {
//         return res.status(400).json({
//             status: false,
//             message: error.message,
//         })
//     }
// }
// export const myProfile = async (req, res) => {
//     try {
//         const user = await User.findById(req.user._id);
//         res.status(200).json({
//             success: true,
//             user,
//         })
//     } catch (error) {
//         return res.status(400).json({
//             status: false,
//             message: error.message,
//         })
//     }
// }

// export const contact = async (req, res) => {
//     try {
//       const { name, email, message } = req.body;
  
//       const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}.`;
  
//       await sendMail(userMessage);
  
//       return res.status(200).json({
//         success: true,
//         message: "Message Sent Successfully",
//       });
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };

// export const updateUser = async (req, res) => {
//     try {
//         const user = await User.findById(req.user._id);

//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         const { name, email, password, skills, about } = req.body;

//         if (name) user.name = name;
//         if (email) user.email = email;
//         if (password) user.password = password;

//         if (skills) {
//             for (let i = 1; i <= 6; i++) {
//                 const imageKey = `image${i}`;
//                 if (skills[imageKey]) {
//                     const currentImage = user.skills[imageKey];
//                     if (currentImage && currentImage.public_id) {
//                         console.log(`Destroying image: ${currentImage.public_id}`);
//                         await cloudinary.v2.uploader.destroy(currentImage.public_id);
//                     }
//                     const myCloud = await cloudinary.v2.uploader.upload(skills[imageKey], {
//                         folder: "portfolio",
//                     });
//                     user.skills[imageKey] = {
//                         public_id: myCloud.public_id,
//                         url: myCloud.secure_url,
//                     };
//                     console.log(`Uploaded image: ${myCloud.public_id}`);
//                 }
//             }
//         }

//         if (about) {
//             if (about.name) user.about.name = about.name;
//             if (about.title) user.about.title = about.title;
//             if (about.subtitle) user.about.subtitle = about.subtitle;
//             if (about.description) user.about.description = about.description;
//             if (about.quote) user.about.quote = about.quote;
//             if (typeof about.avatar === "string") {
//                 if (user.about.avatar && user.about.avatar.public_id) {
//                     console.log(`Destroying avatar: ${user.about.avatar.public_id}`);
//                     await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
//                 }
//                 const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
//                     folder: "portfolio",
//                 });
//                 user.about.avatar = {
//                     public_id: myCloud.public_id,
//                     url: myCloud.secure_url,
//                 };
//                 console.log(`Uploaded avatar: ${myCloud.public_id}`);
//             }
//         }

//         await user.save();

//         res.status(200).json({
//             success: true,
//             message: "User Updated Successfully",
//         });
//     } catch (error) {
//         console.error("Error during update:", error);
//         return res.status(400).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };


// export const addTimeline = async (req, res) => {
//     try {
//         const { title, description, date } = req.body;
//         const user = await User.findById(req.user._id);
//         user.timeline.unshift({
//             title,
//             description,
//             date,
//         })
//         await user.save();
//         res.status(200).json({
//             success: true,
//             message: "Added to timeline",
//         })
//     } catch (error) {
//         return res.status(400).json({
//             status: false,
//             message: error.message,
//         });
//     };
// }
// export const addProject = async (req, res) => {
//     try {
//         const { url, title, image, description, techStack } = req.body;
//         const user = await User.findById(req.user._id);
       
//         const myCloud = await cloudinary.v2.uploader.upload(image, {
//             folder: "portfolio",
//         });
//         user.projects.unshift({
//             url,
//             title,
            
//             image:{
//                 public_id:myCloud.public_id,
//                 url:myCloud.secure_url,
//             },
//             description,
//             techStack,
//         })
//         await user.save();
//         res.status(200).json({
//             success: true,
//             message: "Added to Projects",
//         })
//     } catch (error) {
//         return res.status(400).json({
//             status: false,
//             message: error.message,
//         });
//     };
// }
// export const deleteTimeline = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findById(req.user._id);
//         user.timeline = user.timeline.filter((item) => item._id != id);
//         await user.save();
//         res.status(200).json({
//             success: true,
//             message: "Deleted from timeline",
//         })
//     } catch (error) {
//         return res.status(400).json({
//             status: false,
//             message: error.message,
//         });
//     };
// }
// export const deleteProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findById(req.user._id);
//         const projectDel = user.projects.find((item) => item._id == id);
//         await cloudinary.v2.uploader.destroy(projectDel.image.public_id);
//         user.projects = user.projects.filter((item) => item._id != id);
//         await user.save();
//         res.status(200).json({
//             success: true,
//             message: "Deleted from Projects",
//         })
//     } catch (error) {
//         return res.status(400).json({
//             status: false,
//             message: error.message,
//         });
//     };
// }


// controllers/User.js
import { User } from '../model/User.js';
import jwt from 'jsonwebtoken';
import { sendMail } from '../middlewares/sendMail.js';
import cloudinary from "cloudinary";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(200).cookie("token", token, {
            expires: new Date(Date.now() + 432000000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // Adjust sameSite attribute
        }).json({
            success: true,
            message: "Logged in Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const logout = async (req, res) => {
    try {
        res.status(200).cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        }).json({
            success: true,
            message: "Logged Out Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne().select("-password -email");
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const myProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}.`;
        await sendMail(userMessage);
        return res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const { name, email, password, skills, about } = req.body;
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        if (skills) {
            for (let i = 1; i <= 6; i++) {
                const imageKey = `image${i}`;
                if (skills[imageKey]) {
                    const currentImage = user.skills[imageKey];
                    if (currentImage && currentImage.public_id) {
                        await cloudinary.v2.uploader.destroy(currentImage.public_id);
                    }
                    const myCloud = await cloudinary.v2.uploader.upload(skills[imageKey], {
                        folder: "portfolio",
                    });
                    user.skills[imageKey] = {
                        public_id: myCloud.public_id,
                        url: myCloud.secure_url,
                    };
                }
            }
        }

        if (about) {
            if (about.name) user.about.name = about.name;
            if (about.title) user.about.title = about.title;
            if (about.subtitle) user.about.subtitle = about.subtitle;
            if (about.description) user.about.description = about.description;
            if (about.quote) user.about.quote = about.quote;
            if (typeof about.avatar === "string") {
                if (user.about.avatar && user.about.avatar.public_id) {
                    await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
                }
                const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
                    folder: "portfolio",
                });
                user.about.avatar = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                };
            }
        }

        await user.save();

        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const addTimeline = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const user = await User.findById(req.user._id);
        user.timeline.unshift({
            title,
            description,
            date,
        });
        await user.save();
        res.status(200).json({
            success: true,
            message: "Added to timeline",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const addProject = async (req, res) => {
    try {
        const { url, title, image, description, techStack } = req.body;
        const user = await User.findById(req.user._id);

        const myCloud = await cloudinary.v2.uploader.upload(image, {
            folder: "portfolio",
        });
        user.projects.unshift({
            url,
            title,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            },
            description,
            techStack,
        });
        await user.save();
        res.status(200).json({
            success: true,
            message: "Added to Projects",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteTimeline = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);
        user.timeline = user.timeline.filter((item) => item._id != id);
        await user.save();
        res.status(200).json({
            success: true,
            message: "Deleted from timeline",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user._id);
        const projectDel = user.projects.find((item) => item._id == id);
        await cloudinary.v2.uploader.destroy(projectDel.image.public_id);
        user.projects = user.projects.filter((item) => item._id != id);
        await user.save();
        res.status(200).json({
            success: true,
            message: "Deleted from Projects",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


