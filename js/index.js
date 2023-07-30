$(".menu_link").click(function () {
  var $menuBar = $(this).closest(".menu_bar");

  $($menuBar).find(".menu_item .menu_link.active").removeClass("active");
  $($menuBar).find(".menu_item__expandable.expanded").removeClass("expanded");
  $(this).addClass("active");
  $(this).closest(".menu_item__expandable").addClass("expanded");

  if ($(this).closest(".menu_item").hasClass("menu_item__expandable")) {
    $(this).closest(".menu_bar").addClass("menu_bar__expanded");
  } else {
  }
});

$(".tab_link").click(function () {
  let tab_links = $(".tab_link");

  if (!$(this).hasClass("active")) {
    tab_links.removeClass("active");
    $(this).addClass("active");
    const panel = $(this).attr("panel");
    console.log("#" + panel);
    $(".tab_content .tab_panel").removeClass("active");
    $("#" + panel).addClass("active");
  } else {
  }
});

$("#open_menu").click(function () {
  const menu = $("#menu");
  if (menu.hasClass("d-none")) {
    menu.removeClass("d-none");
  }
});
$("#close_menu").click(function () {
  const menu = $("#menu");
  if (!menu.hasClass("d-none")) {
    menu.addClass("d-none");
  }
});
