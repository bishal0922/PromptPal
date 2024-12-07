export const promptCategories = [
  {
    id: 'general',
    name: 'General Assistance',
    emoji: '🤖'
  },
  {
    id: 'writing',
    name: 'Writing & Content',
    emoji: '✍️'
  },
  {
    id: 'code',
    name: 'Code & Programming',
    emoji: '💻'
  },
  {
    id: 'analysis',
    name: 'Analysis & Research',
    emoji: '📊'
  }
];

export const promptTemplates = [
  {
    id: 1,
    category: 'writing',
    title: 'Blog Post Outline',
    description: 'Creates a structured blog post outline',
    template: 'Create a detailed blog post outline about {topic}. Include an introduction, at least 3 main sections with subpoints, and a conclusion.',
    variables: ['topic']
  },
  {
    id: 2,
    category: 'code',
    title: 'Code Explanation',
    description: 'Explains code in detail',
    template: 'Explain this {language} code in detail:\n\n{code}\n\nBreak down how it works and suggest any potential improvements.',
    variables: ['language', 'code']
  },
  {
    id: 3,
    category: 'analysis',
    title: 'Data Analysis',
    description: 'Analyzes data and provides insights',
    template: 'Analyze this {dataType} data and provide key insights:\n\n{data}\n\nInclude patterns, trends, and recommendations.',
    variables: ['dataType', 'data']
  },
  {
    id: 4,
    category: 'general',
    title: 'Step-by-Step Guide',
    description: 'Creates a detailed how-to guide',
    template: 'Create a step-by-step guide for {task}. Include necessary materials, prerequisites, and potential challenges.',
    variables: ['task']
  }
];