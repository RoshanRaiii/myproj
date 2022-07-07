/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link ,useParams, useNavigate} from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { toast } from 'react-hot-toast';


const editform = () => {
   
    const {id}= useParams();
    const todos = useSelector((state)=> (state));
    const [title, setTitle] = useState('');
    const [description, setDescription]= useState('');
    const [date, setDate]=useState('');


    const dispatch = useDispatch();
    const navigate =useNavigate();

    const currentTodo = todos.find((todo)=> todo.id ===parseInt(id));

    useEffect(()=>{
         setTitle(currentTodo.title);
         setDescription(currentTodo.description);
         setDate(currentTodo.date);
        }
        ,[currentTodo]);

    

const handleSubmit =(e)=>{
    if (!title || !description || !date) {
      return toast.error("Please fill in all fields!!");
    };
   
     const data = {
         id : parseInt(id),
         title,
         description,
         date,
        };
        dispatch({type:'UpdateTodo',payload:data});
        navigate('/');
        toast.success("successfully updated");
        
  };

    
    return (
    <div className='container col'>
        
                
            <br/>
    <div className='justify-content-center row'>
    <h1>Edit ToDo </h1>
    </div>
  <br/>
  <div className=' justify-content-center row w-50 '>
  { currentTodo ? (
    <>
  <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    autoComplete="off"
  >
    <Form.Item
      rules={[
        {
          required: true,
          message: 'Please the title!',
        },
      ]}
    >
      <Input  placeholder={title} value={title} onChange={e=> setTitle(e.target.value)} size='lg'/>
    </Form.Item>

    <Form.Item
      rules={[
        {
          message: 'Please description!',
        },
      ]}
    >
      <Input placeholder={description} value={description} onChange={(e)=>setDescription(e.target.value)} size='lg'/>
    </Form.Item>
    <Form.Item
      rules={[
        {
          message: 'Please date!',
        },
      ]}
    >
      <Input  type="date" value={date} placeholder="Date" onChange={(e)=> setDate(e.target.value)}/>
    </Form.Item>

    <Form.Item >
      <Button type="primary" value="update todo" onClick={handleSubmit}>
        Update
      </Button>{' '}
      <Link to="/" >
        <Button>
        Cancel
      </Button>
      </Link>
    </Form.Item>
  </Form>
  </>
  
    
        ):(
            <>
            {id}
            </>
        )}
  </div>  
  </div>
  )
}


export default editform; 