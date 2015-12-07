import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar'
import List from 'material-ui/lib/lists/list'
import ListDivider from 'material-ui/lib/lists/list-divider'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconButton from 'material-ui/lib/icon-button'

const users = [
  {name: 'Foo'},
  {name: 'Bar'},
  {name: 'Baz'},
]

const userStates = [
  {label: 'Home', deg: 0},
  {label: 'Work', deg: 90},
  {label: 'In danger', deg: 180},
]


export class App extends Component {
  render() {

    return (
      <div>
        <AppBar
          title="Weasel"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <List>
          {users.map(user => (
            <ListItem
              primaryText={user.name}
              leftAvatar={
                <Avatar
                  src={`http://api.adorable.io/avatars/128/${user.name}@adorable.io.png`}/>
              }
              rightIconButton={
                <IconMenu iconButtonElement={
                  <IconButton iconClassName="material-icons" tooltipPosition="bottom-center"
  tooltip="Sky">settings_system_daydream</IconButton>
                  }>
                  {userStates.map(state => (
                    <MenuItem primaryText={state.label} />
                  ))}
                </IconMenu>
              }/>
          ))}

        </List>
      </div>
    );
  }
}
