# wang_yue_ui_garden_build_checks - Component Library

This repository contains a React UI component library built with Vite and Storybook.

---

## What you need installed before starting:

- [Docker](https://www.docker.com/get-started) installed on your machine
- Node.js and npm

---

## Running the Storybook UI with Docker

###
1. Clone this repository

Open a terminal in your preferred directory and run:

```
git clone https://github.com/yue-creator/wang_yue_ui_garden_build_checks.git
```

2. Build the Docker image

Open a terminal in the `component_library` folder and run:

```
docker build -t yue_wang_ui_garden_build_checks .
```

3. Run the Docker container

```
docker run -d -p 8083:80 --name yue_wang_coding_assignment13 yue_wang_ui_garden_build_checks
```

4. Access the Storybook UI
Open your web browser and navigate to:
http://localhost:8083

