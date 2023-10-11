import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { navBarList } from "../content/Content";
import Container from "./Container";
import Flex from "./Flex";

// reacrt icon
import {
    AiOutlineSearch,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
    let [navbar, setnevbar] = useState(navBarList);
    return (
        <div className="w-full h-20 sticky  top-0 py-4 bg-[#F0F2EE] border-b border-gray-100">
            <Container>
                <Flex className="justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex gap-x-4">
                            {navbar.map((item) => (
                                <li className="text-base text-primary font-medium hover:text-red transition duration-100">
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Flex className="relative">
                            <input
                                className="py-3 px-5 rounded-full"
                                type="text"
                                placeholder="search for product"
                            />
                            <AiOutlineSearch className="absolute top-4 right-4 text-xl text-primary" />
                        </Flex>
                        <Flex className="text-xl gap-4 ">
                            <Link to="">
                                <FiUser />
                            </Link>
                            <Link to="">
                                <AiOutlineHeart />
                            </Link>
                            <Link to="">
                                <AiOutlineShoppingCart />
                            </Link>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Navbar;
