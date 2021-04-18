import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Card, CardItem, Text, Body } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { Adresses, GetData, ParseDate } from "../../services/db-services";

export default class QueryTwoTwo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Data:null
    }
    this.Query()
  }

  Query = async (data) =>{
    var result = await GetData(null, Adresses.TypeTwo.Two);
    if(result) {this.setState({Data : result})}
  }
  
  render(){
    return (
        <Container style={styles.container}>
          <View style={styles.body}>   
          <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
              <Card>
                  <CardItem style={{backgroundColor:'#e85f5f'}}>
                    <Body>
                      <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Günlük seyahat başına düşen ortalama alınan ücretlere göre; en az ücret alınan iki tarih arasındaki günlük alınan ortalama ücretler</Text>                    
                    </Body>
                  </CardItem>
              </Card>             
            </View>
              <View style={{flex:1}}>
              { 
                this.state.Data != null &&
                this.state.Data.map((p,key)=>{
                  return (
                    <Card key={key}>
                      <CardItem header>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>{key + 1}. Kayıt</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Grid>
                              <Row><Text style={{marginBottom:5, fontSize:18, fontWeight:'bold'}}>Yolcuların yolculuk ettiği tarih</Text></Row>
                              <Row><Text style={{marginBottom:5, fontSize:18}}>{ParseDate(new Date(p.puDatetime))}</Text></Row>
                              <Row><Text style={{marginBottom:5, fontSize:18, fontWeight:'bold'}}>Günlük ortalama alınan ücret</Text></Row>
                              <Row><Text style={{marginBottom:5, fontSize:18}}>{p.total_amount_average}</Text></Row>
                          </Grid>
                        </Body>
                      </CardItem>
                    </Card>
                    )
                })            
              }
              </View>
            </ScrollView>
          </View>
          <StatusBar style="light" />
        </Container>
      );
  }
}

const styles = new StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'#deded5'
  },
  body:{ 
      flex:1,
      padding:10, 
      paddingBottom:30,
  },
  header:{
      marginBottom:10,
  },
  scrollView:{ 
    flex:1,
},
});