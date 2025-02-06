import React,{useEffect,useState} from 'react';
import logo from './images/logo.png';
import './navbar.css';

const Navbar = () => {
  
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/home"},
    { name: "Orders", path: "/order" },
    { name: "Account & Payments", path: "/A&P" },
    { name: "Delivery", path: "/delivery"},
  ];
  
  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location]);
  return (
    <div className='relative h-[60px] pt-[5px] w-full bg-[#FFFFFF]'>
      <div className='flex ml-[80px] gap-[100px] '>
        <div className='flex w-[400px]'>
          <img src={logo} alt="Logo" className="h-[50px] w-[50px]" />
          <p className='xittoofood text-[32px] pl-[12px] pt-[5px]'>XittooFood</p>
        </div>
        <div className='description text-[#473F40] w-[350px] items-center justify-center pl-[40px] pt-[15px]'>
          <p>"From our kitchen to your doorstep"</p>
        </div>
        <div className='flex w-[450px] gap-[70px] items-center justify-center'>
          <button className='AddRes h-[40px] w-[150px] text-[#473F40] text-[16px] font-bold bg-[#FFFFFF] border-none cursor-pointer'>Add Restaurant</button>
          <button className='h-[40px] w-[150px] bg-[#581818] text-[14px] text-[#fff] border-none cursor-pointer'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
