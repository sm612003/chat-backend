socket.emit("hello", "world", (response) => {
  console.log(response); // "got it"
});
