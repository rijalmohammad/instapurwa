import React from 'react';
import {ScrollView, Text, View, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Button, Image} from 'react-native-elements';
import {Tabs, TabHeading, Icon, Tab} from 'native-base';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleEdit = () => {
      console.log('clicked');
      this.props.navigation.navigate('Edit');
    };

    const arrayNumber = [
      {
        id: 1,
        number: '72',
        description: 'Postingan',
      },
      {
        id: 2,
        number: '812',
        description: 'Pengiktu',
      },
      {
        id: 3,
        number: '532',
        description: 'Mengikuti',
      },
    ];

    const imageData = [
      {
        id: 1,
        image:
          'https://www.wowkeren.com/display/images/photo/2019/10/09/00277245.jpg',
      },
      {
        id: 2,
        image:
          'https://asset.kompas.com/crops/X8k7MhinHty-t_2D3gDmVF6Wrn0=/327x168:959x590/750x500/data/photo/2020/04/22/5e9faf19689dc.png',
      },
      {
        id: 3,
        image:
          'https://cdn.akurat.co/images/uploads/images/akurat_20190206104448_741b2L.jpg',
      },
    ];

    return (
      <ScrollView>
        <View>
          <View style={styles.avatarInfo}>
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  'https://asset.kompas.com/crops/X8k7MhinHty-t_2D3gDmVF6Wrn0=/327x168:959x590/750x500/data/photo/2020/04/22/5e9faf19689dc.png',
              }}
            />
            <View style={styles.avatarText}>
              {arrayNumber.map((item, index) => (
                <View style={styles.avatarItem} key={item.id}>
                  <Text style={styles.avatarNumber}>{item.number}</Text>
                  <Text>{item.description}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.bioInfo}>
            <Text style={styles.bioTitle}>Mohammad Rijal</Text>
            <Text style={styles.bioDesc}>Biodata Lalalalala</Text>
            <Text style={styles.bioUrl}>https://www.purwadhika.com</Text>
          </View>
        </View>
        <View style={styles.buttonEdit}>
          <Button title="Edit Profil" type="outline" onPress={handleEdit} />
        </View>
        <View style={styles.storyImage}>
          <View style={styles.storyItem}>
            <Avatar
              size="medium"
              rounded
              source={{
                uri:
                  'https://asset.kompas.com/crops/X8k7MhinHty-t_2D3gDmVF6Wrn0=/327x168:959x590/750x500/data/photo/2020/04/22/5e9faf19689dc.png',
              }}
            />
          </View>
          <View style={styles.storyItem}>
            <Avatar
              size="medium"
              rounded
              source={{
                uri:
                  'https://asset.kompas.com/crops/X8k7MhinHty-t_2D3gDmVF6Wrn0=/327x168:959x590/750x500/data/photo/2020/04/22/5e9faf19689dc.png',
              }}
            />
          </View>
        </View>
        <View>
          <Tabs tabBgColor="#ffffff">
            <Tab
              tabDefaultBg="#ffffff"
              heading={
                <TabHeading>
                  <Icon name="apps" />
                </TabHeading>
              }>
              <View style={styles.tabContent}>
                {imageData.map((item, index) => (
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    style={styles.tabImage}
                    key={item.id}
                  />
                ))}
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="apps" />
                </TabHeading>
              }>
              <Text>Mohammad</Text>
            </Tab>
          </Tabs>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatarInfo: {
    flexDirection: 'row',
    padding: 16,
  },
  avatarText: {
    paddingLeft: 24,
    flexDirection: 'row',
  },
  avatarItem: {
    paddingRight: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarNumber: {
    fontWeight: 'bold',
  },
  bioInfo: {
    padding: 16,
    paddingTop: 0,
  },
  bioTitle: {
    fontWeight: 'bold',
  },
  bioUrl: {
    color: '#1d59f2',
  },
  buttonEdit: {
    padding: 16,
    paddingTop: 0,
  },
  storyImage: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 0,
  },
  storyItem: {
    paddingRight: 16,
  },
  tabContent: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  tabImage: {
    width: Dimensions.get('window').width / 3,
    borderRightWidth: 1,
    borderRightColor: 'white',
    height: Dimensions.get('window').width / 3,
  },
});

export default Person;
