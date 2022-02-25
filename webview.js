module.exports = (Franz) => {
  const getMessages = () => {
    const count = document.querySelector(".ac-bell-notification .ac-bell-count");

    Franz.setBadge(count ? parseInt(count.innerText, 10) : 0);
  };

  Franz.loop(getMessages);
};
