// Vanilla JavaScript for tab functionality
(function() {
  console.log('Stages tabs script loaded');

  function initStageTabs() {
    console.log('Initializing stage tabs...');

    const tabButtons = document.querySelectorAll('.stage-tab-btn');
    const contentSections = document.querySelectorAll('.stage-content');

    console.log('Found', tabButtons.length, 'tab buttons');
    console.log('Found', contentSections.length, 'content sections');

    if (tabButtons.length === 0) {
      console.error('No tab buttons found!');
      return;
    }

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Tab clicked:', index);

        // Remove active class from all buttons
        tabButtons.forEach(btn => {
          btn.classList.remove('active-tab');
          btn.style.background = 'transparent';
          btn.style.color = '#666';
          btn.style.boxShadow = 'none';
          btn.style.fontWeight = '500';
        });

        // Hide all content sections
        contentSections.forEach(section => {
          section.style.display = 'none';
        });

        // Activate clicked button
        button.classList.add('active-tab');
        button.style.background = 'linear-gradient(135deg, #FF4B7E 0%, #FF6B9D 100())';
        button.style.color = 'white';
        button.style.boxShadow = '0 4px 16px rgba(255, 75, 126, 0.3)';
        button.style.fontWeight = '600';

        // Show corresponding content
        if (contentSections[index]) {
          contentSections[index].style.display = 'block';
        }

        console.log('Tab', index, 'activated');
      });
    });

    // Show first tab by default
    if (contentSections.length > 0) {
      contentSections[0].style.display = 'block';
    }

    console.log('Stage tabs initialized successfully');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStageTabs);
  } else {
    initStageTabs();
  }
})();
