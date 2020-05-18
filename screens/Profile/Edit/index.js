import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import {Avatar, Input, Button} from 'react-native-elements';
import axios from 'axios';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      website: '',
      bio: '',
      successMessage: '',
    };
  }

  render() {
    const handleSave = () => {
      const sentData = {
        title: this.state.name,
        body: this.state.bio,
        userId: this.state.username,
      };

      axios
        .post('https://jsonplaceholder.typicode.com/posts', sentData)
        .then(response => {
          const successData = `Selamat data ${response.data.title}, bio ${
            response.data.body
          } ditambahkan dengan Id: ${response.data.id}`;

          this.setState({successMessage: successData});
        })
        .catch(function(error) {
          this.setState({successMessage: 'Error'});
        });
    };
    return (
      <ScrollView style={styles.editContainer}>
        <View style={styles.editAvatar}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                'https://asset.kompas.com/crops/X8k7MhinHty-t_2D3gDmVF6Wrn0=/327x168:959x590/750x500/data/photo/2020/04/22/5e9faf19689dc.png',
            }}
            showAccessory
          />
        </View>
        <View>
          <Input
            placeholder="Name"
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            placeholder="Username"
            onChangeText={value => this.setState({username: value})}
          />
          <Input
            placeholder="Website"
            onChangeText={value => this.setState({website: value})}
          />
          <Input
            placeholder="Bio"
            onChangeText={value => this.setState({bio: value})}
          />
        </View>
        <View>
          <Button title="Simpan" onPress={handleSave} />
        </View>
        <View>
          <Text>{this.state.successMessage}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  editContainer: {
    padding: 16,
  },
  editAvatar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Edit;
