/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles, colors } from '../theme/appTheme';
import { Tabs } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}
      drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{ ...styles.menuButton, flexDirection: 'row' }}>
          <Icon name="compass-outline" size={23} color={colors.primary} />
          <Text style={styles.menuItem}> Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{ ...styles.menuButton, flexDirection: 'row' }}>
          <Icon name="cog-outline" size={23} color={colors.primary} />
          <Text style={styles.menuItem}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
