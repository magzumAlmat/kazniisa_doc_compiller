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
  import { Editor } from '@tinymce/tinymce-react';
  import React, { useRef } from 'react';

  import { templateReplaceValues, fields, newTemplate } from "../testdata";
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


      const editorRef = useRef(null);
      const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };

      const onChange=(e) =>{
        const content = e.target.getContent();
        console.log(content);
      }

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
                {/* <FroalaEditorComponent tag="textarea" /> */}
                <Editor
                    initialValue={newTemplate}
                    init={{
                    selector: "#tiny",
                    plugins: "link image code table noneditable template hr importcss",
                    menubar: " format table tools",
                    noneditable_noneditable_class: "mceNonEditable myClass",
                    toolbar:
                        "image undo redo | hr | bold italic | alignleft aligncenter alignright | template | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
                    noneditable_regexp: /{{([^}]*)}}/g,
                    height: 500,
                    template_replace_values: templateReplaceValues,
                    template_preview_replace_values: templateReplaceValues,
                    templates: fields,
                    contextmenu: "table",
                    branding: false
                    //skin_url: "/skins",
                    // skin: "TESTSKIN",
                    //content_css: "TESTSKIN"
                    }}
                    onChange={onChange}
                    //outputFormat='text'
                />
                <button onClick={log}>Log editor content</button>
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