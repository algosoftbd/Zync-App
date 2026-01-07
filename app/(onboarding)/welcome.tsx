import { GradientButton } from "@/components/onboarding/GradientButton";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, StatusBar, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import WelcomeCard from "../../components/onboarding/welcome_card";

const { width, height } = Dimensions.get("window");

// Responsive card dimensions based on screen width
const CARD_WIDTH = width * 0.38; // ~38% of screen width
const GAP = width * 0.04; // ~4% of screen width
const NUM_CARDS = 4;
const CARD_SET_WIDTH = (CARD_WIDTH + GAP) * NUM_CARDS;
const CARD_MARGIN_TOP = height * 0.025; // ~2.5% of screen height

const Welcome = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const colors = isDark ? Colors.dark : Colors.light;

  const scrollX = useSharedValue(0);

  useEffect(() => {
    // Start infinite animation
    scrollX.value = withRepeat(
      withTiming(-CARD_SET_WIDTH, {
        duration: 20000,
        easing: Easing.linear,
      }),
      -1, // -1 means infinite repeat
      false // false means don't reverse
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: scrollX.value }],
    };
  });

  // Select background image and color based on color scheme
  const backgroundImage = isDark 
    ? require('@/assets/Background/Dark.png')
    : require('@/assets/Background/Light.png');
  const backgroundColor = isDark ? '#020618' : '#FFFFFF';

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      {/* Background Image */}
      <Image
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

      <View style={{ height: height, width: width }} className="flex flex-col justify-start items-center relative">
        {/* Header Section - responsive vertical spacing */}
        <View
          className="flex flex-col justify-center items-center"
          style={{ zIndex: 10, marginTop: height * 0.1, marginBottom: height * 0.02 }}
        >
          <Image
            style={{ width: 44, height: 44 }}
            source={require('@/assets/icons/logo.png')}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 16 }} className="text-base font-dm-sans-medium">
            <Text style={{ color: colors.text.tertiary }}>Hey it's</Text>
          </Text>
          <Image
            style={{ width: 124, height: 54, marginTop: 8 }}
            source={
              isDark
                ? require('@/assets/icons/Zync-heading-dark.png') // Dark mode image
                : require('@/assets/icons/Zync-heading.png') // Light mode image
            }
            resizeMode="contain"
          />
        </View>
        {/* Cards Section - responsive container */}
        <View
          className="flex flex-row justify-center items-center"
          style={{ height: 180, width: width, marginTop: height * 0.05 }}
        >
          <Animated.View
            style={[
              animatedStyle,
              {
                flexDirection: 'row',
                flexWrap: 'nowrap',
                gap: GAP,
              }
            ]}
          >
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="News"
                imageSource={require('@/assets/icons/newspaperandman.png')}
                rotation="-14.06deg"
              />
            </View>
            <WelcomeCard
              title="World"
              imageSource={require('@/assets/icons/Image_Earth.png')}
              rotation="0.18deg"
            />
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="Connected"
                imageSource={require('@/assets/icons/satelite.png')}
                rotation="-7.08deg"
              />
            </View>

            <WelcomeCard
              title="Curious"
              imageSource={require('@/assets/icons/newspaper.png')}
              rotation="3.72deg"
            />
            {/* Duplicate cards for seamless infinite scroll */}
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="News"
                imageSource={require('@/assets/icons/newspaperandman.png')}
                rotation="-14.06deg"
              />
            </View>
            <WelcomeCard
              title="World"
              imageSource={require('@/assets/icons/Image_Earth.png')}
              rotation="0.18deg"
            />
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="Connected"
                imageSource={require('@/assets/icons/satelite.png')}
                rotation="-7.08deg"
              />
            </View>
            <WelcomeCard
              title="Curious"
              imageSource={require('@/assets/icons/newspaper.png')}
              rotation="3.72deg"
            />
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="News"
                imageSource={require('@/assets/icons/newspaperandman.png')}
                rotation="-14.06deg"
              />
            </View>
            <WelcomeCard
              title="World"
              imageSource={require('@/assets/icons/Image_Earth.png')}
              rotation="0.18deg"
            />
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="Connected"
                imageSource={require('@/assets/icons/satelite.png')}
                rotation="-7.08deg"
              />
            </View>

            <WelcomeCard
              title="Curious"
              imageSource={require('@/assets/icons/newspaper.png')}
              rotation="3.72deg"
            />
            {/* Duplicate cards for seamless infinite scroll */}
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="News"
                imageSource={require('@/assets/icons/newspaperandman.png')}
                rotation="-14.06deg"
              />
            </View>
            <WelcomeCard
              title="World"
              imageSource={require('@/assets/icons/Image_Earth.png')}
              rotation="0.18deg"
            />
            <View style={{ marginTop: CARD_MARGIN_TOP }}>
              <WelcomeCard
                title="Connected"
                imageSource={require('@/assets/icons/satelite.png')}
                rotation="-7.08deg"
              />
            </View>
            <WelcomeCard
              title="Curious"
              imageSource={require('@/assets/icons/newspaper.png')}
              rotation="3.72deg"
            />
          </Animated.View>
        </View>

        {/* Bottom Section - responsive spacing */}
        <View
          className="w-full flex flex-col justify-center items-center px-4"
          style={{ marginTop: 'auto', paddingBottom: 40 }}
        >
          <View
            className="flex flex-col justify-center items-center"
            style={{ marginBottom: 24 }}
          >
            <Text className="text-body-md font-dm-sans-medium text-center" style={{ color: colors.text.secondary }}>
              Stay informed with fast,{'\n'}credible news!
            </Text>
          </View>
          <View className="w-full" >
            <GradientButton
              imageSource={require('@/assets/icons/thunder.png')}
              title="Login / Sign up"
              onPress={() => router.push("/(onboarding)/Onboarding1")}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Welcome
