// content.js
document.addEventListener("DOMContentLoaded", function() {
  const difficultyTags = document.querySelectorAll(".text-difficulty-easy, .text-difficulty-medium, .text-difficulty-hard, .text-olive, .text-yellow, .text-pink");
  if (difficultyTags) {
    difficultyTags.forEach(tag => {
      tag.style.display = "none";
    });
  }
});
;
