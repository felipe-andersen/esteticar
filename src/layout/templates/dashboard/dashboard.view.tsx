
'use client'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { result } from '@/layout/organisms';
import { X, Bell, MessageSquareIcon, MoveRight, EllipsisVertical} from "lucide-react";
import VerticalMenu from '@/layout/organisms/side-bar';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { TopBar } from '@/layout/organisms/header';
import { Main } from './main.view';


const vagas = ['1', "2", "3", "4", "5", "6", "7"]

export default function Dashboard() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div className='relative flex h-full box-border  bg-zinc-300 overflow-hidden '>
            <TopBar pageName='CRM'/>

            {/* <VerticalMenu/> */}
            <Main/>
        </div>
    );
}
  