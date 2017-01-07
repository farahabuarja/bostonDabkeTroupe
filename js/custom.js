(function() {
  var mit = {
    event_title: "MIT ASA Cultural Night",
    event_subtitle: "December 2015",
    id: "mit-cultural-night",
    image_urls: [
      "https://s3.amazonaws.com/boston-dabke-troupe/MIT+ASA+Cultural+Night+Deb2015/10604030_930833016951241_7832601200003400935_o.jpg",
      "https://s3.amazonaws.com/boston-dabke-troupe/MIT+ASA+Cultural+Night+Deb2015/10604025_930833430284533_2172934482378561009_o.jpg",
      "https://s3.amazonaws.com/boston-dabke-troupe/MIT+ASA+Cultural+Night+Deb2015/10498106_930834626951080_6090537101926651360_o.jpg",
      "https://s3.amazonaws.com/boston-dabke-troupe/MIT+ASA+Cultural+Night+Deb2015/10257302_930833930284483_7190894584507370254_o.jpg"
    ]
  };

  var naap = {
    event_title: "NAAP",
    event_subtitle: "2015",
    id: "naap",
    image_urls: [
      "https://s3.amazonaws.com/boston-dabke-troupe/NAAP+2015/10733746_903636846341303_6571101736670150935_o.jpg",
      "https://s3.amazonaws.com/boston-dabke-troupe/NAAP+2015/10557094_903636426341345_2141282205949064510_o.jpg",
      "https://s3.amazonaws.com/boston-dabke-troupe/NAAP+2015/10540694_903636909674630_8879760169853552724_o.jpg",
      "https://s3.amazonaws.com/boston-dabke-troupe/NAAP+2015/10460653_903638639674457_8275947021341457047_o.jpg"
    ]
  };

  var template = Handlebars.templates['carousel'];
  var mit_html = template(mit);
  var naap_html = template(naap);
  $('#gallery .col-lg-12').append(mit_html);
  $('#gallery .col-lg-12').append(naap_html);

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
      });
  });

  // Contact form validation/submission
  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        name: {
          validators: {
            stringLength: {
              min: 2,
            },
            notEmpty: {
              message: 'Please supply your name'
            }
          }
        },
        _replyto: {
          validators: {
            notEmpty: {
              message: 'Please supply your email address'
            },
            emailAddress: {
              message: 'Please supply a valid email address'
            }
          }
        },
        phone_number: {
          validators: {
            phone: {
              country: 'US',
              message: 'Please supply a vaild phone number, including an area code'
            }
          }
        },
        event_description: {
          validators: {
            stringLength: {
              min: 10,
              max: 300,
              message:'Please enter at least 10 characters and no more than 300'
            },
            notEmpty: {
              message: 'Please supply a description of your event'
            }
          }
        }
      }
    })
    .on('success.form.bv', function(e) {
      $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
      $('#contact_form').data('bootstrapValidator').resetForm();

    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');

    // Use Ajax to submit form data
    $.post($form.attr('action'), $form.serialize(), function(result) {
      console.log(result);
    }, 'json');
    });
  });
})();
