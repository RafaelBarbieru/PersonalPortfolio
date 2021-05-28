/** Constants declaration */
const divHome = $("#home");
const divProjects = $("#projects");
const divContact = $("#contact");

const liHome = $("#li-home");
const liProjects = $("#li-projects");
const liContact = $("#li-contact");

/** Document preparation */
$(document).ready(() => {
  $(liHome).css("text-decoration", "underline");
});

/** Sections navigation */
$("#navbar")
  .children()
  .each((index, li) => {
    $(li).click(() => {
      if ($(li).css("text-decoration") !== "underline") {
        removeUnderlineOfLinks();
        underlineCurrentLink(li);
        changeSection(li.id);
      }
    });
  });

/**
 * When hovering over an card image
 */
$(".card-image").hover(
  function () {
    if ($(window).width() > 1000) {
      $(this).find(".inside-image-icon").css("display", "inline-block");
    }
  },
  function () {
    if ($(window).width() > 1000) {
      $(this).find(".inside-image-icon").css("display", "none");
    }
  }
);

/**
 * Sets the text-decoration css property of all the <li> in the navigation bar to 'none'
 */
function removeUnderlineOfLinks() {
  $("#navbar")
    .children()
    .each((index, li) => {
      $(li).css("text-decoration", "none");
    });
}

/**
 * Underlines a specific list element
 * @param {The list element to be underlined} li
 */
function underlineCurrentLink(li) {
  $(li).css("text-decoration", "underline");
}

/**
 * Shows the desired section based on the id
 * @param {The id of the section to be shown} id
 */
function changeSection(id) {
  var sectionId = id.split("-")[1];
  var section = $("#" + sectionId);
  if ($(section).css("display") === "none") {
    hideAllSections();
    $(section).css("display", "flex");
  }
}

/**
 * Hides all the sections
 */
function hideAllSections() {
  $("#main")
    .children()
    .each((index, section) => {
      $(section).css("display", "none");
    });
}
