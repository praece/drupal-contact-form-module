(function ($, Drupal, window, document, undefined) {

// Give the user nice feedback when they submit 
Drupal.behaviors.ajaxContactForm = {
	attach: function (context, settings) {
    
    $('#contact-node-form .form-actions input').once('ajax-form-submit').on('click', function(){
    	var form = $(this).closest('.ajax-contact-form');
    	var name, email, phone, bot;

    	bot = $('#edit-field-contact-last-name-und-0-value').val();
    	name = $('#edit-field-contact-name-und-0-value').val();
    	email = $('#edit-field-contact-email-und-0-value').val();
    	phone = $('#edit-field-contact-phone-number-und-0-value').val();

      // Check if this is a bot, or if we have all the info we need
      if (!bot && name && (email || phone)) {
      	$(this).trigger('ajaxFormSubmit');
      	form.replaceWith('<div class="ajax-contact-message">Thanks, someone will contact you soon!</div>');
    	}

      // Let ga know if it exists so we can track conversions
      if (typeof ga === 'function') {
        ga('send', 'pageview', 'contact-form');
      }

      return false;
    });

  },
};

})(jQuery, Drupal, this, this.document);