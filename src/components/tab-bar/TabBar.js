/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {textStyle} from '../../assets/styles';

const TAB1_KEY = 'TAB1',
  TAB2_KEY = 'TAB2';

export default function TabBar() {
  const [tabFirst, setTabFirst] = useState(true);

  const [data, setData] = useState({
    confirm: '',
    suspect: '',
    heal: '',
    dead: '',
    updateTime: '',
  });

  useEffect(() => {
    const url =
      'https://szgd.tgovcloud.com/qqnews/yqinfo/GetData?name=disease_china_total';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async response => {
        const jsonData = await response.json();
        const result = JSON.parse(jsonData.data);
        setData({
          confirm: result.confirm,
          suspect: result.suspect,
          heal: result.heal,
          dead: result.dead,
          updateTime: result.lastUpdateTime.replaceAll('-', '/'),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handlePress = key => {
    if (key === TAB1_KEY) {
      setTabFirst(true);
    } else {
      setTabFirst(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => handlePress(TAB1_KEY)}>
          <View style={styles.headerTitle}>
            <Text
              style={[
                styles.headerTitle,
                textStyle.textAlignCenter,
                tabFirst ? styles.headerTitleActive : null,
              ]}>
              全国疫情状况
            </Text>
            {tabFirst ? <View style={styles.headerTriangle} /> : null}
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handlePress(TAB2_KEY)}>
          <View style={styles.headerTitle}>
            <Text
              style={[
                styles.headerTitle,
                textStyle.textAlignCenter,
                !tabFirst ? styles.headerTitleActive : null,
              ]}>
              防疫三字经
            </Text>
            {tabFirst ? null : <View style={styles.headerTriangleLeft} />}
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.content}>
        {tabFirst ? (
          <>
            <View style={styles.tabContentTop}>
              <View>
                <Text style={[{color: '#bf3c42'}, styles.tabContentTopItem]}>
                  {data.confirm}
                </Text>
                <Text>确诊病例</Text>
              </View>
              <View>
                <Text style={[{color: '#d8ab7f'}, styles.tabContentTopItem]}>
                  {data.suspect}
                </Text>
                <Text>疑似病例</Text>
              </View>
              <View>
                <Text style={[{color: '#3a9966'}, styles.tabContentTopItem]}>
                  {data.heal}
                </Text>
                <Text>治愈人数</Text>
              </View>
              <View>
                <Text style={[{color: '#1a1a1a'}, styles.tabContentTopItem]}>
                  {data.dead}
                </Text>
                <Text>死亡人数</Text>
              </View>
            </View>
            <View style={styles.tabContentBottom}>
              <ImageBackground
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                source={require('../../assets/images/home/home_bg_shenzhen.png')}>
                <Text>截至{data.updateTime}</Text>
                <Text>数据来自国家卫健委</Text>
              </ImageBackground>
            </View>
          </>
        ) : (
          <>
            <Image
              source={require('../../assets/images/home/home_szj.png')}
              style={{width: '100%'}}
            />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  includeFontPadding: false,
                  textAlignVertical: 'center',
                }}>
                查看完整内容
              </Text>
              <Icon name="chevron-small-right" size={20} />
            </View>
            <Image
              source={require('../../assets/images/home/home_bg_shenzhen.png')}
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 343,
                height: 54,
                resizeMode: 'cover',
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}

const containerHeight = 180,
  headerFlex = 1,
  contentFlex = 3;
const styles = StyleSheet.create({
  container: {
    height: containerHeight,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flex: headerFlex,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerWrapper: {
    flex: 1,
  },
  headerTitle: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f3f4f8',
    color: '#333',
  },
  headerTitleActive: {
    backgroundColor: '#fff',
  },
  headerTriangle: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    borderWidth: containerHeight / (headerFlex + contentFlex) / 2,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderRightColor: '#f3f4f8',
    borderTopColor: '#f3f4f8',
    borderBottomColor: '#fff',
    borderLeftColor: '#fff',
    zIndex: 9,
  },
  headerTriangleLeft: {
    position: 'absolute',
    top: 0,
    width: 0,
    height: 0,
    left: -20,
    borderWidth: containerHeight / (headerFlex + contentFlex) / 2,
    borderRightWidth: 10,
    borderLeftWidth: 10,
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    zIndex: -1,
  },
  content: {
    flex: contentFlex,
    backgroundColor: '#fff',
  },
  tabContentTop: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tabContentTopItem: {
    textAlign: 'center',
  },

  tabContentBottom: {
    flex: 3,
    paddingLeft: 20,
    justifyContent: 'center',
  },
});
