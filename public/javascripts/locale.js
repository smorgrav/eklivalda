function submit_locale () {
      alert("I am an alert box!");
      var form = document.querySelector('form.change-locale');
        if (form !== null) {
	        form.addEventListener('change', function () {
		          form.submit();
			      });
		  }
});
