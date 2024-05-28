
'use client'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { result } from '@/components/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical} from "lucide-react";
import VerticalMenu from '@/components/organisms/VerticalMenu';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { TopBar } from '@/components/organisms/topBar';
import { Main } from './main';




const vagas = ['1', "2", "3", "4", "5", "6", "7"]


export default function Home() {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (

    <div className='flex h-full box-border  bg-zinc-300  '>

        <TopBar pageName='CRM'/>
 
        <VerticalMenu/>

        <Main/>


        
        
        

    </div>

    );
}
  