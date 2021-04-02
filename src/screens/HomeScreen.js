import React, {useState} from 'react';
import Swiper from 'react-native-deck-swiper';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Data} from '../utils/Data';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [showCount1, setShowCount] = useState(false);

  onSwiped = type => {
    console.log(`on swiped ${type}`);
    if (type == 'left') {
      setLeftCount(leftCount + 1);
    } else {
      setRightCount(rightCount + 1);
    }
  };

  renderCard = (card, index) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={card.uri} style={styles.image}>
          <View
            style={{flexDirection: 'row', marginLeft: 20, marginBottom: 20}}>
            <Text style={[styles.cardTextStyle, {marginRight: 10}]}>
              {card.name}
            </Text>
            <Text style={styles.cardTextStyle}>{card.id}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const showCount = () => {
    setShowCount(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        onSwipedLeft={i => onSwiped('left')}
        onSwipedRight={i => onSwiped('right')}
        cards={Data}
        cardVerticalMargin={80}
        renderCard={(item, index) => renderCard(item, index)}
        stackSize={3}
        containerStyle={{borderRadius: 20}}
        stackSeparation={15}
        backgroundColor={'#FFF'}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                borderColor: '#9e135d',
                color: '#9e135d',
                borderWidth: 2.5,
                fontSize: 40,
                letterSpacing: 2,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                borderColor: '#139e70',
                color: '#139e70',
                borderWidth: 2.5,
                fontSize: 40,
                letterSpacing: 2,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
          top: {
            title: 'SUPER LIKE',
            style: {
              label: {
                borderColor: '#3ad3de',
                color: '#3ad3de',
                borderWidth: 2.5,
                fontSize: 40,
                letterSpacing: 2,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          },
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard></Swiper>
      <View style={styles.footerStyle}>
        <View style={styles.textWrapper}>
          {showCount1 ? (
            <>
              <Text style={styles.textCountStyle}>Left : {leftCount}</Text>
              <Text style={styles.textCountStyle}>Right: {rightCount}</Text>
            </>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={() => showCount()}
          style={styles.bottonStyle}>
          <Text style={styles.buttonText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  bottonStyle: {
    width: width - 50,
    backgroundColor: '#a3c08f',
    borderRadius: 22,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1.8,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  textCountStyle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  cardTextStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1.6,
  },
});
export default HomeScreen;
