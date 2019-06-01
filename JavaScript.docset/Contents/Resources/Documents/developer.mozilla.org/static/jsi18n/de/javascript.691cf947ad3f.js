

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s von %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "Seit dieser Entwurf gespeichert wurde, wurde eine neuere Version dieses Artikels ver\u00f6ffentlicht. Sie k\u00f6nnen den Entwurf wiederherstellen, um den Inhalt anzusehen, k\u00f6nnen ihn aber nicht zur Ver\u00f6ffentlichung \u00fcbermitteln.", 
    "Article Title Lookup / Link Text": "Suche nach Artikel-Titel / Link-Text", 
    "Aspect ratio": "Seitenverh\u00e4ltnis", 
    "Attachments": "Anh\u00e4nge", 
    "Autosave enabled.": "Automatisches Speichern aktiviert.", 
    "CSS": "CSS", 
    "Changes saved.": "\u00c4nderungen gespeichert.", 
    "Close": "Schlie\u00dfen", 
    "Close notification": "Benachrichtigung schlie\u00dfen", 
    "Close submenu": "Untermen\u00fc schlie\u00dfen", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "Vergleichen Sie dieses Datum mit dem Datum der letzten Version, um keine neueren \u00c4nderungen zu \u00fcberschreiben.", 
    "Create a Redirect": "Eine Weiterleitung einrichten", 
    "Default": "Standard", 
    "Details": "Details", 
    "Discard draft.": "Entwurf verwerfen.", 
    "Document": "Dokument", 
    "Draft autosaved:": "Entwurf automatisch gespeichert:", 
    "Draft discarded.": "Entwurf verworfen.", 
    "Draft discarded:": "Entwurf verworfen:", 
    "Draft published:": "Entwurf ver\u00f6ffentlicht:", 
    "Draft restored.": "Entwurf wiederhergestellt.", 
    "Edit Page": "Seite bearbeiten", 
    "Embed YouTube Video": "YouTube-Video einbetten", 
    "Error loading content, please refresh the page": "Fehler beim Laden des Inhalts, bitte aktualisieren Sie die Seite", 
    "Error submitting as %(type)s": "Fehler \u00fcbermittelt als %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Einen Moment! Die Filter werden aktualisiert\u2026", 
    "History": "Versionsgeschichte", 
    "Insert Code Sample Template": "Vorlage f\u00fcr Beispielquelltext einf\u00fcgen", 
    "Insert Code Sample iFrame": "iFrame mit Beispielquelltext einf\u00fcgen", 
    "JavaScript": "JavaScript", 
    "Launch": "Starten", 
    "Link": "Link", 
    "Locate a YouTube Video": "Ein YouTube-Video finden", 
    "MDN Redirect": "MDN-Weiterleitung", 
    "Never": "Nie", 
    "New interest...": "Neues Interesse\u2026", 
    "New tag...": "Neues Schlagwort\u2026", 
    "No": "Nein", 
    "No Highlight": "Keine Hervorherbung", 
    "No attachments available": "Keine Anh\u00e4nge verf\u00fcgbar", 
    "No selection": "Keine Auswahl", 
    "Open": "\u00d6ffnen", 
    "Open implementation notes": "Implementierungshinweise \u00f6ffnen", 
    "Open in %(site)s": "\u00d6ffnen in %(site)s", 
    "Paste YouTube Video URL": "URL von YouTube-Video einf\u00fcgen", 
    "Published version": "Ver\u00f6ffentlichte Version", 
    "Publishing changes\u2026": "\u00c4nderungen werden ver\u00f6ffentlicht\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Ver\u00f6ffentlichung fehlgeschlagen. Bitte kopieren Sie Ihre \u00c4nderungen an einen sicheren Ort und versuchen Sie, das Formular mit der Schaltfl\u00e4che \u201eVer\u00f6ffentlichen\u201c abzusenden.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Ver\u00f6ffentlichung fehlgeschlagen. Sie sind derzeit nicht angemeldet. Bitte verwenden Sie einen neuen Tab, um sich anzumelden und erneut zu versuchen, den Inhalt zu ver\u00f6ffentlichen.", 
    "Restore draft.": "Entwurf wiederherstellen.", 
    "Result": "Ergebnis", 
    "Return to compatibility table.": "Zur Kompatibilit\u00e4tstabelle zur\u00fcckkehren.", 
    "Revert": "Zur\u00fccksetzen", 
    "Revision history.": "Versionsgeschichte.", 
    "Sample CSS Content": "CSS-Beispielinhalt", 
    "Sample Finder": "Beispielfinder", 
    "Sample HTML Content": "HTML-Beispielinhalt", 
    "Sample JavaScript Content": "JavaScript-Beispielinhalt", 
    "Search Stack Overflow": "Stack Overflow durchsuchen", 
    "Section": "Abschnitt", 
    "Sections in Document": "Abschnitte im Dokument", 
    "Select a section": "W\u00e4hlen Sie einen Abschnitt aus", 
    "Select an attachment": "W\u00e4hlen Sie einen Anhang aus", 
    "Selected: ": "Ausgew\u00e4hlt: ", 
    "Submitted as %(submissionType)s": "\u00dcbermittelt als %(submissionType)s", 
    "Submitting...": "\u00dcbermitteln\u2026", 
    "Syntax Highlighter": "Syntaxhervorhebung", 
    "The URL you've entered doesn't appear to be valid": "Die eingegebene URL scheint ung\u00fcltig zu sein", 
    "URL": "URL", 
    "Updated filters.": "Die Filter wurden aktualisiert.", 
    "View Page": "Seite ansehen", 
    "View draft.": "Entwurf ansehen.", 
    "Viewing old draft. This draft cannot be published.": "Dies ist ein alter Entwurf. Er kann nicht ver\u00f6ffentlicht werden.", 
    "What should the sample title be?": "Welchen Titel sollte das Beispiel haben?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Beantworten Sie uns vier Fragen? <a %(url)s>\u00d6ffnen Sie die Umfrage in einem neuen Tab</a> und nehmen Sie teil, wenn Sie auf dieser Seite fertig sind. Vielen Dank!", 
    "Yes": "Ja", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "Sie sehen sich diese Seite jetzt auf %(localeName)s an. M\u00f6chten Sie diese Seite immer auf %(localeName)s ansehen?", 
    "You have a draft from: %(time)s.": "Sie haben einen Entwurf vom: %(time)s.", 
    "You must input a valid YouTube video URL.": "Sie m\u00fcssen eine g\u00fcltige Video-URL von YouTube eingeben.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Ihr Browser unterst\u00fctzt kein MathML. Stattdessen wurde eine CSS-Alternative verwendet.", 
    "an unknown date": "[unbekanntes Datum]"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j. F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

