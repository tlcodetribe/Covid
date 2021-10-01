import React, {useState} from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, Picker} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Stats from './Stats'
import nurse from '../img/covNurse.jpg';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function Home({navigation}) {


  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [selectedValue, setSelectedValue] = useState("South Africa");

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  return (
    <View style={styles.container}>



      <Card style={styles.card}>


        <View style={styles.headerIcons}>

          
          <TouchableOpacity style={{ marginLeft: 20, marginTop: 15 }} onPress={() => changeVisibilityStatusBar()} >
 
              <Feather name="menu" size={24} color="#fff" />

              {!visibleStatusBar ? (
            <View> </View>
          ) : 'Hidden'}

          </TouchableOpacity>
            



          <TouchableOpacity style={{
            marginLeft: 210,
            marginTop: 15
          }}
          >

            <AntDesign name="bells" size={20} color="#fff" />

          </TouchableOpacity>

        </View>







        <View style={styles.heading}>

          <Text style={styles.headerTxt}
          >

            Covid-19

          </Text>




          <Picker
            selectedValue={selectedValue}
            style={{ 
                     height: 30, 
                     width: 120, 
                     borderRadius: 30, 
                     marginLeft: 65,
                     
                  }}

            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >

         
          
            <Picker.Item label="South Africa" value="SA"/>
            <Picker.Item label="Italy" value="ITA" />
            <Picker.Item label="Germany" value="GER" />
            <Picker.Item label="Sudan" value="SUD" />
            <Picker.Item label="Egypt" value="EGP" />
            <Picker.Item label="Cameroon" value="CAM" />

          </Picker>


        </View>






        <View>

          <Text style={{ color: '#fff', fontSize: 18, paddingTop: 30, paddingLeft: 20 }}>

            Are You feeling sick?
          </Text>

          <Text style={{ color: '#fff', paddingTop: 30, paddingLeft: 20 }}>

            If you feel sick with any of covid-19 symptoms,
              please call or SMS us immediately for help.
          </Text>

        </View>




        <View style={styles.contactIcons}>

          <TouchableOpacity style={styles.callIcon}
          >

            <MaterialIcons name="call" size={24} color="#fff" />

            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              Call Now
          </Text>

          </TouchableOpacity>



          <TouchableOpacity style={styles.smsIcon}
          >

            <MaterialCommunityIcons name="chat" size={24} color="#fff" />

            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              Send SMS
          </Text>

          </TouchableOpacity>

        </View>

      </Card>



      <View style={styles.body}>

        <Text style={styles.bodyTxt}
        >
          Prevention
        </Text>

        <View style={styles.bodyImg}>

          <View style={styles.bodyContent}>

            <FontAwesome5 name="people-arrows" size={54} color="black" />
                     
          </View>






          <View style={styles.bodyContent}>

              <MaterialIcons name="wash" size={54} color="black" />

          </View>






          <View style={styles.bodyContent}>

              <FontAwesome5 name="head-side-mask" size={54} color="black" />

          </View>

        </View>








        <View style={styles.iconTxt}>

          <Text style={
            {
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
              maxWidth: 100
            }}
          >

            Avoid close contact
          </Text>




          <Text style={
            {
              fontWeight: 'bold',
              textAlign: 'center',
              paddingLeft: 10,
              maxWidth: 100
            }}
          >

            Clean your hands often
          </Text>





          <Text style={
            {
              fontWeight: 'bold',
              textAlign: 'center',
              paddingLeft: 20,
              maxWidth: 100
            }}

          >
            Wear a facemask
          </Text>


        </View>

      </View>







      

      <View style={styles.conclusion}>
         
        <View> 
          <Image style={styles.conImg} source= {nurse} />
        </View>

        <View>
          <Text style= {{color: '#fff', fontSize:16, padding: 10}}> 
            Do your own test!
          </Text>

          <Text style= {{color: '#fff', fontSize:12, opacity: 0.6, maxWidth: 170, padding: 10}}>
            Follow the instructions to do your own test.
          </Text>
        </View>

      </View>


      <View style={styles.footer} > 
        

          <TouchableOpacity style={styles.footerBtn} onPress={() => navigation.navigate('Stats')}>

            <MaterialIcons name="home"
              size={24} color="grey"
            />

          </TouchableOpacity>







          <TouchableOpacity style={styles.footerBtn} >
            <Fontisto name="heartbeat-alt" size={24} color="grey" />
          </TouchableOpacity>








          <TouchableOpacity style={styles.footerBtn} >
            <Fontisto name="database" size={24} color="grey" />
          </TouchableOpacity>








          <TouchableOpacity style={styles.footerBtn} >
            <AntDesign name="infocirlce" size={24} color="gray" />
          </TouchableOpacity>

      
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 275,
    backgroundColor: '#fff',
    padding: 8,
  },

  card: {
    backgroundColor: 'darkslateblue',
    width: 300,
    height: 300,
    borderRadius: 30,
  },

  headerIcons: {
    flexDirection: 'row'
  },

  heading: {
    flexDirection: 'row',
    marginTop: 20
  },

  headerTxt: {
    fontSize: 22, 
    color: '#fff', 
    paddingLeft: 20, 
  },

  contactIcons: {
    flexDirection: 'row',
    marginTop: 20
  },

  callIcon: {
    height: 35,
    width: 120,
    borderRadius: 30,
    marginLeft: 20, 
    flexDirection: 'row', 
    backgroundColor: 'red',
    alignItems: 'center',
    paddingLeft: 20
  },

  smsIcon: {
    height: 35,
    width: 130,
    borderRadius: 30,
    marginLeft:'5%', 
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingLeft: 20
  },

  body: {
    backgroundColor: '#fff',
  },

  bodyTxt: {
    paddingTop: 40, 
    paddingLeft: 20, 
    fontWeight: 'bold', 
    fontSize: 18
    },

    bodyImg: {
      flexDirection: 'row',
      marginTop: 20
    },

    bodyContent: {
      margin: 5,
      height: 95,
      width: 92,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: 'lightpink'
    },

    iconTxt: {
       flexDirection: 'row',
       maxWidth: 300 
    },

    conclusion: {
      flexDirection: 'row',
      height: 120,
      width: 300,
      borderRadius: 20,
      marginTop: 50,
      backgroundColor: 'darkslateblue',
    },

    footer: {
     flexDirection: 'row',
     marginTop: 40,
     width: 300,
     height: 100,
     justifyContent: 'space-between'
    },
  
    footerBtn: {
      width: 50,
      borderRadius: 30,
      alignItems: 'center'     
    },

    conImg: {
      height:120, 
      width: 100, 
      backgroundColor: 'pink', 
      marginLeft: 20
    },
  
});
