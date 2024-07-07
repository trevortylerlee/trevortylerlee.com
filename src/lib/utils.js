// Thank you Coding in Public on YouTube
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date, format) {
  return new Date(date).toLocaleDateString("en-CA", {
    timeZone: "UTC",
    dateStyle: format,
  });
}

export function formatBlogPost(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = 10,
  } = {},
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.data;

    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    if (limit === 0) {
      return filteredPosts;
    }
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

export function isWithinLastFortnite(date) {
  // Get date one week ago from now
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

  // Convert date from props to a date object
  const postDate = new Date(date);

  // Compare the post date to the date one week ago
  return postDate >= twoWeeksAgo;
}
