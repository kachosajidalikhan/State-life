import React, { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {files} from '../../../constants/index'


// Button Component
function Button({ variant, size, className, children, ...props }) {
    const baseStyles = "inline-flex items-center justify-center rounded";
    const variantStyles = {
        ghost: "bg-transparent",
        default: "bg-blue-600 text-white hover:bg-blue-700",
    };
    const sizeStyles = {
        icon: "p-2",
        default: "px-4 py-2",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

// DropdownMenu Component with forwarded ref
const DropdownMenu = React.forwardRef(({ children }, ref) => {
    return (
        <div className="relative" ref={ref}>
            {children}
        </div>
    );
});

// Dropdown Trigger
function DropdownMenuTrigger({ onClick, children }) {
    return (
        <div className="cursor-pointer flex items-center gap-2" onClick={onClick}>
            {children}
        </div>
    );
}

// Dropdown Content
function DropdownMenuContent({ align, children }) {
    const alignment = align === "end" ? "right-0" : "left-0";
    return (
        <div
            className={`absolute z-50 ${alignment} mt-2 w-48 rounded-md bg-white shadow-lg`}
        >
            {children}
        </div>
    );
}

// Dropdown Item
function DropdownMenuItemInfo({ children }) {
    const nav = useNavigate()
    return (
        <div onClick={()=>{nav('/profile-info')}} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            {children}
        </div>
    );
}
function DropdownMenuItemSwitch({ children }) {
    const nav = useNavigate()
    return (
        <div  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            {children}
        </div>
    );
}
function DropdownMenuItemLogout({ children }) {
    const nav = useNavigate()
    return (
        <div  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            {children}
        </div>
    );
}

// Avatar Component
function Avatar({ children }) {
    return (
        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200">
            {children}
        </div>
    );
}

function AvatarImage({ src, alt }) {
    return <img src={src} alt={alt} className="h-full w-full object-cover" />;
}

function AvatarFallback({ children }) {
    return (
        <div className="flex h-full w-full items-center justify-center text-sm font-medium text-gray-500">
            {children}
        </div>
    );
}

// Header Component
export function BuyerHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (<>
        <header className="bg-white w-full flex h-[120px] items-center justify-end px-4 lg:px-6">
            <div className="flex w-40 h-20 mb-6 items-center justify-start">
                <a href="/" className="font-bold text-3xl text-blue-600">
                    Logo
                </a>
            </div>
            <div className="bg-white w-[78.2vw] h-[120px] flex  items-center md:justify-between px-4 lg:px-6">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6 text-[#1E3FB4]" />
                    </Button>
                    <h1 className="text-xl font-semibold md:text-2xl hidden md:block">
                        Welcome Peter
                    </h1>
                </div>
                <DropdownMenu ref={dropdownRef}>
                    <DropdownMenuTrigger onClick={toggleDropdown}>
                        <Button variant="ghost" className="flex  items-center space-x-3">
                            <Avatar>
                                <AvatarImage src={files.profileimage} alt="Peter Parkur" />
                                <AvatarFallback>PP</AvatarFallback>
                            </Avatar>
                            <div className="hidden md:block">
                                <p className="font-medium text-black">Peter Parkur</p>
                                <p className="text-sm text-gray-500">Super Admin</p>
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    {isDropdownOpen && (
                        <DropdownMenuContent  align="end">
                            <DropdownMenuItemInfo>Profile Info</DropdownMenuItemInfo>
                            <DropdownMenuItemSwitch>Switch to buyer</DropdownMenuItemSwitch>
                            <DropdownMenuItemLogout><a href="/">Logout</a></DropdownMenuItemLogout>
                        </DropdownMenuContent>
                    )}
                </DropdownMenu>
            </div>
        </header>
  </>  );
}
