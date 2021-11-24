import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Ingredients = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{props.text}</Text>
      </View>
    )
}

export default Ingredients

const styles = StyleSheet.create({
  itemText: {
    maxWidth: '80%',
  },

  item: {
    width: 300,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
})
