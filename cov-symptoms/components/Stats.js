import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import graph from '../img/covStats3.jpg';


export default function Stats() {
  return (

    <View style={styles.container}>

      <Card style={styles.card}>



        <View style={styles.headerIcons}>

        
          <TouchableOpacity style={{ paddingLeft: 20, paddingTop: 20 }}>

            <Feather name="menu" size={24} color="#fff" />
          </TouchableOpacity>



          <TouchableOpacity style={{
            marginLeft: '75%',
            marginTop: 20,
          }}
          >

            <AntDesign name="bells" size={24} color="#fff" />

          </TouchableOpacity>

        </View>






        <View style={styles.heading}>

          <Text style={styles.headerTxt}
          >

            Statistics

          </Text>

        </View>






        <View style={styles.headBtns}>
 
        
 
          <TouchableOpacity style={styles.btnCountry}>

          
            My Country
            
            
          </TouchableOpacity>
        
        

        

          <TouchableOpacity style={styles.btnGlobal}>

            <Text style= {{color: '#fff'}} >
              Global

              </Text>

          </TouchableOpacity>

        </View>






        <View style={styles.contTxtDay}>

          <Text style={styles.dayTxt}>

            Total
            </Text>

          <Text style={styles.dayTxt}>

            Today
            </Text>

          <Text style={styles.dayTxt}>

            Yesterday
            </Text>

        </View>




        <View style={styles.cardsRow1}>

          <View style={styles.cards1}>

            <Text style= {styles.titleCards}>
              Affected
            </Text>

            <Text style= {styles.txtCards}> 
              336,851
            </Text>
          </View>


          <View style={styles.cards2}>

            <Text style= {styles.titleCards}>
              Deaths
            </Text>

            <Text style= {styles.txtCards}> 
              9,620
            </Text>

          </View>

        </View>





        <View style={styles.cardsRow2}>

          <View style={styles.cards3}>

            <Text style= {styles.titleCards}>
              Recovered
            </Text>

            <Text style= {styles.txtCards}> 
              17,977
            </Text>

          </View>



          <View style={styles.cards4}>

            <Text style= {styles.titleCards}>
              Active
            </Text>

            <Text style= {styles.txtCards}> 
              301,251
            </Text>

          </View>



          <View style={styles.cards5}>

            <Text style= {styles.titleCards}>
              Serious
            </Text>

            <Text style= {styles.txtCards}> 
              8,702
            </Text>

          </View>

        </View>



        <SafeAreaView style={styles.safeView}>
        </SafeAreaView>




        <View style={styles.footCard}>
           <Text style= {styles.footTxt}>
             Daily News Cases
           </Text>

           <Image source= {graph} 
             style= {{maxWidth: 300}}/>

           
        </View>



      </Card>
      

      </View>

      


      

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },

  card: {
    backgroundColor: 'darkslateblue',
    height: 700,
    borderRadius: 30,
  },

  headerIcons: {
    flexDirection: 'row'
  },

  headerTxt: {
    fontSize: 20, 
    color: '#fff', 
    paddingLeft: 20, 
    paddingTop: 20
  },

  headBtns: {
    flex: 2,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },

  btnCountry: {
    height: 35,
    width:'47%',
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnGlobal: {
    height: 35,
    width:'47%',
    borderRadius: 30,
    marginRight: 20,
    backgroundColor: '#6a5381',
    alignItems: 'center',
    justifyContent: 'center'
  },

  contTxtDay: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },

  dayTxt: {
    color: '#fff',
    paddingLeft: 20,
    fontSize: 16
  },

  cardsRow1: {
    flexDirection: 'row',
  },

  cards1: {
    height: 100,
    width: '42%',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'orange',
  },

  cards2: {
    height: 100,
    width: '42%',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'red'
  },

  cardsRow2: {
    flexDirection: 'row',
  },

  

  cards3: {
    height: 100,
    width: '28%',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'lightgreen'
  },

  cards4: {
    height: 100,
    width: '28%',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'skyblue'
  },

  cards5: {
    height: 100,
    width: '28%',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#6700ff'
  },

  titleCards: {
    padding: 10,
    fontSize: 12,
    color: '#fff'
  },

  txtCards: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 20,
    color: '#fff'
  },

  safeView: {
    marginTop: 30
  },

  footCard: {
    height: 285,
    width: '100%',
    borderRadius: 40,
    backgroundColor: '#F1F1F1'
  },

  footTxt: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20
  },

})