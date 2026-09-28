// Two-agent sequential Crew written against the crewai-ts TypeScript port.
// Used to check how the OHR crewai template treats a non-Python Crew.
import { Agent, Crew, Task } from 'crewai-ts';

const researcher = new Agent({
  role: 'Researcher',
  goal: 'Gather 2-3 crisp facts about the given topic',
  backstory: 'You are a concise researcher.',
});

const writer = new Agent({
  role: 'Writer',
  goal: 'Turn research into one short paragraph',
  backstory: 'You write clear, short summaries for engineers.',
});

export const crew = new Crew({
  agents: [researcher, writer],
  tasks: [
    new Task({ description: 'Research this topic: {topic}', agent: researcher }),
    new Task({ description: 'Summarize the research in one paragraph ending with CREW_E2E_OK', agent: writer }),
  ],
  process: 'sequential',
});
