//This screen is the first thing the user sees when opening our application.  It mainly is used as an intro page and then directs them to sign in screen.  
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import SignInScreen from './SignInScreen';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace('SignInScreen')}
        onDone={() => navigation.navigate(SignInScreen)}
        pages={[
          {
            backgroundColor: '#B6B7E5',
            title: 'Campus Eats',
            image: <Image source={require('../../images/onBoardingLogo.png')} />,
            subtitle: 'Hungry? You are at the right place',
          },
          {
            backgroundColor: '#B6B7E5',
            title: 'Campus Eats',
            image:<></> ,
            subtitle: 'Hungry? You are at the right place',
          },

        ]}
      />
    );
};

export default OnboardingScreen;
