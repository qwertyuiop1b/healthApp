/* eslint-disable react-native/no-inline-styles*/
import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {PageRightButton} from './home';

import Icon from 'react-native-vector-icons/Entypo';
import Heart from '../assets/images/profile/heart.svg';
import Help from '../assets/images/profile/help.svg';
import Me from '../assets/images/profile/me.svg';
import QRcode from '../assets/images/profile/qrcode.svg';
import SMRZ from '../assets/images/profile/smrz.svg';
import Verified from '../assets/images/profile/verified.svg';
import RealName from '../assets/images/profile/realname.svg';
import Wenduji from '../assets/images/profile/wenduji.svg';

const list = [
  [
    {
      title: '我的健康码',
      url: 'QRcode',
      icon: <Heart width={20} height={20} />,
      rightIcon: (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <QRcode width={20} height={20} style={{marginRight: 14}} />
          <Icon name="chevron-right" size={20} />
        </View>
      ),
    },
    {
      title: '实名认证',
      icon: <RealName width={20} height={20} />,
      rightIcon: (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 12, marginRight: 6}}>已认证</Text>
          <Verified width={16} height={16} />
          <Icon name="chevron-right" size={20} />
        </View>
      ),
    },
    {
      title: '我的健康上报',
      icon: <Wenduji width={20} height={20} />,
      rightIcon: <Icon name="chevron-right" size={20} />,
    },
  ],
  [
    {
      title: '我的来（返）深行程记录',
      icon: <Wenduji width={20} height={20} />,
      rightIcon: <Icon name="chevron-right" size={20} />,
    },
  ],
  [
    {
      title: '我的核酸检测记录',
      icon: <Me width={20} height={20} />,
      rightIcon: <Icon name="chevron-right" size={20} />,
    },
    {
      title: '我的新冠疫苗接种记录',
      icon: <Me width={20} height={20} />,
      rightIcon: <Icon name="chevron-right" size={20} />,
    },
    {
      title: '帮助与反馈',
      icon: <Help width={20} height={20} />,
      rightIcon: <Icon name="chevron-right" size={20} />,
    },
  ],
];

export default function ProfileScreen({navigation}) {
  const currentHeight = StatusBar.currentHeight;

  const handlePressItem = url => {
    url && navigation.navigate(url);
  };

  return (
    <View style={styles.container}>
      <PageRightButton circleColor="#000" backgroundColor="#fff" />
      <StatusBar />
      <View style={styles.userInfo}>
        <Text
          style={{
            marginTop: currentHeight + 6,
            fontSize: 18,
            marginLeft: 20,
            color: '#333',
          }}>
          个人中心
        </Text>
        <View style={{marginBottom: 24, marginLeft: 34}}>
          <Text style={{color: '#cacaca', fontSize: 16}}>13500042456</Text>
        </View>
      </View>

      {list.map((itemList, index) => (
        <View style={styles.itemWrapper} key={index}>
          {itemList.map(item => (
            <TouchableOpacity onPress={() => handlePressItem(item.url)}>
              <View style={styles.item} key={item.title}>
                <View style={{flexDirection: 'row'}}>
                  {item.icon}
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
                {item.rightIcon}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={[styles.itemText, {fontWeight: 'bold', marginLeft: 0}]}>
          退出登录
        </Text>
      </TouchableOpacity>
      <View style={styles.destoryAccount}>
        <Text>注销账户</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  userInfo: {
    height: 120,
    backgroundColor: '#fff',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  itemWrapper: {
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  itemText: {
    color: '#333',
    fontSize: 16,
    marginLeft: 14,
  },
  logoutBtn: {
    height: 48,
    marginTop: 10,
    marginHorizontal: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  destoryAccount: {
    marginTop: 18,
    alignItems: 'center',
  },
});
