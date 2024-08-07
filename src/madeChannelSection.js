class MadeChannelView {
  constructor() {
    this._currentindex = 0;
    this._highlightListEl = document.querySelector("#highlight-list");
    this._highlightList = {
      highlightpodcast: [
        { id: 1, type: "podcast", title: "highight title 1" },
        { id: 2, type: "podcast", title: "highight title 2" },
        { id: 3, type: "podcast", title: "highight title 3" },
        { id: 4, type: "podcast", title: "highight title 4" },
      ],
      highlightInear: [
        { id: 1, type: "Inear", title: "highight title 1" },
        { id: 2, type: "Inear", title: "highight title 2" },
        { id: 3, type: "Inear", title: "highight title 3" },
        { id: 4, type: "Inear", title: "highight title 4" },
      ],
      highlightDocument: [
        { id: 1, type: "Document", title: "highight title 1" },
        { id: 2, type: "Document", title: "highight title 2" },
        { id: 3, type: "Document", title: "highight title 3" },
        { id: 4, type: "Document", title: "highight title 4" },
      ],
    };
    this._render();
  }
  //Public
  setCurrentIndex(index) {
    this._currentindex = index;
    this._render();
  }

  //Private
  _displayIndex() {
    const indexEl = document.getElementById("index");
    indexEl.innerHTML = this._currentindex;
  }

  _disPlayFecthUrl() {
    const url = document.getElementById("fetch-url");
    if (this._currentindex == 0) {
      url.innerHTML = "https://api.example.com/highlights/podcast";
    } else if (this._currentindex == 1) {
      url.innerHTML = "https://api.example.com/highlights/inear";
    } else if (this._currentindex == 2) {
      url.innerHTML = "https://api.example.com/highlights/documentary";
    }
  }

  _displayHighLightlist() {
    let categoryType;
    if (this._currentindex == 0) {
      categoryType = this._highlightList.highlightpodcast;
      this._genUI(categoryType);
    } else if (this._currentindex == 1) {
      categoryType = this._highlightList.highlightInear;
      this._genUI(categoryType);
    } else if (this._currentindex == 2) {
      categoryType = this._highlightList.highlightDocument;
      this._genUI(categoryType);
    }
  }
  _genUI(type) {
    this._highlightListEl.innerHTML = type
      ? type
          .map((highight) => {
            return `<div class="flex flex-col">
      <h1>cate ${this._currentindex} ${highight.type} ${highight.title}</h1></div>`;
          })
          .join("")
      : "nodata";
  }

  //RENDER ALL THING
  _render() {
    this._displayIndex();
    this._disPlayFecthUrl();
    this._displayHighLightlist(this._currentindex);
  }
}

class MadeChannelApp {
  constructor() {
    this._madeChannelView = new MadeChannelView();
    this._channelMenues = document.querySelectorAll(".channel-menu");
    this._addEventListener();
  }

  _addEventListener() {
    this._oninit();
    this._channelMenues.forEach((menu, index) => {
      menu.addEventListener("click", () => this._onclickMenu(menu, index));
    });
  }

  _oninit() {
    this._channelMenues[0].classList.add("font-bold");
  }

  _onclickMenu(menu, index) {
    this._channelMenues.forEach((item) => {
      item.classList.remove("font-bold");
    });
    menu.classList.add("font-bold");
    this._madeChannelView.setCurrentIndex(index);
  }
}

export default MadeChannelApp;
