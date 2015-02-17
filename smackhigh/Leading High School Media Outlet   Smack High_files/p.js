(function() {
    if (!window.voiceHasLoaded) {

        window.voiceLoad = function() {
            // Insert iFrames for each embedded question.
            var questions = document.getElementsByClassName('poutsch_question');
            for (var i = 0; i < questions.length; i++) {
                var data_el = questions[i].getElementsByTagName('a')[0];
                if (!data_el) continue;
                var url = data_el.href.split('/'),
                    attached_set = data_el.classList, // the class attribute is uses to see what happens after the poll
                    theme = data_el.style.cssText, // the inline override css attributes
                    frame = document.createElement('iframe'),
                    widget_url = 'https://' + url[2] + '/widget/?type=' + url[3] + '&id=' + url[4] + '&url=' + document.location.href + '&';

                //theme support
                if (theme !== undefined) {
                    widget_url += 'theme=' + encodeURIComponent(theme) + '&';
                }

                //redirect voting links
                if (url[5] && url[5] === 'vote') {
                    widget_url += 'vote=' + url[6] + '&';
                }

                // Build the widget URL for this question/set.
                if (attached_set && attached_set[0]) {
                    if (attached_set[0]) {
                        widget_url += 'publisher=' + attached_set[0].replace('poutsch_publisher_', '') + '&';
                    }
                    if (attached_set[1]) {
                        widget_url += ('attached_set=' + attached_set[1] + '&');
                    }
                }

                frame.src = widget_url += ('frameId=' + i);
                frame.style.maxWidth = '100%';
                frame.style.width = '100%';
                frame.style.border = 'none';
                frame.style.display = 'none';
                frame.className = 'poutsch_embed';
                frame.id = 'poutsch_embed_' + i;

                data_el.parentNode.replaceChild(frame, data_el);

            }
            window.voiceHasLoaded = true;
        }

        // Listen to messages from the iFrame.
        window.addEventListener('message', function(e) {
            // Adjust dimensions to accommodate needed height.
            if (typeof e.data === 'string') return;
            var height = e.data.height,
                frame = document.getElementById('poutsch_embed_' + e.data.id);
            try {
                frame.style.display = 'block';
                frame.style.height = height.toString() + 'px';
            } catch (e) {}
        }, false);

        //init (If your page load new pages via ajax you can call this again)
        window.voiceLoad();

    }
})();