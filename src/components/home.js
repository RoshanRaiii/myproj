import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from 'antd';
import { EditOutlined ,DeleteOutlined } from '@ant-design/icons';


const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const  todo = useSelector((state)=>state);
  console.log(todo);
  return (
    <div className='container'>
        <div className='container-fluid'>
            <div className='d-flex justify-content-end p-5'>
            <Link to="/add">
              <Button type='primary'>
               Add Todo
                </Button>
                </Link>
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
            <tbody>
              {todo.length > 0 ? (
                todo.map((todo, id) => (
                  <tr key={id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>
                    <Link to={`/edit/${todo.id}`}>
                    <Tooltip title={todo.title}>
                     <Button shape="circle" icon={<EditOutlined />} />
                     </Tooltip>
                      </Link>{'   '}
                    <Tooltip title={todo.title}>
                     <Button shape="circle" icon={<DeleteOutlined />} />
                     
                     </Tooltip>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No Todo</th>
                </tr>
              )}
            </tbody>
          </table>
            </div>
        </div>
    </div>
  )
}

export default home;