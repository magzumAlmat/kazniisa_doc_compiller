"use client";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Collapse,
  Card,
  CardBody,
} from "reactstrap";
import Title from "@/components/title";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { authorize } from "@/store/slices/authSlice";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";
export default function Editor() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dispatch = useDispatch(user);
  // useEffect(()=>{

  //     console.log('Use effect сработал при рефреше страницы')
  //     const token=localStorage.getItem('token')
  //     // console.log('22pofile token',token)
  //     if(token){
  //         let decodedToken=jwtDecode(token)
  //         console.log('layoutPage=  decodedToken==',decodedToken)

  //         dispatch(authorize({token}))

  //     }
  //     else{
  //         localStorage.removeItem('token')
  //     }
  // },[])
  const handleClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdownOpen state
  };

  const AccordionExample = () => {
    const [isOpen, setIsOpen] = useState(false);
  };
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Title/>
    </>
  );
}
