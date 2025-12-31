import { GradientButton } from "@/components/onboarding/GradientButton";
import Pill from "@/components/onboarding/pill";
import { GradientText } from "@/components/ui/GradientText";
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

const PILLS = [
    { icon: require("../../assets/pill-icons/usflag.png"), label: "US News" },
    { icon: require("../../assets/pill-icons/politics.png"), label: "Politics" },
    { icon: require("../../assets/pill-icons/Soccer.png"), label: "Sports" },
    { icon: require("../../assets/pill-icons/Business.png"), label: "Business" },
    { icon: require("../../assets/pill-icons/Shopping.png"), label: "Lifestyle" },
    { icon: require("../../assets/pill-icons/Music.png"), label: "Entertainment" },
    { icon: require("../../assets/pill-icons/Education.png"), label: "Education" },
    { icon: require("../../assets/pill-icons/Global.png"), label: "World" },
];

const Onboarding2 = () => {
    // All pills selected initially
    const [selectedPills, setSelectedPills] = useState<Set<number>>(new Set(PILLS.map((_, i) => i)));

    const togglePill = (index: number) => {
        setSelectedPills(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const handlePress = () => {
        router.back();
    };

    // Responsive dimensions
    const backButtonSize = width * 0.1;
    const backIconSize = width * 0.06;
    const cardSize = width * 0.3;
    return (
        <View className="flex flex-col bg-white" style={{ height: height, width: width }}>
            {/* Header */}
            <View 
                className="w-full px-4 justify-center"
                style={{ height: height * 0.1 }}
            >
                <TouchableOpacity
                    onPress={handlePress}
                    activeOpacity={0.7}
                    style={{
                        width: backButtonSize,
                        height: backButtonSize,
                        borderRadius: backButtonSize / 2,
                        backgroundColor: "#FFFFFF",
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                        elevation: 2,
                        borderWidth: 1,
                        borderColor: "#F0F0F0",
                    }}
                >
                    <Image
                        style={{ height: backIconSize, width: backIconSize }}
                        source={require("@/assets/icons/Back-button.png")}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            {/* Title */}
            <View className="flex justify-start items-center" style={{ marginTop: height * 0.02 }}>
                <GradientText
                    text="Just a few steps"
                    colors={["#1D293D", "#FF6868", "#7F22FE"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0.5 }}
                />
            </View>

            {/* Main Content - Scrollable */}
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: width * 0.04,
                    paddingBottom: height * 0.05,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View 
                    className="flex flex-col w-full justify-start items-center"
                    style={{ marginTop: height * 0.09 }}
                >
                    <Image 
                        style={{ height: cardSize, width: cardSize }} 
                        source={require('../../assets/icons/RightCard.png')} 
                        resizeMode="contain"
                    />
                    
                    <View 
                        className="flex flex-col w-full" 
                        style={{ marginTop: height * 0.04 }}
                    >
                        <Text className="text-textsecondary font-dm-sans">2 of 3</Text>
                        
                        <View className="flex w-full justify-center" style={{ marginTop: height * 0.015 }}>
                            <Text 
                                className='font-bold font-dm-sans-bold'
                                style={{ fontSize: width * 0.055 }}
                            >
                                Unselect topics that you are not interested in
                            </Text>
                        </View>
                        
                        <View style={{ marginTop: height * 0.03, marginBottom: height * 0.03 }}>
                            {[0, 2, 4, 6].map((rowStart) => (
                                <View 
                                    key={rowStart} 
                                    className='flex flex-row'
                                    style={{ marginBottom: height * 0.015 }}
                                >
                                    {PILLS.slice(rowStart, rowStart + 2).map((pill, i) => (
                                        <Pill
                                            key={rowStart + i}
                                            icon={pill.icon}
                                            label={pill.label}
                                            selected={selectedPills.has(rowStart + i)}
                                            onPress={() => togglePill(rowStart + i)}
                                        />
                                    ))}
                                </View>
                            ))}
                        </View>
                        
                        <GradientButton
                            title="Continue"
                            onPress={() => router.push('/(onboarding)/SignIn')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Onboarding2