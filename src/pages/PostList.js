import React from "react";

// 컴포넌트
import Post from '../components/Post';
import { Grid } from "../elements";

// 리덕스 관련
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  // const layout = useSelector((state) => state.post.layout); 
  // console.log(layout)
  // console.log(post_list)
  
  const {history} = props;

  React.useEffect(() => {
    if(post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid margin="85px"/>
      <Grid bg="#F5F5F5" padding="8px 0px">
        <InfinityScroll
          callNext={() => {
            // console.log("next!");
            dispatch(postActions.getPostFB(paging.next));
          }}
          is_next={paging.next ? true : false}
          loading={is_loading}>
          {post_list.map((p, idx) => {
            if (p.user_info.user_id === user_info ?.uid) {
              return (
                <Grid
                  bg="#ffffff"
                  margin="8px 0px"
                  key={p.id}
                  onClick={() => {
                    history.push(`/post/${p.id}`)
                  }}
                  >
                  <Post key={p.id} {...p} is_me="is_me"/>
                </Grid>
              )
            } else {
              return (
                <Grid
                  bg="#ffffff"
                  margin="8px 0px"
                  key={p.id}
                  onClick={() => {
                    history.push(`/post/${p.id}`);
                    
                  }}
                  >
                  <Post key={p.id} {...p}/>
                </Grid>
               )
              }
            })
          }
        </InfinityScroll>
      </Grid>
    </React.Fragment>
)
}

export default PostList;