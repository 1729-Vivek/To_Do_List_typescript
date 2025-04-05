import {Router} from "express"
import {
    getTasks,
    addTask,
    markDone,
    deleteTask
} from "../controllers/taskController"


const router = Router();

router.get("/tasks",getTasks)
router.post("/tasks",addTask)
router.put("/tasks/:id",markDone)
router.delete("/tasks/:id",deleteTask);

export default router;