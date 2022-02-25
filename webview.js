module.exports = (Franz) => {
  const getMessages = () => {
    const count = document.querySelector(".ac-bell-notification .ac-bell-count");

    Franz.setBadge(count ? Ferdi.safeParseInt(count.innerHTML) : 0);
  };

  Franz.loop(getMessages);
};
