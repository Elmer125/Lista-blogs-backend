const dummy = (blogs) => {
  return blogs ? 1 : 1;
};

const totalLikes = (blogs) => {
  const number = blogs
    .map((list) => list.likes)
    .reduce((prev, curr) => prev + curr, 0);

  return parseInt(number);
};

const favoriteBlog = (blogs) => {
  let like = 0;
  blogs.forEach((element) => {
    if (element.likes > like) {
      like = element.likes;
    }
  });

  const blog = blogs.filter((result) => result.likes == like);
  const obj = Object.assign({}, blog);
  return obj[0];
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
