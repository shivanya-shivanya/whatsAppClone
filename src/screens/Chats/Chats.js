import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Modal, Animated, ImageBackground, TouchableWithoutFeedback } from 'react-native';

export default function Chats() {
  const [val, setVal] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [tab, setTab] = useState(0);

  const data = [
    { id: 1, img: require('../../assets/images/dev.jpeg'), name: "Team Lead React Native", desc: "Hello ...", time: "12:25 AM" },
    { id: 2, img: require('../../assets/images/user.jpeg'), name: "Developer", desc: "Good Morning everyone ...", time: "8:40 PM" },
    { id: 3, img: require('../../assets/images/tester.png'), name: "Tester", desc: "Sure...", time: "2:05 AM" },
    { id: 4, img: require('../../assets/images/pm.jpeg'), name: "Project Manager", desc: "Cool", time: "6:25 AM" },
    { id: 5, img: require('../../assets/images/ml.jpeg'), name: "ML Developer", desc: "Cool", time: "8:15 PM" },
    { id: 6, img: require('../../assets/images/dev.jpeg'), name: "QA Lead", desc: "Cool", time: "9:25 AM" },
    { id: 7, img: require('../../assets/images/user.jpeg'), name: "Developer", desc: "Cool", time: "1:25 PM" },
    { id: 8, img: require('../../assets/images/dummy.png'), name: "HR", desc: "Cool", time: "5:04 AM" },
  ];

  const openModal = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setSelectedUser(null);
    });
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => openModal(item)}>
        <View style={{ marginHorizontal: 10, alignSelf: 'center' }}>
          <Image source={item.img} style={[styles.imgStyle, { marginRight: 5, width: 50, height: 50, borderRadius: 50 }]} />
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
        <View>
          <Text style={{ color: "#000", fontSize: 16, fontWeight: '600' }}>{item.name}</Text>
        </View>
        <View>
          <Text>{item.desc}</Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', marginRight: 10, alignSelf: 'center' }}>
        <Text style={{ color: "#000", fontSize: 14 }}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.mainView}>
          <Text style={{ color: '#4BA586', fontSize: 20, fontWeight: '700', paddingTop: 5 }}>
            WhatsApp
          </Text>
        </View>
        <View style={styles.imgView}>
          <View>
            <Image source={require('../../assets/images/qr.png')} style={[styles.imgStyle, { marginRight: 8, width: 30, height: 30, marginTop: 2 }]} />
          </View>
          <View>
            <Image source={require('../../assets/images/cam.png')} style={[styles.imgStyle, { marginRight: 5, width: 30, height: 30, marginTop: 2 }]} />
          </View>
          <View>
            <Image source={require('../../assets/images/dot.png')} style={[styles.imgStyle, { width: 25, height: 25, resizeMode: 'contain', marginTop: 5 }]} />
          </View>
        </View>
      </View>
      <View>
        <TextInput
          value={val}
          onChangeText={(val) => setVal(val)}
          style={styles.input}
        />
      </View>
      <View style={styles.searchIcon}>
        <Image source={require('../../assets/images/ssearch.png')} style={styles.searchIconStyle} />
      </View>
      <View style={[styles.searchIcon, { paddingHorizontal: 30 }]}>
        <Text style={{ fontSize: 14 }}>Search...</Text>
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 15 }}>
        <TouchableOpacity style={[styles.btn, { marginRight: 10, width: 45, backgroundColor: tab === 0 ? "#4BA586" : "#DFDFDF" }]} onPress={() => setTab(0)}>
          <Text style={{ textAlign: 'center', fontSize: 12, color: tab === 0 ? "#fff" : "#888888" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10, padding: 5, backgroundColor: tab === 1 ? "#4BA586" : "#DFDFDF", borderRadius: 15 }} onPress={() => setTab(1)}>
          <Text style={{ textAlign: 'center', fontSize: 12, color: tab === 1 ? "#fff" : "#888888" }}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 10, padding: 5, backgroundColor: tab === 2 ? "#4BA586" : "#DFDFDF", borderRadius: 15 }} onPress={() => setTab(2)}>
          <Text style={{ textAlign: 'center', fontSize: 12, color: tab === 2 ? "#fff" : "#888888" }}>Groups</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{position:'absolute',bottom:15,right:10,backgroundColor:'#4BA586',borderRadius:10,padding:10,zIndex:1}}>
        <Image source={require('../../assets/images/add.png')} style={{width:25,height:25,borderRadius:15,tintColor:'#fff'}} />
      </TouchableOpacity>
      {tab === 0 && <>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={<View style={{ padding: 10, alignSelf: "center" }} />}
        />
        {isModalVisible && (
          <Modal
            transparent={true}
            animationType="none"
            visible={isModalVisible}
            onRequestClose={closeModal}
          >
            <TouchableWithoutFeedback onPress={closeModal}>
              <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
                <View style={styles.modalContent}>
                  {selectedUser && (
                    <ImageBackground source={selectedUser.img} style={styles.profileImageBackground}>
                      <View style={styles.overlay}>
                        <Text style={styles.profileName}>{selectedUser.name}</Text>
                      </View>
                    </ImageBackground>
                  )}
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginLeft: 20 }}>
                      <Image source={require('../../assets/images/chat.png')} style={styles.modalImgStyle} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Image source={require('../../assets/images/call.png')} style={[styles.modalImgStyle, { width: 20, height: 20, marginTop: -7 }]} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 0 }}>
                      <Image source={require('../../assets/images/videoCall.png')} style={[styles.modalImgStyle, { width: 38, height: 38, marginTop: -15 }]} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Image source={require('../../assets/images/info.png')} style={[styles.modalImgStyle, { width: 30, height: 30, marginTop: -12 }]} />
                    </View>
                  </View>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </>}
      {tab === 1 && <>
        <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 14, color: '#000', fontWeight: '500' }}>No Unread messages yet!</Text>
        </View>
      </>}
      {tab === 2 && <>
        <View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 14, color: '#000', fontWeight: '500' }}>No Groups found!</Text>
        </View>
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  subContainer: { paddingVertical: 15, flexDirection: 'row', width: '100%' },
  imgStyle: { width: 35, height: 35, resizeMode: 'contain' },
  imgView: { flexDirection: 'row', marginLeft: 'auto', marginRight: 3 },
  mainView: { marginHorizontal: 10 },
  input: { width: '95%', alignSelf: 'center', borderRadius: 30, borderWidth: 0, borderColor: 'gray', backgroundColor: "#DFDFDF", paddingLeft: 45, height: 40 },
  searchIcon: { position: 'absolute', top: 73, left: 25 },
  searchIconStyle: { width: 20, height: 20, resizeMode: 'contain', tintColor: '#888888' },
  btn: { padding: 5, backgroundColor: "#DFDFDF", borderRadius: 15 },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 250,
    height: 300, // Adjust height as needed
    backgroundColor: '#fff',
    borderRadius: 0,
    overflow: 'hidden',
  },
  profileImageBackground: {
    width: '100%',
    height: '93%',
  },
  overlay: {
    // flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  profileName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'left',
    paddingHorizontal: 10, paddingVertical: 10
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalImgStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#4BA586',
    marginTop: -10
  }
});
