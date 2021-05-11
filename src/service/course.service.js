const Course = require("../model/course");

class CourseService {
    // Create a new course
    async createCourse(request) {
        const course = new Course({
            title: request.body.title,
            description: request.body.description,
        });
        return course.save();
    }

    // Get course by id
    async getCourse(request, response, next) {
        let course;
        try {
            course = await Course.findById(request.params.id);
            if (course == null) {
                return response.status(404).json({
                    message: `Resource with id ${request.params.id} does not exist`,
                });
            }
        } catch (err) {
            return response.status(500).json({ message: err.message });
        }
        response.course = course;
        next();
    }

    // Get all courses
    async getAllCourses() {
        return Course.find();
    }

    // Update course
    async updateCourse(course, request) {
        course.title = request.body.title;
        course.description = request.body.description;
        return course.save();
    }

    // Delete a course
    async deleteCourse(course) {
        await course.remove();
    }
}

module.exports = CourseService
