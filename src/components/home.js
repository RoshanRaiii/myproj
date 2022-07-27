/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Moment from 'react-moment';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {Input, Button,Empty,Tooltip, Popconfirm, Space,Card,Badge} from 'antd';
import {DeleteOutlined,SearchOutlined} from '@ant-design/icons';
import AddComponent from './Add';
import EditComponent from './editform';
import {DeleteAll,DeleteTodo } from '../reducer/todoReducer';

//Read component for todo list
const home = () => {
 debugger; 
  const  todos = useSelector((state)=>(state.TODO));
  const dispatch = useDispatch();
  const [search , setsearch]=useState("");


  const confirm = (id) => {
    dispatch(DeleteTodo(id));  
    toast.success('task deleted successfully');
  };
  
  const cancel = (e) => {
    console.log(e);
  };
 //handleClear is used for deleting all the todo
  const handleClear=()=>{
    dispatch(DeleteAll());
    toast.success('all task deleted successfully');
  }
  return (
    <div className='container'>
        <div className='container-fluid'>
            <div className='row p-5 '>
              <div className='col d-flex justify-content-end'><Input className='w-50' type="text" placeholder='search....' suffix={<SearchOutlined />} onChange={(e)=>{setsearch(e.target.value);}} />
              </div>
            <div className='col d-flex justify-content-center'><Space>
            
            <AddComponent />
                <Popconfirm
                    title="Are you sure to delete all task?"
                    onConfirm={handleClear}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                     >
                <Button type='default'>
                  clear
                </Button>
                </Popconfirm>
                
                </Space>
           </div>
             </div>
          
             <div className='d-flex justify-content-center'>
              <div className='col-8'>
             <Space
             direction="vertical"
             size="small"
             style={{
              display: 'flex',
             }}

             >

             
             
              {todos.length > 0 ? (
                // eslint-disable-next-line array-callback-return
                todos.filter((todo)=>{
                  if(search === " "){
                    return todo
                  }
                  else if(todo.title.toLowerCase().includes(search.toLowerCase())){
                      return todo
                  }
                  }).map((todo) => (
                  <Badge.Ribbon key={todo.id} text={<Moment format="MMM,DD YYYY">{todo.date}</Moment>} color="#FF0063">
                  <Card  title={todo.title} style={{borderColor:'#66BFBF'}} bodyStyle={{backgroundColor:'#FFFFFF',color:'#377D71'}} headStyle={{ backgroundColor:'#66BFBF',color:'#FFFFFF'}} size="small">
                    <div className='row'>
                    <div className='col-8'>
                    <small><b>{todo.description}</b></small>
                    </div>
                    <div className='col-4 d-flex justify-content-end'>
                    <Space>
                    <EditComponent ID={todo.id} />
                    <Tooltip>
                     <Popconfirm
                             title="Are you sure to delete this task?"
                             onConfirm={()=>confirm(todo.id)}
                             onCancel={cancel}
                             okText="Yes"
                             cancelText="No" >
                    <Button shape="circle" icon={<DeleteOutlined />} />
                    </Popconfirm> 
                     </Tooltip>
                     </Space>
                     </div>
                     </div>
                  </Card>
                </Badge.Ribbon>
                
                ))
              ) : (
                    
                    
                        <div className='col d-flex justify-content-center'>
                         <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </div>
              )}
        </Space>
        </div>
        </div>
        </div>
    </div>
  )
}

export default home;