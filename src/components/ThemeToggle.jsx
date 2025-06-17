// Import necessary things from React and Lucide icon library
import { useEffect, useState } from "react";
import { Sun, Moon, Star, MoonStarIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Import a utility function for class names

// This is a reusable React component called ThemeToggle
export const ThemeToggle = () => {
  
  // Declare a state variable named isDarkMode and a function to update it
  // It starts as false, meaning "light mode" by default
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme'); // Get the saved theme from local storage
    if (storedTheme === 'dark') {
      setIsDarkMode(true) // If the saved theme is 'dark', set isDarkMode to true
      document.documentElement.classList.add('dark'); // Add 'dark' class to the root element
    } else {
      localStorage.setItem('theme', 'light'); // Save the theme preference in local storage
      setIsDarkMode(false); // Default to light mode if no theme is saved
    }
  }, []);

  // This function flips the value of isDarkMode when the button is clicked
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from the root element
      document.documentElement.classList.add('light'); // Add 'light' class to the root element
      localStorage.setItem('theme', 'light'); // Save the theme preference in local storage
      setIsDarkMode(false); // Switch to light mode
    } else {
      document.documentElement.classList.add('dark'); // Add 'dark' class to the root element
      document.documentElement.classList.remove('light'); // Remove 'light' class if it exists
      localStorage.setItem('theme', 'dark'); // Save the theme preference in local storage  
      setIsDarkMode(true);  // Switch to dark mode
    }
  };

  // The button shows a sun icon if dark mode is on,
  // and a moon icon if dark mode is off
  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
      "focus:outlin-hidden"
    )}>
      {isDarkMode ? (
        // Show the sun icon when dark mode is active (suggesting you can go back to light mode)
        <SunIcon className="h-6 w-6 text-yellow-300" />
      ) : (
        // Show the moon icon when light mode is active (suggesting you can switch to dark mode)
        <MoonStarIcon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
