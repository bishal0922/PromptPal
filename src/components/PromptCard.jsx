import React, { useState } from 'react';
import { Card, Button, Input } from "@nextui-org/react";

const PromptCard = ({ prompt }) => {
  const [variables, setVariables] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  if (!prompt) {
    return null;
  }

  const handleVariableChange = (variable, value) => {
    setVariables(prev => ({
      ...prev,
      [variable]: value
    }));
  };

  const processTemplate = () => {
    let processedTemplate = prompt.template;
    Object.entries(variables).forEach(([key, value]) => {
      processedTemplate = processedTemplate.replace(`{${key}}`, value || '');
    });
    return processedTemplate;
  };

  const copyToClipboard = async () => {
    try {
      const text = processTemplate();
      await navigator.clipboard.writeText(text);
      // You could add a success notification here
    } catch (err) {
      console.error('Failed to copy:', err);
      // You could add an error notification here
    }
  };

  return (
    <Card className="w-full p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{prompt.title}</h3>
          <p className="text-sm text-gray-500">{prompt.description}</p>
        </div>
        <Button
          size="sm"
          color="primary"
          onPress={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Close' : 'Use'}
        </Button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {prompt.variables?.map(variable => (
            <Input
              key={variable}
              label={variable}
              placeholder={`Enter ${variable}`}
              value={variables[variable] || ''}
              onChange={(e) => handleVariableChange(variable, e.target.value)}
            />
          ))}
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">Preview:</p>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
              {processTemplate()}
            </p>
          </div>
          <Button 
            color="success" 
            className="w-full"
            onPress={copyToClipboard}
          >
            Copy to Clipboard
          </Button>
        </div>
      )}
    </Card>
  );
};

export default PromptCard;