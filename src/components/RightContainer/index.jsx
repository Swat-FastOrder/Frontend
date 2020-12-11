import React, { useContext, useState, useEffect } from 'react'

import waiter from '../../assets/waiter.png'

/* Constants */
import { USER } from '../../utils/constants/itemsLocalStorage'

/* Context */
import { Context } from '../../Context'
import OrderDetails from '../OrderDetails/index.jsx'
import PeopleDetails from '../PeopleDetails/index.jsx'
import Basket from '../Basket/index.jsx'
import FormRight from '../FormRight/index.jsx'
import AddItem from '../AddItem/index.jsx'
import ItemDetails from '../ItemDetails/index.jsx'

import './styles.styl'

const RightContainer = () => {
  const { actionLayout, setActionLayout, ActionTypes, selectedTable, dishSelected } = useContext(Context)
  const user = JSON.parse(window.localStorage.getItem(USER))
  const dish = dishSelected

  return (
    <div className="rightContainer">
      {actionLayout === ActionTypes.BASE && user?.role === 'admin' ?
        <OrderDetails
          image={waiter}
          Button="false"
          subtitle1="Admin"
          title1={`${user?.firstname} ${user?.lastname}`}
          subtitle2="Restaurant"
          title2="Platzi Master"
        /> : ''
      }
      {actionLayout === ActionTypes.BASE && user?.role === 'waitress' ?
        <OrderDetails
          image={waiter}
          Button="false"
          subtitle1="Waiter"
          title1={`${user?.firstname} ${user?.lastname}`}
          subtitle2="Table"
          title2={selectedTable || '-'}
        /> : ''
      }
      {actionLayout === ActionTypes.PROFILE_ADD || actionLayout === ActionTypes.PROFILE_UPDATE ?
        <PeopleDetails/> :
        ''}
      {actionLayout === ActionTypes.DISH_ADD || actionLayout === ActionTypes.DISH_UPDATE ?
        <AddItem /> :
        ''}
      {actionLayout === ActionTypes.ORDER_ADD &&
        <ItemDetails
          image={dish?.imageUrl}
          title={dish?.name}
          details={dish?.description}
          price={dish?.price}
        />
      }
      {actionLayout === ActionTypes.BASKET &&
        <Basket title="Title" details="details" price="56" />
      }
      {actionLayout === ActionTypes.CATEGORY_ADD || actionLayout === ActionTypes.CATEGORY_UPDATE ?
        <FormRight buttonMessage="Send" title="Enter the name of the new categorie" /> :
        ''}
    </div>
  )
}

export default RightContainer
