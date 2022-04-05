import React from "react";

// 컴포넌트
import Post from '../components/Post';
import { Grid } from "../elements";

// 리덕스 관련
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  // const layout = useSelector((state) => state.post.layout); 
  // console.log(layout)
  console.log(post_list)

  React.useEffect(() => {
    if(post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
     <Grid margin="85px"/>
      {post_list.map((p, idx) => {
        if(p.user_info.user_id === user_info?.uid) {
          return <Post key={p.id} {...p} is_me/>
        }else{
          return <Post key={p.id} {...p}/>
        }
      })}

    </React.Fragment>
  )
}

export default PostList;