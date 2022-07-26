import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Button, Form, Input , Modal} from 'antd';



const Add = () => {
    
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title,setTitle] = useState('');
  const [description, setDescription]= useState('');
  const [date, setDate]= useState('');
const  todo = useSelector((state)=>state);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {    
    if (!title || !description || !date) {
      return toast.error("Please fill in all fields!!");
    }
   
  const data = {
         id : todo.length+1,
         title,
         description,
         date,
        };
        dispatch({type:'AddTodo',payload:data});
        toast.success("successfully added");
        setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div><Button type='primary' onClick={showModal}>
    Add</Button>
     <Modal title="Add ToDo" visible={isModalVisible} okText={"Add"}  onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
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
name="date"
>
<Input  type="date" value={date} placeholder="Date" onChange={(e)=> setDate(e.target.value)}/>
</Form.Item>
</Form>
     </Modal>
     </div>
  )
}

export default Add;