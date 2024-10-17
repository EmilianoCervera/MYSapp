import React from "react";
import { HomeScreen } from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export const ButtonTabNavigators = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#222",
          borderRadius: 50,
          borderColor: "#222",
          position: "absolute",
          borderTopColor: "#000",
          bottom: 10,
          left: 10,
          right: 10,
          height: 60,
          paddingTop: 10,
          shadowColor: "#fff",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 3,
        },
        tabBarLabelStyle: { display: "none" },
        tabBarItemStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={focused ? 35 : 25}
              color={focused ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
