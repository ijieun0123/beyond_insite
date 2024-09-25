$(function () {
  /* Include Files */
  $(".header_include").load("../include/header.html", function () {
    /* Header - 전체 카테고리 */
    $(window)
      .resize(function () {
        /* 디바이스 너비 767px 이상 */
        if ($(window).innerWidth() > 767) {
          $(".gnb a:nth-child(1)").click(function () {
            $(this).toggleClass("active");
            $(".mega_navi").stop().slideToggle(300);
          });
          $("section").click(function () {
            $(".mega_navi").stop().slideUp(300);
          });
          /* 디바이스 너비 767px 이하 */
        } else if ($(window).innerWidth() < 767) {
          $(".gnb a:nth-child(1)").click(function () {
            $(".mega_navi").animate({ left: 0 }, 300);
          });
          $("section, .mega_navi .btn_close").click(function () {
            $(".mega_navi").animate({ left: -300 }, 300);
          });
        }
      })
      .resize();
    /* Member Register - 눈 */
    $(".toggle_pw").click(function () {
      // Toggle Icon Shape
      $(this).toggleClass("bi-eye");
      // Toggle Input Type
      let inputType = $(this).parent().children("input").attr("type");
      if (inputType == "password") {
        $(this).parent().children("input").attr("type", "text");
      } else {
        $(this).parent().children("input").attr("type", "password");
      }
    });
    /* Modal - Login */
    $(".login_btn, .login_member a").click(function () {
      $(".member_login_overlay").fadeIn();
      $("body").addClass("active");
    });
    $(".login .btn_close").click(function () {
      $(".member_login_overlay").fadeOut();
      $("body").removeClass("active");
    });
    /* 공유하기 - Modal */
    $(".btn_sidebar_badge.share").click(function () {
      $(".class_share_overlay").fadeIn();
      $("body").addClass("active");
    });
    $(".class_share_overlay .btn_close").click(function () {
      $(".class_share_overlay").fadeOut();
      $("body").removeClass("active");
    });
    /* 공유하기 - 링크복사 */
    $(".share_choice_item.link").click(function () {
      $(".copied_link").show();
    });
    /* Mega Navi - mobile */
    $(".mega_navi_item b").click(function () {
      $(".mega_navi_item_wrap").slideUp(200);
      $(this).next().stop().slideDown(200);
      $(this).addClass("active");
      $(this).parent().siblings().children("b").removeClass("active");
    });
    /* After Login Header UI */
    $(".btn_member_primary").click(function () {
      $(".member_login_overlay").fadeOut();
      $(".user_alarm").css("display", "flex");
      $("header .btns").hide();
    });
  });
  $(".footer_include").load("../include/footer.html", function () {
    /* footer - 아코디언 */
    $(".lnb_group_title").click(function () {
      $(".lnb_group_content").slideUp(200);
      $(this).next().slideDown(200);
      $(this).addClass("active");
      $(this).parent().siblings().children("b").removeClass("active");
    });
  });

  /* Class Zzim */
  $(".zzim").click(function () {
    $(this).children("i").toggleClass("bi-heart bi-heart-fill");
    $(this).children("i").css({
      color: "#ed2040",
    });
  });

  /* Cart Confirm */
  $(".btn_primary.btn_cart").click(function () {
    $(".cart_confirm").show();
    setTimeout(function () {
      $(".cart_confirm").hide();
    }, 2000);
  });
  $(".cart_confirm .btn_close").click(function () {
    $(".cart_confirm").hide();
  });

  /* Go To Top */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".gototop").addClass("active");
    } else {
      $(".gototop").removeClass("active");
    }
  });
  $(".gototop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  /* Class Detail Navigation */
  $(".class_detail_navi a").click(function (e) {
    /* Active Style Change */
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    /* Smooth Scrolling */
    const linkLocation = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linkLocation).offset().top,
      },
      500
    );
    e.preventDefault();
  });

  /* Class FAQ */
  $(".faq_title").eq(0).next().show();
  $(".faq_title").click(function () {
    $(this).next().toggle();
  });

  /* Class Curriculum */
  $(".chapter_title").click(function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("active");
  });

  /* Class Curriculum : All Show/Hide */
  $(".btn_curriculum_fold").click(function () {
    $(".chapter_content").slideUp(200);
    $(this).addClass("selected");
    $(this).siblings("button").removeClass("selected");
    $(".chapter_title").addClass("active");
  });
  $(".btn_curriculum_expand").click(function () {
    $(".chapter_content").slideDown(200);
    $(this).addClass("selected");
    $(this).siblings("button").removeClass("selected");
    $(".chapter_title").removeClass("active");
  });

  /* Scroll Header Fixed */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  /* Take Course - Cart Check All Function */
  // $(".cart_item .btn_clear").click(function () {
  //   $(this).parents(".cart_item").hide();
  // });
  // $(".cart_wrap .btn_all_clear").click(function () {
  //   $(".cart_item").hide();
  // });
  $(".cart_item .btn_clear").click(function () {
    $(this).parents(".cart_item").remove();
    if ($(".cart_item").length == 0) {
      $(".cart_item_empty").show();
      $(".cart_header").hide();
    }
  });
  $(".cart_wrap .btn_all_clear").click(function () {
    $(".cart_item").remove();
    if ($(".cart_item").length == 0) {
      $(".cart_item_empty").show();
      $(".cart_header").hide();
    }
  });
  $(".cart_chk_all").click(function () {
    $(".check_status .cart_chk").prop("checked", this.checked);
  });

  /* The Final Countdown */
  $("#early_bird_countdown").countdown("2024/10/01", function (event) {
    $(this).html(
      event.strftime(
        "<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음"
      )
    );
  });

  /* Front Event Banner */
  $(".close_buttons a").click(function () {
    $(".front_event_banner").fadeOut();
  });

  /* Focus Class - Heart */
  $(".like").click(function () {
    $(this).toggleClass("active");
  });

  /* Front Slider */
  $(".front_slider_items").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    pauseOnHover: false,
  });

  /* Focus Class Slider */
  $(".focus_class_items, .category_class_items").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  });
});
