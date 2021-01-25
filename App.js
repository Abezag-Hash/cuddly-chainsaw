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
import { createDrawerNavigator } from "react-navigation-drawer";
import Splash from "./src/screens/SplashScreen";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SplashScreen />
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

  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-settings" size={20} color={tintColor} />
      ),
    },
  },

  "Rendez Vous": {
    screen: RendezVous,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },
  "Parcours de soin": {
    screen: ParcoursDeSoin,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },

  Ordonnances: {
    screen: Ordonnances,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },
  Analyses: {
    screen: Analyses,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="md-analytics" size={20} color={tintColor} />
      ),
    },
  },
  Profil: {
    screen: Profil,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },
  APropos: {
    screen: APropos,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={20} color={tintColor} />
      ),
    },
  },
};

const DrawerNavigatorConfig = {
  intialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "white",
    },
  },
  contentOptions: {
    activeTintColor: "#e91e63",
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: "grey",
};

const Navigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
