/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';

import TabBar from '../components/tab-bar/TabBar';

import SvgLogo from '../assets/images/home/home_zhenguan.svg';
import SvgShiguan from '../assets/images/home/home_shiguan.svg';

import Hsjc from '../assets/images/home/home_hsjc.svg';
import Yizhen from '../assets/images/home/home_yizhen.svg';
import Menzhen from '../assets/images/home/home_menzhen.svg';
import Piyao from '../assets/images/home/home_piyao.svg';
import Kepu from '../assets/images/home/home_kepu.svg';
import Zhiyin from '../assets/images/home/home_zhiyin.svg';
import Saoma from '../assets/images/home/home_saoma.svg';
import Csm from '../assets/images/home/home_csm.svg';

export const orderList = [
  {
    title: '核酸检测预约（医院、社康）',
    desc: '全市各医院、社康中心核酸检测预约',
    iconSrc: <Hsjc width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '新冠疫苗接种预约',
    desc: '根据国家、省统一部署，面向个人市民提供\n疫苗接种预约',
    iconSrc: '',
  },
];

export const convienceList = [
  {
    title: '联合义诊',
    desc: '腾讯联合健康平台提供在线义诊',
    iconSrc: <Yizhen width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '发热门诊',
    desc: '医疗救治定点医院和发热门诊一览表',
    iconSrc: <Menzhen width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '疫情辟谣',
    desc: '新型冠状病毒肺炎实时辟谣',
    iconSrc: <Piyao width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '肺炎科普',
    desc: '新型冠状病毒肺炎健康科普小知识',
    iconSrc: <Kepu width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '药店登记',
    desc: '购买特殊药品或体温异常居民，请先\n选择申报人信息，并扫药店二维码进\n行登记',
    iconSrc: '',
  },
];

export const epidemicList = [
  {
    title: '集中隔离',
    desc: '集中隔离点风险管理工作人员管理及\n每日健康申报，隔离人员心理评估自\n主申报',
    iconSrc: require('../assets/images/home/home_gelirenyuan.png'),
  },
  {
    title: '深圳疫情防控指引',
    desc: '深圳市疫情防控要求及其操作指引',
    iconSrc: <Zhiyin width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
];

export const list = [
  {
    title: '行程自查',
    desc: '服务由三大运营商与通信院提供\n快速自查疫情期间7天内到访的城市',
    iconSrc: require('../assets/images/home/home_xingcheng.png'),
  },
  {
    title: '来（返）深行程申报',
    desc: '2022年1月1日至今来（返）深行程报备',
    iconSrc: require('../assets/images/home/home_shenbao.png'),
  },
  {
    title: '客货车入深申报',
    desc: '入深客货车预约申报，便捷领取申报凭证\n二维码，快速通行\n该服务由深圳市交通局提供',
    iconSrc: require('../assets/images/home/home_huoche.png'),
  },
  {
    title: '核酸采样点',
    desc: '深圳市便民核酸采样点服务状态查询\n就近采样，避开拥堵',
    iconSrc: require('../assets/images/home/home_xingcheng.png'),
  },
  {
    title: '自主申报',
    desc: '自主申报，享受精准指导和服务\n众志成城，共抗疫情',
    iconSrc: require('../assets/images/home/home_shenbao.png'),
  },
  {
    title: 'i深圳资讯',
    desc: '抗疫复工，政策资讯，党建服务，功能服务',
    iconSrc: require('../assets/images/home/home_xingcheng.png'),
  },
  {
    title: '老幼健康码查询',
    desc: '解决老年人运用智能技术困难\n帮助老人查询健康码，建设互助社会',
    iconSrc: require('../assets/images/home/home_laoyou.png'),
  },
  {
    title: '申领场所码',
    desc: '场所码用于重点场所人员出入登记，由场所负责人\n申领张贴，仅用于疫情防控',
    iconSrc: <Csm width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '扫场所码',
    desc: '扫一扫场所码，快速完成场所码登记和通行',
    iconSrc: <Saoma width={48} height={48} style={{marginHorizontal: 14}} />,
    svg: true,
  },
  {
    title: '我的通行场所（试点）',
    desc: '更新个人信息，扫企业码进入企业，方便进入场所',
    iconSrc: require('../assets/images/home/home_xingcheng.png'),
  },
];

// page button
const pageButtonStyle = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    flexDirection: 'row',
    right: 16,
    width: 80,
    height: 26,
    backgroundColor: 'rgba(0, 0, 0, .15)',
    borderRadius: 13,
    zIndex: 999,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  rightCircle: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
  },
});
const PageRightButton = () => {
  const currentHeight = StatusBar.currentHeight;

  return (
    <View style={[pageButtonStyle.wrapper, {marginTop: currentHeight + 5}]}>
      <View style={pageButtonStyle.item}>
        <View style={pageButtonStyle.circle} />
        <View
          style={[
            pageButtonStyle.circle,
            {width: 6, height: 6, borderRadius: 3, marginHorizontal: 3},
          ]}
        />
        <View style={pageButtonStyle.circle} />
      </View>

      <View style={[pageButtonStyle.item]}>
        <View
          style={[
            pageButtonStyle.rightCircle,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <View style={pageButtonStyle.circle} />
        </View>
      </View>
    </View>
  );
};

// home list
// eslint-disable-next-line no-shadow
const HomeList = ({title, list}) => {
  return (
    <View style={{marginBottom: 36}}>
      <Text style={listStyles.listTitle}>{title}</Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderTopColor: '#f3f3f3',
          borderBottomColor: '#f3f3f3',
          borderRightColor: '#d1e0ea',
          borderLeftColor: '#d1e0ea',
        }}>
        {list.map(item => (
          <View key={item.desc} style={listStyles.itemWrapper}>
            {item?.svg ? (
              item.iconSrc
            ) : (
              <Image source={item.iconSrc} style={listStyles.itemIcon} />
            )}
            <View>
              <Text style={listStyles.itemTitle}>{item.title}</Text>
              <Text style={listStyles.itemDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
const listStyles = StyleSheet.create({
  listTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
  },
  itemWrapper: {
    paddingVertical: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  itemIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 14,
    resizeMode: 'cover',
  },
  itemTitle: {
    fontSize: 18,
    color: '#000',
  },
  itemDesc: {
    marginTop: 5,
    fontSize: 12,
  },
});

const HomeSreen = () => {
  const handleBtnClick = type => {
    if (type === 'hesuan') {
      console.log('hesuan');
    } else if (type === 'yimiao') {
      console.log('yimiao');
    }
  };

  const handleQRcodePress = () => {};

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image
        style={styles.img}
        source={require('../assets/images/home/home_bg.png')}
      />
      <PageRightButton />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <TabBar />
          <TouchableWithoutFeedback onPress={handleQRcodePress}>
            <View style={styles.qrcode}>
              <ImageBackground
                style={styles.qrcodeBg}
                source={require('../assets/images/home/home_qrcode_bg.png')}>
                <Image
                  style={styles.qrcodeIcon}
                  source={require('../assets/images/home/home_qrcode_logo.gif')}
                />
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      includeFontPadding: false,
                      textAlignVertical: 'center',
                    }}>
                    我的健康码
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 6,
                      includeFontPadding: false,
                      textAlignVertical: 'center',
                    }}>
                    亮出健康，扫得关爱
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.btnWrapper}>
            <TouchableWithoutFeedback onPress={() => handleBtnClick('hesuan')}>
              <View style={styles.btn}>
                <Image
                  source={require('../assets/images/home/home_hesuan.png')}
                  style={styles.btnBgImage}
                />
                <SvgShiguan width={16} height={16} style={{marginRight: 4}} />
                <Text
                  style={{fontSize: 18, fontWeight: '600', color: '#1f3067'}}>
                  核酸检测记录
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleBtnClick('yimiao')}>
              <View style={styles.btn}>
                <Image
                  source={require('../assets/images/home/home_yimiao.png')}
                  style={styles.btnBgImage}
                />
                <SvgLogo width={24} height={24} style={{marginRight: 2}} />

                <Text
                  style={{fontSize: 18, fontWeight: '600', color: '#1f3067'}}>
                  疫苗接种记录
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <HomeList title={'常用专区'} list={list} />
            <HomeList title={'预约专区'} list={orderList} />
            <HomeList title={'便民服务'} list={convienceList} />
            <HomeList title={'防疫专区'} list={epidemicList} />
          </View>
          <View style={styles.footer}>
            <Text style={{fontSize: 12}}>
              深圳市政府主办/深圳是政务服务数据管理局承办
            </Text>
            <Text style={{fontSize: 12, marginTop: 2}}>
              腾讯公司/腾讯云提供技术支持
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSreen;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    marginHorizontal: 20,
  },
  content: {
    marginTop: 200,
    backgroundColor: '#fff',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  img: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  },
  tabBar: {
    overflow: 'hidden',
    height: 180,
    left: 15,
    right: 15,
    top: 200,
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  tabNav: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabText: {
    flex: 1,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    backgroundColor: '#f3f4f8',
  },
  tabTextActive: {
    backgroundColor: '#fff',
  },
  tabContent: {
    flex: 1,
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
  qrcode: {
    marginTop: 30,
    height: 98,
    flex: 1,
    alignItems: 'center',
  },
  qrcodeBg: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  qrcodeIcon: {
    height: 88,
    width: 56,
    marginTop: -40,
    marginLeft: 20,
    marginRight: 15,
    resizeMode: 'cover',
  },
  btnWrapper: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    width: '47%',
    borderWidth: 1,
    borderColor: '#f1f2f4',
    borderTopColor: '#d7e7fa',
    justifyContent: 'center',
  },
  btnBgImage: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 10,
    bottom: 3,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
});
