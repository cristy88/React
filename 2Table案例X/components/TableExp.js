import React from 'react'
import { Space, Switch, Table } from 'antd'
import tableData from '../data/changeData'

const TableExp = () => {
  console.log(tableData.resData)
  console.log(tableData.columns)
  return (
    <div className='box'>
      <Table rowKey = '3NAME' columns={tableData.columns} dataSource={tableData.resData} bordered pagination={false} />
    </div>
  )
}

export default TableExp
