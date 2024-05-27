export const formatDatePost = (createdAt) => {
  const currentDate = new Date();
  const postDate = new Date(createdAt);
  const diffInSeconds = Math.abs((currentDate - postDate) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays > 1) {
    return postDate.toLocaleDateString("en-US", {
      month: "short", day: "numeric"

    })

  } else if (diffInDays === 1) {
    return "id"
  } else if (diffInHours >= 1) {
    return `${diffInHours}h ago`
  } else if (diffInMinutes >= 1) {
    return `${diffInMinutes}m ago`;

  } else if (diffInSeconds >= 1) {
    return `${diffInSeconds}s ago`
  } else {
    return "Just Now"
  }




};

// Example usage
const post = { createdAt: "2023-03-21T12:00:00Z" };
const formattedDate = formatDatePost(post);
console.log(formattedDate);

export const formatMemberSinceDate = (createdAt) => {
  const date = new Date(createdAt)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `Joined ${month} ${year}`

}
