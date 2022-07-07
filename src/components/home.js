/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Moment from 'react-moment';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Button,Tooltip, Popconfirm, Space} from 'antd';
import {DeleteOutlined } from '@ant-design/icons';
import AddComponent from './Add';
import EditComponent from './editform';
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
            <div className='d-flex justify-content-end p-5'>
            <Space>
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
            <div className='d-flex justify-content-center'>
            <table className="table table-hover text-center">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">title</th>
                <th scope="col">description</th>
                <th scope='col'>date</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <tbody key={todo.id}>

                  <tr >
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td><Moment format="LL">{todo.date}</Moment></td>
                    <td align='center'> 
                    <td>
              
                    <EditComponent ID={todo.id} />
              
                    </td>
                    <td>
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
                    </td>
                    
                    </td>
                  </tr>
                   </tbody>
                ))
              ) : (
                    <tbody>
                      <tr>
                        <td>No</td>
                        <td>Todo</td>
                        <td>left</td>
                      </tr>    
                    </tbody>
              )}
           
          </table>
            </div>
        </div>
    </div>
  )
}

export default home;