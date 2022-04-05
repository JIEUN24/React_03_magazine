import React from "react";
import Card from "../components/Card";
import {Grid, Text, Image} from "../elements";

const Notification = (porps) => {
  let noti = [
    { user_name: "jieun", post_id: "post1", image_url: ""},
    { user_name: "hello", post_id: "post2", image_url: ""},
    { user_name: "doip", post_id: "post3", image_url: ""},
    { user_name: "navi", post_id: "post4", image_url: ""},
    { user_name: "hoy", post_id: "post5", image_url: ""},
    { user_name: "aaaaa", post_id: "post6", image_url: ""},
  ]
  return (
    <React.Fragment>
      <Grid margin="70px"/>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => {
          return (
            <Card key={n.post_id} {...n}/>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default Notification;