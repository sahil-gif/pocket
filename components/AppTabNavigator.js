


import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import PostJobsScreen from '../screens/PostJobsScreen';
import SearchJobsScreen from '../screens/SearchJobsScreen';

export const AppTabNavigator = createBottomTabNavigator({
  SearchJobs : {
    //screen: BookDonateScreen,
    screen: SearchJobsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Search Jobs",
    }
  },
  PostJobs: {
    screen: PostJobsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Post Jobs",
    }
  }
});