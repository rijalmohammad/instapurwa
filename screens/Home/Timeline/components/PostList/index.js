import React, {Fragment, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Avatar, Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// class PostList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       post: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('https://jsonplaceholder.typicode.com/albums/2/photos')
//       .then(postData => {
//         const newData = postData.data;
//         this.setState({post: newData});
//       });
//   }

//   render() {
//     const {post} = this.state;

//     const handleClickPlane = () => {
//       this.props.navigation.navigate('Message');
//     };

//     return (
// <Fragment>
//   {post.map((item, index) => (
//     <View style={styles.postContainer}>
//       <View style={styles.postInfo}>
//         <View style={styles.postProfile}>
//           <Avatar
//             size="small"
//             rounded
//             source={{
//               uri: item.thumbnailUrl,
//             }}
//           />
//           <Text style={styles.postUser}>{item.id}</Text>
//         </View>
//         <MaterialCommunityIcons name="dots-horizontal" color="black" />
//       </View>
//       <Image
//         source={{
//           uri: item.url,
//         }}
//         style={styles.postImage}
//       />
//       <View style={styles.iconContainer}>
//         <View style={styles.iconLeft}>
//           <View style={styles.iconItem}>
//             <MaterialCommunityIcons
//               name="heart-outline"
//               size={30}
//               color="black"
//             />
//           </View>
//           <View style={styles.iconItem}>
//             <MaterialCommunityIcons
//               name="message-outline"
//               size={30}
//               color="black"
//             />
//           </View>
//           <TouchableWithoutFeedback
//             style={styles.iconItem}
//             onPress={handleClickPlane}>
//             <FontAwesome name="paper-plane-o" size={30} color="black" />
//           </TouchableWithoutFeedback>
//         </View>
//         <View>
//           <MaterialCommunityIcons
//             name="bookmark-outline"
//             size={30}
//             color="black"
//           />
//         </View>
//       </View>
//       <View style={styles.postStatus}>
//         <Text style={styles.postUsername}>{item.id}</Text>
//         <Text>{item.title}</Text>
//       </View>
//     </View>
//   ))}
// </Fragment>
//     );
//   }
// }

const PostList = ({navigation}) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums/2/photos')
      .then(postData => {
        const newData = postData.data;
        setPost(newData);
      });
  }, []);

  const handleClickPlane = () => {
    navigation.navigate('Message');
  };

  return (
    <Fragment>
      {post.map((item, index) => (
        <View style={styles.postContainer}>
          <View style={styles.postInfo}>
            <View style={styles.postProfile}>
              <Avatar
                size="small"
                rounded
                source={{
                  uri: item.thumbnailUrl,
                }}
              />
              <Text style={styles.postUser}>{item.id}</Text>
            </View>
            <MaterialCommunityIcons name="dots-horizontal" color="black" />
          </View>
          <Image
            source={{
              uri: item.url,
            }}
            style={styles.postImage}
          />
          <View style={styles.iconContainer}>
            <View style={styles.iconLeft}>
              <View style={styles.iconItem}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={30}
                  color="black"
                />
              </View>
              <View style={styles.iconItem}>
                <MaterialCommunityIcons
                  name="message-outline"
                  size={30}
                  color="black"
                />
              </View>
              <TouchableWithoutFeedback
                style={styles.iconItem}
                onPress={handleClickPlane}>
                <FontAwesome name="paper-plane-o" size={30} color="black" />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <MaterialCommunityIcons
                name="bookmark-outline"
                size={30}
                color="black"
              />
            </View>
          </View>
          <View style={styles.postStatus}>
            <Text style={styles.postUsername}>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        </View>
      ))}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  postProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUser: {
    paddingLeft: 8,
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  iconContainer: {
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconLeft: {
    flexDirection: 'row',
  },
  iconItem: {
    paddingRight: 8,
  },
  postStatus: {
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
  },
  postUsername: {
    fontWeight: 'bold',
    paddingRight: 4,
  },
});

export default PostList;
