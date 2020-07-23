import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme]= React.useState(false);
    const [isDriver, setIsDriver] = React.useState(false);

    const toggleStatus=()=>{
        setIsDriver(!isDriver);
    }

    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme);
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row", marginTop:40, marginLeft:-10}}>
                            <Avatar.Image
                            source={require('../images/nabeel.jpg')}
                            size={75}
                            />
                            <View style={{marginLeft:10, marginTop:10}}>
                                <Title style={styles.title}>Nabeel Ahmed Rana</Title>
                                <Caption style={styles.caption}>Rating 4.2</Caption>
                            </View>
                        </View>
                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>22</Paragraph>
                                <Caption style={styles.caption}>Rides</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </View> */}
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        {/* <DrawerItem
                        icon={({color, size})=>(
                            <Icon
                            name="home-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={()=>{}}
                        />

<DrawerItem
                        icon={({color, size})=>(
                            <Icon
                            name="account-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Profile"
                        onPress={()=>{}}
                        /> */}

<DrawerItem style={styles.items}
                        icon={({color, size})=>(
                            <Icon
                            name="history"
                            color={color}
                            size={size}
                            />
                        )}
                        label="History"
                        onPress={()=>{}}
                        />
<DrawerItem style={styles.items}
                        icon={({color, size})=>(
                            <Icon
                            name="gift"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Rewards"
                        onPress={()=>{}}
                        />
<DrawerItem style={styles.items}
                        icon={({color, size})=>(
                            <Icon
                            name="wallet-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Wallet"
                        onPress={()=>{}}
                        />
                        <DrawerItem style={styles.items}
                        icon={({color, size})=>(
                            <Icon
                            name="bookmark-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Saved Routes"
                        onPress={()=>{}}
                        />
{/* <DrawerItem
                        icon={({color, size})=>(
                            <Icon
                            name="bell-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Notifications"
                        onPress={()=>{}}
                        /> */}
                        <DrawerItem style={styles.items}
                        icon={({color, size})=>(
                            <Icon
                            name="share-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Refer a Friend"
                        onPress={()=>{}}
                        />
                        <DrawerItem style={styles.items}
                        icon={({color, size})=>(
                            <Icon
                            name="account-check-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Support"
                        onPress={()=>{}}
                        />
{/* <DrawerItem
                        icon={({color, size})=>(
                            <Icon
                            name="settings-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Settings"
                        onPress={()=>{}}
                        /> */}
                        {/* <DrawerItem
                        icon={({color, size})=>(
                            <Icon
                            name="help"
                            color={color}
                            size={size}
                            />
                        )}
                        label="Help"
                        onPress={()=>{}}
                        /> */}
                    </Drawer.Section>
                    <Drawer.Section title="Preference">
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text style={{color:'#696969'}}>Dark Mode</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>                           
                        </TouchableRipple>
                        <TouchableRipple onPress={()=>{toggleStatus()}}>
                        <View style={styles.preference}>
                                <Text style={{color:'#696969'}}>Switch to Passenger</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDriver}/>
                                </View>
                            </View> 
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={StyleSheet.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                label="Sign Out"
                onPress={()=>{}}

                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({

    drawerContent:{
        flex:1,
    },

    userInfoSection:{
        paddingLeft:20,
        height:150,
        backgroundColor:'#fCfCfC',
        borderBottomWidth:1,
        borderBottomColor:'#EEE',
    },

    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:"bold",
    },

    caption:{
        fontSize:14,
        lineHeight:14,
    },

    row:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
    },

    section:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,
    },

    paragraph:{
        fontWeight:"bold",
        marginRight:3,
    },

    drawerSection:{
        // borderTopStartRadius:20,
        // borderTopEndRadius:20,
        // backgroundColor:'#efefefef',
    },

    items:{
        marginTop:-5,
        },

    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },

    preference:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:5,
        paddingHorizontal:18,
    },

});

