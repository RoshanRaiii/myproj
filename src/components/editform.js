import React from 'react';
import {Link ,useParams} from 'react-router-dom';
import { Form, Input, Button } from 'antd';
const editform = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id}= useParams();
  return (
    <div className='container col'>
    <br/>
    <div className='justify-content-center row'>
    <h1>Edit ToDo {id}</h1>
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
      name="Title"
      rules={[
        {
          required: true,
          message: 'Please the title!',
        },
      ]}
    >
      <Input  placeholder='Title' size='lg'/>
    </Form.Item>

    <Form.Item
      name="description"
      rules={[
        {
          required: true,
          message: 'Please description!',
        },
      ]}
    >
      <Input placeholder='Description'  size='lg'/>
    </Form.Item>

    <Form.Item
    >
      <Button type="primary" value="add todo" htmlType="submit">
        Update
      </Button>{' '}
      <Link to="/" >
        <Button>
        Cancel
      </Button>
      </Link>
    </Form.Item>
  </Form>
  </div>
  </div>
  )
}

export default editform;