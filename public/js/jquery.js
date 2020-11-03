$(document).ready(function () {
  //1. Menu trang chủ
  $('.dropdown-content').first().hide();
  $('.logincontent').first().hide();
  $('.menu-item1').mouseover(function () {
    $('.dropdown-content').slideDown('fast');
  });
  $('.menu-item1').mouseout(function () {
    $('.dropdown-content').slideUp('fast');
  });
  $('.dropdown-content').mouseover(function () {
    $('.logincontent').animate(
      {
        width: 'toggle',
      },
      500,
      function () {}
    );
    $('.dropdown-content').stop();
  });
  $('.dropdown-content').mouseout(function () {
    $('.logincontent').animate(
      {
        width: 'toggle',
      },
      500
    );

    $('.logincontent').mouseover(function () {
      $('.logincontent').stop();
      $('.dropdown-content').stop();
    });
  });

  $('.dropdown-content').mouseout(function () {
    $('.dropdown-content').slideUp('slow');
  });

  //2. Menu Tin tức
  $('.dropdown-content2').first().hide();
  $('.menu-item2').mouseover(function () {
    $('.dropdown-content2').slideDown('fast');
  });
  $('.dropdown-content2').mouseover(function () {
    $('.dropdown-content2').stop();
  });
  $('.menu-item2, .dropdown-content2').mouseout(function () {
    $('.dropdown-content2').slideUp('fast');
  });
  //3. Menu Giới thiệu
  $('.dropdown-content3').first().hide();
  $('.menu-item3').mouseover(function () {
    $('.dropdown-content3').slideDown('fast');
  });
  $('.dropdown-content3').mouseover(function () {
    $('.dropdown-content3').stop();
  });
  $('.menu-item3, .dropdown-content3').mouseout(function () {
    $('.dropdown-content3').slideUp('fast');
  });
  //4. Menu Tuyển sinh
  $('.dropdown-content4').first().hide();
  $('.menu-item4').mouseover(function () {
    $('.dropdown-content4').slideDown('fast');
  });
  $('.dropdown-content4').mouseover(function () {
    $('.dropdown-content4').stop();
  });
  $('.menu-item4, .dropdown-content4').mouseout(function () {
    $('.dropdown-content4').slideUp('fast');
  });
  //5. Menu Đào tạo
  $('.dropdown-content5').first().hide();
  $('.menu-item5').mouseover(function () {
    $('.dropdown-content5').slideDown('fast');
  });
  $('.dropdown-content5').mouseover(function () {
    $('.dropdown-content5').stop();
  });
  $('.menu-item5, .dropdown-content5').mouseout(function () {
    $('.dropdown-content5').slideUp('fast');
  });
  //thong tin nganh an toan thong tin
  $('.ATTT-content').first().hide();
  $('.ATTT').mouseover(function () {
    $('.ATTT-content').animate(
      {
        width: 'toggle',
      },
      500
    );
  });
  $('.ATTT-content').mouseover(function () {
    $('.ATTT-content').stop();
  });
  $('.ATTT').mouseout(function () {
    $('.ATTT-content').animate(
      {
        width: 'toggle',
      },
      200
    );
  });
  //thong tin nganh cong nghe thong tin
  $('.CNTT-content').first().hide();
  $('.CNTT').mouseover(function () {
    $('.CNTT-content').animate(
      {
        width: 'toggle',
      },
      500
    );
  });
  $('.CNTT-content').mouseover(function () {
    $('.CNTT-content').stop();
  });
  $('.CNTT').mouseout(function () {
    $('.CNTT-content').animate(
      {
        width: 'toggle',
      },
      200
    );
  });
  //thong tin nganh khoa học máy tính
  $('.KHMT-content').first().hide();
  $('.KHMT').mouseover(function () {
    $('.KHMT-content').animate(
      {
        width: 'toggle',
      },
      500
    );
  });
  $('.KHMT-content').mouseover(function () {
    $('.KHMT-content').stop();
  });
  $('.KHMT').mouseout(function () {
    $('.KHMT-content').animate(
      {
        width: 'toggle',
      },
      200
    );
  });
  //thong tin nganh hệ thống thông tin
  $('.HTTT-content').first().hide();
  $('.HTTT').mouseover(function () {
    $('.HTTT-content').animate(
      {
        width: 'toggle',
      },
      500
    );
  });
  $('.HTTT-content').mouseover(function () {
    $('.HTTT-content').stop();
  });
  $('.HTTT').mouseout(function () {
    $('.HTTT-content').animate(
      {
        width: 'toggle',
      },
      200
    );
  });
  //thong tin nganh kỹ thuật phần mềm
  $('.KTPM-content').first().hide();
  $('.KTPM').mouseover(function () {
    $('.KTPM-content').animate(
      {
        width: 'toggle',
      },
      500
    );
  });
  $('.KTPM-content').mouseover(function () {
    $('.KTPM-content').stop();
  });
  $('.KTPM').mouseout(function () {
    $('.KTPM-content').animate(
      {
        width: 'toggle',
      },
      200
    );
  });
  //thong tin nganh kỹ thuật máy tính
  $('.KTMT-content').first().hide();
  $('.KTMT').mouseover(function () {
    $('.KTMT-content').animate(
      {
        width: 'toggle',
      },
      500
    );
  });
  $('.KTMT-content').mouseover(function () {
    $('.KTMT-content').stop();
  });
  $('.KTMT').mouseout(function () {
    $('.KTMT-content').animate(
      {
        width: 'toggle',
      },
      200
    );
  });
  //6 Menu nghiên cứu
  $('.dropdown-content6').first().hide();
  $('.menu-item6').mouseover(function () {
    $('.dropdown-content6').slideDown('fast');
  });
  $('.dropdown-content6').mouseover(function () {
    $('.dropdown-content6').stop();
  });
  $('.menu-item6, .dropdown-content6').mouseout(function () {
    $('.dropdown-content6').slideUp('fast');
  });
  //7. Menu các đơn vị
  $('.dropdown-content7').first().hide();
  $('.menu-item7').mouseover(function () {
    $('.dropdown-content7').slideDown('fast');
  });
  $('.dropdown-content7').mouseover(function () {
    $('.dropdown-content7').stop();
  });
  $('.menu-item7, .dropdown-content7').mouseout(function () {
    $('.dropdown-content7').slideUp('fast');
  });
});
