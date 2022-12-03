import React from 'react';
import { View, StyleSheet, Text, Image, useWindowDimensions, ScrollView, Alert, Button } from 'react-native';
import CustomInput from '../src/components/CustomInput/CustomInput';
import CustomButton from '../src/components/CustomButton/CustomButton';
import Gameformat from './pages/components/Gameformat';

/*export function Line() {
    return (
        <View style={{
            height: 1,
            backgroundColor: 'rgba(0, 0, 0 ,0.3)',
            alignSelf: 'stretch'
        }} />
    )
}*/

export default function Playoff({navigation}) {    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>

                    {/* Playoff Title */}
                    <Text style={{fontSize: 28, fontWeight: 'bold', color: '#051C60', textAlign: 'center', lineHeight: 100}}>PLAYOFFS</Text>
                    
                    {/* QF 1 */}
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'left'}}>Quarterfinal 1</Text>
                    <Gameformat teamName1='Team 1' teamName2='Team 2' time='5:00pm'/>

                    {/* Creates line */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .4, height: 1, backgroundColor: 'black'}} />
                    </View>

                    <Text style={{textAlign: 'left', lineHeight: 50}}> </Text>

                    {/* SF 1 Details */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .72, height: 0, backgroundColor: 'black'}} />
                    <View>
                    <Text style={{color: '#111825', fontSize: 12}}>Winner of QF 1 vs. Winner of QF 2</Text>
                    </View>
                    <View style={{flex: 0, height: 0, backgroundColor: 'black'}} />
                    </View> 
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .62, height: 0, backgroundColor: 'black'}} />
                    <View>
                    <Text style={{color: '#111825', fontSize: 12}}>Tipoff @ 9:00pm</Text>
                    </View>
                    <View style={{flex: 0, height: 0, backgroundColor: 'black'}} />
                    </View> 

                    {/* SF 1 */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5, height: 0, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'center', borderRightWidth: 1}}>Semifinal 1</Text>
                    </View>
                    <View style={{flex: .3, height: 1, backgroundColor: 'black'}} />
                    </View>    

                    <Text style={{textAlign: 'left', lineHeight: 50}}> </Text>

                    {/* Creates line */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .4, height: 1, backgroundColor: 'black'}} />
                    </View>

                    {/* QF 2 */}
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'left'}}>Quarterfinal 2</Text>
                    <Gameformat teamName1='Team 3' teamName2='Team 4' time='6:00pm'/>

                    <Text style={{textAlign: 'left', lineHeight: 15}}> </Text>

                    {/* Finals */}
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'right'}}>Finals</Text>

                    {/* Finals Details */}
                    <Text style={{color: '#111825', fontSize: 12, textAlign: 'right'}}>Winner of SF 1 vs. Winner of SF 2</Text>
                    <Text style={{color: '#111825', fontSize: 12, textAlign: 'right'}}>Tipoff @ 11:00pm</Text>

                    <Text style={{textAlign: 'left', lineHeight: 15}}> </Text>

                    {/* QF 3 */}
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'left', lineHeight: 25}}>Quartefinal 3</Text>
                    <Gameformat teamName1='Team 5' teamName2='Team 6' time='7:00pm'/>

                    {/* Creates line */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .4, height: 1, backgroundColor: 'black'}} />
                    </View>

                    <Text style={{textAlign: 'left', lineHeight: 50}}> </Text>

                    {/* SF 2 */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .5, height: 0, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'center'}}>Semifinal 2</Text>
                    </View>
                    <View style={{flex: .3, height: 1, backgroundColor: 'black'}} />
                    </View>         

                    {/* SF 2 Details */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .72, height: 0, backgroundColor: 'black'}} />
                    <View>
                    <Text style={{color: '#111825', fontSize: 12}}>Winner of QF 3 vs. Winner of QF 4</Text>
                    </View>
                    <View style={{flex: 0, height: 0, backgroundColor: 'black'}} />
                    </View> 
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .62, height: 0, backgroundColor: 'black'}} />
                    <View>
                    <Text style={{color: '#111825', fontSize: 12}}>Tipoff @ 10:00pm</Text>
                    </View>
                    <View style={{flex: 0, height: 0, backgroundColor: 'black'}} />
                    </View>            
                    
                    <Text style={{textAlign: 'left', lineHeight: 50}}> </Text>

                    {/* Creates line */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: .4, height: 1, backgroundColor: 'black'}} />
                    </View>

                    {/* QF 4 */}
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#051C60', textAlign: 'left', lineHeight: 25}}>Quarterfinal 4</Text>
                    <Gameformat teamName1='Team 7' teamName2='Team 8' time='8:00pm'/>

                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
      //alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    section: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
  });

const verticleLine = StyleSheet.create({
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
});
