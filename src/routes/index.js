import { Router } from 'express';
import * as MovieController from '../controllers/MovieController';


const router = Router();

router.get('/', MovieController.index);
router.get('/top_rated', MovieController.top_rated);
router.get('/upcoming', MovieController.upcoming);
router.get('/now_playing', MovieController.now_playing);
router.get('/detail/:id', MovieController.detail);
//rota para o post da controler
router.post('/', MovieController.search);

export default router;