import React, { useEffect, useState } from "react";

import postService from "../../services/posts";

import {
  Container,
  Content,
  Card,
  PostContainer,
  PostImg,
  Modal,
  ModalContent,
  OwnerContent,
  CloseBtn,
  LoadingDiv,
  Title,
  CardHeader,
  Tags,
  CommentsTitle,
} from "./styles";

const FeedView = () => {
  const [hashTag, setHashTag] = useState("");
  const [posts, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectOwner, setSelectOwner] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showComments, setShowComments] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const response = await postService.list();
        setPost(response.data);

        const promises = response.data.map((item) => {
          return postService.commentsList(item.id);
        });
        const valuess = await Promise.all(promises);

        setComments(
          valuess.map((data) => {
            return data.data;
          })
        );

        setIsLoading(false);
      } catch (error) {
        console.log("error=>", error);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <Content>
        <Title>PetsTagram</Title>
        {isLoading ? (
          <LoadingDiv>Loading Data...</LoadingDiv>
        ) : hashTag ? (
          <PostContainer>
            {posts
              .filter((element) => element.tags.find((tag) => tag === hashTag))
              .map(
                (
                  { id, image, likes, link, owner, tags, text, publishDate },
                  index
                ) => (
                  <Card key={id}>
                    <CardHeader>
                      <label
                        className="name"
                        onClick={() => setSelectOwner(owner)}
                      >{`${owner.firstName} ${owner.lastName}`}</label>
                      <label className="description">{text}</label>
                    </CardHeader>
                    <div>
                      <PostImg src={image} alt={text} />
                    </div>
                    <div>
                      {tags?.map((tag) => (
                        <Tags
                          key={Math.random()}
                          onClick={() => setHashTag(tag)}
                        >
                          #{tag}{" "}
                        </Tags>
                      ))}
                      <h5 style={{ margin: "0px" }}>
                        {new Date(publishDate).toLocaleString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h5>
                      {link ? (
                        <h5>
                          Link:{" "}
                          <a target="_blank" href={link} rel="noreferrer">
                            Read More
                          </a>
                        </h5>
                      ) : null}
                      <h5>Likes: {likes} 💚 </h5>
                    </div>
                    {comments[index].length ? (
                      <div onClick={() => setShowComments(comments[index])}>
                        Comments: {comments[index]?.length}
                      </div>
                    ) : null}
                  </Card>
                )
              )}

            {showComments ? (
              <Modal>
                <ModalContent>
                  <CloseBtn>
                    <button onClick={() => setShowComments(null)}>X</button>
                  </CloseBtn>
                  <CommentsTitle>Comments</CommentsTitle>
                  {showComments?.map((comment) => (
                    <div>
                      <span>
                        <b>{comment.owner.firstName}: </b> {comment.message}
                      </span>
                    </div>
                  ))}
                </ModalContent>
              </Modal>
            ) : null}
            {selectOwner ? (
              <Modal>
                <ModalContent>
                  <CloseBtn>
                    <button onClick={() => setSelectOwner(null)}>X</button>
                  </CloseBtn>
                  <OwnerContent>
                    <span>
                      <img
                        src={selectOwner?.picture}
                        alt={selectOwner?.firstName}
                      />
                    </span>
                    <h5>{`${selectOwner?.firstName} ${selectOwner?.lastName}`}</h5>
                    <h5>{selectOwner?.email}</h5>
                  </OwnerContent>
                </ModalContent>
              </Modal>
            ) : null}
          </PostContainer>
        ) : (
          <div>
            {posts?.map(
              (
                { id, image, likes, link, owner, tags, text, publishDate },
                index
              ) => (
                <Card key={id}>
                  <CardHeader>
                    <label
                      className="name"
                      onClick={() => setSelectOwner(owner)}
                    >{`${owner.firstName} ${owner.lastName}`}</label>
                    <label className="description">{text}</label>
                  </CardHeader>
                  <div>
                    <PostImg src={image} alt={text} />
                  </div>
                  <div>
                    {tags?.map((tag) => (
                      <Tags key={Math.random()} onClick={() => setHashTag(tag)}>
                        #{tag}{" "}
                      </Tags>
                    ))}
                    <h5 style={{ margin: "0px" }}>
                      {new Date(publishDate).toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </h5>
                    {link ? (
                      <h5>
                        Link:{" "}
                        <a target="_blank" href={link} rel="noreferrer">
                          Read More
                        </a>
                      </h5>
                    ) : null}
                    <h5>Likes: {likes} 💚 </h5>
                  </div>
                  {comments[index].length ? (
                    <div onClick={() => setShowComments(comments[index])}>
                      Comments: {comments[index]?.length}
                    </div>
                  ) : null}
                </Card>
              )
            )}
          </div>
        )}
      </Content>
    </Container>
  );
};

export default FeedView;
