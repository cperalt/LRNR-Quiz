  export const handleSubmit = async (topic, expertise, questionCount, styleOfQuestions) => {
    try {
      const response = await fetch('https://lrnr-quiz-backend.vercel.app/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: `${topic}, ${expertise}, ${questionCount}, ${styleOfQuestions}` }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
  
      // if (data.result && data.result.quiz) {
      //   navigate('/quiz-page', { state: { quiz: data.result.quiz } });
      // } else {
      //   throw new Error('Quiz data is not in the expected format.');
      // }
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('There was an issue generating the quiz. Please try again later.');
    }
  };




  export const checkAnswer = async (userAnswer, correctAnswer, question) => {
    try {
      const response = await fetch('https://lrnr-quiz-backend.vercel.app/api/check-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userAnswer, correctAnswer, question }),
      });
      if (!response.ok) {
        throw new Error('Failed to check answer');
      }
      return await response.json();
    } catch (error) {
      console.error('Error checking answer:', error);
      return null;
    }
  };