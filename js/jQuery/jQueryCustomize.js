$(document).ready(function () {
    
    // menu toggle start

    $('.menuToggleBtn').click(function () {
        $('nav ul').toggle();
    });

    // menu toggle end

    // skills bar

    $('.skill_progress').each(function(){
        $(this).animate({
          width:$(this).attr('data-percent')},3000);
    });

  // active menu class

    $('nav ul li a').click(function(){
      $('nav li a').removeClass("active");
      $(this).addClass("active");
    });
  
    
    // scroll btn
    $("a[href='#top']").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    // scroll show hide
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 200) {
          $(".scrollBtn").addClass("scrollShowHide");
      } else {
         $(".scrollBtn").removeClass("scrollShowHide");
      }
  });


  
  
  



});

const typing = new Typed('.type', {
    strings: [
        'I am Web Designer.',
        'I am Web Developer.',
        'I am WordPress Developer.',
        'I am Freelancer.',
    ],
    typeSpeed: 50,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1500,
    loop:true,
  });
  


//   contact form

var form = document.getElementById("my-form");

    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
form.addEventListener("submit", handleSubmit)
    


