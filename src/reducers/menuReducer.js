function menuReducer ( state='', { type, payload } ) {

  if ( type === 'TOGGLE_MENU' ) {

    return payload.menu

  } else {

    return state;

  }

}

export default menuReducer
