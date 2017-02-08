$(function() {

  $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.form-group')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.form-group')
        .removeClass('has-error');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $.validator.addMethod('senhaForte', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, 'A senha deve conter no mínimo de 6 caracteres, uma letra e um número.');


   $.validator.addMethod('letra', function(value, element) {
    return this.optional(element) 
      || /^[a-zà-ú]+$/i.test(value);
  }, 'Permitido somente letras.');

  $("#formulario").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        senhaForte: true
      },
      password2: {
        required: true,
        equalTo: '#password'
      },
      firstName: {
        required: true,
        letra: true
      },
      secondName: {
        required: true,
        letra: true
      },
      businessName: {
        required: true
      },
      phone: {
        required: true,
        digits: true,
        phonesUK: true
      },
      address: {
        required: true
      },
      town: {
        required: true,
        lettersonly: true
      },
      postcode: {
        required: true,
        postcodeUK: true
      },
      terms: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'Por favor informe seu email.',
        email: 'Por favor, informe email valido',
        remote: $.validator.format("{0} is already associated with an account.")
      },
      password:{
      	required: 'O campo está vazio'
      },
      password2:{
      	required: 'O campo está vazio',
      	equalTo: 'As senhas não podem ser diferentes'
      },
      firstName: {
      	required: 'Informe seu nome',
      	letra: 'Não é permitido espaços em branco'
      
      },
      secondName: {
      	required: 'Informe seu Sobrenome',
      	letra: 'Somente permitido letras'
      },
      businessName:{
      	required: 'Nos informe o nome da empresa'
      },
       phone:{
       	 required: 'Informe telefone para contato',
       	 digits: 'É permitido somente' 
       }

    }
  });

});
