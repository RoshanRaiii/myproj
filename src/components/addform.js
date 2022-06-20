/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import toast from 'react-hot-toast';

import './addform.css';

const addform = () => {
  const [title,setTitle] = useState('');
  const [description, setDescription]= useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
const  todo = useSelector((state)=>state);
const dispatch = useDispatch();
const navigate =useNavigate();
  const handleSubmit =(e)=>{
    if (!title || !description) {
      return toast.error("Please fill in all fields!!");
    }
   
     const data = {
         id : todo[todo.length -1].id+1,
         title,
         description
        };
        console.log(data);
        dispatch({type:'AddTodo',payload:data});
        navigate('/');
        toast.success("successfully added");
        
  };
  

  return (
    <div className='container col'>
      <br/>
      <div className='justify-content-center row'>
      <h1>Add ToDo</h1>
      </div>
    <br/>
    <div className=' justify-content-center row w-50 '>
    <Form
    
      name="basic"
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        name="title"
      >
        <Input placeholder='Title' size='lg' value={title} onChange={e=> setTitle(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="description"
      >
        <Input placeholder='Description'  size='lg' value={description} onChange={e=> setDescription(e.target.value)}/>
      </Form.Item>

      <Form.Item
      >
        <Button type="primary"  value="add todo"  htmlType="submit" onClick={handleSubmit}>
          Submit
        </Button>{' '}
        <Link to="/" >
        <Button>
        cancel
      </Button>
      </Link>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default addform;