import {Button, Pressable, Text, View} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as React from 'react';
import { Searchbar } from 'react-native-paper';

import { useTheme } from "../src/theme/ThemeProvider";

function Search({navigation}){
    const [searchQuery, setSearchQuery] = React.useState('');
    const {dark, colors,setScheme}=useTheme();

    const onChangeSearch = query => setSearchQuery(query);
    
    return (
      <View style={{opacity:1, padding:20,flex:1,backgroundColor:colors.primary}}>
          <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
      </View>
        );
    };
    
    export default Search;
