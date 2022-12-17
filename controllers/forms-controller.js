const Form = require("../model/Form");

const getAllForms = async (req, res, next) => {
  let forms;
  try {
    forms = await Form.find();
  } catch (err) {
    console.log(err);
  }

  if (!forms) {
    return res.status(404).json({ message: "No Forms found" });
  }
  return res.status(200).json({ forms });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let form;
  try {
    form = await Form.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!form) {
    return res.status(404).json({ message: "No Form found" });
  }
  return res.status(200).json({ form });
};

const addForm = async (req, res, next) => {
  const { name, nickname, qualification, position, state, district, village, constituencyloksabha, constituencyassembly, phonenumber, email, facebook, instagram, image1, image2, image3, image4, } = req.body;
  let form;
  try {
    form = new Form({
      name,
      nickname,
      qualification,
      position,
      state,
      district,
      village,
      constituencyloksabha,
      constituencyassembly,
      phonenumber,
      email,
      facebook,
      instagram,
      image1,
      image2,
      image3,
      image4,
    });
    await form.save();
  } catch (err) {
    console.log(err);
  }

  if (!form) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ form });
};


exports.getAllForms = getAllForms;
exports.addForm = addForm;
exports.getById = getById;

