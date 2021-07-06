import ApiResource from "../api/apiResource";

const serviceUrl = "post";

const postService = {
  list: async () => {
    const response = await ApiResource.fetch("GET", serviceUrl);
    return { success: true, data: response.data };
  },
  commentsList: async (postId) => {
    const response = await ApiResource.fetch(
      "GET",
      `${serviceUrl}/${postId}/comment`
    );
    return { success: true, data: response.data };
  },
};

export default postService;
