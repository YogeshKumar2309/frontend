import React, { useState } from "react";

interface Template {
  title: string;
  description: string;
}

const templates: Template[] = [
  {
    title: "Explain [CONCEPT NAME] in depth",
    description: `Explain [CONCEPT NAME] in depth with:
- Theory explanation
- 5 different practical examples
- Common mistakes to avoid
- Best practices
- Real-world use cases
- Practice exercises

Example: "Explain useReducer in depth with..."`,
  },
  {
    title: "Practice project ideas for [CONCEPT]",
    description: `Give me 10 practice project ideas for [CONCEPT] with:
- Project description
- Features to include
- What I'll learn
- Difficulty level
- Estimated time

Example: "Give me 10 practice project ideas for Redux Toolkit..."`,
  },
  {
    title: "Stuck on a project",
    description: `I'm building [PROJECT NAME] and stuck at [SPECIFIC PROBLEM]. 
Don't give me the code, but explain:
- What concept I need to understand
- Approach to solve this
- What to research
- Similar examples to study

Example: "I'm building a shopping cart and stuck at persisting state on refresh..."`,
  },
  {
    title: "Code review template",
    description: `Review this approach for [FEATURE]:
[Describe your approach]

Tell me:
- Is this the right pattern?
- Performance concerns?
- Best practices I'm missing?
- Better alternatives?
- What to improve?`,
  },
];

const Templates: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // reset after 2s
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">React Templates</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {templates.map((template, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">{template.title}</h2>
              <pre className="text-gray-700 whitespace-pre-wrap">{template.description}</pre>
            </div>
            <button
              onClick={() => copyToClipboard(template.description, index)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
