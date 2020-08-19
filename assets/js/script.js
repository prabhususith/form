/* Script for login and register form */
$(function() {
    $("form[name='registerForm']").validate({
      rules: {
        register_forename: "required",
        register_surname: "required",
        register_sex: "required",
        register_dob: "required",
        register_email: {
            required: true,
            email: true
          },
        register_verify_email: {
          required: true,
          email: true,
          equalTo: "#register_email"
        },
        register_password: {
          required: true,
          minlength: 7,
          maxlength: 25
        }
      },
      
      messages: {
        register_forename: "Please enter your forename",
        register_surname: "Please enter your surname",
        register_sex: "Please enter your sex",
        register_dob: "Please enter your DOB",
        register_email: "Please enter your email",
        register_verify_email:{
            required: "Please enter your confirm email",
            equalTo: "Email id is not match"
        },
        register_password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 7 characters long"
        }
       },
      submitHandler: function(form) {
        form.submit();
      }
    });
    $("form[name='loginForm']").validate({
        rules: {
            login_username: "required",
            login_password: {
              required: true,
              minlength: 7,
              maxlength: 25
            }
          }, 
          messages: {
            login_username: "Please enter your firstname",
            login_password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 7 characters long"
            }},
          submitHandler: function(form) {
            form.submit();
          }
    });
    jQuery("#show_password").on("change",function() {
      if(this.checked) {
          $("#register-password").attr("type","text");
      }
      else {
          $("#register-password").attr("type","password");
      }
  });
  });

  