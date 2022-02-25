module.exports = (Franz) => {
  const getMessages = () => {
    let count = 0;

    const bellCount = document.querySelector(".ac-bell-notification .ac-bell-count");

    if(bellCount) {
      count = Ferdi.safeParseInt(bellCount.innerHTML);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
