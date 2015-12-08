import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {
  CHANGE_STATUS
} from './actions'

import AppBar from 'material-ui/lib/app-bar'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconButton from 'material-ui/lib/icon-button'


@connect(
  state => ({...state}),
  dispatch => ({
    changeStatus: (name, status) => {
      dispatch({
        type: CHANGE_STATUS,
        name,
        status
      })
    }
  })
)
class BaseScreen extends React.Component {
  render () {
    const {users, statuses, changeStatus} = this.props

    return (
      <div>
        <AppBar
          title="Weasel"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <List>
          {users.map(user => (
            <ListItem
              key={user.name}
              primaryText={user.name}
              secondaryText={user.status}
              leftAvatar={
                <Avatar
                  src={`http://api.adorable.io/avatars/128/${user.name}@adorable.io.png`}/>
              }
              rightIconButton={
                <IconMenu
                  value={user.status}
                  onChange={(event, status)=>{
                    changeStatus(user.name, status)
                  }}
                  iconButtonElement={
                    <IconButton
                      iconClassName="material-icons"
                      tooltipPosition="bottom-center"
                      tooltip="change state">
                      explore
                    </IconButton>
                  }>
                  {statuses.map(state => (
                    <MenuItem key={state} primaryText={state} value={state} />
                  ))}
                </IconMenu>
              }/>
          ))}

        </List>
      </div>
    )
  }
}

export default BaseScreen
