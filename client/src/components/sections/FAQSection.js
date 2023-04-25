import React from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: 'What is CatSafe?',
    answer:
      'CatSafe is a secure and judgment-free platform for University of Kentucky students to talk about mental health with other students.',
  },
  {
    id: 2,
    question: 'Who can use CatSafe?',
    answer:
      'CatSafe is exclusively for University of Kentucky students with a valid "@uky.edu" email address.',
  },
  {
    id: 3,
    question: 'Is CatSafe free to use?',
    answer:
      'Yes, CatSafe is completely free for University of Kentucky students to use.',
  },
  {
    id: 4,
    question: 'Is my chat with another student confidential?',
    answer:
      'Yes, all chats on CatSafe are completely confidential and anonymous.',
  },
];

const FAQSection = () => {
  return (
    <section className='faq-section py-20 bg-[#EDF2F7]'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-gray-600 leading-6'>
            Here are some common questions we get about CatSafe:
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {questions.map((question) => (
            <motion.div
              key={question.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='bg-white rounded-lg shadow-xl p-8'
            >
              <h3 className='text-xl font-bold mb-4'>{question.question}</h3>
              <p className='text-gray-600 leading-6'>{question.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
