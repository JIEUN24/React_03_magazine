import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../elements";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as deleteActions } from "../redux/modules/post";

const Post = (props) => {

  // console.log(props.contents)
  // console.log(props.layout)

  const dispatch = useDispatch();
  const deletePost = (event) => {
    event.stopPropagation();
    dispatch(deleteActions.deletePostFB(props.id));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        {/* 게시자 및 작성한 시간 */}
        <Grid is_flex padding="10px 20px" bg="#F5F5F5">
          <Grid is_flex width="auto" >
            <Image shape="circle" src={props.src}/>
            <Text margin="13px" bold>{props.user_info.user_name}</Text>
          </Grid>

          {/* 수정 및 삭제버튼 */}
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && <ButtonSt
            onClick={(event) => {
              history.push(`/write/${props.id}`)
              event.stopPropagation();
              }}>수정</ButtonSt>}
            {props.is_me && <ButtonSt onClick={deletePost}>X</ButtonSt>}
          </Grid>
        </Grid>

        {/* 글 내용 및 사진 */}
        {props.layout === "bottom" && (
          <Grid width="auto">

            <Grid padding="16px">
              <Text bold>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url}/>
            </Grid>

            <Grid padding="16px" bg="#F5F5F5">
              <Text blod>❤️ Like. 6개</Text>
              <Text bold>💌 댓글 {props.comment_cnt}개</Text>
            </Grid>

          </Grid>
        )}

        {props.layout === "right" && (
          <Grid width="auto">       

            <Grid is_flex padding="16px">
              <Grid padding="5px 40px 0px 10px">
                <Text bold>{props.contents}</Text>
              </Grid>
              <Grid>
                <Image half shape="rectangle" src={props.image_url}/>
              </Grid>
            </Grid>

            <Grid padding="16px" bg="#F5F5F5">
              <Text blod>❤️ Like. 3개</Text>
              <Text bold>💌 댓글 2개</Text>
              <Text><strong>Jieun_feel</strong>&nbsp;&nbsp;&nbsp;코로나가 끝나면 반드시 해외여행..!</Text>
              <Text><strong>Minji</strong>&nbsp;&nbsp;&nbsp;해외여행 가고싶다ㅠ..</Text>
            </Grid>

          </Grid>
        )}


        {props.layout === "left" && (
          <Grid width="auto" > 

            <Grid is_flex padding="16px">
              <Grid>
                <Image half shape="rectangle" src={props.image_url}/>
              </Grid>
              <Grid padding="5px 10px 0px 40px">
                <Text bold>{props.contents}</Text>
              </Grid>
            </Grid>

            <Grid padding="16px" bg="#F5F5F5">
              <Text blod>❤️ Like. 4개</Text>
              <Text bold>💌 댓글 {props.comment_cnt}개</Text>
            </Grid>
          </Grid>
        )}
      </Grid>

    </React.Fragment>
  )
}

Post.defaultProps = {
  user_info: {
    user_name: "Jieun_feel",
    user_profile: "https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186_960_720.jpg",
  },
  image_url: "https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-blossom-tree-1225186_960_720.jpg",
  contents: "2022년 벚꽃!",
  comment_cnt: 10,
  insert_dt: "2021-04-01 15:30:00",
  is_me: null,
};

const ButtonSt = styled.button`
  font-size: 10px;
  height: 20px;
  margin-top: 14px;
  margin-left: 5px;
  border: none;
  border-radius: 3px;
  background-color: black;
  color: white;
`

export default Post;