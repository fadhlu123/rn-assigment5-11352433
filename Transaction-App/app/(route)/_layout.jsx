import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons} from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.iconBox}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.icon}
      />
    
    </View>
  );
};




export default function _layout() {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'black',
      tabBarShowLabel: true,
      tabBarLabelStyle:{
        fontSize: 16,
      },
      tabBarStyle: {
        backgroundColor: "white",
        borderTopWidth:1,
        borderTopColor: 'black',
        height: 84,
      }
    }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
          />
          <Tabs.Screen
          name="MyCards"
          options={{
            title: "MyCards",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.myCards}
                color={color}
                name="My Cards"
                focused={focused}
              />
            ),
          }}
          />
           <Tabs.Screen
          name="Statistics"
          options={{
            title: "Statistics",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.statistics}
                color={color}
                name="Statistics"
                focused={focused}
              />
            ),
          }}
          />
            <Tabs.Screen
          name="Settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.settings}
                color={color}
                name="Settings"
                focused={focused}
              />
            ),
          }}
          />




      </Tabs>  
  )
}



const styles = StyleSheet.create({
  
})