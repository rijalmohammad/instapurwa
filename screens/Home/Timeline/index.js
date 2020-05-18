import React from 'react';
import {ScrollView} from 'react-native';
import StoryList from './components/StoryList';
import PostList from './components/PostList';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <StoryList />
        <PostList navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Home;
