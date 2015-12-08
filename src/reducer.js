import findIndex from 'lodash/array/findIndex'

import {
  CHANGE_STATUS
} from './actions'

const defaultState = {
  statuses: [
    'eating pizza',
    'smoking',
    'behind the imack',
    'fighting a dragon',
    'googling'
  ],
  users: [
    {
      name: 'Bobek',
      status: 'eating pizza'
    },
    {
      name: 'csidro',
      status: 'behind the imack'
    },
    {
      name: 'andras',
      status: 'googling'
    }
  ]
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_STATUS: {
      const userIndex = findIndex(state.users, {name: action.name})
      return {
        ...state,
        users: [
          ...state.users.slice(0, userIndex),
          {
            ...state.users[userIndex],
            status: action.status,
          },
          ...state.users.slice(userIndex + 1)
        ]
      }
    }
    default :
      return state
  }
}
