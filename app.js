// UIU Data Science Question Bank - Main Application
class UIUQuestionBank {
    constructor() {
        this.currentView = 'home';
        this.currentCourse = null;
        this.currentExamType = null;
        this.currentTrimester = null;
        this.searchQuery = '';
        
        // Application data
        this.data = {
            "courses": [
                {
                    "id": "DS1501",
                    "title": "Programming for Data Science",
                    "code": "DS 1501",
                    "credits": 3,
                    "trimester": 1,
                    "description": "Introduction to programming concepts for data science applications",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "DS1501_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "DS1501_midterm_fall2023.pdf" },
                            "spring2024": { "available": true, "filename": "DS1501_midterm_spring2024.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "DS1501_final_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "DS1501_final_fall2023.pdf" }
                        },
                        "classtest": {
                            "spring2023": { "available": true, "filename": "DS1501_classtest_spring2023.pdf" }
                        }
                    }
                },
                {
                    "id": "DS1115",
                    "title": "Object Oriented Programming for Data Science",
                    "code": "DS 1115",
                    "credits": 3,
                    "trimester": 2,
                    "description": "Object-oriented programming concepts applied to data science",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "DS1115_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "DS1115_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "DS1115_final_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "DS1115_final_fall2023.pdf" }
                        }
                    }
                },
                {
                    "id": "DS1101",
                    "title": "Fundamentals of Data Science",
                    "code": "DS 1101",
                    "credits": 3,
                    "trimester": 3,
                    "description": "Core concepts and principles of data science",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "DS1101_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "DS1101_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "DS1101_final_spring2023.pdf" }
                        }
                    }
                },
                {
                    "id": "DS3885",
                    "title": "Data Wrangling",
                    "code": "DS 3885",
                    "credits": 3,
                    "trimester": 5,
                    "description": "Data cleaning, transformation, and preprocessing techniques",
                    "exams": {
                        "midterm": {
                            "fall2023": { "available": true, "filename": "DS3885_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "fall2023": { "available": true, "filename": "DS3885_final_fall2023.pdf" }
                        }
                    }
                },
                {
                    "id": "MATH1151",
                    "title": "Fundamental Calculus",
                    "code": "MATH 1151",
                    "credits": 3,
                    "trimester": 2,
                    "description": "Differential and integral calculus foundations",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "MATH1151_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "MATH1151_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "MATH1151_final_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "MATH1151_final_fall2023.pdf" }
                        }
                    }
                },
                {
                    "id": "MATH2107",
                    "title": "Linear Algebra",
                    "code": "MATH 2107",
                    "credits": 3,
                    "trimester": 3,
                    "description": "Matrix operations, vector spaces, and linear transformations",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "MATH2107_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "MATH2107_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "MATH2107_final_spring2023.pdf" }
                        }
                    }
                },
                {
                    "id": "CSE2215",
                    "title": "Data Structures and Algorithms I",
                    "code": "CSE 2215",
                    "credits": 3,
                    "trimester": 4,
                    "description": "Fundamental data structures and algorithmic thinking",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "CSE2215_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "CSE2215_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "CSE2215_final_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "CSE2215_final_fall2023.pdf" }
                        }
                    }
                },
                {
                    "id": "CSE2213",
                    "title": "Discrete Mathematics",
                    "code": "CSE 2213",
                    "credits": 3,
                    "trimester": 4,
                    "description": "Mathematical foundations for computer science",
                    "exams": {
                        "midterm": {
                            "spring2023": { "available": true, "filename": "CSE2213_midterm_spring2023.pdf" },
                            "fall2023": { "available": true, "filename": "CSE2213_midterm_fall2023.pdf" }
                        },
                        "final": {
                            "spring2023": { "available": true, "filename": "CSE2213_final_spring2023.pdf" }
                        }
                    }
                }
            ],
            "trimesters": [
                { "id": "spring2023", "name": "Spring 2023", "year": 2023, "season": "Spring" },
                { "id": "fall2023", "name": "Fall 2023", "year": 2023, "season": "Fall" },
                { "id": "spring2024", "name": "Spring 2024", "year": 2024, "season": "Spring" },
                { "id": "fall2024", "name": "Fall 2024", "year": 2024, "season": "Fall" }
            ],
            "examTypes": [
                { "id": "midterm", "name": "Midterm", "description": "Mid-semester examinations" },
                { "id": "final", "name": "Final", "description": "End-semester examinations" },
                { "id": "classtest", "name": "Class Test", "description": "Regular class assessments" }
            ]
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderHomeView();
        this.updateStats();
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.renderCourseGrid();
            });
        }

        // Breadcrumb navigation - use event delegation
        const breadcrumbContainer = document.getElementById('breadcrumb');
        if (breadcrumbContainer) {
            breadcrumbContainer.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.classList.contains('breadcrumb__link')) {
                    const level = e.target.dataset.level;
                    this.navigateToLevel(level);
                }
            });
        }

        // PDF download
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.downloadPDF();
            });
        }

        // Course grid navigation - use event delegation
        const courseGrid = document.getElementById('courseGrid');
        if (courseGrid) {
            courseGrid.addEventListener('click', (e) => {
                const courseCard = e.target.closest('.course-card');
                if (courseCard) {
                    const courseId = courseCard.dataset.courseId;
                    this.showCourseView(courseId);
                }
            });
        }

        // Exam type grid navigation - use event delegation
        const examTypeGrid = document.getElementById('examTypeGrid');
        if (examTypeGrid) {
            examTypeGrid.addEventListener('click', (e) => {
                const examCard = e.target.closest('.exam-type-card');
                if (examCard && !examCard.classList.contains('exam-type-card--disabled')) {
                    const examType = examCard.dataset.examType;
                    this.showTrimesterView(this.currentCourse, examType);
                }
            });
        }

        // Trimester grid navigation - use event delegation
        const trimesterGrid = document.getElementById('trimesterGrid');
        if (trimesterGrid) {
            trimesterGrid.addEventListener('click', (e) => {
                const trimesterCard = e.target.closest('.trimester-card');
                if (trimesterCard) {
                    const trimesterId = trimesterCard.dataset.trimesterId;
                    this.showPDFView(this.currentCourse, this.currentExamType, trimesterId);
                }
            });
        }
    }

    navigateToLevel(level) {
        switch (level) {
            case 'home':
                this.renderHomeView();
                break;
            case 'course':
                if (this.currentCourse) {
                    this.showCourseView(this.currentCourse);
                }
                break;
            case 'examType':
                if (this.currentCourse && this.currentExamType) {
                    this.showTrimesterView(this.currentCourse, this.currentExamType);
                }
                break;
            default:
                this.renderHomeView();
        }
    }

    showView(viewName) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('view--active');
        });

        // Show target view
        const targetView = document.getElementById(viewName + 'View');
        if (targetView) {
            targetView.classList.add('view--active');
        }
        this.currentView = viewName;
    }

    updateBreadcrumb(levels) {
        const breadcrumbList = document.querySelector('.breadcrumb__list');
        if (!breadcrumbList) return;

        breadcrumbList.innerHTML = '';

        levels.forEach((level, index) => {
            const li = document.createElement('li');
            li.className = 'breadcrumb__item';
            
            const link = document.createElement('a');
            link.className = 'breadcrumb__link' + (index === levels.length - 1 ? ' breadcrumb__link--active' : '');
            link.href = '#';
            link.textContent = level.text;
            link.dataset.level = level.level;
            
            li.appendChild(link);
            breadcrumbList.appendChild(li);
        });
    }

    renderHomeView() {
        this.currentCourse = null;
        this.currentExamType = null;
        this.currentTrimester = null;
        
        this.showView('home');
        this.updateBreadcrumb([{ text: 'Home', level: 'home' }]);
        this.renderCourseGrid();
    }

    renderCourseGrid() {
        const courseGrid = document.getElementById('courseGrid');
        if (!courseGrid) return;

        const filteredCourses = this.data.courses.filter(course => {
            if (!this.searchQuery) return true;
            return course.title.toLowerCase().includes(this.searchQuery) ||
                   course.code.toLowerCase().includes(this.searchQuery) ||
                   course.description.toLowerCase().includes(this.searchQuery);
        });

        if (filteredCourses.length === 0) {
            courseGrid.innerHTML = `
                <div class="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <h3>No courses found</h3>
                    <p>Try adjusting your search query</p>
                </div>
            `;
            return;
        }

        courseGrid.innerHTML = filteredCourses.map(course => `
            <div class="course-card" data-course-id="${course.id}">
                <div class="course-card__header">
                    <div class="course-card__code">${course.code}</div>
                    <h3 class="course-card__title">${course.title}</h3>
                    <p class="course-card__description">${course.description}</p>
                </div>
                <div class="course-card__meta">
                    <span class="course-card__badge">${course.credits} Credits</span>
                    <span class="course-card__badge">Trimester ${course.trimester}</span>
                </div>
            </div>
        `).join('');
    }

    showCourseView(courseId) {
        this.currentCourse = courseId;
        const course = this.data.courses.find(c => c.id === courseId);
        
        if (!course) return;

        this.showView('course');
        this.updateBreadcrumb([
            { text: 'Home', level: 'home' },
            { text: course.code, level: 'course' }
        ]);

        // Update course details
        const courseTitle = document.getElementById('courseTitle');
        const courseDescription = document.getElementById('courseDescription');
        const courseCredits = document.getElementById('courseCredits');
        const courseTrimester = document.getElementById('courseTrimester');

        if (courseTitle) courseTitle.textContent = `${course.code} - ${course.title}`;
        if (courseDescription) courseDescription.textContent = course.description;
        if (courseCredits) courseCredits.textContent = `${course.credits} Credits`;
        if (courseTrimester) courseTrimester.textContent = `Trimester ${course.trimester}`;

        // Render exam types
        this.renderExamTypes(course);
    }

    renderExamTypes(course) {
        const examTypeGrid = document.getElementById('examTypeGrid');
        if (!examTypeGrid) return;
        
        examTypeGrid.innerHTML = this.data.examTypes.map(examType => {
            const examCount = course.exams[examType.id] ? Object.keys(course.exams[examType.id]).length : 0;
            const isDisabled = examCount === 0;
            
            return `
                <div class="exam-type-card ${isDisabled ? 'exam-type-card--disabled' : ''}" 
                     data-exam-type="${examType.id}">
                    <h4 class="exam-type-card__title">${examType.name}</h4>
                    <p class="exam-type-card__description">${examType.description}</p>
                    <span class="exam-type-card__count">${examCount} Available</span>
                </div>
            `;
        }).join('');
    }

    showTrimesterView(courseId, examType) {
        this.currentCourse = courseId;
        this.currentExamType = examType;
        
        const course = this.data.courses.find(c => c.id === courseId);
        const examTypeData = this.data.examTypes.find(et => et.id === examType);
        
        if (!course || !examTypeData) return;

        this.showView('trimester');
        this.updateBreadcrumb([
            { text: 'Home', level: 'home' },
            { text: course.code, level: 'course' },
            { text: examTypeData.name, level: 'examType' }
        ]);

        // Render available trimesters
        this.renderTrimesters(course, examType);
    }

    renderTrimesters(course, examType) {
        const trimesterGrid = document.getElementById('trimesterGrid');
        if (!trimesterGrid) return;

        const availableTrimesters = course.exams[examType] || {};
        
        const trimesterCards = this.data.trimesters
            .filter(trimester => availableTrimesters[trimester.id])
            .map(trimester => `
                <div class="trimester-card" data-trimester-id="${trimester.id}">
                    <div class="trimester-card__season">${trimester.season}</div>
                    <div class="trimester-card__year">${trimester.year}</div>
                </div>
            `).join('');

        if (trimesterCards) {
            trimesterGrid.innerHTML = trimesterCards;
        } else {
            trimesterGrid.innerHTML = `
                <div class="empty-state">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <h3>No question papers available</h3>
                    <p>Check back later for updates</p>
                </div>
            `;
        }
    }

    showPDFView(courseId, examType, trimesterId) {
        this.currentCourse = courseId;
        this.currentExamType = examType;
        this.currentTrimester = trimesterId;
        
        const course = this.data.courses.find(c => c.id === courseId);
        const examTypeData = this.data.examTypes.find(et => et.id === examType);
        const trimesterData = this.data.trimesters.find(t => t.id === trimesterId);
        
        if (!course || !examTypeData || !trimesterData) return;

        this.showView('pdf');
        this.updateBreadcrumb([
            { text: 'Home', level: 'home' },
            { text: course.code, level: 'course' },
            { text: examTypeData.name, level: 'examType' },
            { text: trimesterData.name, level: 'pdf' }
        ]);

        // Update PDF view
        const pdfTitle = document.getElementById('pdfTitle');
        if (pdfTitle) {
            pdfTitle.textContent = `${course.code} - ${examTypeData.name} - ${trimesterData.name}`;
        }
    }

    downloadPDF() {
        if (!this.currentCourse || !this.currentExamType || !this.currentTrimester) {
            alert('No PDF selected for download');
            return;
        }
        
        const course = this.data.courses.find(c => c.id === this.currentCourse);
        if (!course) {
            alert('Course not found');
            return;
        }

        const examData = course.exams[this.currentExamType];
        if (!examData) {
            alert('Exam type not found');
            return;
        }

        const trimesterData = examData[this.currentTrimester];
        if (!trimesterData || !trimesterData.available) {
            alert('PDF not available for download');
            return;
        }

        // In a real implementation, this would download the actual PDF
        // For now, we'll show a message and create a sample download
        const filename = trimesterData.filename;
        
        // Create a mock download link
        const link = document.createElement('a');
        link.href = '#';
        link.download = filename;
        link.textContent = 'Download PDF';
        
        // Show success message
        alert(`PDF "${filename}" would be downloaded in a real implementation.\n\nIn production, this would link to the actual PDF file stored in your repository.`);
        
        console.log(`Mock download: ${filename}`);
    }

    updateStats() {
        // Update course count
        const courseCount = document.getElementById('courseCount');
        if (courseCount) {
            courseCount.textContent = this.data.courses.length;
        }
        
        // Update trimester count
        const trimesterCount = document.getElementById('trimesterCount');
        if (trimesterCount) {
            trimesterCount.textContent = this.data.trimesters.length;
        }
        
        // Update exam count
        let totalExams = 0;
        this.data.courses.forEach(course => {
            Object.values(course.exams).forEach(examType => {
                totalExams += Object.keys(examType).length;
            });
        });
        
        const examCount = document.getElementById('examCount');
        if (examCount) {
            examCount.textContent = totalExams;
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.uiuQuestionBank = new UIUQuestionBank();
});

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}