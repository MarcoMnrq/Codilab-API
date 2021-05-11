const express = require("express");
const router = express.Router();
const CourseService = require("../service/course.service");
const service = new CourseService();

// Creating one
router.post("/", async (request, response) => {
    try {
        const course = await service.createCourse(request);
        response.status(201).json(course);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

// Getting all
router.get("/", async (request, response) => {
    try {
        const posts = await service.getAllCourses();
        response.json(posts);
    } catch (err) {
        response.status(500).json({ message: err.message });
    }
});

// Getting One
router.get("/:id", service.getCourse, (request, response) => {
    response.json(response.course);
});

// Updating One
router.patch("/:id", service.getCourse, async (request, response) => {
    try {
        const course = await service.updateCourse(response.course, request);
        response.json(updatedSubscriber);
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
});

// Deleting a post by id
router.delete("/:id", service.getCourse, async (request, response) => {
    try {
        await service.deleteCourse(response.course);
        response.json({ message: "Eliminado" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

module.exports = router;
