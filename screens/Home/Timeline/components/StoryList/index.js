import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import axios from 'axios';

// class StoryList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: [],
//     };
//   }

//   componentDidMount() {
//     const url = 'https://reqres.in/api/users?page=2';

//     axios.get(url).then(userData => {
//       const newData = userData.data.data;
//       this.setState({user: newData});
//     });
//   }

//   render() {
//     const {user} = this.state;
//     return (
//       <ScrollView style={styles.storyContainer} horizontal={true}>
//         {user.map((item, index) => (
//           <View style={styles.storyPerson} key={index}>
//             <Avatar
//               size="medium"
//               rounded
//               source={{
//                 uri: item.avatar,
//               }}
//             />
//             <Text>{item.first_name}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     );
//   }
// }

const StoryList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = 'https://reqres.in/api/users?page=2';

    axios.get(url).then(userData => {
      const newData = userData.data.data;
      setUser(newData);
    });
  }, []);

  return (
    <ScrollView style={styles.storyContainer} horizontal={true}>
      {user.map((item, index) => (
        <View style={styles.storyPerson} key={index}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: item.avatar,
            }}
          />
          <Text>{item.first_name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  storyPerson: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
  },
});

export default StoryList;
