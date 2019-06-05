
    
const 
  copy = document.querySelectorAll("#copied");



// ===== FUNCTION FOR THE COPY THE TEXT ===

copy.forEach(element => {
  element.addEventListener("click", myFunction);
  element.addEventListener("mouseout", outFunc);
});
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy";
}
// === JQUERY FOR THE TOGGLE EVENT ===

$(document).ready(function() {
  $(".deposites").click(function(e) {
    $(e.target).addClass('bg-success text-white');
    $(e.target).removeClass('bg-light text-success');
    const gayab = $(e.target).parents('tr').next().find('.gayab'),
    mere = $(e.target).parents('tr').next().find('.mere');

gayab.fadeToggle('slow',()=>{

mere.hide();

})
mere.hide();
$('.gayab').not(gayab).hide();
$('.mere').not(mere).hide();
$('.deposites').not($(e.target)).addClass('bg-light text-success');
$('.withdraws').addClass('bg-light text-danger');
   });
});
// EVENTLISTENER FOR THE WITHDRAW
$(document).ready(function() {
  $(".withdraws").click(function(e) {
    $(e.target).addClass('bg-danger text-white');
    $(e.target).removeClass('bg-light text-danger');
    


    const gayab = $(e.target).parents('tr').next().find('.gayab'),
    mere = $(e.target).parents('tr').next().find('.mere');
  
    mere.fadeToggle("slow", () => {
      gayab.hide();
    });
    gayab.hide();
$('.gayab').not(gayab).hide();
$('.mere').not(mere).hide();
$('.withdraws').not($(e.target)).addClass('bg-light text-danger');
$('.deposites').addClass('bg-light text-success');
  });
});

