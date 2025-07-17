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
      const response = await fetch("/data.json");
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

    // Contributors button
    const contributorsBtn = document.getElementById("contributorsBtn");
    if (contributorsBtn) {
      contributorsBtn.addEventListener("click", () => {
        this.showContributorsView();
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

  async showContributorsView(pushState = true) {
    if (pushState) {
      history.pushState(null, "", "/contributors");
    }
    this.showView("contributors");
    this.updateBreadcrumb([
      { text: "Home", level: "home" },
      { text: "Contributors", level: "contributors" },
    ]);
    await this.renderContributors();
  }

  async renderContributors() {
    const contributorGrid = document.getElementById("contributorGrid");
    if (!contributorGrid) return;

    try {
      const response = await fetch("/contributors.json");
      const contributors = await response.json();

      if (contributors.length === 0) {
        contributorGrid.innerHTML = `<p>No contributors listed yet.</p>`;
        return;
      }

      contributorGrid.innerHTML = contributors
        .map(
          (c) => `
        <div class="contributor-card">
          <img src="${c.avatarUrl}" alt="${
            c.name
          }" class="contributor-card__avatar">
          <h3 class="contributor-card__name">${c.name}</h3>
          <div class="contributor-card__socials">
            ${
              c.githubUrl
                ? `<a href="${c.githubUrl}" target="_blank" class="contributor-card__social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.222.694.826.577A12.006 12.006 0 0024 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>`
                : ""
            }
            ${
              c.linkedinUrl
                ? `<a href="${c.linkedinUrl}" target="_blank" class="contributor-card__social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>`
                : ""
            }
            ${
              c.facebookUrl
                ? `<a href="${c.facebookUrl}" target="_blank" class="contributor-card__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>`
                : ""
            }
          </div>
        </div>
      `
        )
        .join("");
    } catch (error) {
      console.error("Error loading contributors:", error);
      contributorGrid.innerHTML = `<p>Could not load contributors.</p>`;
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
        const filename = exam.url.split("/").pop();
        const baseFilename = filename.replace(".pdf", "");
        const nameParts = baseFilename.split("_");

        let trimesterId, trimesterName, cardContent;

        if (
          examType === "classtest" &&
          nameParts.length >= 3 &&
          nameParts[1].startsWith("CT")
        ) {
          trimesterId = baseFilename;
          const classTestNumber = nameParts[1].replace("CT", "");
          const trimesterCode = nameParts[2];
          const formattedTrimester = this.formatTrimesterId(trimesterCode);

          cardContent = `
            <div class="trimester-card__season">Class Test ${classTestNumber}</div>
            <div class="trimester-card__year">${formattedTrimester.season} ${formattedTrimester.year}</div>
          `;
        } else {
          if (nameParts.length >= 3) {
            const lastPart = nameParts[nameParts.length - 1];

            if (/^[0-9]{3}$/.test(lastPart)) {
              trimesterId = lastPart;
              trimesterName = this.formatTrimesterId(trimesterId);
            } else if (/^(spring|summer|fall)[0-9]{4}$/.test(lastPart)) {
              trimesterId = lastPart;
              trimesterName = {
                season: lastPart.replace(/[0-9]/g, ""),
                year: lastPart.replace(/[^0-9]/g, ""),
              };
            } else if (
              nameParts.length >= 4 &&
              /^[0-9]{3}$/.test(nameParts[nameParts.length - 2])
            ) {
              trimesterId = nameParts[nameParts.length - 2];
              trimesterName = this.formatTrimesterId(trimesterId);
            }
          }

          if (trimesterName) {
            cardContent = `
              <div class="trimester-card__season">${trimesterName.season}</div>
              <div class="trimester-card__year">${trimesterName.year}</div>
            `;
          }
        }

        if (!trimesterId || !cardContent) return "";

        return `
          <a href="/course/${course.id}/exam/${examType}/trimester/${trimesterId}" 
             class="trimester-card" data-trimester-id="${trimesterId}" data-filename="${filename}">
              ${cardContent}
          </a>
        `;
      })
      .filter((card) => card !== "")
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
    let pdfTitleText;

    if (examType === "classtest") {
      const nameParts = trimesterId.split("_");
      if (nameParts.length >= 3) {
        const classTestNumber = nameParts[1].replace("CT", "");
        const trimesterCode = nameParts[2];
        const formattedTrimester = this.formatTrimesterId(trimesterCode);
        pdfTitleText = `${course.code} - ${examTypeData.name} ${classTestNumber} - ${formattedTrimester.season} ${formattedTrimester.year}`;
        trimesterName = formattedTrimester; // for breadcrumb
      }
    }

    if (!pdfTitleText) {
      if (/^[0-9]{3}$/.test(trimesterId)) {
        trimesterName = this.formatTrimesterId(trimesterId);
      } else {
        trimesterName = {
          season: trimesterId.replace(/[0-9]/g, ""),
          year: trimesterId.replace(/[^0-9]/g, ""),
        };
      }
      pdfTitleText = `${course.code} - ${examTypeData.name} - ${trimesterName.season} ${trimesterName.year}`;
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
      pdfTitle.textContent = pdfTitleText;
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

    return exams.find((exam) => {
      const filename = exam.url.split("/").pop();
      const baseFilename = filename.replace(".pdf", "");

      if (examType === "classtest") {
        return baseFilename === trimesterId;
      }

      const nameParts = baseFilename.split("_");

      if (nameParts.length >= 3) {
        const lastPart = nameParts[nameParts.length - 1];

        if (/^[0-9]{3}$/.test(lastPart) && lastPart === trimesterId) {
          return true;
        } else if (
          /^(spring|summer|fall)[0-9]{4}$/.test(lastPart) &&
          lastPart === trimesterId
        ) {
          return true;
        } else if (
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
    } else if (segments.length === 1 && segments[0] === "contributors") {
      this.showContributorsView(false);
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
