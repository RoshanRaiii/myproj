/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Button, Tooltip, Popconfirm, Space } from 'antd';
import { EditOutlined ,DeleteOutlined } from '@ant-design/icons';

//Read component for todo list
const home = () => {
  
  const  todo = useSelector((state)=>state);
  const dispatch = useDispatch();

  const confirm = (id) => {
    dispatch({type: 'DeleteTodo',payload:id});  
    toast.success('task deleted successfully');
  };
  
  const cancel = (e) => {
    console.log(e);
  };
  
 //handleClear is used for deleting all todo
  const handleClear=()=>{
    dispatch({type:'DeleteAll'});
    toast.success('all task deleted successfully');
  }
  return (
    <div className='container'>
        <div className='container-fluid'>
            <div className='d-flex justify-content-end p-5'>
            <Space>
            <Link to="/add">
              <Button type='primary'>
               Add Todo
                </Button>
                </Link>
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
                <th scope="col">action</th>
              </tr>
            </thead>
            
              {todo.length > 0 ? (
                todo.map((todo) => (
                  <tbody>
                  <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>
                    <Link to={`/edit/${todo.id}`}>
                    <Tooltip title={todo.title}>
                     <Button shape="circle" icon={<EditOutlined />} />
                     </Tooltip>
                      </Link>{'   '}
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