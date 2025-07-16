// UIU Data Science Question Bank - Main Application
class UIUQuestionBank {
  constructor() {
    this.currentView = "home";
    this.currentCourse = null;
    this.currentExamType = null;
    this.currentTrimester = null;
    this.searchQuery = "";

    // Application data
    this.data = null;
  }

  async init() {
    await this.loadData();
    this.setupEventListeners();

    // Handle browser back/forward buttons
    window.addEventListener("popstate", (event) => {
      this.handleLocation();
    });

    // Initialize based on current URL or default to home
    this.handleLocation();
    this.updateStats();
  }

  async loadData() {
    try {
      const response = await fetch("data.json");
      this.data = await response.json();
      this.examTypes = [
        {
          id: "mid",
          name: "Midterm",
          description: "Mid-semester examinations",
        },
        {
          id: "final",
          name: "Final",
          description: "End-semester examinations",
        },
        {
          id: "classtest",
          name: "Class Test",
          description: "Regular class assessments",
        },
      ];
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        this.renderCourseGrid();
      });
    }

    // Unified click handler for navigation links
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="/"]');

      // If a routing link is clicked (and it's not a download link), handle routing
      if (link && !link.hasAttribute("data-download-link")) {
        e.preventDefault();
        const url = link.getAttribute("href");
        history.pushState(null, "", url);
        this.handleLocation();
      }
    });

    // Breadcrumb navigation - use event delegation
    const breadcrumbContainer = document.getElementById("breadcrumb");
    if (breadcrumbContainer) {
      breadcrumbContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("breadcrumb__link")) {
          const level = e.target.dataset.level;
          this.navigateToLevel(level);
        }
      });
    }

    // Back button in PDF view
    const backBtn = document.getElementById("backBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        this.goBack();
      });
    }

    // PDF download
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        this.downloadPDF();
      });
    }
  }

  goBack() {
    // Use browser's native back functionality
    window.history.back();
  }

  navigateToLevel(level) {
    switch (level) {
      case "home":
        this.renderHomeView();
        break;
      case "course":
        if (this.currentCourse) {
          this.showCourseView(this.currentCourse);
        }
        break;
      case "examType":
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
    document.querySelectorAll(".view").forEach((view) => {
      view.classList.remove("view--active");
    });

    // Show target view
    const targetView = document.getElementById(viewName + "View");
    if (targetView) {
      targetView.classList.add("view--active");
    }
    this.currentView = viewName;

    // Add/remove body class for special PDF view styling
    if (viewName === "pdf") {
      document.body.classList.add("pdf-view-active");
    } else {
      document.body.classList.remove("pdf-view-active");
    }
  }

  updateBreadcrumb(levels) {
    const breadcrumbList = document.querySelector(".breadcrumb__list");
    if (!breadcrumbList) return;

    breadcrumbList.innerHTML = "";

    levels.forEach((level, index) => {
      const li = document.createElement("li");
      li.className = "breadcrumb__item";

      const link = document.createElement("a");
      link.className =
        "breadcrumb__link" +
        (index === levels.length - 1 ? " breadcrumb__link--active" : "");
      link.href = "#";
      link.textContent = level.text;
      link.dataset.level = level.level;

      li.appendChild(link);
      breadcrumbList.appendChild(li);
    });
  }

  renderHomeView(pushState = true) {
    this.currentCourse = null;
    this.currentExamType = null;
    this.currentTrimester = null;

    if (pushState) {
      history.pushState(null, "", "/");
    }

    this.showView("home");
    this.updateBreadcrumb([{ text: "Home", level: "home" }]);
    this.renderCourseGrid();
  }

  renderCourseGrid() {
    const courseGrid = document.getElementById("courseGrid");
    if (!courseGrid) return;

    const filteredCourses = this.data.filter((course) => {
      if (!this.searchQuery) return true;
      return (
        course.title.toLowerCase().includes(this.searchQuery) ||
        course.code.toLowerCase().includes(this.searchQuery) ||
        (course.abbr && course.abbr.toLowerCase().includes(this.searchQuery)) ||
        course.description.toLowerCase().includes(this.searchQuery)
      );
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

    courseGrid.innerHTML = filteredCourses
      .map(
        (course) => `
            <a href="/course/${course.id}" class="course-card" data-course-id="${course.id}">
                <div class="course-card__header">
                    <div class="course-card__code">${course.code}</div>
                    <h3 class="course-card__title">${course.title}</h3>
                    <p class="course-card__description">${course.description}</p>
                </div>
                <div class="course-card__meta">
                    <span class="course-card__badge">${course.credits} Credits</span>
                    <span class="course-card__badge">Trimester ${course.trimester}</span>
                </div>
            </a>
        `
      )
      .join("");
  }

  showCourseView(courseId, pushState = true) {
    this.currentCourse = courseId;
    const course = this.data.find((c) => c.id === courseId);

    if (!course) return;

    if (pushState) {
      history.pushState(null, "", `/course/${courseId}`);
    }

    this.showView("course");
    this.updateBreadcrumb([
      { text: "Home", level: "home" },
      { text: course.code, level: "course" },
    ]);

    // Update course details
    const courseTitle = document.getElementById("courseTitle");
    const courseDescription = document.getElementById("courseDescription");
    const courseCredits = document.getElementById("courseCredits");
    const courseTrimester = document.getElementById("courseTrimester");

    if (courseTitle)
      courseTitle.textContent = `${course.code} - ${course.title}`;
    if (courseDescription) courseDescription.textContent = course.description;
    if (courseCredits) courseCredits.textContent = `${course.credits} Credits`;
    if (courseTrimester)
      courseTrimester.textContent = `Trimester ${course.trimester}`;

    // Render exam types
    this.renderExamTypes(course);
  }

  renderExamTypes(course) {
    const examTypeGrid = document.getElementById("examTypeGrid");
    if (!examTypeGrid) return;

    examTypeGrid.innerHTML = this.examTypes
      .map((examType) => {
        const examCount = course[examType.id] ? course[examType.id].length : 0;
        const isDisabled = examCount === 0;

        return `
                <a href="/course/${course.id}/exam/${examType.id}" 
                   class="exam-type-card ${
                     isDisabled ? "exam-type-card--disabled" : ""
                   }" 
                   data-exam-type="${examType.id}">
                    <h4 class="exam-type-card__title">${examType.name}</h4>
                    <p class="exam-type-card__description">${
                      examType.description
                    }</p>
                    <span class="exam-type-card__count">${examCount} Available</span>
                </a>
            `;
      })
      .join("");
  }

  showTrimesterView(courseId, examType, pushState = true) {
    this.currentCourse = courseId;
    this.currentExamType = examType;

    const course = this.data.find((c) => c.id === courseId);
    const examTypeData = this.examTypes.find((et) => et.id === examType);

    if (!course || !examTypeData) return;

    if (pushState) {
      history.pushState(null, "", `/course/${courseId}/exam/${examType}`);
    }

    this.showView("trimester");
    this.updateBreadcrumb([
      { text: "Home", level: "home" },
      { text: course.code, level: "course" },
      { text: examTypeData.name, level: "examType" },
    ]);

    // Render available trimesters
    this.renderTrimesters(course, examType);
  }

  renderTrimesters(course, examType) {
    const trimesterGrid = document.getElementById("trimesterGrid");
    if (!trimesterGrid) return;

    const availableExams = course[examType] || [];

    const trimesterCards = availableExams
      .map((exam) => {
        // Get just the filename from the URL
        const filename = exam.url.split("/").pop();

        // Remove .pdf extension and split by underscore
        const baseFilename = filename.replace(".pdf", "");
        const nameParts = baseFilename.split("_");

        let trimesterId, trimesterName;

        if (nameParts.length >= 3) {
          const lastPart = nameParts[nameParts.length - 1];

          // Check if last part is a 3-digit trimester code (e.g., 231)
          if (/^[0-9]{3}$/.test(lastPart)) {
            trimesterId = lastPart;
            trimesterName = this.formatTrimesterId(trimesterId);
          }
          // Check if last part contains season and year (e.g., spring2023)
          else if (/^(spring|summer|fall)[0-9]{4}$/.test(lastPart)) {
            trimesterId = lastPart;
            trimesterName = {
              season: lastPart.replace(/[0-9]/g, ""),
              year: lastPart.replace(/[^0-9]/g, ""),
            };
          }
          // Handle cases with additional suffixes like _A, _B
          else if (
            nameParts.length >= 4 &&
            /^[0-9]{3}$/.test(nameParts[nameParts.length - 2])
          ) {
            // e.g., BDS1201_Final_223_A -> use 223
            trimesterId = nameParts[nameParts.length - 2];
            trimesterName = this.formatTrimesterId(trimesterId);
          }
        }

        // Only return the card if we successfully extracted a trimester ID
        if (!trimesterId) return "";

        return `
                <a href="/course/${course.id}/exam/${examType}/trimester/${trimesterId}" 
                   class="trimester-card" data-trimester-id="${trimesterId}" data-filename="${filename}">
                    <div class="trimester-card__season">${trimesterName.season}</div>
                    <div class="trimester-card__year">${trimesterName.year}</div>
                </a>
            `;
      })
      .filter((card) => card !== "") // Remove empty cards
      .join("");

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

  showPDFView(courseId, examType, trimesterId, pushState = true) {
    this.currentCourse = courseId;
    this.currentExamType = examType;
    this.currentTrimester = trimesterId;

    const course = this.data.find((c) => c.id === courseId);
    const examTypeData = this.examTypes.find((et) => et.id === examType);
    let trimesterName;

    if (/^[0-9]{3}$/.test(trimesterId)) {
      trimesterName = this.formatTrimesterId(trimesterId);
    } else {
      trimesterName = {
        season: trimesterId.replace(/[0-9]/g, ""),
        year: trimesterId.replace(/[^0-9]/g, ""),
      };
    }

    if (!course || !examTypeData) return;

    if (pushState) {
      history.pushState(
        null,
        "",
        `/course/${courseId}/exam/${examType}/trimester/${trimesterId}`
      );
    }

    this.showView("pdf");
    this.updateBreadcrumb([
      { text: "Home", level: "home" },
      { text: course.code, level: "course" },
      { text: examTypeData.name, level: "examType" },
      { text: `${trimesterName.season} ${trimesterName.year}`, level: "pdf" },
    ]);

    // Update PDF view
    const pdfTitle = document.getElementById("pdfTitle");
    if (pdfTitle) {
      pdfTitle.textContent = `${course.code} - ${examTypeData.name} - ${trimesterName.season} ${trimesterName.year}`;
    }

    // Show PDF preview
    const exam = this.findExam(courseId, examType, trimesterId);
    const pdfViewer = document.getElementById("pdfViewer");
    if (pdfViewer && exam) {
      pdfViewer.innerHTML = `<embed src="/${exam.url}" type="application/pdf" width="100%" height="100%"/>`;
    } else if (pdfViewer) {
      pdfViewer.innerHTML = `
                <div class="pdf-placeholder">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <p>PDF Preview</p>
                    <p class="pdf-placeholder__note">Could not load PDF preview.</p>
                </div>
            `;
    }
  }

  findExam(courseId, examType, trimesterId) {
    const course = this.data.find((c) => c.id === courseId);
    if (!course) return null;

    const exams = course[examType] || [];

    // Find exam that matches the trimester ID
    return exams.find((exam) => {
      const filename = exam.url.split("/").pop();

      // Remove .pdf extension and split by underscore
      const nameParts = filename.replace(".pdf", "").split("_");

      if (nameParts.length >= 3) {
        const lastPart = nameParts[nameParts.length - 1];

        // Check if last part is a 3-digit trimester code (e.g., 231)
        if (/^[0-9]{3}$/.test(lastPart) && lastPart === trimesterId) {
          return true;
        }
        // Check if last part contains season and year (e.g., spring2023)
        else if (
          /^(spring|summer|fall)[0-9]{4}$/.test(lastPart) &&
          lastPart === trimesterId
        ) {
          return true;
        }
        // Handle cases with additional suffixes like _A, _B
        else if (
          nameParts.length >= 4 &&
          /^[0-9]{3}$/.test(nameParts[nameParts.length - 2])
        ) {
          const extractedId = nameParts[nameParts.length - 2];
          if (extractedId === trimesterId) {
            return true;
          }
        }
      }

      return false;
    });
  }

  downloadPDF() {
    if (
      !this.currentCourse ||
      !this.currentExamType ||
      !this.currentTrimester
    ) {
      alert("No PDF selected for download");
      return;
    }

    const exam = this.findExam(
      this.currentCourse,
      this.currentExamType,
      this.currentTrimester
    );

    if (!exam) {
      alert("PDF not available for download");
      return;
    }

    const filename = exam.url.split("/").pop();

    // Create a download link and click it
    const link = document.createElement("a");
    link.href = `/${exam.url}`;
    link.download = filename;
    link.setAttribute("data-download-link", "true"); // Add this attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  updateStats() {
    // Update course count
    const courseCount = document.getElementById("courseCount");
    if (courseCount) {
      courseCount.textContent = this.data.length;
    }

    // Update trimester count - This is tricky as trimesters are not a separate list anymore
    const trimesterCount = document.getElementById("trimesterCount");
    if (trimesterCount) {
      const allTrimesters = new Set();
      this.data.forEach((course) => {
        this.examTypes.forEach((examType) => {
          if (course[examType.id]) {
            course[examType.id].forEach((exam) => {
              const filename = exam.url.split("/").pop();
              const nameParts = filename.split(".")[0].split("_");
              if (nameParts.length > 2) {
                const potentialTrimesterId = nameParts[nameParts.length - 1];
                if (/^[0-9]{3}$/.test(potentialTrimesterId)) {
                  allTrimesters.add(potentialTrimesterId);
                } else if (nameParts.length > 2) {
                  allTrimesters.add(nameParts[2]);
                }
              }
            });
          }
        });
      });
      trimesterCount.textContent = allTrimesters.size;
    }

    // Update exam count
    let totalExams = 0;
    this.data.forEach((course) => {
      this.examTypes.forEach((examType) => {
        if (course[examType.id]) {
          totalExams += course[examType.id].length;
        }
      });
    });

    const examCount = document.getElementById("examCount");
    if (examCount) {
      examCount.textContent = totalExams;
    }
  }

  formatTrimesterId(trimesterId) {
    if (!trimesterId || trimesterId.length !== 3) {
      return { season: "Unknown", year: "N/A" };
    }

    // Handle 3-digit trimester codes like 231
    const year = `20${trimesterId.substring(0, 2)}`;
    const seasonCode = trimesterId.substring(2);
    let season = "Unknown";
    switch (seasonCode) {
      case "1":
        season = "Spring";
        break;
      case "2":
        season = "Summer";
        break;
      case "3":
        season = "Fall";
        break;
    }
    return { season, year };
  }

  handleLocation() {
    const path = window.location.pathname;
    const segments = path.split("/").filter((segment) => segment);

    if (segments.length === 0) {
      // Home page
      this.renderHomeView(false);
    } else if (segments.length === 2 && segments[0] === "course") {
      // Course view: /course/{courseId}
      const courseId = segments[1];
      this.showCourseView(courseId, false);
    } else if (
      segments.length === 4 &&
      segments[0] === "course" &&
      segments[2] === "exam"
    ) {
      // Trimester view: /course/{courseId}/exam/{examType}
      const courseId = segments[1];
      const examType = segments[3];
      this.showTrimesterView(courseId, examType, false);
    } else if (
      segments.length === 6 &&
      segments[0] === "course" &&
      segments[2] === "exam" &&
      segments[4] === "trimester"
    ) {
      // PDF view: /course/{courseId}/exam/{examType}/trimester/{trimesterId}
      const courseId = segments[1];
      const examType = segments[3];
      const trimesterId = segments[5];
      this.showPDFView(courseId, examType, trimesterId, false);
    } else {
      // Invalid URL, redirect to home
      this.renderHomeView(true);
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
  window.uiuQuestionBank = new UIUQuestionBank();
  await window.uiuQuestionBank.init();
});

// Service Worker registration for offline support (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
