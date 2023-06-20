import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// assets
import { preview } from "../assets";

// utilities
import { getRandomPrompt } from "../utilities";

// components
import { Loader, FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e) => {};
  const handleSupriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-bold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E 2.0 AI
          and share them with friends
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Your prompt"
            type="text"
            name="prompt"
            placeholder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChange={handleChange}
            isSupriseMe
            handleSupriseMe={handleSupriseMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
