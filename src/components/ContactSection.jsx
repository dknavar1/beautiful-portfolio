
import { Linkedin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState(null); // State to hold reCAPTCHA token
  const recaptchaRef = useRef();

 const handleSubmit = async (e) => {
  // Stop the form from doing a normal page reload when submitted
  e.preventDefault();

  // Show "Sending..." on the button while waiting
  setIsSubmitting(true);

  // Get the actual form DOM element from the event
  const form = e.target;

  // Wrap all input fields into a FormData object
  const formData = new FormData(form);

  
  // Add the reCAPTCHA token to the form data
    formData.append("g-recaptcha-response", token); 

  try {
    // Send the form data to Formspree using fetch
    const response = await fetch("https://formspree.io/f/manjbwjd", {
      method: "POST",         // HTTP method for sending data
      body: formData,         // The actual form data
      headers: {
        Accept: "application/json",  // Expecting JSON response from Formspree
      },
    });

    // If the response is OK (status 200), show success message
    if (response.ok) {
      alert("Message Sent! Thank you!");
      form.reset(); // Clear the form fields
    } else {
      alert("There was an error sending your message. Please try again later.");
    }
  } catch (error) {
    // Catch network or JavaScript errors
    alert("Error submitting form.");
  }

  // After submission is finished, hide the "Sending..." text
  setTimeout(() => {
    setIsSubmitting(false);
  }, 1500);
};

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Have an idea, question, or just want to say hi? Drop me a message
          below or connect via LinkedIn.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/danielle-navarrette-a68b7930b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn Profile
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Eren Yeager..."
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Hey! I’d love to talk about..."
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        <div className="rounded-md border border-primary bg-muted/10 p-3 inline-block">
            <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key !!!!
            size="normal"
            onChange={(token) => setToken(token)}
            /> 
        </div>

          <button
            type="submit" 
            disabled={!!token || isSubmitting}
            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};
