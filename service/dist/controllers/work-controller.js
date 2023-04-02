import { works } from '../models/works.js';
export const getWurks = (req, res) => {
    res.status(200).json(works);
};
//# sourceMappingURL=work-controller.js.map