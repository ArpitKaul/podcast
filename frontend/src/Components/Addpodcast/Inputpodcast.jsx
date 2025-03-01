import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const Inputpodcast = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [Dragging, setDragging] = useState(false);
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setFrontImage(file);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setFrontImage(file);
  };

  const handleAudioFile = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const onChangeInputes = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const handleSubmitpodcast = async () => {
    console.log("handleSubmitpodcast called");

    if (!Inputs.title || !Inputs.description || !Inputs.category || !frontImage || !audioFile) {
      toast.error("All fields are required.");
      return;
    }

    const data = new FormData();
    data.append("title", Inputs.title);
    data.append("description", Inputs.description);
    data.append("category", Inputs.category);
    data.append("frontImage", frontImage);
    data.append("audioFile", audioFile);

    console.log(data);
    console.log(frontImage);
    console.log(audioFile);

    try {
      toast.success("Podcast added successfully");
      setInputs({
        title: "",
        description: "",
        category: "",
      });
      setFrontImage(null);
      setAudioFile(null);
      const res = await axios.post(
        "http://localhost:5000/api/v1/add-podcast",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(res);
    } catch (error) {
      console.error("Error during podcast creation:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      
    }
  };

  return (
    <div className="my-4 px-4 lg:px-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Create Your Podcast</h1>
      <div className="mt-5 flex flex-col lg:flex-row items-start justify-between gap-4">
        <div className="w-full lg:w-2/6">
          <div
            className={`size-[20vh] lg:size-[60vh] flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg ${
              Dragging ? "bg-blue-900" : "hover:bg-gray-800"
            } transition-all duration-300`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              id="file"
              name="frontImage"
              className="hidden"
              onChange={handleChangeImage}
            />
            {frontImage ? (
              <img
                src={URL.createObjectURL(frontImage)}
                alt="thumbnail"
                className="h-full w-full object-cover rounded-lg"
              />
            ) : (
              <label
                htmlFor="file"
                className="text-xl p-4 h-full w-full flex items-center cursor-pointer justify-center transition-all duration-300"
              >
                <div className="text-center text-gray-400">
                  Drag and drop the thumbnail or click to browse
                </div>
              </label>
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/6">
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-sm text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title for your Podcast"
              className="mt-2 px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white outline-none focus:border-blue-500"
              value={Inputs.title}
              onChange={onChangeInputes}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="text-sm text-gray-300">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Description for your Podcast"
              className="mt-2 px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white outline-none focus:border-blue-500"
              rows={4}
              value={Inputs.description}
              onChange={onChangeInputes}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex flex-row w-full lg:w-2/6 items-center">
              <label
                htmlFor="audioFile"
                className="border border-gray-700 rounded-md bg-gray-800 text-white outline-none px-4 py-2 cursor-pointer"
              >
                Choose File
                <input
                  type="file"
                  accept=".mp3, .wav, .m4a, ogg"
                  id="audioFile"
                  className="hidden"
                  onChange={handleAudioFile}
                />
              </label>
              {audioFile && <span className="ml-2 truncate">{audioFile.name}</span>}
            </div>
            <div className="flex flex-col w-full lg:w-4/6">
              <label htmlFor="category" className="text-sm text-gray-300">
                Select Category
              </label>
              <select
                name="category"
                id="category"
                className="mt-2 border border-gray-700 rounded-md bg-gray-800 text-white outline-none px-4 py-2"
                value={Inputs.category}
                onChange={onChangeInputes}
              >
                <option value="">Select Category</option>
                <option value="Comedy">Comedy</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Government">Government</option>
              </select>
            </div>
          </div>
          <div className="mt-8 lg:mt-6">
          
            <button
              className="bg-blue-600 w-full text-white rounded-md font-semibold hover:bg-blue-700 transition-all duration-300 py-2 cursor-pointer"
              onClick={handleSubmitpodcast}
            >
              Create Podcast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputpodcast;