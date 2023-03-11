import { Box } from "@chakra-ui/react";
import React from "react";

import {BsPercent,BsGraphUpArrow,BsCalendarDate,BsDownload} from 'react-icons/bs'
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,

} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsMenuUp } from "react-icons/bs";

import "/home/harshit/Desktop/React/attendence-management/src/style/Header.css";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={"100%"}>
      <Box className="header">
        <div className="sideBar">
          <Button zIndex={"overlay"} onClick={onOpen}>
            <BsMenuUp />
          </Button>

          {/* Drawer:the window that pop up when button clicked */}

          <Drawer  id="drawer" PaperProps={{
           
          }}   isOpen={isOpen}  onClose={onClose} placement={"left"} w={"full"} size={['full','md']} >
            <DrawerOverlay/>
            <DrawerContent  id="drawerContent">
              <DrawerCloseButton />

              {/* Heading  */}
            <div className="headingDiv">
              <DrawerHeader w={'100%'} textAlign={'center'} alignItems={"center"}  fontSize={'3xl'}>Attendance Menu</DrawerHeader>
              </div>
              <div className="buttonDiv" >
              <DrawerBody colorScheme={'blue'}>

                {/* VStack(verical)-> display flex ,iteam-center   */}
                <VStack gap={'7'} marginRight={'5'}>
                  {/* for  button with thier respective links */}
               
                  <Button
                    variant={"ghost"}
                    fontSize={'2xl'}
                    onClick={onClose}
                  >
                    <BsCalendarDate className="side_menu_icon"/><Link to={"/Calendar"}> Calendar</Link>
                  </Button>

                  <Button          
                    variant={"ghost"}
                    fontSize={'2xl'}
                    onClick={onClose}
                  >
                    <BsPercent className="side_menu_icon"/><Link to={"/AttPercent"}>Attendance Percentage</Link>
                  </Button>

                  <Button
                    variant={"ghost"}
                    fontSize={'2xl'}
                    onClick={onClose}
                  >
                    <BsGraphUpArrow className="side_menu_icon"/><Link to={"/AttendanceFilter"}>Student Attendance Filters</Link>
                  </Button>

                  <Button
                    variant={"ghost"}
                    fontSize={'2xl'}
                    onClick={onClose}
                  >
                    <BsDownload className="side_menu_icon"/><Link to={"/Data"}>Download Data</Link>
                  </Button>
                 
                </VStack>
              
              </DrawerBody>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="headerText">
          <p>ATTENDANCE : 6SEM : CSE</p>
        </div>
      </Box>
    </Box>
  );
}
