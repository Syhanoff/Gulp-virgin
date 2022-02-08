// $(document).ready(function(){
//   function validForms (form) {
//     $(form).validate({
//     rules: {
//       name: {
//         required: true
//       },
//       email: {
//         required: true,
//         email: true
//       },
//       phone: {
//         required: true
//       }
//     },
//     messages: {
//       name: {
//         required: 'Пожалуйста, введите свое имя'
//       },
//       phone: {
//         required: 'Пожалуйста, введите свой номер телефона'
//       },
//       email: {
//         required: 'Пожалуйста, введите свою почту',
//         email: 'Неправильно введен адрес почты'
//       }
//     }
//   });
//   }

//   validForms('#main-form');
//   validForms('#order-form');
//   validForms('#consultation-form');

//   $("input[name=phone]").mask("+7 (999) 999-9999");

//   $('form').submit(function(e) {
//     e.preventDefault();
//     if(!$(this).valid()) {
//       return;
//     }
//     $.ajax({
//       type: "POST",
//       url: "send.php",
//       data: $(this).serialize()
//     }).done(function() {
//       $(this).find("input").val("");
//       $('#modal-consultation, #modal-order').fadeOut();
//       $('.overlay, #modal-thanks').fadeIn('slow');
//       $('form').trigger('reset');
//     });
//     return false;
//   });
// });


export function form() {
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => {
    function validForms (form) {
      $(form).validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Пожалуйста, введите свое имя'
        },
        phone: {
          required: 'Пожалуйста, введите свой номер телефона'
        },
        email: {
          required: 'Пожалуйста, введите свою почту',
          email: 'Неправильно введен адрес почты'
        }
      }
    });
    }

    validForms('#main-form');
    validForms('#order-form');
    validForms('#consultation-form');

    $("input[name=phone]").mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault();
      if(!$(this).valid()) {
        return;
      }
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#modal-consultation, #modal-order').fadeOut();
        $('.overlay, #modal-thanks').fadeIn('slow');
        $('form').trigger('reset');
      });
      return false;
    });
  });
}
