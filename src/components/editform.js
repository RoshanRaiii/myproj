/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Form, Input, Button,Modal,Tooltip} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { toast } from 'react-hot-toast';


const editform = (props) => {
   
    const id= props.ID;
    
    const dispatch = useDispatch();    
    const todos = useSelector((state)=> (state));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title,setTitle] = useState('');
    const [description, setDescription]= useState('');
    const [date, setDate]= useState('');


    const currentTodo = todos.find((todo)=> todo.id ===parseInt(id));

    useEffect(()=>{
         setTitle(currentTodo.title);
         setDescription(currentTodo.description);
         setDate(currentTodo.date);
        }
        ,[currentTodo]);

        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = (e) => {    
          if (!title || !description || !date) {
            return toast.error("Please fill in all fields!!");
          }
   
     const data = {
         id : parseInt(id),
         title,
         description,
         date,
        };
        dispatch({type:'UpdateTodo',payload:data});
        toast.success("successfully updated");
        
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };

    
    return (
<div>
<Tooltip title="edit">
     <Button shape="circle" icon={<EditOutlined />} onClick={showModal}/>
  </Tooltip>
                     <Modal title="Edit ToDo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
     
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

</Form>
</Modal>    
     </div>
  )
}


export default editform; 