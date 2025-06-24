import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token valid for 1 day
  });

  // Set the token in a cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side access to the cookie
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "Strict", // Helps prevent CSRF attacks
    maxAge: 24 * 60 * 60 * 1000, // Cookie valid for 1 day
  });
  return token;
};
