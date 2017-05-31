// creating comment box that posts numerous comments
function imgcomments() {
  var userName = document.getElementById("userName").value
  var userNametext = document.createTextNode("Username: " + userName)
  console.log(userNametext)
  var newListItem = document.createElement("Li")
  newListItem.className = "list-item"
  console.log(newListItem)
  var newUserName = document.createElement("H3")
  newUserName.appendChild(userNametext);
  newListItem.appendChild(userNametext);
  console.log(userNametext)
  newListItem.appendChild(newUserName);


  var userComment = document.getElementById("userComment").value
  var userCommenttext = document.createTextNode("Comment: " + userComment)
  console.log(userComment)
  var newUserComment = document.createElement("P")
  newUserComment.appendChild(userCommenttext);
  console.log(userCommenttext)
  newListItem.appendChild(newUserComment);
  document.getElementById("imgcomments").appendChild(newListItem)


};
