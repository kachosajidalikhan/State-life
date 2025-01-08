import {HelpCircle, LogOut, MessageCircle, User, ShoppingBag, BookmarkIcon } from "lucide-react";
import Profileimage from "../assets/images/profileimage.jpg"
import React, { useState } from 'react';
export default function ProfileSidebar({ userType = 'buyer',}) {

  return (
    <div className="w-60 bg-[#B6CAE6] min-h-screen flex flex-col rounded-r-xl">
      {/* Profile Section */}
      <div className="p-4 flex items-center gap-3">
        <div className=" w-[4rem] h-[4rem] relative overflow-hidden rounded-full">
          <img
            src={Profileimage}
            alt="Profile"
          />
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-900">Muhammad Aun</h2>
          <p className="text-xs text-gray-600">{userType === "seller" ? "Seller" : "Buyer"}</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="space-y-1 font-bold">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
              <User className="h-4 w-4" />
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chats
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
              <HelpCircle className="h-4 w-4" />
              FAQ's
            </a>
          </li>
         
          {userType === 'seller' ?(
            <>

            <li>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
            <ShoppingBag className="h-4 w-4" />
            Previous Sell
          </a>
        </li>
        <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
          >
          <ShoppingBag className="h-4 w-4" />
          Ad
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
          >
          <ShoppingBag className="h-4 w-4" />
          Plans
        </a>
      </li>
            </>
        ):(
          <>
           <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Previous Buy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
              <BookmarkIcon className="h-4 w-4" />
              Saved
            </a>
          </li>
          
          </>

        )
          }

          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-white"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </a>
          </li>
        </ul>
      </nav>

      {/* Support Section */}
      <div className="p-4 w-full">
        <a
          href="#"
          className="flex justify-center items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <div className="bg-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
          <path d="M21 16v2a4 4 0 0 1-4 4h-5"/>
          </svg>
          </div>
          <span className="text-2xl font-black">Support</span>
        </a>
      </div>
    </div>
  );
}
