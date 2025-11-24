import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner'; // Assuming you're using sonner for toasts
import { ArrowRight } from 'lucide-react';

const QuestionList = ({ formData, onCreateLink, loading }) => {
  const [hasCalled, setHasCalled] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  // Generate the list of interview questions
  const GenerateQuestionList = async () => {
    setHasCalled(true); // Mark that the API has been called

    try {
      console.log("Making API call to generate questions...");

      // Send the API request with formData as payload
      const result = await axios.post("/api/ai-model", formData);
      console.log("API response received:", result.data);

      const rawContent = result?.data?.content || result?.data?.Content;

      if (!rawContent) {
        toast("Invalid response format");
        console.error('Missing "content" or "Content" field in response');
        return;
      }

      console.log("Raw content:", rawContent);

      // Use regex to extract JSON from inside the backticks (```json {...}`)
      const match = rawContent.match(/```json\s*([\s\S]*?)\s*```/);

      if (!match || !match[1]) {
        toast("Failed to extract question list");
        console.error("No valid JSON block found in response");
        return;
      }

      let parsedData;
      try {
        parsedData = JSON.parse(match[1].trim());
        console.log("Parsed question data:", parsedData);
      } catch (parseError) {
        toast("Error parsing JSON");
        console.error("JSON parse error:", parseError);
        return;
      }

      setQuestionList(parsedData);
    } catch (error) {
      toast("Server Error, Try Again");
      console.error("Error generating questions:", error);
    }
  };

  useEffect(() => {
    if (formData && !hasCalled) {
      GenerateQuestionList(); // Call function if formData is ready
    }
  }, [formData, hasCalled]);

  return (
    <div className="question-list-container">
      {/* Loading Spinner */}
      {loading && <div>Loading...</div>} {/* Using the loading prop directly */}

      {/* Display Questions */}
      {!loading && questionList && (
        <div>
          {questionList.map((question, index) => (
            <div key={index}>
              <h3>{question.question}</h3>
              <p>Type: {question.type}</p>
            </div>
          ))}
        </div>
      )}

      {/* Button to proceed */}
      <button onClick={() => onCreateLink('interview_id')}>
        Generate Interview Link <ArrowRight className="ml-2 cursor-pointer" />
      </button>
    </div>
  );
};

export default QuestionList;
