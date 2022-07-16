import React from 'react'
import "./Header.css"
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi"
import { BiChevronDown, } from "react-icons/bi"
import { FiShoppingCart } from "react-icons/fi"
const Header = () => {

    return (
        <header>
            <div className="header__logo">
                <img src="assets/logo.svg" alt="" />
            </div>
            <div className="header__location">
                <HiOutlineLocationMarker />
                <div className="header__locationText">
                    <p>Deliver To</p>
                    <h3>Uzbekistan</h3>
                </div>
                <div className="header__searchContainer">
                    <select name="e" id="">
                        <option value="">All</option>
                        <option value="">Arts & Crafts</option>
                    </select>
                    <input type="text" />
                    <div className="btn">
                        <HiSearch />
                    </div>
                </div>

                <div className="header__language">
                    <img src="assets/usaflag.png" alt="" />
                    <BiChevronDown />
                </div>

                <div className="header__account">
                    <div className="header__accountText">
                        <p>Hello, Sign in</p>
                        <h3>Account & Lists</h3>
                    </div>
                    <BiChevronDown />
                </div>
                <div className="header__orders">
                    <p>Returns</p>
                    <h3>& Orders</h3>
                </div>
                <div className="header__cart">
                    <FiShoppingCart />
                    <h3>Cart</h3>
                </div>
            </div>
        </header>
    )
}

export default Header