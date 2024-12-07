import React, { useState, useEffect } from 'react';
import {Select, SelectItem, Input, Spinner} from "@nextui-org/react";
import { promptCategories, promptTemplates } from '../data/promptData';
import PromptCard from './PromptCard';

function Popup() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPrompts, setFilteredPrompts] = useState(promptTemplates);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filterPrompts = () => {
      let filtered = [...promptTemplates];
  
      if (selectedCategory) {
        filtered = filtered.filter(prompt => prompt.category === selectedCategory);
      }
  
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(prompt => 
          prompt.title.toLowerCase().includes(query) ||
          prompt.description.toLowerCase().includes(query)
        );
      }
  
      setFilteredPrompts(filtered);
    };

    filterPrompts();
  }, [selectedCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="w-96 h-96 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-96 p-4">
      <h1 className="text-2xl font-bold mb-4">PromptPal</h1>
      
      <div className="space-y-4">
        <Select 
          label="Category"
          placeholder="Select a category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {promptCategories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.emoji} {category.name}
            </SelectItem>
          ))}
        </Select>

        <Input
          label="Search prompts"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
          {filteredPrompts.length === 0 && (
            <p className="text-center text-gray-500 my-8">
              No prompts found. Try adjusting your search or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;