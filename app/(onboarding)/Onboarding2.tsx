import { BackButton } from "@/components/onboarding/BackButton";
import { GradientButton } from "@/components/onboarding/GradientButton";
import Pill from "@/components/onboarding/pill";
import { QuestionCard } from "@/components/onboarding/QuestionCard";
import { StepIndicator } from "@/components/onboarding/StepIndicator";
import { GradientText } from "@/components/ui/GradientText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from '@/hooks/useColorScheme';
import { router } from "expo-router";
import React, { useState } from "react";
import { Dimensions, ImageBackground, ScrollView, StatusBar, Text, View } from "react-native";

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
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    // Select background image and color based on color scheme
    const backgroundImage = isDark
        ? require('@/assets/Background/Dark.png')
        : require('@/assets/Background/Light.png');
    const backgroundColor = isDark ? '#020618' : '#FFFFFF';

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
    const cardIcon = require('@/assets/icons/RightCard.png');
    return (
        <View style={{ height: height, width: width, backgroundColor }}>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

            {/* Background Image */}
            <ImageBackground
                source={backgroundImage}
                style={{
                    position: 'absolute',
                    width: width,
                    height: height,
                    top: 0,
                    left: 0,
                }}
                resizeMode="cover"
            />
            {/* Header */}
            <View style={{ paddingHorizontal: 20, paddingTop: 80, paddingBottom: 14 }}>
                <BackButton onPress={handlePress} size={24} />
            </View>

            {/* Title */}
            <View style={{ marginTop: 24, alignItems: 'center' }}>
                <GradientText
                    text="Just a few steps"
                    colors={isDark ? ["#FFFFFF", "#FF6868", "#FFFFFF"] : ["#1D293D", "#FF6868", "#7F22FE"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />
            </View>

            {/* Main Content - Scrollable */}
            <ScrollView
                contentContainerStyle={{
                    marginTop : height * 0.175,
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: height * 0.05,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style ={{ zIndex: 1, position:'absolute' }} >
                    <QuestionCard iconSource={cardIcon} />
                </View>

                <View
                    style={{
                        marginTop: height * 0.05,
                        width: '100%',
                        backgroundColor: isDark ? Colors.dark.background.primary : '#FFFFFF',
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        paddingTop: 56,
                        paddingHorizontal: 16,
                        paddingBottom: 24,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: -4 },
                        shadowOpacity: 0.05,
                        shadowRadius: 17,
                        elevation: 8,
                    }}
                >


                    <View
                        className="flex flex-col w-full"
                        style={{ marginTop: height * 0.01 }}
                    >
                        <View style={{ marginBottom: 12, width: '15%' }}>
                            <StepIndicator currentStep={2} totalSteps={3} />
                        </View>

                        <View className="flex w-full justify-center" style={{ marginTop: height * 0.015 }}>
                            <Text
                                className='text-h3 font-bold font-dm-sans-bold'
                                style={{color: isDark ? Colors.dark.text.primary : Colors.light.text.primary}}
                            >
                                Unselect topics that you are not interested in.
                            </Text>
                        </View>

                        <View style={{ marginTop: height * 0.04, gap: 8 }}>
                            {[0, 2, 4, 6].map((rowStart) => (
                                <View
                                    key={rowStart}
                                    className='flex flex-row'
                                    style={{ gap: 8 }}
                                >
                                    {PILLS.slice(rowStart, rowStart + 2).map((pill, i) => (
                                        <View
                                            key={rowStart + i}
                                            style={{
                                                backgroundColor: selectedPills.has(rowStart + i)
                                                    ? (isDark ? 'rgba(49, 65, 88, 0.6)' : '#FFFFFF')
                                                    : (isDark ? 'rgba(2, 6, 24, 0.6)' : '#F1F5F9'),
                                                borderWidth: 1,
                                                borderColor: isDark
                                                    ? 'rgba(226, 232, 240, 0.1)'
                                                    : '#E2E8F0',
                                                borderRadius: 9999,
                                                shadowColor: '#000',
                                                shadowOffset: { width: 0, height: 1 },
                                                shadowOpacity: selectedPills.has(rowStart + i) ? 0.06 : 0,
                                                shadowRadius: 4,
                                                elevation: selectedPills.has(rowStart + i) ? 2 : 0,
                                            }}
                                        >
                                            <Pill
                                                icon={pill.icon}
                                                label={pill.label}
                                                selected={selectedPills.has(rowStart + i)}
                                                onPress={() => togglePill(rowStart + i)}
                                            />
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                        <View className="mt-10">
                            <GradientButton
                                title="Continue"
                                onPress={() => router.push('/(onboarding)/SignIn')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Onboarding2