let confirmList = [
  {message: "wifi環境ですか？", ok: "はい", cancel: "いいえ"},
  {message: "格安SIMじゃないですよね？", ok: "はい", cancel: "いいえ"},
  {message: "ギガとか大丈夫ですか？", ok: "はい", cancel: "いいえ"},
  {message: "お父さんの許可は必要ないですか？", ok: "はい", cancel: "いいえ"},
  {message: "どうしても送信しないとダメですか？", ok: "はい", cancel: "いいえ"},
  {message: "いま忙しくて...明日じゃダメ？", ok: "はい", cancel: "いいえ"}
];
let confirmListIndex = 0;


function attachConfirmEvent() {
  let elem = $("#confirmDialog");
  elem.find(".okButton").click(onClickConfirmOkButton)
  elem.find(".cancelButton").click(onClickConfirmCancelButton)
}

function showConfirm(message, okLabel, cancelLabel) {
  let elem = $("#confirmDialog");
  elem.find(".message").text(message);
  elem.find(".okButton").text(okLabel);
  elem.find(".cancelButton").text(cancelLabel);
  elem.addClass("visible");
}

function hideConfirm() {
  confirmListIndex = 0;
  let elem = $("#confirmDialog");
  elem.removeClass("visible");
}

function onClickConfirmOkButton() {
  confirmListIndex++;
  if(confirmListIndex < confirmList.length) {
    let data = confirmList[confirmListIndex];
    showConfirm(data.message, data.ok, data.cancel);
  } else {
    hideConfirm();
  }
}

function onClickConfirmCancelButton() {
  hideConfirm();
}

$(document).ready(function() {
  attachConfirmEvent();
  
  $("#submitButton").click(function() {
    let data = confirmList[confirmListIndex];
    showConfirm(data.message, data.ok, data.cancel);
  });
});