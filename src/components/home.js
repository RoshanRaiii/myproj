/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Moment from 'react-moment';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Button,Tooltip, Popconfirm, Space,Card,Badge} from 'antd';
import {DeleteOutlined } from '@ant-design/icons';
import AddComponent from './Add';
import EditComponent from './editform';
import SearchBox from './SearchBox';
//Read component for todo list
const home = () => {
  
  const  todos = useSelector((state)=>state);
  const dispatch = useDispatch();




  const confirm = (id) => {
    dispatch({type: 'DeleteTodo',payload:id});  
    toast.success('task deleted successfully');
  };
  
  const cancel = (e) => {
    console.log(e);
  };
 //handleClear is used for deleting all the todo
  const handleClear=()=>{
    dispatch({type:'DeleteAll'});
    toast.success('all task deleted successfully');
  }
  return (
    <div className='container'>
        <div className='container-fluid'>
            <div className='row p-5 '>
              <div className='col'><SearchBox/></div>
            <div className='col d-flex justify-content-end'><Space>
            
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
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <Badge.Ribbon text={<Moment format="LL">{todo.date}</Moment>} color="red">
                  
                  <Card key={todo.id} title={todo.title} size="small">
                    <div className='row'>
                    <div className='col-8'>
                    <small>{todo.description}</small>
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
                          <h1>no todo</h1>
                        </div>
              )}
           </div>
        </div>
        </div>
    </div>
  )
}

export default home;