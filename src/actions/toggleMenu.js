export default function ( enabled ) {
  return {
    type: 'TOGGLE_MENU',
    payload: {
      menu: enabled
    }
  }
}
