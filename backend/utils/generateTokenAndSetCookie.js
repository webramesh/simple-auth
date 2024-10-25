import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (res , userID) => {
    const token = jwt.sign({userID }, process.env.JWT_SECRET,{
        expiresIn: '7d',
    })
    res.cookie('token', token, {
        httpOnly: true, //prevent from xsh attack
        secure:process.env.Node_ENV === 'production',
        sameSite: 'strict', //prevent csrf
        maxAge: 7 * 60 * 60 * 1000,
    });

    return token;
}