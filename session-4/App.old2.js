/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Form = ({ style, textButton, isShow }) => {
  if(isShow) {
    return (
      <View style={style}>
        <View style={{ height: 100, backgroundColor: 'grey'}}>
          <TextInput placeholder="Who are you" style={{ height: 50, borderWidth: 1 }} />
          <TextInput secureTextEntry placeholder="Your Password" style={{ height: 50, borderWidth: 1 }} />
        </View>
        <View>
          <Button title={textButton} onPress={() => alert('HERE')} />
        </View>
      </View>
    )
  }
  return null
}

const RenderIf = ({ condition, children }) => {
  if(condition){
    return children
  }
  return null
}

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal>
      <View style={{ height: 100, width: 200, backgroundColor: 'red' }} />
      <View style={{ height: 100, width: 400, backgroundColor: 'blue' }} />
      <View style={{ height: 100, width: 600, backgroundColor: 'green' }} />
    </ScrollView>
  )
}

const RenderCategory = ({ categories }) => {
  if(categories && categories.length > 0){
    return (
      <ScrollView horizontal style={{ height: Dimensions.get('window').height * 0.3 }}>
          {
            categories.map((category, index) => {
              return (
                <View key={index}>
                  <View style={{ width:100, height:100, backgroundColor: 'grey' }} />
                  <Text>{category.name}</Text>
                </View>
              )
            })
          }
      </ScrollView>
    )
  }
  return null
}

const App = () => {
  const color = 'red'
  const date = 12
  const isShowHotdeals = true
  const [categories, setCategories] = useState()

  useEffect(() => {
    console.log('Componen Did Mount')
    setCategories([
      {name: 'Food', color: 'red'},
      {name: 'Beverages', color: 'green'},
      {name: 'Meat', color: 'blue'},
      {name: 'Coffee', color: 'yellow'},
      {name: 'Snack', color: ''},
      {name: 'Drink', color: 'black'},
    ])
  }, [])

  console.log('HERE', Dimensions.get('window').height)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{ flex: 2, height: 100, backgroundColor: 'red' }} />
          <View style={{ flex: 2, height: 100, backgroundColor: 'blue' }} />
          <View style={{ flex: 2, height: 100, backgroundColor: 'green' }} />
        </View>
        <RenderCategory categories={categories} />
        <Form isShow style={{ backgroundColor: 'blue', height: 200}} textButton="PRESS ME" />
        <RenderIf condition={isShowHotdeals}>
          <View style={{ marginHorizontal: 10, marginVertical: 20, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => alert('CLICK ME?')}>
              <Text>Hot Deals</Text>
            </TouchableOpacity>
          </View>
        </RenderIf>
        <View>
        </View>
          <ScrollView>
            <View style={[styles.box, color === 'blue' ? styles.blue : {} ]} />
            {/* <View style={{ height: 400, backgroundColor: 'blue' }} /> */}
            <View style={{ height: 600, backgroundColor: 'green' }} />
            <HorizontalScrollView />
          </ScrollView>
        <View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  box: { 
    height: 200, 
  },
  red: { 
    backgroundColor: 'red' 
  },
  blue: { 
    backgroundColor: 'blue' 
  }
});

export default App;
