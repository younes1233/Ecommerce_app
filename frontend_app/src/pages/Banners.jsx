import React, {useState} from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import {Header} from '../components'

const Banners = () => {
    
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Products" category="Page" /> 

      <GridComponent 
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting = {true} 
        toolbar={['Delete', 'Add']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          allowAdding:true,
        }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item,index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        
        </ColumnsDirective>
        <Inject services={[Page, Filter, Edit, Sort, Toolbar, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Banners