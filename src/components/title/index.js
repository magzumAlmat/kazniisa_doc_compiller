import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, Collapse, Card, CardBody
  } from "reactstrap";
  import { useSelector, useDispatch } from "react-redux";
  import { useEffect, useState } from "react";
  import { authorize } from "@/store/slices/authSlice";
  import 'froala-editor/css/froala_style.min.css';
  import 'froala-editor/css/froala_editor.pkgd.min.css';
  import FroalaEditorComponent from 'react-froala-wysiwyg';

export default function Title() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showH1, setShowH1] = useState(false);
    const [titleCreate, setTitleCreate] = useState(false);
    const [showComponent, setShowComponent] = useState(true);

    const [arr, setArr] = useState([<Title/>, <Title/>]);

    const handleClickCreate = () => {
        setTitleCreate(true);
    };

    useEffect(() => {
        return () => {
          console.log('Компонент удален');
        };
      }, []);

      const handleComponentClick = () => {
        setShowComponent(false);
      };

    const handleClick = (e) => {
        setIsOpen(false)
        console.log('handleclick start');
        e.stopPropagation();
    };
    const handleClickButtonPlus = (e) => {
        console.log('plus button start')
        setShowH1(true);
    }

    const AccordionExample = () => {
      const [isOpen, setIsOpen] = useState(false);
    }
      const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
      return (
        <>
        {titleCreate ? (
            <div className="ms-5">
            <Button style={{ width: '100%' }} color="primary" onClick={toggleAccordion}>
                <div className="d-flex justify-content-between">
                    <div className="justify-content-start">
                        3.1.1 <input onClick={handleClick} type="text" />
                    </div>

                    <div className="justify-content-end">
                        <button onClick={handleClickButtonPlus} className="btn btn-info me-5">+</button>
                        <button className="btn btn-secondary">IN PROGRESS</button>
                    </div>
                </div>
            </Button>
            <Collapse isOpen={isOpen}>
                <FroalaEditorComponent tag="textarea" />
            </Collapse>
            

            {showH1 && <Title></Title>}
        </div>
        ):(
            <>
            <button onClick={handleClickCreate} className="btn btn-info me-5">+</button>
            </>
        )}
        </>
        
        
    );
  }