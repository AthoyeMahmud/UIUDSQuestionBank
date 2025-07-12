// Course data
const coursesData = {
  "courses": [
    {
      "id": "DS1501",
      "title": "Programming for Data Science",
      "code": "DS 1501",
      "abbr": "Programming",
      "trimester": 1,
      "credits": 3,
      "description": "Introduction to programming concepts for data science applications",
      "colorOne": "rgb(69, 179, 224)",
      "colorTwo": "rgb(102, 51, 153)",
      "css": "linear-gradient(109.6deg, rgb(69, 179, 224) 11.2%, rgb(102, 51, 153) 100.2%)",
      "midterm": [
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"},
        {"code": "242", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"},
        {"code": "243", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2024"}
      ],
      "final": [
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"},
        {"code": "242", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ]
    },
    {
      "id": "DS1502",
      "title": "Programming for Data Science Laboratory",
      "code": "DS 1502",
      "abbr": "Programming Lab",
      "trimester": 1,
      "credits": 1,
      "description": "Hands-on programming laboratory for data science",
      "colorOne": "rgb(255, 7, 7)",
      "colorTwo": "rgb(255, 255, 5)",
      "css": "linear-gradient(113.9deg, rgb(255, 7, 7) -4.5%, rgb(255, 255, 5) 98.8%)",
      "midterm": [
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"}
      ],
      "final": [
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"},
        {"code": "242", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ]
    },
    {
      "id": "DS2101",
      "title": "Statistics for Data Science",
      "code": "DS 2101",
      "abbr": "Statistics",
      "trimester": 2,
      "credits": 3,
      "description": "Statistical foundations for data science applications",
      "colorOne": "rgb(102, 64, 123)",
      "colorTwo": "rgb(251, 168, 214)",
      "css": "linear-gradient(89.9deg, rgb(102, 64, 123) 0%, rgb(252, 41, 119) 100%, rgb(251, 168, 214) 100.1%)",
      "midterm": [
        {"code": "231", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2023"},
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"}
      ],
      "final": [
        {"code": "231", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2023"},
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"}
      ]
    },
    {
      "id": "DS3101",
      "title": "Stochastic Processes for Data Science",
      "code": "DS 3101",
      "abbr": "Stochastic",
      "trimester": 5,
      "credits": 3,
      "description": "Random variables, Markov chains, and queuing theory for data science",
      "colorOne": "#fda34b",
      "colorTwo": "#7046aa",
      "css": "linear-gradient(-15deg, #fda34b 0%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 100%)",
      "midterm": [
        {"code": "221", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2022"},
        {"code": "231", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2023"},
        {"code": "241", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2024"}
      ],
      "final": [
        {"code": "221", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2022"},
        {"code": "231", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Spring 2023"}
      ]
    },
    {
      "id": "DS3521",
      "title": "Data Visualization and Exploration",
      "code": "DS 3521",
      "abbr": "Data Viz",
      "trimester": 6,
      "credits": 3,
      "description": "Methods for visualizing and exploring high-dimensional data",
      "colorOne": "rgb(12, 85, 141)",
      "colorTwo": "rgb(249, 140, 69)",
      "css": "radial-gradient(circle at right, rgb(12, 85, 141) 15%, rgb(205, 181, 93) 40%, rgb(249, 140, 69) 60%, rgb(12, 73, 116) 85%)",
      "midterm": [
        {"code": "232", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"},
        {"code": "242", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ],
      "final": [
        {"code": "232", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"}
      ]
    },
    {
      "id": "DS4522",
      "title": "Machine Learning",
      "code": "DS 4522",
      "abbr": "ML",
      "trimester": 7,
      "credits": 3,
      "description": "Introduction to machine learning algorithms and applications",
      "colorOne": "rgb(241, 78, 163)",
      "colorTwo": "rgb(26, 243, 158)",
      "css": "radial-gradient(circle at 1.5% 2.8%, rgb(241, 78, 163) 30%, rgb(26, 243, 158) 80%, rgb(69, 237, 244) 95%)",
      "midterm": [
        {"code": "223", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2022"},
        {"code": "233", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2023"},
        {"code": "243", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2024"}
      ],
      "final": [
        {"code": "223", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2022"},
        {"code": "233", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2023"}
      ]
    },
    {
      "id": "DS4523",
      "title": "Simulation and Modeling",
      "code": "DS 4523",
      "abbr": "Simulation",
      "trimester": 8,
      "credits": 3,
      "description": "Simulation methods and model building for data science",
      "colorOne": "#4fb576",
      "colorTwo": "#4c7788",
      "css": "linear-gradient(10deg, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%)",
      "midterm": [
        {"code": "234", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"},
        {"code": "244", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ],
      "final": [
        {"code": "234", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"}
      ]
    },
    {
      "id": "DS4891",
      "title": "Data Mining",
      "code": "DS 4891",
      "abbr": "Data Mining",
      "trimester": 8,
      "credits": 3,
      "description": "Data mining concepts, methodologies, and algorithms",
      "colorOne": "#0000DA",
      "colorTwo": "#FF0000",
      "css": "linear-gradient(55deg, hsl(240deg 100% 43%) 0%, hsl(329deg 100% 46%) 50%, hsl(0deg 100% 50%) 100%)",
      "midterm": [
        {"code": "234", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"},
        {"code": "244", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ],
      "final": [
        {"code": "234", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"},
        {"code": "244", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ]
    },
    {
      "id": "DS4817",
      "title": "Big Data Analytics",
      "code": "DS 4817",
      "abbr": "Big Data",
      "trimester": 9,
      "credits": 3,
      "description": "Introduction to Big Data characteristics and processing frameworks",
      "colorOne": "#580864",
      "colorTwo": "#90eef3",
      "css": "linear-gradient(to right top, #580864, #523083, #454c9e, #3166b5, #137fc6, #0192d1, #17a5d9, #35b8e0, #54cae6, #72dcec, #90eef3, #aefffa)",
      "midterm": [
        {"code": "235", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2023"},
        {"code": "245", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2024"}
      ],
      "final": [
        {"code": "235", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Fall 2023"}
      ]
    },
    {
      "id": "DS4217",
      "title": "Data Science Ethics and Privacy",
      "code": "DS 4217",
      "abbr": "Ethics",
      "trimester": 10,
      "credits": 3,
      "description": "Ethical issues and privacy concerns in data science",
      "colorOne": "#05c9fa",
      "colorTwo": "#e4f61e",
      "css": "linear-gradient(90deg, hsla(192, 96%, 50%, 1) 0%, hsla(65, 92%, 54%, 1) 100%)",
      "midterm": [
        {"code": "236", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"},
        {"code": "246", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2024"}
      ],
      "final": [
        {"code": "236", "url": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "semester": "Summer 2023"}
      ]
    }
  ],
  "metadata": {
    "lastUpdated": "2024-12-30",
    "totalCourses": 10,
    "totalQuestions": 45,
    "semesterCodes": {
      "241": "Spring 2024",
      "242": "Summer 2024", 
      "243": "Fall 2024",
      "231": "Spring 2023",
      "232": "Summer 2023",
      "233": "Fall 2023",
      "221": "Spring 2022",
      "222": "Summer 2022",
      "223": "Fall 2022"
    }
  }
};

// Global state
let currentView = 'home';
let currentCourse = null;
let filteredCourses = [...coursesData.courses];
let currentPdfUrl = null;

// DOM elements
const elements = {
  navToggle: document.getElementById('navToggle'),
  navMenu: document.getElementById('navMenu'),
  searchInput: document.getElementById('searchInput'),
  trimesterFilter: document.getElementById('trimesterFilter'),
  coursesGrid: document.getElementById('coursesGrid'),
  totalCourses: document.getElementById('totalCourses'),
  totalQuestions: document.getElementById('totalQuestions'),
  lastUpdated: document.getElementById('lastUpdated'),
  
  // Views
  homeView: document.getElementById('home-view'),
  courseView: document.getElementById('course-view'),
  pdfView: document.getElementById('pdf-view'),
  
  // Course detail elements
  courseBreadcrumb: document.getElementById('courseBreadcrumb'),
  courseTitle: document.getElementById('courseTitle'),
  courseCode: document.getElementById('courseCode'),
  courseDescription: document.getElementById('courseDescription'),
  courseCredits: document.getElementById('courseCredits'),
  courseTrimester: document.getElementById('courseTrimester'),
  midtermPapers: document.getElementById('midtermPapers'),
  finalPapers: document.getElementById('finalPapers'),
  
  // PDF viewer elements
  pdfFrame: document.getElementById('pdfFrame'),
  pdfTitle: document.getElementById('pdfTitle'),
  backToCourse: document.getElementById('backToCourse'),
  downloadPdf: document.getElementById('downloadPdf')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  updateStats();
  renderCourses();
  setupNavigation();
});

// Event listeners
function setupEventListeners() {
  // Navigation
  elements.navToggle.addEventListener('click', toggleMobileNav);
  
  // Search and filter
  elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
  elements.trimesterFilter.addEventListener('change', handleFilter);
  
  // Course detail navigation
  elements.backToCourse.addEventListener('click', () => showView('course'));
  elements.downloadPdf.addEventListener('click', downloadCurrentPdf);
  
  // Navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });
}

function setupNavigation() {
  // Handle browser back/forward
  window.addEventListener('popstate', function(e) {
    if (e.state) {
      if (e.state.view === 'course' && e.state.courseId) {
        showCourseDetail(e.state.courseId);
      } else if (e.state.view === 'pdf') {
        // Handle PDF view state if needed
      } else {
        showView('home');
      }
    }
  });
}

function toggleMobileNav() {
  elements.navMenu.classList.toggle('active');
}

function handleNavigation(e) {
  e.preventDefault();
  const href = e.target.getAttribute('href');
  
  if (href === '#home') {
    showView('home');
    history.pushState({view: 'home'}, '', '#home');
  }
}

function handleSearch() {
  const searchTerm = elements.searchInput.value.toLowerCase();
  filterCourses(searchTerm, elements.trimesterFilter.value);
}

function handleFilter() {
  const trimesterFilter = elements.trimesterFilter.value;
  const searchTerm = elements.searchInput.value.toLowerCase();
  filterCourses(searchTerm, trimesterFilter);
}

function filterCourses(searchTerm, trimesterFilter) {
  filteredCourses = coursesData.courses.filter(course => {
    const matchesSearch = !searchTerm || 
      course.title.toLowerCase().includes(searchTerm) ||
      course.code.toLowerCase().includes(searchTerm) ||
      course.abbr.toLowerCase().includes(searchTerm);
    
    const matchesTrimester = !trimesterFilter || 
      course.trimester.toString() === trimesterFilter;
    
    return matchesSearch && matchesTrimester;
  });
  
  renderCourses();
}

function renderCourses() {
  if (filteredCourses.length === 0) {
    elements.coursesGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No courses found</h3>
        <p>Try adjusting your search criteria or filters.</p>
      </div>
    `;
    return;
  }
  
  elements.coursesGrid.innerHTML = filteredCourses.map(course => {
    const midtermCount = course.midterm.length;
    const finalCount = course.final.length;
    
    return `
      <div class="course-card" onclick="showCourseDetail('${course.id}')" tabindex="0" onkeydown="handleCardKeydown(event, '${course.id}')">
        <div class="course-card-header" style="background: ${course.css};">
          <div class="course-card-content">
            <h3>${course.title}</h3>
            <div class="course-code">${course.code}</div>
            <div class="course-abbr">${course.abbr}</div>
          </div>
        </div>
        <div class="course-card-body">
          <p class="course-description">${course.description}</p>
          <div class="course-meta">
            <div class="meta-item">
              <span class="meta-label">Credits:</span>
              <span class="meta-value">${course.credits}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Trimester:</span>
              <span class="meta-value">${course.trimester}</span>
            </div>
          </div>
          <div class="course-stats">
            <div class="stat">
              <div class="stat-count">${midtermCount}</div>
              <div class="stat-text">Midterm</div>
            </div>
            <div class="stat">
              <div class="stat-count">${finalCount}</div>
              <div class="stat-text">Final</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function handleCardKeydown(event, courseId) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showCourseDetail(courseId);
  }
}

function showCourseDetail(courseId) {
  currentCourse = coursesData.courses.find(c => c.id === courseId);
  if (!currentCourse) return;
  
  // Update breadcrumb
  elements.courseBreadcrumb.textContent = currentCourse.title;
  
  // Update course info
  elements.courseTitle.textContent = currentCourse.title;
  elements.courseCode.textContent = currentCourse.code;
  elements.courseDescription.textContent = currentCourse.description;
  elements.courseCredits.textContent = currentCourse.credits;
  elements.courseTrimester.textContent = currentCourse.trimester;
  
  // Render papers
  renderPapers(elements.midtermPapers, currentCourse.midterm, 'midterm');
  renderPapers(elements.finalPapers, currentCourse.final, 'final');
  
  showView('course');
  history.pushState({view: 'course', courseId: courseId}, '', `#course/${courseId}`);
}

function renderPapers(container, papers, type) {
  if (papers.length === 0) {
    container.innerHTML = '<p class="no-papers">No papers available</p>';
    return;
  }
  
  container.innerHTML = papers.map(paper => `
    <div class="paper-item">
      <div class="paper-info">
        <div class="paper-semester">${paper.semester}</div>
        <div class="paper-code">Code: ${paper.code}</div>
      </div>
      <div class="paper-actions">
        <button class="btn-icon" onclick="viewPdf('${paper.url}', '${currentCourse.code} - ${paper.semester} ${type}')" title="View PDF">
          <i class="fas fa-eye"></i>
        </button>
        <button class="btn-icon" onclick="downloadPdf('${paper.url}', '${currentCourse.code}_${type}_${paper.code}.pdf')" title="Download PDF">
          <i class="fas fa-download"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function viewPdf(url, title) {
  currentPdfUrl = url;
  elements.pdfTitle.textContent = title;
  
  // Create PDF viewer URL with embedded viewer
  const pdfViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
  elements.pdfFrame.src = pdfViewerUrl;
  
  showView('pdf');
}

function downloadPdf(url, filename) {
  // Create temporary link for download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'question_paper.pdf';
  link.target = '_blank';
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadCurrentPdf() {
  if (currentPdfUrl) {
    const filename = elements.pdfTitle.textContent.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';
    downloadPdf(currentPdfUrl, filename);
  }
}

function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  
  // Show selected view
  const targetView = document.getElementById(viewName + '-view');
  if (targetView) {
    targetView.classList.add('active');
    currentView = viewName;
  }
  
  // Close mobile nav
  elements.navMenu.classList.remove('active');
}

function updateStats() {
  elements.totalCourses.textContent = coursesData.metadata.totalCourses;
  elements.totalQuestions.textContent = coursesData.metadata.totalQuestions;
  elements.lastUpdated.textContent = 'Dec 2024';
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (currentView === 'pdf') {
      showView('course');
    } else if (currentView === 'course') {
      showView('home');
    }
  }
});

// Handle clicks on breadcrumb links
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('breadcrumb-link')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href === '#home') {
      showView('home');
      history.pushState({view: 'home'}, '', '#home');
    }
  }
});

// Enhanced error handling for PDF loading
elements.pdfFrame.addEventListener('load', function() {
  // PDF loaded successfully
  console.log('PDF loaded successfully');
});

elements.pdfFrame.addEventListener('error', function() {
  // Show error message in iframe
  elements.pdfFrame.style.display = 'none';
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column; color: #666; padding: 20px; text-align: center;">
      <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; color: #ff6b6b;"></i>
      <h3>PDF Loading Error</h3>
      <p>The PDF file could not be loaded in the viewer.</p>
      <p>Please try downloading the file instead.</p>
      <button class="btn btn--primary" onclick="downloadCurrentPdf()" style="margin-top: 1rem;">
        <i class="fas fa-download"></i> Download PDF
      </button>
    </div>
  `;
  elements.pdfFrame.parentNode.appendChild(errorDiv);
});

// Initialize view based on URL hash
window.addEventListener('load', function() {
  const hash = window.location.hash;
  if (hash.startsWith('#course/')) {
    const courseId = hash.substring(8);
    showCourseDetail(courseId);
  } else if (hash === '#home' || !hash) {
    showView('home');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add loading state for PDF viewer
function showPdfLoading() {
  elements.pdfFrame.style.display = 'none';
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'pdf-loading';
  loadingDiv.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column; color: #666;">
      <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
      <p>Loading PDF...</p>
    </div>
  `;
  elements.pdfFrame.parentNode.appendChild(loadingDiv);
}

// Clean up loading states
function hidePdfLoading() {
  const loadingDiv = document.querySelector('.pdf-loading');
  if (loadingDiv) {
    loadingDiv.remove();
  }
  elements.pdfFrame.style.display = 'block';
}