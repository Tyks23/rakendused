import {Button, Table} from "antd";

function renderActions({onEdit, onDelete}) {
  const handleEdit = (e, post) => {
    e.preventDefault();
    onEdit(post);
  }
  const handleDelete = (e, post) => {
    e.preventDefault();
    onDelete(post);
  }

  return (text, record) => (
    <>
      <Button onClick={(e) => handleEdit(e, record)}>Edit</Button>
      <Button onClick={(e) => handleDelete(e, record)}>Delete</Button>
    </>
  )
}

export function PostsTable({posts, onEdit, onDelete}) {
  const columns = [
    {title: 'Title', dataIndex: 'title', key: 'title'},
    {title: 'Text', dataIndex: 'text', key: 'text'},
    {title: 'Created at', dataIndex: 'createdAt', key: 'createdAt'},
    {title: 'Actions', key: 'actions', render: renderActions({onEdit, onDelete})}
  ];

  return (
    <Table
      columns={columns}
      dataSource={posts}
      pagination={false}/>
  );
}