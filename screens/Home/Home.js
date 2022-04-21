import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, KeyboardAvoidingView, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
import CircularProgress from 'react-native-circular-progress-indicator';
import HomeNavigator from '../../components/HomeNavigator';
import HomeHeader from '../../components/HomeHeader';
import HomeTitleBar from '../../components/HomeTitleBar';


const Home = ({ navigation }) => {

    const screenFontScale = useWindowDimensions().fontScale;
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;
    const screenScale = useWindowDimensions().scale;

    return (
        <KeyboardAvoidingView style={styles.container} contentContainerStyle={styles.containerContentStyle}>


            {/* NAVIGATION CONTAINER START */}
            <HomeNavigator />
            {/*NAVIGATION CONTAINER END */}

            {/* HEADER CONTAINER START */}
            <View style={{ flex: 1, flexDirection: 'row', width: '90%', alignSelf: 'center', paddingTop: 30 }}>
                <View style={{ width: '55%', height: 100 }}>
                    <Text style={{ fontWeight: '100', fontSize: screenFontScale <= 1 ? 16 : 14, fontFamily: 'PoppinsRegular', color: 'white', lineHeight: 22.5 }}>Your ideal deposit amount needs to be {<><Text style={{ fontWeight: 'bold', fontFamily: 'InterBold' }}>54.79</Text></>} for {<><Text style={{ fontWeight: 'bold', fontFamily: 'InterBold' }}>1825 days.</Text></>} </Text>
                </View>
                <View style={{ width: '45%', height: 100 }}>
                    <Image source={require('../../assets/figma/header.png')} style={{ flex: 1, width: undefined, height: undefined }} />
                </View>
            </View>
            {/* HEADER CONTAINER END */}

            {/* HEADER KEY ACTION START */}
            <View style={{ width: '90%', height: 80, alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <HomeHeader imgUrl={require('../../assets/figma/Summary4x.png')} text="Summary" />
                <HomeHeader imgUrl={require('../../assets/figma/withdrawal4x.png')} text="Withdrawal" />
                <HomeHeader imgUrl={require('../../assets/figma/deposits4x.png')} text="Deposit" />
                <HomeHeader imgUrl={require('../../assets/figma/chart4x.png')} text="Statistics" />
            </View>
            {/* HEADER KEY ACTION END */}


            <View style={[styles.subContainer, { height: screenHeight * 70 / 100 }]}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.scrollViewContainer, { backgroundColor: 'transparent' }]}>
                    {/* Target, Balance Container & Slider Start */}
                    <View style={{ width: '94%', height: 90, margin: 5, alignSelf: 'center', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ width: '48%', height: 80, justifyContent: 'flex-start', flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <View style={{ width: '35%', height: 60, padding: 15 }}>
                                <Image source={require("../../assets/figma/balance4x.png")} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                            </View>

                            <View>
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 13, color: '#416475' }}>Balance</Text>
                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 20 }}>$21,000</Text>
                            </View>
                        </View>
                        <View style={{ height: '45%', borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 15 }} />
                        <View style={{ width: '48%', height: 80, justifyContent: 'flex-start', flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                            <View style={{ width: '35%', height: 60, padding: 15, backgroundColor: '#ffffff' }}>
                                <Image source={require("../../assets/figma/flag4x.png")} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                            </View>

                            <View>
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 13, color: '#416475' }}>Target</Text>
                                <Text style={{ fontFamily: 'PoppinsBold', fontSize: 20 }}>$1,00,000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '94%', height: 7, backgroundColor: '#F0F0F0', alignSelf: 'center', borderRadius: 15 }}>
                        <View style={{ borderRadius: 15, width: '74%', height: '100%', backgroundColor: '#00A676' }} />
                    </View>
                    {/* Target, Balance Container & Slider End */}

                    {/* Investment Saving Distribution Start */}

                    {/* Header */}
                    <View style={{ marginTop: 22 }} />
                    <HomeTitleBar titleMainHeaderText={"Investment"} titleSubHeaderText={"Savings Distribution"} titleLeftEndText={"List All"} />
                    {/* Sliders */}

                    <View style={{ width: '94%', height: 250, alignSelf: 'center', flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                            <View style={{ width: '30%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'PoppinsRegular', color: '#8198A3' }}>Weekly Deposit</Text>
                                <Text style={{ fontSize: 20, fontFamily: 'PoppinsSemiBold' }}>$1000</Text>
                            </View>
                            <View style={{ width: '70%', height: '100%', justifyContent: 'center' }}>
                                <View style={{ width: '94%', height: 16, backgroundColor: '#F0F0F0', alignSelf: 'center', borderRadius: 15 }}>
                                    <View style={{ height: 17, borderRadius: 15, width: '74%', height: '100%', backgroundColor: '#00A676' }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                            <View style={{ width: '30%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'PoppinsRegular', color: '#8198A3' }}>1-Time Deposit</Text>
                                <Text style={{ fontSize: 20, fontFamily: 'PoppinsSemiBold' }}>$5400</Text>
                            </View>
                            <View style={{ width: '70%', height: '100%', justifyContent: 'center' }}>
                                <View style={{ width: '94%', height: 16, backgroundColor: '#F0F0F0', alignSelf: 'center', borderRadius: 15 }}>
                                    <View style={{ height: 17, borderRadius: 15, width: '68%', height: '100%', backgroundColor: '#4563E4' }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                            <View style={{ width: '30%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'PoppinsRegular', color: '#8198A3' }}>Smart Actions</Text>
                                <Text style={{ fontSize: 20, fontFamily: 'PoppinsSemiBold' }}>$50</Text>
                            </View>
                            <View style={{ width: '70%', height: '100%', justifyContent: 'center' }}>
                                <View style={{ width: '94%', height: 16, backgroundColor: '#F0F0F0', alignSelf: 'center', borderRadius: 15 }}>
                                    <View style={{ height: 17, borderRadius: 15, width: '9%', height: '100%', backgroundColor: '#FFB703' }} />
                                </View>
                            </View>
                        </View>

                    </View>

                    {/* Investment Saving Distribution End */}

                    {/* Friends Contribution Start */}

                    {/* Header */}
                    <HomeTitleBar titleMainHeaderText={"Friends"} titleSubHeaderText={"Friends Contribution"} titleLeftEndText={"List All"} />

                    {/* Friend List */}

                    <View style={{ width: '94%', height: 180, alignSelf: 'center', flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                        <View style={{ width: '30%', height: 150, borderRadius: 10, alignItems: 'flex-start', padding: 10, borderWidth: 0.95, borderColor: '#F0F0F0', backgroundColor: '#ffffff' }}>
                            {/* <View style={{ width: '100%', height: 160, borderRadius: 20, position:'absolute',opacity: 0.25, alignSelf:'center', shadowColor: '#000', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.4, shadowRadius: 3, elevation: 5 }} /> */}
                            <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'grey', justifyContent: 'center' }}>
                                <CircularProgress value={70} radius={34.5} activeStrokeColor='#4563E4' inActiveStrokeColor='#F0F0F0' circleBackgroundColor='#F0F0F0' progressValueColor='#F0F0F0' />
                                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey', alignSelf: 'center', position: 'absolute' }}>
                                    <Image source={require('../../assets/figma/women4x.png')} style={{ flex: 1, width: undefined, height: undefined, borderRadius: 35, }} />
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 18 }}>Sarah J.</Text>
                            <Text style={{ color: '#023047', fontFamily: 'PoppinsRegular', fontSize: 18 }}>$405 / 5000</Text>
                        </View>
                        <View style={{ width: '30%', height: 150, borderRadius: 10, alignItems: 'flex-start', padding: 10, borderWidth: 0.95, borderColor: '#F0F0F0', backgroundColor: '#ffffff' }}>
                            <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'grey', justifyContent: 'center' }}>
                                <CircularProgress value={30} radius={34.5} activeStrokeColor='#4563E4' inActiveStrokeColor='#F0F0F0' circleBackgroundColor='#F0F0F0' progressValueColor='#F0F0F0' />
                                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey', alignSelf: 'center', position: 'absolute' }}>
                                    <Image source={require('../../assets/figma/women4x.png')} style={{ flex: 1, width: undefined, height: undefined, borderRadius: 35, }} />
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 18 }}>Sarah J.</Text>
                            <Text style={{ color: '#023047', fontFamily: 'PoppinsRegular', fontSize: 18 }}>$405 / 5000</Text>
                        </View>
                        <View style={{ width: '30%', height: 150, borderRadius: 10, alignItems: 'flex-start', padding: 10, borderWidth: 0.95, borderColor: '#F0F0F0', backgroundColor: '#ffffff' }}>
                            <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'grey', justifyContent: 'center' }}>
                                <CircularProgress value={10} radius={34.5} activeStrokeColor='#4563E4' inActiveStrokeColor='#F0F0F0' circleBackgroundColor='#F0F0F0' progressValueColor='#F0F0F0' />
                                <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'grey', alignSelf: 'center', position: 'absolute' }}>
                                    <Image source={require('../../assets/figma/women4x.png')} style={{ flex: 1, width: undefined, height: undefined, borderRadius: 35, }} />
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 18 }}>Sarah J.</Text>
                            <Text style={{ color: '#023047', fontFamily: 'PoppinsRegular', fontSize: 18 }}>$405 / 5000</Text>
                        </View>
                    </View>

                    {/* Friends Contribution End */}

                    {/* Active Smart Actions Start */}

                    {/* Header */}


                    <HomeTitleBar titleMainHeaderText={"Active Smart Actions"} titleSubHeaderText={"Individual Contribution"} titleLeftEndText={"+ Add Another"} />


                    {/* CardView */}

                    <View style={{ width: '94%', height: 200, borderRadius: 10, marginTop: 10, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F4E2E280', flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '58%', height: 180, marginTop: 15 }}>
                            <View style={{ width: '100%', height: 180 }}>

                                <Text style={{ fontFamily: 'InterBold', fontSize: 24, color: '#023047' }}>Save {<><Text style={{ textDecorationLine: 'underline' }}>$5</Text></>} when I walk {<><Text style={{ textDecorationLine: 'underline' }}>5000</Text></>} steps daily </Text>
                                <View style={{ width: '100%', height: 50, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <View style={{ width: '46%' }}>
                                        <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 18, color: '#023047' }}>Counts</Text>
                                        <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#023047' }}>48 Times</Text>
                                    </View>
                                    <View style={{ width: '46%' }}>
                                        <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 18, color: '#023047' }}>Amount</Text>
                                        <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#023047' }}>$240</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '36%', height: 180, padding: 15 }}>
                            <Image source={require('../../assets/figma/man4x.png')} style={{ flex: 1, width: undefined, height: undefined, resizeMode: 'contain' }} />
                        </View>
                    </View>

                    {/* Active Smart Action End */}

                    {/* Transactions Start */}
                    {/* HEader */}
                    <View style={{ width: '94%', height: 50, alignSelf: 'center', flex: 1, flexDirection: 'row', marginTop: 17 }}>
                        <View style={{ width: '80%', height: 50 }}>
                            <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 24 }}>Transactions</Text>
                        </View>
                        <View style={{ width: '20%', height: 40, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 15, color: '#8198A3' }}> View All</Text>
                        </View>
                    </View>


                    {/* Card Stack */}
                    <View style={{ width: '94%', height: 300, marginTop: 15, flex: 1, shadowColor: '#000', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                        <View style={{ width: '100%', height: '22%', flexDirection: 'row' }}>
                            <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 45, height: 45, borderRadius: 40, backgroundColor: '#e1f8f2',alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 28, color: '#00A676' }}>A</Text>
                                </View>
                            </View>
                            <View style={{ width: '63%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#023047' }}>Amazon</Text>
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 15, color: '#023047' }}>12 Nov 2021</Text>
                            </View>
                            <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#D63230' }}>-$32.99</Text>
                            </View>
                        </View>

                        <View style={{ width: '80%', height: 1, borderWidth: 1, borderRadius: 5, marginTop: 10, borderColor: '#F0F0F0', alignSelf: 'center' }} />

                        <View style={{ width: '100%', height: '22%', flexDirection: 'row', backgroundColor: '#ffffff' }}>
                            <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 45, height: 45, borderRadius: 40, backgroundColor: '#e1f8f2', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 28, color: '#00A676' }}>A</Text>
                                </View>
                            </View>
                            <View style={{ width: '63%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#023047' }}>Amazon</Text>
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 15, color: '#023047' }}>12 Nov 2021</Text>
                            </View>
                            <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#D63230' }}>-$32.99</Text>
                            </View>
                        </View>

                        <View style={{ width: '80%', height: 1, borderWidth: 1, borderRadius: 5, marginTop: 10, borderColor: '#F0F0F0', alignSelf: 'center' }} />

                        <View style={{ width: '100%', height: '22%', flexDirection: 'row', backgroundColor: '#ffffff' }}>
                            <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 45, height: 45, borderRadius: 40, backgroundColor: '#e1f8f2', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 28, color: '#00A676' }}>A</Text>
                                </View>
                            </View>
                            <View style={{ width: '63%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#023047' }}>Amazon</Text>
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 15, color: '#023047' }}>12 Nov 2021</Text>
                            </View>
                            <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#D63230' }}>-$32.99</Text>
                            </View>
                        </View>

                        <View style={{ width: '80%', height: 1, borderWidth: 1, borderRadius: 5, marginTop: 10, borderColor: '#F0F0F0', alignSelf: 'center' }} />

                        <View style={{ width: '100%', height: '22%', flexDirection: 'row', backgroundColor: '#ffffff' }}>
                            <View style={{ width: '17%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 45, height: 45, borderRadius: 40, backgroundColor: '#e1f8f2', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 28, color: '#00A676' }}>A</Text>
                                </View>
                            </View>
                            <View style={{ width: '63%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#023047' }}>Amazon</Text>
                                <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 15, color: '#023047' }}>12 Nov 2021</Text>
                            </View>
                            <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'PoppinsSemiBold', fontSize: 20, color: '#D63230' }}>-$32.99</Text>
                            </View>
                        </View>

                    </View>
                    {/* Transactions End */}

                </ScrollView>

            </View>

        </KeyboardAvoidingView>
    )
}

export default Home