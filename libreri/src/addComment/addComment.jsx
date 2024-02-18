import { useEffect } from "react";

const addComment = () => {
  useEffect(() => {
    const postComment = async () => {
      try {
        const commentData = {
          comment: "ok",
          rate: 3,
          elementId: asin,
        };
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments",{
method:"POST",
body:JSON.stringify(commentData),
headers:{
    "Content-type": "application/json",
    Authorization:

}
        }
        );
      } catch (e) {
        console.log(e);
      }
    };
  }, []);
};
export default addComment;
