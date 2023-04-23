import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity,Image, Text,ScrollView } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import aa from '../assets/images/flower.jpg'
import { Images } from "@config";

const data = [
  { label: 'COLLECTION', value: '1' ,name:'Fortify',status:'Basic',price:'2USDT', img:Images.ntf1},

  { label: 'COLLECTION', value: '5' ,name:'Fortify',status:'Basic',price:'2USDT', img:Images.ntf1,services:[title='fatima']} 
];


const MultiSelectComponent = () => {
  const [selected, setSelected] = useState([]);
  const [content, setcontent] = useState([  {name:'fatima', phone:'091233'},
  {name:'mohammed',phone:'12345'},]);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={selected}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setSelected(item);
        }}

        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
            <Image style={{width:200,height:200,alignItems:'center',borderRadius:9}} source={item.img} />
            <ScrollView>
              <Text>{content.name}</Text>
            </ScrollView>
     
              {/* <AntDesign color="black" name="delete" size={17} /> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    overflow:'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    marginTop: 8,
    paddingLeft:30,
    paddingVertical: 8,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});