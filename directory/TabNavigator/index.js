import React from 'react';

// import HomeIcon from '@material-ui/icons/Home';
// import ExploreIcon from '@material-ui/icons/Explore';



const screenOptions = (route, color) => {
    // let iconName;
  
    switch (route.name) {
      case 'Home':
        // iconName = 'MdHome'
        // break
        return <MdHome color="primary" size={24} />;
      case 'Explore':
        // iconName = 'MdExplore'
        // break
        return <MdExplore color="primary" size={24} />;
      default:
        break;
    }
  
    // return <IconName name={iconName} color={color} size={24} />;
  };

function TabNavigator() {
    return (
        <BottomTab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
          })}>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Explore" component={Explore} />
        </BottomTab.Navigator>
    );
};

export default TabNavigator;