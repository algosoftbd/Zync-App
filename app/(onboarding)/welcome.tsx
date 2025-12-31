import { GradientButton } from "@/components/onboarding/GradientButton";
import { router } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
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

  return (
    <View style={{ height: height, width: width }} className="flex flex-col justify-start items-center relative">
      {/* Header Section - responsive vertical spacing */}
      <View 
        className="flex flex-col justify-center items-center" 
        style={{ zIndex: 10, marginVertical: height * 0.08 }}
      >
        <Image 
          style={{ width: width * 0.12, height: width * 0.12 }} 
          source={require('@/assets/icons/logo.png')} 
        />
        <Text style={{ marginTop: height * 0.02 }} className="text-lg text-textsecondary">Hey it's</Text>
        <Image 
          style={{ width: width * 0.32, height: width * 0.14, marginTop: height * 0.01 }} 
          source={require('@/assets/icons/Zync-heading.png')} 
          resizeMode="contain"
        />
      </View>

      {/* Cards Section - responsive container */}
      <View 
        className="flex flex-row justify-center items-center" 
        style={{ height: height * 0.4, width: width }}
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
        className="w-full flex flex-col justify-center items-center"
        style={{ marginTop: 'auto', paddingBottom: height * 0.05 }}
      >
        <View 
          className="flex flex-col justify-center items-center" 
          style={{ marginBottom: height * 0.03 }}
        >
          <Text className="text-textsecondary font-medium">Stay informed with fast,</Text>
          <Text className="text-textsecondary font-medium">credible news!</Text>
        </View>
        <GradientButton 
          imageSource={require('@/assets/icons/thunder.png')} 
          title="Login / Sign up" 
          onPress={() => router.push("/(onboarding)/Onboarding1")} 
        />
      </View>
    </View>
  )
}

export default Welcome
