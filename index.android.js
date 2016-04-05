/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

// looking to replace all colors that are #dfdddc to something a bit darker? not sure yet..

class TestUI extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.verticalPadding10}/>
        <View style ={styles.itemCard}>
          <View style={styles.imageFlex}>
          <Image style={styles.image}
                  source={require('./image1.png')}/>
          </View>
          <View style={styles.cardContent}>
            <View style = {styles.titleAndIcon}>
              <Text style={{flex: 1}}>
                <Text style = {styles.projectTitle}>Missing drywall</Text>
                <Text style = {styles.sequenceNumber}> (#195)</Text>
              </Text>
              <Image style = {styles.iconPlaceholder}
                    source = {require('./edit.png')}/>
            </View>
            <Text style = {styles.projectDescription}>Enter a description...</Text>
            <View style = {styles.divider}/>
            <View style = {styles.titleAndIcon}>
              <Text style={{flex: 1}}>
                <Text style = {styles.createdAt}>Created on Aug 20, 2015</Text>
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Read more</Text>
              <Image style = {styles.iconPlaceholder}
                     source = {require('./rightarrow.png')}/>
              </View>
              </View>

          </View>
      </View>

      <View style={styles.verticalPadding10}/>

      <View style={styles.itemCard}>
      <View style={styles.cardContent}>
       <View style = {styles.titleAndIcon}>
              <Text style={{flex: 1}}>
                <Text style = {styles.detailTitle}>Location</Text>
              </Text>
              <Image style = {styles.iconPlaceholder}
                    source = {require('./edit.png')}/>
        </View>
        <Text style = {styles.detailDescription}>Floor 01</Text>
        </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dfdddc',
  },

  titleAndIcon: {
    flexDirection: 'row',
    
  },

  imageFlex: {
    flexDirection: 'row',
  },

  image: {
    flex: 1,
    height: 200,
    //resizeMode: 'cover',
  },

  projectTitle: {
    color: '#009688',
    fontWeight: 'bold',
  },

  sequenceNumber: {
    color: '#009688',
  },

  verticalPadding10: {
    paddingTop: 10,
  },

  itemCard: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },

  cardContent: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },

  detailTitle: {
    color: '#009688',
    //fontWeight: 'bold',
  },

  detailDescription: {
    color: '#000000',
  },

  projectDescription: {
    color: '#000000',
  },

  iconPlaceholder: {
    height: 14,
    width: 14,
  },


  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#dfdddc',
  },

  createdAt: {
    fontStyle: 'italic',
    fontSize: 12,
  }

});

AppRegistry.registerComponent('TestUI', () => TestUI);
