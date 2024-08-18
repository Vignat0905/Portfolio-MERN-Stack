// import {User} from '../model/User.js'
// import jwt from 'jsonwebtoken'

// export const isAuth =async(req,res,next)=>{
//     try{
//         const {token} = req.cookies;
//         if(!token)
//         {
//             return res.status(400).json({
//                 success:false,
//                 message:"Login to Access this Resources",
//             });
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user=await User.findById(decoded._id);
//         req.user=user;
//         next();
//     }catch(error){
//         return res.status(400).json({
//             success:false,
//             message:error.message,
//         });
//     }
// }


// middlewares/auth.js
import { User } from '../model/User.js';
import jwt from 'jsonwebtoken';

export const isAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        console.log(token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Login to Access this Resource",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select('-password');

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token. Please login again.",
        });
    }
};

