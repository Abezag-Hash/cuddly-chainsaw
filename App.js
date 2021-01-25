import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SplashScreen from "./src/screens/SplashScreen";

import {
  createAppContainer,
  DrawerItems,
  SafeAreaView,
  contentOptions,
} from "react-navigation";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "react-navigation-drawer";
import Splash from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{ justifyContent: center }}>
      <DrawerItemList />
    </DrawerContentScrollView>
  );
}

class Home extends React.Component {
  state = { splash: true };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Rohit</Text>
        {this.splash ? <Splash func={this.setState} /> : <HomeScreen />}

        <Text> Camera</Text>
      </View>
    );
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

class RendezVous extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>RendezVous</Text>
      </View>
    );
  }
}

class ParcoursDeSoin extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ParcoursDeSoin</Text>
      </View>
    );
  }
}
class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}

class APropos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>APropos</Text>
      </View>
    );
  }
}

class Ordonnances extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ordonnances</Text>
      </View>
    );
  }
}

class Profil extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profil</Text>
      </View>
    );
  }
}

class Analyses extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Analyses</Text>
      </View>
    );
  }
}

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },

  Profile: {
    screen: Profil,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="person" size={20} color={tintColor} />
      ),
    },
  },

  Log: {
    screen: RendezVous,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="pencil" size={20} color={tintColor} />
      ),
    },
  },
  Weather: {
    screen: ParcoursDeSoin,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="cloud" size={20} color={tintColor} />
      ),
    },
  },

  "Fish List": {
    screen: Analyses,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="analytics-outline" size={20} color={tintColor} />
      ),
    },
  },
  "Rate us": {
    screen: Ordonnances,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="heart" size={20} color={tintColor} />
      ),
    },
  },
  Help: {
    screen: APropos,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-settings" size={20} color={tintColor} />
      ),
    },
  },
};

const DrawerNavigatorConfig = {
  intialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#000000",
    },
    headerTintColor: "#000000",
    headerTitleStyle: {
      color: "white",
    },
  },
  contentOptions: {
    activeTintColor: "#FFFFFF",
    inactiveTintColor: "#FFFFFF",
    activeBackgroundColor: "#00245a",
    itemsContainerStyle: {
      marginVertical: 50,
    },
    itemStyle: {
      height: 70,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: "#0080FF",
};

const Navigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0080FF",
  },
});
