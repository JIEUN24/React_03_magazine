import React from "react";
import { useSelector } from "react-redux";
import { firestore } from "../shared/firebase";
import Post from "../components/Post";
import Comment from "../components/Comment";
// import CommentList from "../components/CommentList";
// import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {

    const id = props.match.params.id;

    const user_info = useSelector((state) => state.user.user);

    const post_list = useSelector(store => store.post.list);
    const post_idx = post_list.findIndex(p => p.id === id);
    const post_data = post_list[post_idx];
    const [post, setPost] = React.useState(post_data ? post_data : null);

    React.useEffect(() => {
      const postDB = firestore.collection("post");
      postDB.doc(id).get().then(doc => {
        let _post = {
          id: doc.id,
          ...doc.data()
        };

        let post = {
          id: doc.id,
          user_info: {
            user_name: _post.user_name,
            user_profile: _post.user_profile,
            user_id: _post.user_id
          },
          image_url: _post.image_url,
          contents: _post.contents,
          comment_cnt: _post.comment_cnt,
          layout:_post.layout,
          insert_dt: _post.insert_dt,
        };

        setPost(post);
      })
    }, [])

    return (
      <React.Fragment>
        {post && <Post {...post} is_me = {post.user_info.user_id === user_info.uid}/>}
        <Comment/>
      </React.Fragment>
    );
}

export default PostDetail;
