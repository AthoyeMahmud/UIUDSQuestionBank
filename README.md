# UIU Data Science Question Bank

An interactive web application for browsing and viewing past exam questions for the Data Science department at United International University (UIU). This platform provides an easy-to-use interface for students to access a comprehensive archive of question papers.

## 📂 Project Structure

The project is organized with a clear and maintainable structure:

```
.
├── 📄 app.js             # Main application logic (routing, rendering, event handling)
├── 📄 data.json           # Database of courses and links to question PDFs
├── 📄 index.html          # Main HTML structure
├── 📄 style.css           # All styles for the application
├── 📁 questions/          # Root directory for all question paper PDFs
│   ├── BDS1201/
│   │   ├── final/
│   │   └── mid/
│   └── ... (other courses)
├── 📄 README.md          # This file
└── 📄 LICENSE            # Project License
```

## 🤝 How to Contribute

Contributions are welcome! To add new question papers, follow these steps:

1.  **Add the PDF File:**

    - Place the new question paper PDF inside the correct folder in `questions/`.
    - The folder structure is `questions/<COURSE_ID>/<exam_type>/`. For example, `questions/DS1501/mid/`.
    - Use a consistent naming convention for the PDF file, for example: `DS1501_Mid_233.pdf`.

2.  **Update the Database:**

    - Open the `data.json` file.
    - Find the course object corresponding to the question paper you are adding.
    - Add a new entry to the appropriate exam type array (`mid`, `final`, or `classtest`). The entry should be an object with a `url` key.

    **Example:** To add a new midterm paper for DS1501:

    ```json
    {
      "id": "DS1501",
      "title": "Programming for Data Science",
      // ... other course details
      "mid": [
        { "url": "questions/DS1501/mid/DS1501_Mid_233.pdf" },
        { "url": "questions/DS1501/mid/DS1501_Mid_241.pdf" } // <-- New entry
      ],
      "final": [
        // ...
      ],
      "classtest": [
        // ...
      ]
    }
    ```

3.  **Submit a Pull Request:**
    - Commit your changes and push them to your forked repository.
    - Open a pull request with a clear description of the changes you've made.

## 📜 License

This project is licensed under the terms of the license agreement found in the [LICENSE](LICENSE) file.
