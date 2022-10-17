/* eslint-disable react-native/no-inline-styles*/
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {getCurrentTime} from '../utils';

import Needle from '../assets/images/qrcode/needle.svg';
import {PageRightButton} from './home';

export default function QRcodeScreen({navigation}) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const statusBarHeight = StatusBar.currentHeight;

  const handleBackIconPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <PageRightButton />
      <ImageBackground
        style={styles.bg}
        source={require('../assets/images/qrcode/qrcode_background.png')}>
        <View style={[styles.bgContent, {marginTop: statusBarHeight + 10}]}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={handleBackIconPress}>
              <Image
                style={styles.backIcon}
                source={require('../assets/images/qrcode/back_icon.png')}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>粤康码（深圳）</Text>
            {/* 占位 */}
            <View />
          </View>
          <View style={styles.qrcodeWrapper}>
            <View style={styles.qrcodeTop}>
              <Text style={styles.qrcodeTopText}>黄*强</Text>
              <Text
                style={[styles.qrcodeTopText, styles.qrcodeTopTextHightlight]}>
                添加
              </Text>
            </View>
            <View style={styles.qrcodeMain}>
              <Text style={styles.time}>{currentTime}</Text>
              <ImageBackground
                style={styles.qrcodeImg}
                source={require('../assets/images/qrcode/qrcode_gold.gif')}>
                <Needle
                  width={20}
                  height={20}
                  style={{
                    position: 'absolute',
                    right: -5,
                    top: -5,
                  }}
                />
              </ImageBackground>
              <Image
                style={styles.greenCode}
                source={require('../assets/images/qrcode/qrcode_green.png')}
              />
              <View style={styles.refreshCode}>
                <Icon name="cw" size={14} color={'#fff'} />
                <Text style={styles.refreshCodeText}>刷新健康码</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.mainContent}>
        <View style={styles.btnsWrapper}>
          <View style={styles.btn}>
            <View>
              <Text style={[styles.btnText, {fontSize: 14}]}>核酸检测</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.btnText,
                  {fontSize: 44, fontWeight: 'bold', marginRight: 5},
                ]}>
                24
              </Text>
              <View>
                <Text style={styles.btnText}>小时</Text>
                <Text style={styles.btnText}>阴性</Text>
              </View>
            </View>
            <Text style={styles.btnText}>2022-09-23 23:57:25</Text>
          </View>
          <View style={[styles.btn, {backgroundColor: '#fff'}]}>
            <View>
              <Text style={[styles.btnText, {color: '#666', fontSize: 14}]}>
                新冠疫苗
              </Text>
            </View>
            <Text style={{color: '#54a97b', fontSize: 20, marginTop: 10}}>
              第3针
            </Text>
            <Text style={[styles.btnText, {color: '#333'}]}>已接种第169天</Text>
            <Text style={[styles.btnText, {color: '#adadad', marginTop: 6}]}>
              2022-04-09
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={require('../assets/images/qrcode/card-background.png')}
            style={styles.cardBg}>
            <Text style={[styles.primaryColor, {fontSize: 16}]}>
              出示行程卡
            </Text>
            <Text style={[styles.primaryColor, {fontSize: 12}]}>核验行程</Text>
          </ImageBackground>
        </View>

        <View style={styles.userInfo}>
          <Image
            source={require('../assets/images/qrcode/qrcode_logo.png')}
            style={{
              position: 'absolute',
              right: 15,
              width: 100,
              height: 100,
              top: 8,
            }}
          />
          <View style={styles.userInfoTitle}>
            <Text style={[styles.primaryColor, {fontSize: 16}]}>个人信息</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
                marginRight: 5,
              }}>
              黄*强
            </Text>
            <Text style={{fontSize: 12}}>已实名认证</Text>
          </View>
          <View style={[styles.userInfoItem, {alignItems: 'flex-start'}]}>
            <Text style={{marginRight: 5}}>居住地址</Text>
            <Text
              numberOfLines={3}
              style={{flex: 1, marginRight: 5, color: '#333'}}>
              广东省深圳市龙华区民治街道上民治街道上民治街道广东省深圳市龙华区民治街道上民治街道上民治街道上12818号上12818号
              广东省深圳市龙华区民治街道上民治街道上民治街道广东省深圳市龙华区民治街道上民治街道上民治街道上12818号上12818号
            </Text>
          </View>
          <TouchableOpacity style={styles.switchCity}>
            <Text style={styles.primaryColor}>切换城市</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgContent: {
    flex: 1,
    marginHorizontal: 15,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 28,
  },
  qrcodeWrapper: {
    marginTop: 16,
    backgroundColor: '#fdfdfd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  qrcodeTop: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  qrcodeTopText: {
    fontSize: 14,
    color: '#333',
  },
  qrcodeTopTextHightlight: {
    color: '#558cd2',
    position: 'absolute',
    right: 15,
  },
  bg: {
    height: 500,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#0f6cd4',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: '#fff',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  qrcodeMain: {
    alignItems: 'center',
  },
  time: {
    fontSize: 22,
    color: '#000',
    marginVertical: 16,
  },
  qrcodeImg: {
    width: 200,
    height: 200,
  },
  greenCode: {
    width: 149,
    height: 31,
    resizeMode: 'cover',
    marginVertical: 8,
  },
  refreshCode: {
    marginBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: '#0062cf',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
  },
  refreshCodeText: {
    color: '#fff',
    paddingVertical: 5,
    fontSize: 12,
    marginLeft: 4,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  mainContent: {
    marginHorizontal: 15,
  },
  btnsWrapper: {
    height: 116,
    backgroundColor: 'red',
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    backgroundColor: '#0182f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
  },
  card: {
    marginVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: '#c6e0ff',
    height: 64,
  },
  cardBg: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryColor: {
    color: '#054aa1',
  },
  userInfo: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 100,
  },
  userInfoTitle: {
    backgroundColor: '#e4f0fe',
    marginVertical: 20,
    paddingLeft: 16,
    height: 36,
    justifyContent: 'center',
    width: 110,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    paddingLeft: 16,
  },
  switchCity: {
    height: 48,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
