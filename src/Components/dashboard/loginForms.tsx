// import { useState } from "react";
// import "../css/loginform.css";
// import registerIcon from "../images/regicon.png";
// import getCookie from "../../csrf_token";
// import { useNavigate } from "react-router-dom";
// 
// // Login Form Component
// const LoginF = () => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();
// 
//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(e.target.value);
//   };
//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };
//   const clearForm = () => {
//     setUsername("");
//     setPassword("");
//   };
//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
// 
//     const csrftoken = getCookie("csrftoken");
//     // Basic validation
//     if (!username || !password) {
//       alert("Please enter both email and password!");
//       return;
//     }
// 
//     const formData = {
//       username,
//       password,
//     };
// 
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/login/", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRFToken": csrftoken ?? "",
//         },
//       });
// 
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.log("Error response:", errorData);
//         alert(`Error: ${errorData.message || "Invalid credentials"}`);
//         return;
//       }
// 
//       await response.json();
//       alert("Login successful!");
//       navigate("/home");
//       clearForm();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };
// 
//   return (
//     <div className="px-[30px] pt-[70px] pl-[10%]">
//       <p className="text-[28px] mb-[40px]">Welcome To Xittoo Food !!</p>
//       <div className="pl-[50px]">
//         {/* Email */}
//         <label htmlFor="email">
//           <div className="mt-[10px] flex flex-col gap-[10px]">
//             <p className="text-[18px]">Enter your Email:</p>
//             <input
//               type="email"
//               id="email"
//               value={username}
//               onChange={handleEmailChange}
//               className="pl-[10px] rounded-[5px] bg-[#FFFFFF] h-[40px] border-none w-[480px]"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//         </label>
// 
//         {/* Password */}
//         <label htmlFor="password">
//           <div className="mt-[10px] flex flex-col gap-[10px]">
//             <p className="text-[18px]">Password:</p>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               className="pl-[10px] rounded-[5px] bg-[#fff] h-[40px] border-none w-[480px]"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//         </label>
// 
//         <div className="mt-[25px] w-[480px] ml-[18%]">
//           <button
//             onClick={handleSubmit}
//             className="bg-[#4A0304] w-[202px] h-[40px] rounded-[3px] text-[#fff] text-[16px] border-none hover:w-[205px] hover:h-[43px] cursor-pointer transition-all duration-300"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// 
// // Register Form Component
// const RegisterForm = () => {
//   return (
//     <div className="px-[30px] pt-[70px] pl-[10%]">
//       <p className="text-[28px] mb-[40px]">Welcome To Xittoo Food !!</p>
//       <div className="pl-[50px]">
//         {/* Full Name */}
//         <label htmlFor="fullName">
//           <div className="mt-[40px] flex flex-col gap-[10px]">
//             <p className="text-[18px]">Enter your Full Name:</p>
//             <input
//               type="text"
//               id="fullName"
//               className="pl-[10px] rounded-[5px] bg-[#fff] h-[40px] border-none w-[480px]"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
//         </label>
// 
//         {/* Email */}
//         <label htmlFor="email">
//           <div className="mt-[10px] flex flex-col gap-[10px]">
//             <p className="text-[18px]">Enter your Username:</p>
//             <input
//               type="text"
//               id="text"
//               className="pl-[10px] rounded-[5px] bg-[#FFFFFF] h-[40px] border-none w-[480px]"
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//         </label>
// 
//         {/* Contact Number */}
//         <label htmlFor="contactNumber">
//           <div className="mt-[10px] flex flex-col gap-[10px]">
//             <p className="text-[18px]">Enter your Contact Number:</p>
//             <input
//               type="text"
//               id="contactNumber"
//               className="pl-[10px] rounded-[5px] bg-[#fff] h-[40px] border-none w-[480px]"
//               placeholder="Enter your contact number"
//               required
//             />
//           </div>
//         </label>
// 
//         {/* Password */}
//         <label htmlFor="password">
//           <div className="mt-[10px] flex flex-col gap-[10px]">
//             <p className="text-[18px]">Password:</p>
//             <input
//               type="password"
//               id="password"
//               className="pl-[10px] rounded-[5px] bg-[#fff] h-[40px] border-none w-[480px]"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//         </label>
// 
//         <div className="mt-[25px] w-[480px] ml-[18%]">
//           <button className="bg-[#4A0304] w-[202px] h-[40px] rounded-[3px] text-[#fff] text-[16px] border-none hover:w-[205px] hover:h-[43px] cursor-pointer transition-all duration-300">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// 
// // Main Component
// const LoginRegister = () => {
//   const [isRegister, setIsRegister] = useState(false);
//   const toggleForm = () => {
//     setIsRegister(!isRegister);
//   };
// 
//   return (
//     <div className="all-section">
//       <div className="flex text-[16px] justify-between p-[20px]">
//         <p>{isRegister ? "Register" : "Login"}</p>
//         <div onClick={toggleForm} className="cursor-pointer flex gap-[7px] justify-end">
//           <p>{isRegister ? "Login here" : "Register here"}</p>
//           <img src={registerIcon} className="h-[20px]" alt="Toggle Icon" />
//         </div>
//       </div>
//       {isRegister ? <RegisterForm /> : <LoginF />}
//     </div>
//   );
// };
// 
// export default LoginRegister;
