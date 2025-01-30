import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, BookOpen, Briefcase } from 'lucide-react';

export const Resume: React.FC = () => {
  const experience = [
{
    title: "Research Assistant",
    company: "College of Computing and Informatics, Drexel University",
    location: "Philadelphia, PA",
    period: "June 2024 – Present",
    description: [
      "Worked with Docker containers and managed a Docker Data Fed and Globus instance.",
      "Assisted with research for designing, implementing, and testing the storage adapter from Globus to DCS Store.",
      "Built a drag-and-drop UI for automating the uploading of instrument data to a Data Fed instance.",
    ],
  },
  {
    title: "Senior Software Developer",
    company: "IT Idol Technologies",
    location: "Valsad, Gujarat, India",
    period: "December 2022 – August 2023",
    description: [
      "Oversaw Agile teams and applied Agile techniques to accelerate development cycles and meet project deadlines.",
      "Encouraged team members to reach objectives, standards, and creative solutions.",
      "Led cross-functional initiatives to discover and incorporate cutting-edge solutions.",
    ],
  },
  {
    title: "Software Developer",
    company: "Grace and Faith Ministries",
    location: "Surat, India",
    period: "June 2021 – December 2022",
    description: [
      "Developed and implemented novel software solutions for clients, resulting in increased customer satisfaction ratings.",
      "Utilized machine learning algorithms to create predictive models that improved the accuracy of sales forecasts, enabling more efficient resource allocation.",
    ],
  },
  ];

  const education = [
    {
      degree: "Ph.D. in Electrical Engineering (Machine Learning)",
      school: "Drexel University, Philadelphia, PA",
      period: "September 2023 – June 2027",
      focus: "Specialization in Machine Learning"
    },
    {
      degree: "B.Tech in Computer Science",
      school: "Birla Vishwakarma Mahavidyalaya, Anand, India",
      period: "August 2017 – July 2021",
      focus: "Minor in Mathematics"
    }
  ];

  const certifications = [
    "Microsoft Azure Fundamentals - Microsoft (Sept 2022)",
  "End-to-End Machine Learning with TensorFlow on GCP – Coursera (Oct 2021)",
  ];

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-charcoal dark:text-cream">Resume</h2>
          <motion.a
            href="./static/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-charcoal px-6 py-3 rounded-full transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-charcoal dark:text-cream">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-accent/10"
                >
                  <h4 className="text-xl font-semibold mb-1 text-charcoal dark:text-cream">{job.title}</h4>
                  <p className="text-accent dark:text-accent/90 mb-2">{job.company}</p>
                  <p className="text-sm text-accent/80 dark:text-accent/70 mb-3">{job.period}</p>
                  <p className="text-accent dark:text-accent/90">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-charcoal dark:text-cream">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-accent/10"
                >
                  <h4 className="text-xl font-semibold mb-1 text-charcoal dark:text-cream">{edu.degree}</h4>
                  <p className="text-accent dark:text-accent/90 mb-2">{edu.school}</p>
                  <p className="text-sm text-accent/80 dark:text-accent/70 mb-3">{edu.period}</p>
                  <p className="text-accent dark:text-accent/90">{edu.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-charcoal dark:text-cream">Certifications</h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-cream/80 dark:bg-charcoal/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-accent/10"
            >
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-accent dark:text-accent/90">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};