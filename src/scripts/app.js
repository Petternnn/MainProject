
    
    
    document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-menu li');
    const pages = document.querySelectorAll('.page');
  
    sidebarItems.forEach(item => {
      item.addEventListener('click', () => {
        const pageId = item.getAttribute('data-page');
        const targetPage = document.getElementById(pageId);
  
        // Scroll to the target page
        targetPage.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });