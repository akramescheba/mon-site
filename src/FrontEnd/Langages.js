import React from 'react'
import django from '../asset/django.png';
import react from '../asset/react.png';
import python from '../asset/python.png';
import html from '../asset/html.png';
import css from '../asset/css.png';
import javascript from '../asset/javascript.png';
import bootstrap from '../asset/bootstrap.png';

import docker from '../asset/docker.png';
import kubernetes from '../asset/kubernetes.png';
import linux from '../asset/linux.png';
import mongodb from '../asset/mongodb.png';
import postgresql from '../asset/postgresql.png';
import ubuntu from '../asset/ubuntu.png';
import wordpress from '../asset/wordpress.png';
import vscode from '../asset/vscode.png';

import git from '../asset/git.png';
import github from '../asset/github.png';

import mysql from '../asset/mysql.png';


import '../Styles/Langages.css'

const Langages = () => {
  return (
    <div className='langages'>
   

          <img src={javascript} className='javascript' alt='javascript'/>
          <img src={react}  className='react'alt='react'/>
          <img src={python} className='python' alt='python'/>
          <img src={django} className='django' alt='django'/>
          <img src={html} className='html'alt='html'/>
          <img src={css} className='css' alt='css'/>
          <img src={bootstrap}  className='bootstrap' alt='bootstrap'/>
          <img src={wordpress}  className='wordpress' alt='wordpress'/>
          <img src={vscode} className='vscode'alt='vscode'/>
          <img src={github} className='github' alt='github'/>
          <img src={docker} className='docker' alt='docker'/>
          <img src={git} className='git' alt='git'/>
          <img src={kubernetes} className='kubernetes' alt='kubernetes'/>
          <img src={mongodb} className='mongodb' alt='mongodb'/>
          <img src={postgresql} className='postgresql' alt='postgresql'/>
          <img src={mysql} className='mysql' alt='mysql'/>
          <img src={linux} className='linux' alt='linux'/>
          <img src={ubuntu} className='ubuntu' alt='ubuntu'/>
    
        </div >
        
       
   
    
  )
}
export default Langages
