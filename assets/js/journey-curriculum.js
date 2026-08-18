/**
 * The Path — 6-Month AI Engineering Progress Tracker Dataset
 * Generated for 182-Day Curriculum starting 2026-08-18
 * Contains 5 Curated Resources from 5 Distinct Websites per Day.
 */
window.JOURNEY_CURRICULUM = [
  {
    "day_number": 1,
    "date": "2026-08-18",
    "week_number": 1,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Set up the toolkit",
    "description": "Install Python 3.11+, VS Code, and create a venv. Create the GitHub repository that will hold all projects and code throughout this 6-month journey.",
    "resources": [
      {
        "label": "Python Official venv & Environment Guide",
        "url": "https://docs.python.org/3/tutorial/venv.html",
        "is_top_pick": true,
        "domain": "python.org"
      },
      {
        "label": "VS Code Python Development Setup",
        "url": "https://code.visualstudio.com/docs/languages/python",
        "domain": "visualstudio.com"
      },
      {
        "label": "Git & GitHub Repository Best Practices",
        "url": "https://docs.github.com/en/get-started",
        "domain": "github.com"
      },
      {
        "label": "Modern Python Project Structure (Hypermodern)",
        "url": "https://cjolowicz.github.io/posts/hypermodern-python-01-setup/",
        "domain": "cjolowicz.github.io"
      },
      {
        "label": "Real Python: Python 3.11 Features & Speedups",
        "url": "https://realpython.com/python311-new-features/",
        "domain": "realpython.com"
      }
    ],
    "deliverable": "GitHub repository initialized with README and Python 3.11 virtual environment",
    "completed_override": null
  },
  {
    "day_number": 2,
    "date": "2026-08-19",
    "week_number": 1,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Learn async/await",
    "description": "Work through the official Python asyncio docs; write three small practice async functions demonstrating concurrent fetching, task gathering, and timeouts.",
    "resources": [
      {
        "label": "Python asyncio Official Documentation",
        "url": "https://docs.python.org/3/library/asyncio.html",
        "is_top_pick": true,
        "domain": "python.org"
      },
      {
        "label": "Real Python: Async IO in Python Complete Walkthrough",
        "url": "https://realpython.com/async-io-python/",
        "domain": "realpython.com"
      },
      {
        "label": "HTTPX: Modern Async HTTP Client for Python",
        "url": "https://www.python-httpx.org/async/",
        "domain": "python-httpx.org"
      },
      {
        "label": "Asyncio Event Loop & Coroutines Deep Dive",
        "url": "https://superfastpython.com/asyncio-event-loop/",
        "domain": "superfastpython.com"
      },
      {
        "label": "GitHub: Python Asyncio Architecture Examples",
        "url": "https://github.com/timofurrer/awesome-asyncio",
        "domain": "github.com"
      }
    ],
    "deliverable": "3 functional asyncio scripts demonstrating concurrency patterns",
    "completed_override": null
  },
  {
    "day_number": 3,
    "date": "2026-08-20",
    "week_number": 1,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Learn Pydantic + type hints",
    "description": "Master Pydantic v2 data validation and strict typing. Model a complex sample API response as a Pydantic class with custom validators.",
    "resources": [
      {
        "label": "Pydantic v2 Official Documentation & Migration",
        "url": "https://docs.pydantic.dev/latest/",
        "is_top_pick": true,
        "domain": "pydantic.dev"
      },
      {
        "label": "FastAPI: Pydantic Schema Validation Patterns",
        "url": "https://fastapi.tiangolo.com/tutorial/body/",
        "domain": "tiangolo.com"
      },
      {
        "label": "Real Python: Python Type Checking Guide",
        "url": "https://realpython.com/python-type-checking/",
        "domain": "realpython.com"
      },
      {
        "label": "Towards Data Science: Modern Pydantic V2 Best Practices",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub: Pydantic Core & Data Models",
        "url": "https://github.com/pydantic/pydantic",
        "domain": "github.com"
      }
    ],
    "deliverable": "Pydantic models with validation schemas for nested API payloads",
    "completed_override": null
  },
  {
    "day_number": 4,
    "date": "2026-08-21",
    "week_number": 1,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Build an Async CLI tool",
    "description": "Build an async command-line tool that concurrently calls a public REST API, parses and validates the JSON response with Pydantic, and outputs formatted results.",
    "resources": [
      {
        "label": "Rich: Terminal Formatting & Live Progress",
        "url": "https://rich.readthedocs.io/en/latest/",
        "is_top_pick": true,
        "domain": "readthedocs.io"
      },
      {
        "label": "Python HTTPX Async Client Guide",
        "url": "https://www.python-httpx.org/",
        "domain": "python-httpx.org"
      },
      {
        "label": "Click: Python Composable CLI Framework",
        "url": "https://click.palletsprojects.com/",
        "domain": "palletsprojects.com"
      },
      {
        "label": "Real Python: Beautiful Python CLIs",
        "url": "https://realpython.com/comparing-python-cli-libraries/",
        "domain": "realpython.com"
      },
      {
        "label": "GitHub: Example Async REST CLI Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Working async CLI utility in Python with error handling",
    "completed_override": null
  },
  {
    "day_number": 5,
    "date": "2026-08-22",
    "week_number": 1,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Polish & commit",
    "description": "Clean up the CLI tool, write a concise and informative README with usage examples, and push the first verified commit of the roadmap.",
    "resources": [
      {
        "label": "Conventional Commits Specification",
        "url": "https://www.conventionalcommits.org/en/v1.0.0/",
        "is_top_pick": true,
        "domain": "conventionalcommits.org"
      },
      {
        "label": "Make a README: Standard Documentation Template",
        "url": "https://www.makeareadme.com/",
        "domain": "makeareadme.com"
      },
      {
        "label": "Ruff: Ultra-Fast Python Linter and Formatter",
        "url": "https://docs.astral.sh/ruff/",
        "domain": "astral.sh"
      },
      {
        "label": "GitHub Actions: Automated CI Testing Workflow",
        "url": "https://docs.github.com/en/actions",
        "domain": "github.com"
      },
      {
        "label": "Real Python: Python Code Quality Tools",
        "url": "https://realpython.com/python-code-quality/",
        "domain": "realpython.com"
      }
    ],
    "deliverable": "Cleaned repo with documentation and passing CLI tests",
    "completed_override": null
  },
  {
    "day_number": 6,
    "date": "2026-08-23",
    "week_number": 1,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 7,
    "date": "2026-08-24",
    "week_number": 1,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 8,
    "date": "2026-08-25",
    "week_number": 2,
    "day_in_week": 1,
    "day_type": "study",
    "title": "ChatGPT Prompt Engineering for Developers (Part 1)",
    "description": "Complete the first half of DeepLearning.AI's 'ChatGPT Prompt Engineering for Developers' taught by Andrew Ng and Isa Fulford.",
    "resources": [
      {
        "label": "DeepLearning.AI: Prompt Engineering for Developers",
        "url": "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
        "is_top_pick": true,
        "domain": "deeplearning.ai"
      },
      {
        "label": "OpenAI: Official Prompt Engineering Best Practices",
        "url": "https://platform.openai.com/docs/guides/prompt-engineering",
        "domain": "openai.com"
      },
      {
        "label": "Anthropic: Prompt Engineering Interactive Interactive Guide",
        "url": "https://docs.anthropic.com/en/docs/prompt-engineering",
        "domain": "anthropic.com"
      },
      {
        "label": "LearnPrompting: Introductory LLM Guide",
        "url": "https://learnprompting.org/docs/intro",
        "domain": "learnprompting.org"
      },
      {
        "label": "Weng Lil'Log: Prompt Engineering Overview",
        "url": "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/",
        "domain": "lilianweng.github.io"
      }
    ],
    "deliverable": "Course notebook with prompting principles 1 & 2 exercises",
    "completed_override": null
  },
  {
    "day_number": 9,
    "date": "2026-08-26",
    "week_number": 2,
    "day_in_week": 2,
    "day_type": "study",
    "title": "ChatGPT Prompt Engineering for Developers (Part 2)",
    "description": "Finish the course. Implement each technique (summarizing, inferring, transforming, expanding) in a standalone Jupyter notebook.",
    "resources": [
      {
        "label": "DeepLearning.AI: Course Interactive Playground",
        "url": "https://www.deeplearning.ai/",
        "is_top_pick": true,
        "domain": "deeplearning.ai"
      },
      {
        "label": "OpenAI Cookbook: Practical Prompting Patterns",
        "url": "https://cookbook.openai.com/",
        "domain": "openai.com"
      },
      {
        "label": "JupyterLab Official Documentation",
        "url": "https://jupyterlab.readthedocs.io/",
        "domain": "readthedocs.io"
      },
      {
        "label": "PromptingGuide.ai: Advanced Techniques Handbook",
        "url": "https://www.promptingguide.ai/",
        "domain": "promptingguide.ai"
      },
      {
        "label": "GitHub: Prompt Engineering Interactive Exercises",
        "url": "https://github.com/dair-ai/Prompt-Engineering-Guide",
        "domain": "github.com"
      }
    ],
    "deliverable": "Complete interactive Jupyter notebook covering all core prompting strategies",
    "completed_override": null
  },
  {
    "day_number": 10,
    "date": "2026-08-27",
    "week_number": 2,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Chip Huyen's AI Engineering \u2014 Intro Chapter",
    "description": "Start Chip Huyen's book 'AI Engineering' (O'Reilly, 2025). Read the introduction chapter and explore the companion code repository.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineering Book Companion Repository",
        "url": "https://github.com/chiphuyen/aie-book",
        "is_top_pick": true,
        "domain": "github.com"
      },
      {
        "label": "Chip Huyen Official Blog & System Design Notes",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com"
      },
      {
        "label": "O'Reilly: AI Engineering Book Overview",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
        "domain": "oreilly.com"
      },
      {
        "label": "Towards Data Science: Evolution of AI Engineering",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "Andrej Karpathy: State of GPT & LLM Paradigms",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      }
    ],
    "deliverable": "Reading notes and environment setup for book companion code",
    "completed_override": null
  },
  {
    "day_number": 11,
    "date": "2026-08-28",
    "week_number": 2,
    "day_in_week": 4,
    "day_type": "study",
    "title": "AI Engineering \u2014 Prompting Chapter",
    "description": "Continue Chip Huyen's book, studying the in-depth prompting chapter. Analyze prompt optimization, token budgets, and prompt compression.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineering Prompt Chapter Notes",
        "url": "https://huyenchip.com/blog/",
        "is_top_pick": true,
        "domain": "huyenchip.com"
      },
      {
        "label": "OpenAI: Token Counting & Tokenizer Tool",
        "url": "https://platform.openai.com/tokenizer",
        "domain": "openai.com"
      },
      {
        "label": "Tiktoken: Fast BPE Tokeniser for Python",
        "url": "https://github.com/openai/tiktoken",
        "domain": "github.com"
      },
      {
        "label": "ArXiv: LLMLingua Prompt Compression Research",
        "url": "https://arxiv.org/abs/2310.05736",
        "domain": "arxiv.org"
      },
      {
        "label": "Anthropic: Context Window Management Strategies",
        "url": "https://docs.anthropic.com/en/docs/context-window",
        "domain": "anthropic.com"
      }
    ],
    "deliverable": "Summary of prompt engineering trade-offs and token optimization rules",
    "completed_override": null
  },
  {
    "day_number": 12,
    "date": "2026-08-29",
    "week_number": 2,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Prompting Strategy Comparison",
    "description": "Write a short benchmark comparison comparing few-shot vs. chain-of-thought (CoT) vs. structured-output prompting on a non-trivial classification/extraction task.",
    "resources": [
      {
        "label": "ArXiv: Chain-of-Thought Prompting Research (Wei et al.)",
        "url": "https://arxiv.org/abs/2201.11903",
        "is_top_pick": true,
        "domain": "arxiv.org"
      },
      {
        "label": "OpenAI: Structured Outputs Guide (JSON Mode & Pydantic)",
        "url": "https://platform.openai.com/docs/guides/structured-outputs",
        "domain": "openai.com"
      },
      {
        "label": "Anthropic: Few-Shot Prompting Examples",
        "url": "https://docs.anthropic.com/en/docs/few-shot-prompting",
        "domain": "anthropic.com"
      },
      {
        "label": "PromptingGuide.ai: Comparative Strategy Matrix",
        "url": "https://www.promptingguide.ai/techniques/cot",
        "domain": "promptingguide.ai"
      },
      {
        "label": "GitHub: Structured Extraction Benchmark Code",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Markdown report with sample prompts, outputs, and cost/accuracy comparison",
    "completed_override": null
  },
  {
    "day_number": 13,
    "date": "2026-08-30",
    "week_number": 2,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 14,
    "date": "2026-08-31",
    "week_number": 2,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 15,
    "date": "2026-09-01",
    "week_number": 3,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Claude 101",
    "description": "Sign up at anthropic.skilljar.com; complete the 'Claude 101' foundational course covering model capabilities, system prompts, and context windows.",
    "resources": [
      {
        "label": "Anthropic Educational Academy (Skilljar)",
        "url": "https://anthropic.skilljar.com",
        "is_top_pick": true,
        "domain": "skilljar.com"
      },
      {
        "label": "Anthropic Official Claude Documentation",
        "url": "https://docs.anthropic.com/en/home",
        "domain": "anthropic.com"
      },
      {
        "label": "Simon Willison: Exploring Claude Model Generations",
        "url": "https://simonwillison.net/tags/claude/",
        "domain": "simonwillison.net"
      },
      {
        "label": "DeepLearning.AI: Working with Claude Models",
        "url": "https://www.deeplearning.ai/",
        "domain": "deeplearning.ai"
      },
      {
        "label": "GitHub: Anthropic Python Client SDK",
        "url": "https://github.com/anthropics/anthropic-sdk-python",
        "domain": "github.com"
      }
    ],
    "deliverable": "Course completion badge & initial Anthropic SDK script",
    "completed_override": null
  },
  {
    "day_number": 16,
    "date": "2026-09-02",
    "week_number": 3,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Building with the Claude API \u2014 Auth & Requests",
    "description": "Work through 'Building with the Claude API' modules on authentication, client setup, basic message requests, and parameter tuning (temperature, max_tokens).",
    "resources": [
      {
        "label": "Anthropic: Messages API Reference",
        "url": "https://docs.anthropic.com/en/api/messages",
        "is_top_pick": true,
        "domain": "anthropic.com"
      },
      {
        "label": "Anthropic Skilljar: Building with Claude API",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com"
      },
      {
        "label": "Python-dotenv: Secret & Environment Management",
        "url": "https://pypi.org/project/python-dotenv/",
        "domain": "pypi.org"
      },
      {
        "label": "Real Python: Secure API Key Storage",
        "url": "https://realpython.com/python-api-keys/",
        "domain": "realpython.com"
      },
      {
        "label": "GitHub: Anthropic Quickstart Templates",
        "url": "https://github.com/anthropics/anthropic-quickstarts",
        "domain": "github.com"
      }
    ],
    "deliverable": "Python script with robust Anthropic client initialization and request wrappers",
    "completed_override": null
  },
  {
    "day_number": 17,
    "date": "2026-09-03",
    "week_number": 3,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Streaming & Tool Use Modules",
    "description": "Complete the streaming responses and tool use (function calling) modules in Anthropic Academy. Implement real-time SSE token streaming.",
    "resources": [
      {
        "label": "Anthropic: Tool Use (Function Calling) Guide",
        "url": "https://docs.anthropic.com/en/docs/tool-use",
        "is_top_pick": true,
        "domain": "anthropic.com"
      },
      {
        "label": "Anthropic: Streaming Messages API Guide",
        "url": "https://docs.anthropic.com/en/api/messages-streaming",
        "domain": "anthropic.com"
      },
      {
        "label": "Mozilla Developer Network: Server-Sent Events (SSE)",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events",
        "domain": "mozilla.org"
      },
      {
        "label": "Rich: Live Streaming Console Display",
        "url": "https://rich.readthedocs.io/en/latest/live.html",
        "domain": "readthedocs.io"
      },
      {
        "label": "GitHub: Anthropic Tool Use Examples",
        "url": "https://github.com/anthropics/anthropic-cookbook",
        "domain": "github.com"
      }
    ],
    "deliverable": "Streaming terminal chat client using Claude API with JSON schema tool definitions",
    "completed_override": null
  },
  {
    "day_number": 18,
    "date": "2026-09-04",
    "week_number": 3,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Prompt Caching & Error Handling",
    "description": "Master Claude's Prompt Caching to slash latency and cost by up to 90%. Implement exponential backoff, rate limit handling, and API error categorization.",
    "resources": [
      {
        "label": "Anthropic: Prompt Caching Technical Guide",
        "url": "https://docs.anthropic.com/en/docs/prompt-caching",
        "is_top_pick": true,
        "domain": "anthropic.com"
      },
      {
        "label": "Tenacity: Python Retrying & Backoff Library",
        "url": "https://tenacity.readthedocs.io/",
        "domain": "readthedocs.io"
      },
      {
        "label": "Anthropic: Errors & Status Codes Reference",
        "url": "https://docs.anthropic.com/en/api/errors",
        "domain": "anthropic.com"
      },
      {
        "label": "Towards Data Science: Cost Reduction with LLM Caching",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub: Prompt Caching Cost Benchmark Script",
        "url": "https://github.com/anthropics/anthropic-cookbook",
        "domain": "github.com"
      }
    ],
    "deliverable": "Cached prompt pipeline with verified cache_read_input_tokens reduction",
    "completed_override": null
  },
  {
    "day_number": 19,
    "date": "2026-09-05",
    "week_number": 3,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Production Deployment Patterns",
    "description": "Study production deployment patterns module: secret management, latency optimizations, batch API requests, and monitoring token consumption.",
    "resources": [
      {
        "label": "Anthropic: Production Readiness Checklist",
        "url": "https://docs.anthropic.com/en/docs/production-readiness",
        "is_top_pick": true,
        "domain": "anthropic.com"
      },
      {
        "label": "Anthropic: Message Batches API Documentation",
        "url": "https://docs.anthropic.com/en/docs/batch-api",
        "domain": "anthropic.com"
      },
      {
        "label": "12-Factor App: Config and Secrets Best Practices",
        "url": "https://12factor.net/config",
        "domain": "12factor.net"
      },
      {
        "label": "Martin Fowler: Microservices and API Gateways",
        "url": "https://martinfowler.com/articles/gateway-pattern.html",
        "domain": "martinfowler.com"
      },
      {
        "label": "GitHub: Claude Production Template Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Production-ready Claude client class with telemetry logging",
    "completed_override": null
  },
  {
    "day_number": 20,
    "date": "2026-09-06",
    "week_number": 3,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 21,
    "date": "2026-09-07",
    "week_number": 3,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 22,
    "date": "2026-09-08",
    "week_number": 4,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Finish Anthropic Academy Certification",
    "description": "Finish any remaining modules in 'Building with the Claude API' and review the consolidated architecture patterns.",
    "resources": [
      {
        "label": "Anthropic Academy Course Dashboard",
        "url": "https://anthropic.skilljar.com",
        "is_top_pick": true,
        "domain": "skilljar.com"
      },
      {
        "label": "Anthropic Developer Discord & Community",
        "url": "https://discord.com/invite/anthropic",
        "domain": "discord.com"
      },
      {
        "label": "Anthropic Cookbook: Production Patterns",
        "url": "https://github.com/anthropics/anthropic-cookbook",
        "domain": "github.com"
      },
      {
        "label": "Chip Huyen: LLM Application Architecture Blueprint",
        "url": "https://huyenchip.com/2023/04/11/llm-engineering.html",
        "domain": "huyenchip.com"
      },
      {
        "label": "Real Python: Python Packaging and CLI Distribution",
        "url": "https://realpython.com/pypi-publish-python-package/",
        "domain": "realpython.com"
      }
    ],
    "deliverable": "Complete course certification and cheat-sheet summary",
    "completed_override": null
  },
  {
    "day_number": 23,
    "date": "2026-09-09",
    "week_number": 4,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Design Project #0: CLI Chatbot with Memory",
    "description": "Design Project #0 (CLI chatbot with structured conversation memory). Sketch the memory buffer architecture and message trimming strategy.",
    "resources": [
      {
        "label": "Mermaid.js: Dynamic Architecture Diagramming",
        "url": "https://mermaid.js.org/",
        "is_top_pick": true,
        "domain": "mermaid.js.org"
      },
      {
        "label": "LangChain: Conversation Memory Buffer Concepts",
        "url": "https://python.langchain.com/docs/how_to/memory_chat_history/",
        "domain": "langchain.com"
      },
      {
        "label": "Anthropic: Managing Multi-Turn Conversational State",
        "url": "https://docs.anthropic.com/en/docs/system-prompts",
        "domain": "anthropic.com"
      },
      {
        "label": "Towards Data Science: Stateful LLM Applications",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub: Project #0 Design Architecture Spec",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Architecture diagram and technical specification document",
    "completed_override": null
  },
  {
    "day_number": 24,
    "date": "2026-09-10",
    "week_number": 4,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Build Core Chat Loop & Memory Buffer",
    "description": "Build the core conversational loop in Python. Implement sliding-window memory with token counting to maintain context without overflowing limits.",
    "resources": [
      {
        "label": "Anthropic SDK: Complete Python Client Reference",
        "url": "https://github.com/anthropics/anthropic-sdk-python",
        "is_top_pick": true,
        "domain": "github.com"
      },
      {
        "label": "Tiktoken Token Counter for Token Budgeting",
        "url": "https://pypi.org/project/tiktoken/",
        "domain": "pypi.org"
      },
      {
        "label": "Python SQLite3: Local Session Persistence",
        "url": "https://docs.python.org/3/library/sqlite3.html",
        "domain": "python.org"
      },
      {
        "label": "Real Python: Building Terminal User Interfaces",
        "url": "https://realpython.com/python-gui-curses/",
        "domain": "realpython.com"
      },
      {
        "label": "Rich: Layout & Panel Terminal Rendering",
        "url": "https://rich.readthedocs.io/en/stable/layout.html",
        "domain": "readthedocs.io"
      }
    ],
    "deliverable": "Working stateful chat engine with memory persistence across sessions",
    "completed_override": null
  },
  {
    "day_number": 25,
    "date": "2026-09-11",
    "week_number": 4,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Add Error Handling & Retry Logic",
    "description": "Add graceful connection loss handling, network retry backoff, graceful interruption (Ctrl+C), and formatted markdown terminal output with Rich.",
    "resources": [
      {
        "label": "Tenacity: Robust Python Retry Strategies",
        "url": "https://tenacity.readthedocs.io/",
        "is_top_pick": true,
        "domain": "readthedocs.io"
      },
      {
        "label": "Rich: Markdown Rendering in Terminal",
        "url": "https://rich.readthedocs.io/en/latest/markdown.html",
        "domain": "readthedocs.io"
      },
      {
        "label": "Python Signals & Graceful Shutdown (signal module)",
        "url": "https://docs.python.org/3/library/signal.html",
        "domain": "python.org"
      },
      {
        "label": "Anthropic: Rate Limits & Backoff Implementation",
        "url": "https://docs.anthropic.com/en/api/rate-limits",
        "domain": "anthropic.com"
      },
      {
        "label": "GitHub: Python CLI Error Handling Boilerplate",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Beautiful terminal UI with streaming markdown and resilient exception handling",
    "completed_override": null
  },
  {
    "day_number": 26,
    "date": "2026-09-12",
    "week_number": 4,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Project #0 Done \u2014 Polish, README & Commit",
    "description": "Polish the CLI chatbot, write comprehensive README with setup instructions and architecture breakdown, and tag release. Project #0 completed!",
    "resources": [
      {
        "label": "Project #0 GitHub Repository Showcase",
        "url": "https://github.com/AlirezaNezami96",
        "is_top_pick": true,
        "domain": "github.com"
      },
      {
        "label": "Keep a Changelog: Standard Release Notes Format",
        "url": "https://keepachangelog.com/en/1.0.0/",
        "domain": "keepachangelog.com"
      },
      {
        "label": "Shields.io: Dynamic GitHub Badges",
        "url": "https://shields.io/",
        "domain": "shields.io"
      },
      {
        "label": "GitHub: Semantic Versioning and Releases",
        "url": "https://semver.org/",
        "domain": "semver.org"
      },
      {
        "label": "Make a GIF: Terminal Demo Screen Recorder (vhs)",
        "url": "https://github.com/charmbracelet/vhs",
        "domain": "charmbracelet.com"
      }
    ],
    "deliverable": "\u2b50 Project #0 ('CLI AI Assistant with Context Memory') published to GitHub",
    "completed_override": null
  },
  {
    "day_number": 27,
    "date": "2026-09-13",
    "week_number": 4,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 28,
    "date": "2026-09-14",
    "week_number": 4,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 29,
    "date": "2026-09-15",
    "week_number": 5,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Understanding & Applying Text Embeddings",
    "description": "Complete DeepLearning.AI's 'Understanding and Applying Text Embeddings'. Study vector spaces, cosine similarity, and semantic search fundamentals.",
    "resources": [
      {
        "label": "DeepLearning.AI: Text Embeddings Course",
        "url": "https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/",
        "is_top_pick": true,
        "domain": "deeplearning.ai"
      },
      {
        "label": "Pinecone: Vector Embeddings Explained for Beginners",
        "url": "https://www.pinecone.io/learn/vector-embeddings/",
        "domain": "pinecone.io"
      },
      {
        "label": "OpenAI: Embeddings API & Text Similarity Guide",
        "url": "https://platform.openai.com/docs/guides/embeddings",
        "domain": "openai.com"
      },
      {
        "label": "Hugging Face: MTEB Massive Text Embedding Benchmark",
        "url": "https://huggingface.co/spaces/mteb/leaderboard",
        "domain": "huggingface.co"
      },
      {
        "label": "Scikit-Learn: Cosine Similarity & Vector Metrics",
        "url": "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html",
        "domain": "scikit-learn.org"
      }
    ],
    "deliverable": "Cosine similarity calculator and embedding visualization script",
    "completed_override": null
  },
  {
    "day_number": 30,
    "date": "2026-09-16",
    "week_number": 5,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Vector Databases: From Embeddings to Applications (Part 1)",
    "description": "Work through the first half of DeepLearning.AI's 'Vector Databases: from Embeddings to Applications' covering ANN algorithms (HNSW, IVF).",
    "resources": [
      {
        "label": "DeepLearning.AI: Vector Databases Short Course",
        "url": "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/",
        "is_top_pick": true,
        "domain": "deeplearning.ai"
      },
      {
        "label": "Pinecone: Hierarchical Navigable Small World (HNSW) Explained",
        "url": "https://www.pinecone.io/learn/series/faiss/hnsw/",
        "domain": "pinecone.io"
      },
      {
        "label": "Qdrant: Vector Search Indexing Concepts",
        "url": "https://qdrant.tech/documentation/concepts/indexing/",
        "domain": "qdrant.tech"
      },
      {
        "label": "ArXiv: Efficient & Robust Approximate Nearest Neighbor Search (Malkov et al.)",
        "url": "https://arxiv.org/abs/1603.09320",
        "domain": "arxiv.org"
      },
      {
        "label": "Towards Data Science: How Vector Search Actually Works",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      }
    ],
    "deliverable": "Notes on HNSW graph indexing vs Flat search complexity",
    "completed_override": null
  },
  {
    "day_number": 31,
    "date": "2026-09-17",
    "week_number": 5,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Vector Databases (Part 2)",
    "description": "Finish the vector database course. Practice filtered search, metadata payload indexing, and multi-tenant namespace isolation.",
    "resources": [
      {
        "label": "Qdrant: Payload Filtering & Namespaces Guide",
        "url": "https://qdrant.tech/documentation/concepts/filtering/",
        "is_top_pick": true,
        "domain": "qdrant.tech"
      },
      {
        "label": "Chroma DB: Metadata Filtering & Collections",
        "url": "https://docs.trychroma.com/usage-guide#filtering-by-metadata",
        "domain": "trychroma.com"
      },
      {
        "label": "DeepLearning.AI: Multi-Tenant Vector DB Pipelines",
        "url": "https://www.deeplearning.ai/",
        "domain": "deeplearning.ai"
      },
      {
        "label": "Pinecone: Metadata Filtering Best Practices",
        "url": "https://docs.pinecone.io/guides/data/filter-with-metadata",
        "domain": "pinecone.io"
      },
      {
        "label": "GitHub: Vector Search Metadata Filtering Sandbox",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Course completion exercises and benchmark comparisons",
    "completed_override": null
  },
  {
    "day_number": 32,
    "date": "2026-09-18",
    "week_number": 5,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Set up Local Qdrant / Chroma",
    "description": "Install and run Qdrant or Chroma locally via Docker or in-memory Python client. Index a small test dataset and execute top-k semantic similarity queries.",
    "resources": [
      {
        "label": "Chroma DB Official Quickstart & Python Setup",
        "url": "https://docs.trychroma.com/getting-started",
        "is_top_pick": true,
        "domain": "trychroma.com"
      },
      {
        "label": "Qdrant: Docker Quickstart & Local Installation",
        "url": "https://qdrant.tech/documentation/quickstart/",
        "domain": "qdrant.tech"
      },
      {
        "label": "Docker: Running Database Containers Locally",
        "url": "https://docs.docker.com/engine/reference/run/",
        "domain": "docker.com"
      },
      {
        "label": "FastEmbed: Fast Lightweight Local Embedding Generation",
        "url": "https://github.com/qdrant/fastembed",
        "domain": "github.com"
      },
      {
        "label": "Real Python: Working with Docker in Python",
        "url": "https://realpython.com/python-docker/",
        "domain": "realpython.com"
      }
    ],
    "deliverable": "Local vector store instance running with automated collection initialization",
    "completed_override": null
  },
  {
    "day_number": 33,
    "date": "2026-09-19",
    "week_number": 5,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Index Personal Knowledge Corpus",
    "description": "Chunk, embed, and index a real personal corpus \u2014 your r\u00e9sum\u00e9, cover letters, and project READMEs. Validate chunk overlap and embedding consistency.",
    "resources": [
      {
        "label": "Pinecone: Chunking Strategies for LLM Applications",
        "url": "https://www.pinecone.io/learn/chunking-strategies/",
        "is_top_pick": true,
        "domain": "pinecone.io"
      },
      {
        "label": "LlamaIndex: Document Chunking & Node Parsing",
        "url": "https://docs.llamaindex.ai/en/stable/module_guides/loading/node_parsers/",
        "domain": "llamaindex.ai"
      },
      {
        "label": "LangChain: RecursiveCharacterTextSplitter Guide",
        "url": "https://python.langchain.com/docs/how_to/recursive_text_splitter/",
        "domain": "langchain.com"
      },
      {
        "label": "Hugging Face: Sentence Transformers Library",
        "url": "https://www.sbert.net/",
        "domain": "sbert.net"
      },
      {
        "label": "GitHub: Career Knowledge Vector Ingestion Script",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com"
      }
    ],
    "deliverable": "Fully indexed personal knowledge vector collection with metadata tags",
    "completed_override": null
  },
  {
    "day_number": 34,
    "date": "2026-09-20",
    "week_number": 5,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 35,
    "date": "2026-09-21",
    "week_number": 5,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 36,
    "date": "2026-09-22",
    "week_number": 6,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 6 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex Official Documentation",
        "url": "https://docs.llamaindex.ai/",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LangChain Chat with Data",
        "url": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Retrieval Augmentation Chains",
        "url": "https://python.langchain.com/docs/how_to/#retrieval",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: RAG Architecture Walkthrough",
        "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        "domain": "pinecone.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Grounded Citations in System Prompts",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 6 milestone",
    "completed_override": null
  },
  {
    "day_number": 37,
    "date": "2026-09-23",
    "week_number": 6,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 6 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex Official Documentation",
        "url": "https://docs.llamaindex.ai/",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LangChain Chat with Data",
        "url": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Retrieval Augmentation Chains",
        "url": "https://python.langchain.com/docs/how_to/#retrieval",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: RAG Architecture Walkthrough",
        "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        "domain": "pinecone.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Grounded Citations in System Prompts",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 6 milestone",
    "completed_override": null
  },
  {
    "day_number": 38,
    "date": "2026-09-24",
    "week_number": 6,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 6 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex Official Documentation",
        "url": "https://docs.llamaindex.ai/",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LangChain Chat with Data",
        "url": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Retrieval Augmentation Chains",
        "url": "https://python.langchain.com/docs/how_to/#retrieval",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: RAG Architecture Walkthrough",
        "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        "domain": "pinecone.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Grounded Citations in System Prompts",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 6 milestone",
    "completed_override": null
  },
  {
    "day_number": 39,
    "date": "2026-09-25",
    "week_number": 6,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 6 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex Official Documentation",
        "url": "https://docs.llamaindex.ai/",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LangChain Chat with Data",
        "url": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Retrieval Augmentation Chains",
        "url": "https://python.langchain.com/docs/how_to/#retrieval",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: RAG Architecture Walkthrough",
        "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        "domain": "pinecone.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Grounded Citations in System Prompts",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 6 milestone",
    "completed_override": null
  },
  {
    "day_number": 40,
    "date": "2026-09-26",
    "week_number": 6,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 6 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex Official Documentation",
        "url": "https://docs.llamaindex.ai/",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LangChain Chat with Data",
        "url": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Retrieval Augmentation Chains",
        "url": "https://python.langchain.com/docs/how_to/#retrieval",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: RAG Architecture Walkthrough",
        "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/",
        "domain": "pinecone.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Grounded Citations in System Prompts",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 6 milestone",
    "completed_override": null
  },
  {
    "day_number": 41,
    "date": "2026-09-27",
    "week_number": 6,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 42,
    "date": "2026-09-28",
    "week_number": 6,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 43,
    "date": "2026-09-29",
    "week_number": 7,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 7 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Advanced Retrieval for AI with Chroma",
        "url": "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Cohere: Neural Reranking API Guide",
        "url": "https://docs.cohere.com/docs/reranking",
        "domain": "cohere.com",
        "is_top_pick": false
      },
      {
        "label": "FlashRank: Lightweight Ultra-Fast Reranking in Python",
        "url": "https://github.com/PrithivirajDamodaran/FlashRank",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Rank-BM25: BM25 Keyword Search in Python",
        "url": "https://github.com/dorianbrown/rank_bm25",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: Hybrid Search (Dense + Sparse Fusion)",
        "url": "https://docs.pinecone.io/guides/search/hybrid-search",
        "domain": "pinecone.io",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 7 milestone",
    "completed_override": null
  },
  {
    "day_number": 44,
    "date": "2026-09-30",
    "week_number": 7,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 7 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Advanced Retrieval for AI with Chroma",
        "url": "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Cohere: Neural Reranking API Guide",
        "url": "https://docs.cohere.com/docs/reranking",
        "domain": "cohere.com",
        "is_top_pick": false
      },
      {
        "label": "FlashRank: Lightweight Ultra-Fast Reranking in Python",
        "url": "https://github.com/PrithivirajDamodaran/FlashRank",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Rank-BM25: BM25 Keyword Search in Python",
        "url": "https://github.com/dorianbrown/rank_bm25",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: Hybrid Search (Dense + Sparse Fusion)",
        "url": "https://docs.pinecone.io/guides/search/hybrid-search",
        "domain": "pinecone.io",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 7 milestone",
    "completed_override": null
  },
  {
    "day_number": 45,
    "date": "2026-10-01",
    "week_number": 7,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 7 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Advanced Retrieval for AI with Chroma",
        "url": "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Cohere: Neural Reranking API Guide",
        "url": "https://docs.cohere.com/docs/reranking",
        "domain": "cohere.com",
        "is_top_pick": false
      },
      {
        "label": "FlashRank: Lightweight Ultra-Fast Reranking in Python",
        "url": "https://github.com/PrithivirajDamodaran/FlashRank",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Rank-BM25: BM25 Keyword Search in Python",
        "url": "https://github.com/dorianbrown/rank_bm25",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: Hybrid Search (Dense + Sparse Fusion)",
        "url": "https://docs.pinecone.io/guides/search/hybrid-search",
        "domain": "pinecone.io",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 7 milestone",
    "completed_override": null
  },
  {
    "day_number": 46,
    "date": "2026-10-02",
    "week_number": 7,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 7 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Advanced Retrieval for AI with Chroma",
        "url": "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Cohere: Neural Reranking API Guide",
        "url": "https://docs.cohere.com/docs/reranking",
        "domain": "cohere.com",
        "is_top_pick": false
      },
      {
        "label": "FlashRank: Lightweight Ultra-Fast Reranking in Python",
        "url": "https://github.com/PrithivirajDamodaran/FlashRank",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Rank-BM25: BM25 Keyword Search in Python",
        "url": "https://github.com/dorianbrown/rank_bm25",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: Hybrid Search (Dense + Sparse Fusion)",
        "url": "https://docs.pinecone.io/guides/search/hybrid-search",
        "domain": "pinecone.io",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 7 milestone",
    "completed_override": null
  },
  {
    "day_number": 47,
    "date": "2026-10-03",
    "week_number": 7,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 7 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Advanced Retrieval for AI with Chroma",
        "url": "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Cohere: Neural Reranking API Guide",
        "url": "https://docs.cohere.com/docs/reranking",
        "domain": "cohere.com",
        "is_top_pick": false
      },
      {
        "label": "FlashRank: Lightweight Ultra-Fast Reranking in Python",
        "url": "https://github.com/PrithivirajDamodaran/FlashRank",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Rank-BM25: BM25 Keyword Search in Python",
        "url": "https://github.com/dorianbrown/rank_bm25",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pinecone: Hybrid Search (Dense + Sparse Fusion)",
        "url": "https://docs.pinecone.io/guides/search/hybrid-search",
        "domain": "pinecone.io",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 7 milestone",
    "completed_override": null
  },
  {
    "day_number": 48,
    "date": "2026-10-04",
    "week_number": 7,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 49,
    "date": "2026-10-05",
    "week_number": 7,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 50,
    "date": "2026-10-06",
    "week_number": 8,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 8 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "RAGAS Official Documentation & Scoring Concepts",
        "url": "https://docs.ragas.io/en/latest/",
        "domain": "ragas.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Automated LLM Evaluation",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: RAG Evaluation Metric Logging",
        "url": "https://langfuse.com/docs/scores",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: RAGAS Automated Evaluation Paper (Es et al.)",
        "url": "https://arxiv.org/abs/2309.15217",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #1 RAG Knowledge Assistant Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 8 milestone",
    "completed_override": null
  },
  {
    "day_number": 51,
    "date": "2026-10-07",
    "week_number": 8,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 8 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "RAGAS Official Documentation & Scoring Concepts",
        "url": "https://docs.ragas.io/en/latest/",
        "domain": "ragas.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Automated LLM Evaluation",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: RAG Evaluation Metric Logging",
        "url": "https://langfuse.com/docs/scores",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: RAGAS Automated Evaluation Paper (Es et al.)",
        "url": "https://arxiv.org/abs/2309.15217",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #1 RAG Knowledge Assistant Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 8 milestone",
    "completed_override": null
  },
  {
    "day_number": 52,
    "date": "2026-10-08",
    "week_number": 8,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 8 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "RAGAS Official Documentation & Scoring Concepts",
        "url": "https://docs.ragas.io/en/latest/",
        "domain": "ragas.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Automated LLM Evaluation",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: RAG Evaluation Metric Logging",
        "url": "https://langfuse.com/docs/scores",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: RAGAS Automated Evaluation Paper (Es et al.)",
        "url": "https://arxiv.org/abs/2309.15217",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #1 RAG Knowledge Assistant Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 8 milestone",
    "completed_override": null
  },
  {
    "day_number": 53,
    "date": "2026-10-09",
    "week_number": 8,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 8 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "RAGAS Official Documentation & Scoring Concepts",
        "url": "https://docs.ragas.io/en/latest/",
        "domain": "ragas.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Automated LLM Evaluation",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: RAG Evaluation Metric Logging",
        "url": "https://langfuse.com/docs/scores",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: RAGAS Automated Evaluation Paper (Es et al.)",
        "url": "https://arxiv.org/abs/2309.15217",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #1 RAG Knowledge Assistant Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 8 milestone",
    "completed_override": null
  },
  {
    "day_number": 54,
    "date": "2026-10-10",
    "week_number": 8,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 8 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "RAGAS Official Documentation & Scoring Concepts",
        "url": "https://docs.ragas.io/en/latest/",
        "domain": "ragas.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Automated LLM Evaluation",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: RAG Evaluation Metric Logging",
        "url": "https://langfuse.com/docs/scores",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: RAGAS Automated Evaluation Paper (Es et al.)",
        "url": "https://arxiv.org/abs/2309.15217",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #1 RAG Knowledge Assistant Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 8 milestone",
    "completed_override": null
  },
  {
    "day_number": 55,
    "date": "2026-10-11",
    "week_number": 8,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 56,
    "date": "2026-10-12",
    "week_number": 8,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 57,
    "date": "2026-10-13",
    "week_number": 9,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 9 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Functions, Tools and Agents with LangChain",
        "url": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Tool Calling Architecture Patterns",
        "url": "https://docs.anthropic.com/en/docs/tool-use",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Open-Meteo: Free Public Weather API",
        "url": "https://open-meteo.com/",
        "domain": "open-meteo.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic: Parsing LLM Function Tool Schemas",
        "url": "https://docs.pydantic.dev",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Tool Decorator & Schema Generation",
        "url": "https://python.langchain.com/docs/how_to/custom_tools/",
        "domain": "langchain.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 9 milestone",
    "completed_override": null
  },
  {
    "day_number": 58,
    "date": "2026-10-14",
    "week_number": 9,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 9 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Functions, Tools and Agents with LangChain",
        "url": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Tool Calling Architecture Patterns",
        "url": "https://docs.anthropic.com/en/docs/tool-use",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Open-Meteo: Free Public Weather API",
        "url": "https://open-meteo.com/",
        "domain": "open-meteo.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic: Parsing LLM Function Tool Schemas",
        "url": "https://docs.pydantic.dev",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Tool Decorator & Schema Generation",
        "url": "https://python.langchain.com/docs/how_to/custom_tools/",
        "domain": "langchain.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 9 milestone",
    "completed_override": null
  },
  {
    "day_number": 59,
    "date": "2026-10-15",
    "week_number": 9,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 9 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Functions, Tools and Agents with LangChain",
        "url": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Tool Calling Architecture Patterns",
        "url": "https://docs.anthropic.com/en/docs/tool-use",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Open-Meteo: Free Public Weather API",
        "url": "https://open-meteo.com/",
        "domain": "open-meteo.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic: Parsing LLM Function Tool Schemas",
        "url": "https://docs.pydantic.dev",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Tool Decorator & Schema Generation",
        "url": "https://python.langchain.com/docs/how_to/custom_tools/",
        "domain": "langchain.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 9 milestone",
    "completed_override": null
  },
  {
    "day_number": 60,
    "date": "2026-10-16",
    "week_number": 9,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 9 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Functions, Tools and Agents with LangChain",
        "url": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Tool Calling Architecture Patterns",
        "url": "https://docs.anthropic.com/en/docs/tool-use",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Open-Meteo: Free Public Weather API",
        "url": "https://open-meteo.com/",
        "domain": "open-meteo.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic: Parsing LLM Function Tool Schemas",
        "url": "https://docs.pydantic.dev",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Tool Decorator & Schema Generation",
        "url": "https://python.langchain.com/docs/how_to/custom_tools/",
        "domain": "langchain.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 9 milestone",
    "completed_override": null
  },
  {
    "day_number": 61,
    "date": "2026-10-17",
    "week_number": 9,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 9 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: Functions, Tools and Agents with LangChain",
        "url": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Tool Calling Architecture Patterns",
        "url": "https://docs.anthropic.com/en/docs/tool-use",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Open-Meteo: Free Public Weather API",
        "url": "https://open-meteo.com/",
        "domain": "open-meteo.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic: Parsing LLM Function Tool Schemas",
        "url": "https://docs.pydantic.dev",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "LangChain: Tool Decorator & Schema Generation",
        "url": "https://python.langchain.com/docs/how_to/custom_tools/",
        "domain": "langchain.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 9 milestone",
    "completed_override": null
  },
  {
    "day_number": 62,
    "date": "2026-10-18",
    "week_number": 9,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 63,
    "date": "2026-10-19",
    "week_number": 9,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 64,
    "date": "2026-10-20",
    "week_number": 10,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 10 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: AI Agents in LangGraph",
        "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph Official StateGraph Documentation",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LangChain Academy: Interactive LangGraph Courses",
        "url": "https://academy.langchain.com/",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Cyclic Graphs for Autonomous AI",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: LangGraph Human-in-the-Loop Approval Sandbox",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 10 milestone",
    "completed_override": null
  },
  {
    "day_number": 65,
    "date": "2026-10-21",
    "week_number": 10,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 10 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: AI Agents in LangGraph",
        "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph Official StateGraph Documentation",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LangChain Academy: Interactive LangGraph Courses",
        "url": "https://academy.langchain.com/",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Cyclic Graphs for Autonomous AI",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: LangGraph Human-in-the-Loop Approval Sandbox",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 10 milestone",
    "completed_override": null
  },
  {
    "day_number": 66,
    "date": "2026-10-22",
    "week_number": 10,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 10 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: AI Agents in LangGraph",
        "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph Official StateGraph Documentation",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LangChain Academy: Interactive LangGraph Courses",
        "url": "https://academy.langchain.com/",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Cyclic Graphs for Autonomous AI",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: LangGraph Human-in-the-Loop Approval Sandbox",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 10 milestone",
    "completed_override": null
  },
  {
    "day_number": 67,
    "date": "2026-10-23",
    "week_number": 10,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 10 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: AI Agents in LangGraph",
        "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph Official StateGraph Documentation",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LangChain Academy: Interactive LangGraph Courses",
        "url": "https://academy.langchain.com/",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Cyclic Graphs for Autonomous AI",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: LangGraph Human-in-the-Loop Approval Sandbox",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 10 milestone",
    "completed_override": null
  },
  {
    "day_number": 68,
    "date": "2026-10-24",
    "week_number": 10,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 10 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "DeepLearning.AI: AI Agents in LangGraph",
        "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/",
        "domain": "deeplearning.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph Official StateGraph Documentation",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LangChain Academy: Interactive LangGraph Courses",
        "url": "https://academy.langchain.com/",
        "domain": "langchain.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Cyclic Graphs for Autonomous AI",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: LangGraph Human-in-the-Loop Approval Sandbox",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 10 milestone",
    "completed_override": null
  },
  {
    "day_number": 69,
    "date": "2026-10-25",
    "week_number": 10,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 70,
    "date": "2026-10-26",
    "week_number": 10,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 71,
    "date": "2026-10-27",
    "week_number": 11,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 11 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Hugging Face Agents Course (Unit 1 & 2)",
        "url": "https://huggingface.co/learn/agents-course",
        "domain": "huggingface.co",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Multi AI Agent Systems with crewAI",
        "url": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Model Context Protocol (MCP) Quickstart",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Introduction to MCP Course",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "CrewAI Official Documentation & Multi-Agent Pipelines",
        "url": "https://docs.crewai.com/",
        "domain": "crewai.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 11 milestone",
    "completed_override": null
  },
  {
    "day_number": 72,
    "date": "2026-10-28",
    "week_number": 11,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 11 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Hugging Face Agents Course (Unit 1 & 2)",
        "url": "https://huggingface.co/learn/agents-course",
        "domain": "huggingface.co",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Multi AI Agent Systems with crewAI",
        "url": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Model Context Protocol (MCP) Quickstart",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Introduction to MCP Course",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "CrewAI Official Documentation & Multi-Agent Pipelines",
        "url": "https://docs.crewai.com/",
        "domain": "crewai.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 11 milestone",
    "completed_override": null
  },
  {
    "day_number": 73,
    "date": "2026-10-29",
    "week_number": 11,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 11 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Hugging Face Agents Course (Unit 1 & 2)",
        "url": "https://huggingface.co/learn/agents-course",
        "domain": "huggingface.co",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Multi AI Agent Systems with crewAI",
        "url": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Model Context Protocol (MCP) Quickstart",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Introduction to MCP Course",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "CrewAI Official Documentation & Multi-Agent Pipelines",
        "url": "https://docs.crewai.com/",
        "domain": "crewai.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 11 milestone",
    "completed_override": null
  },
  {
    "day_number": 74,
    "date": "2026-10-30",
    "week_number": 11,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 11 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Hugging Face Agents Course (Unit 1 & 2)",
        "url": "https://huggingface.co/learn/agents-course",
        "domain": "huggingface.co",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Multi AI Agent Systems with crewAI",
        "url": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Model Context Protocol (MCP) Quickstart",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Introduction to MCP Course",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "CrewAI Official Documentation & Multi-Agent Pipelines",
        "url": "https://docs.crewai.com/",
        "domain": "crewai.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 11 milestone",
    "completed_override": null
  },
  {
    "day_number": 75,
    "date": "2026-10-31",
    "week_number": 11,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 11 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Hugging Face Agents Course (Unit 1 & 2)",
        "url": "https://huggingface.co/learn/agents-course",
        "domain": "huggingface.co",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: Multi AI Agent Systems with crewAI",
        "url": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Model Context Protocol (MCP) Quickstart",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Introduction to MCP Course",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "CrewAI Official Documentation & Multi-Agent Pipelines",
        "url": "https://docs.crewai.com/",
        "domain": "crewai.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 11 milestone",
    "completed_override": null
  },
  {
    "day_number": 76,
    "date": "2026-11-01",
    "week_number": 11,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 77,
    "date": "2026-11-02",
    "week_number": 11,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 78,
    "date": "2026-11-03",
    "week_number": 12,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 12 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "BeautifulSoup4: Web Scraping in Python",
        "url": "https://beautiful-soup-4.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Structured Information Extraction Prompts",
        "url": "https://docs.anthropic.com/en/docs/structured-outputs",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "LangGraph: Multi-Step Agent Routing Patterns",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: Semantic Fit Query Matching",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #2 Autonomous Job Agent Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 12 milestone",
    "completed_override": null
  },
  {
    "day_number": 79,
    "date": "2026-11-04",
    "week_number": 12,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 12 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "BeautifulSoup4: Web Scraping in Python",
        "url": "https://beautiful-soup-4.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Structured Information Extraction Prompts",
        "url": "https://docs.anthropic.com/en/docs/structured-outputs",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "LangGraph: Multi-Step Agent Routing Patterns",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: Semantic Fit Query Matching",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #2 Autonomous Job Agent Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 12 milestone",
    "completed_override": null
  },
  {
    "day_number": 80,
    "date": "2026-11-05",
    "week_number": 12,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 12 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "BeautifulSoup4: Web Scraping in Python",
        "url": "https://beautiful-soup-4.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Structured Information Extraction Prompts",
        "url": "https://docs.anthropic.com/en/docs/structured-outputs",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "LangGraph: Multi-Step Agent Routing Patterns",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: Semantic Fit Query Matching",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #2 Autonomous Job Agent Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 12 milestone",
    "completed_override": null
  },
  {
    "day_number": 81,
    "date": "2026-11-06",
    "week_number": 12,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 12 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "BeautifulSoup4: Web Scraping in Python",
        "url": "https://beautiful-soup-4.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Structured Information Extraction Prompts",
        "url": "https://docs.anthropic.com/en/docs/structured-outputs",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "LangGraph: Multi-Step Agent Routing Patterns",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: Semantic Fit Query Matching",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #2 Autonomous Job Agent Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 12 milestone",
    "completed_override": null
  },
  {
    "day_number": 82,
    "date": "2026-11-07",
    "week_number": 12,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 12 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "BeautifulSoup4: Web Scraping in Python",
        "url": "https://beautiful-soup-4.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Anthropic: Structured Information Extraction Prompts",
        "url": "https://docs.anthropic.com/en/docs/structured-outputs",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "LangGraph: Multi-Step Agent Routing Patterns",
        "url": "https://langchain-ai.github.io/langgraph/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: Semantic Fit Query Matching",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #2 Autonomous Job Agent Repository",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 12 milestone",
    "completed_override": null
  },
  {
    "day_number": 83,
    "date": "2026-11-08",
    "week_number": 12,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 84,
    "date": "2026-11-09",
    "week_number": 12,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 85,
    "date": "2026-11-10",
    "week_number": 13,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 13 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse Official Documentation & Tracing",
        "url": "https://langfuse.com/docs",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LLM Evaluation and Monitoring",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: Judging LLM-as-a-Judge (Zheng et al.)",
        "url": "https://arxiv.org/abs/2306.05685",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "Weights & Biases: Weave Lightweight Evaluation",
        "url": "https://wandb.ai/site/weave",
        "domain": "wandb.ai",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Golden Validation Dataset & Scorer",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 13 milestone",
    "completed_override": null
  },
  {
    "day_number": 86,
    "date": "2026-11-11",
    "week_number": 13,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 13 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse Official Documentation & Tracing",
        "url": "https://langfuse.com/docs",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LLM Evaluation and Monitoring",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: Judging LLM-as-a-Judge (Zheng et al.)",
        "url": "https://arxiv.org/abs/2306.05685",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "Weights & Biases: Weave Lightweight Evaluation",
        "url": "https://wandb.ai/site/weave",
        "domain": "wandb.ai",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Golden Validation Dataset & Scorer",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 13 milestone",
    "completed_override": null
  },
  {
    "day_number": 87,
    "date": "2026-11-12",
    "week_number": 13,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 13 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse Official Documentation & Tracing",
        "url": "https://langfuse.com/docs",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LLM Evaluation and Monitoring",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: Judging LLM-as-a-Judge (Zheng et al.)",
        "url": "https://arxiv.org/abs/2306.05685",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "Weights & Biases: Weave Lightweight Evaluation",
        "url": "https://wandb.ai/site/weave",
        "domain": "wandb.ai",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Golden Validation Dataset & Scorer",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 13 milestone",
    "completed_override": null
  },
  {
    "day_number": 88,
    "date": "2026-11-13",
    "week_number": 13,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 13 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse Official Documentation & Tracing",
        "url": "https://langfuse.com/docs",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LLM Evaluation and Monitoring",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: Judging LLM-as-a-Judge (Zheng et al.)",
        "url": "https://arxiv.org/abs/2306.05685",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "Weights & Biases: Weave Lightweight Evaluation",
        "url": "https://wandb.ai/site/weave",
        "domain": "wandb.ai",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Golden Validation Dataset & Scorer",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 13 milestone",
    "completed_override": null
  },
  {
    "day_number": 89,
    "date": "2026-11-14",
    "week_number": 13,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 13 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse Official Documentation & Tracing",
        "url": "https://langfuse.com/docs",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: LLM Evaluation and Monitoring",
        "url": "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "ArXiv: Judging LLM-as-a-Judge (Zheng et al.)",
        "url": "https://arxiv.org/abs/2306.05685",
        "domain": "arxiv.org",
        "is_top_pick": false
      },
      {
        "label": "Weights & Biases: Weave Lightweight Evaluation",
        "url": "https://wandb.ai/site/weave",
        "domain": "wandb.ai",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Golden Validation Dataset & Scorer",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 13 milestone",
    "completed_override": null
  },
  {
    "day_number": 90,
    "date": "2026-11-15",
    "week_number": 13,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 91,
    "date": "2026-11-16",
    "week_number": 13,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 92,
    "date": "2026-11-17",
    "week_number": 14,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 14 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse: Distributed Tracing & Span Monitoring",
        "url": "https://langfuse.com/docs/tracing",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "OpenTelemetry: Observability Framework for Python",
        "url": "https://opentelemetry.io/docs/languages/python/",
        "domain": "opentelemetry.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Cost & Token Consumption Analytics",
        "url": "https://langfuse.com/docs/analytics/metrics",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Production LLM Latency Profiling",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Trace Audit & Latency Remediation Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 14 milestone",
    "completed_override": null
  },
  {
    "day_number": 93,
    "date": "2026-11-18",
    "week_number": 14,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 14 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse: Distributed Tracing & Span Monitoring",
        "url": "https://langfuse.com/docs/tracing",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "OpenTelemetry: Observability Framework for Python",
        "url": "https://opentelemetry.io/docs/languages/python/",
        "domain": "opentelemetry.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Cost & Token Consumption Analytics",
        "url": "https://langfuse.com/docs/analytics/metrics",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Production LLM Latency Profiling",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Trace Audit & Latency Remediation Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 14 milestone",
    "completed_override": null
  },
  {
    "day_number": 94,
    "date": "2026-11-19",
    "week_number": 14,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 14 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse: Distributed Tracing & Span Monitoring",
        "url": "https://langfuse.com/docs/tracing",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "OpenTelemetry: Observability Framework for Python",
        "url": "https://opentelemetry.io/docs/languages/python/",
        "domain": "opentelemetry.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Cost & Token Consumption Analytics",
        "url": "https://langfuse.com/docs/analytics/metrics",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Production LLM Latency Profiling",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Trace Audit & Latency Remediation Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 14 milestone",
    "completed_override": null
  },
  {
    "day_number": 95,
    "date": "2026-11-20",
    "week_number": 14,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 14 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse: Distributed Tracing & Span Monitoring",
        "url": "https://langfuse.com/docs/tracing",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "OpenTelemetry: Observability Framework for Python",
        "url": "https://opentelemetry.io/docs/languages/python/",
        "domain": "opentelemetry.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Cost & Token Consumption Analytics",
        "url": "https://langfuse.com/docs/analytics/metrics",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Production LLM Latency Profiling",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Trace Audit & Latency Remediation Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 14 milestone",
    "completed_override": null
  },
  {
    "day_number": 96,
    "date": "2026-11-21",
    "week_number": 14,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 14 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Langfuse: Distributed Tracing & Span Monitoring",
        "url": "https://langfuse.com/docs/tracing",
        "domain": "langfuse.com",
        "is_top_pick": true
      },
      {
        "label": "OpenTelemetry: Observability Framework for Python",
        "url": "https://opentelemetry.io/docs/languages/python/",
        "domain": "opentelemetry.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Cost & Token Consumption Analytics",
        "url": "https://langfuse.com/docs/analytics/metrics",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Production LLM Latency Profiling",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Trace Audit & Latency Remediation Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 14 milestone",
    "completed_override": null
  },
  {
    "day_number": 97,
    "date": "2026-11-22",
    "week_number": 14,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 98,
    "date": "2026-11-23",
    "week_number": 14,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 99,
    "date": "2026-11-24",
    "week_number": 15,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 15 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastAPI Official Documentation & Tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "domain": "tiangolo.com",
        "is_top_pick": true
      },
      {
        "label": "Docker: Python Application Containerization Best Practices",
        "url": "https://docs.docker.com/language/python/build-images/",
        "domain": "docker.com",
        "is_top_pick": false
      },
      {
        "label": "Uvicorn: Lightning-Fast ASGI Server",
        "url": "https://www.uvicorn.org/",
        "domain": "uvicorn.org",
        "is_top_pick": false
      },
      {
        "label": "Real Python: Containerizing Python Microservices",
        "url": "https://realpython.com/python-docker/",
        "domain": "realpython.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Production Dockerfile & Healthcheck Templates",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 15 milestone",
    "completed_override": null
  },
  {
    "day_number": 100,
    "date": "2026-11-25",
    "week_number": 15,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 15 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastAPI Official Documentation & Tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "domain": "tiangolo.com",
        "is_top_pick": true
      },
      {
        "label": "Docker: Python Application Containerization Best Practices",
        "url": "https://docs.docker.com/language/python/build-images/",
        "domain": "docker.com",
        "is_top_pick": false
      },
      {
        "label": "Uvicorn: Lightning-Fast ASGI Server",
        "url": "https://www.uvicorn.org/",
        "domain": "uvicorn.org",
        "is_top_pick": false
      },
      {
        "label": "Real Python: Containerizing Python Microservices",
        "url": "https://realpython.com/python-docker/",
        "domain": "realpython.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Production Dockerfile & Healthcheck Templates",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 15 milestone",
    "completed_override": null
  },
  {
    "day_number": 101,
    "date": "2026-11-26",
    "week_number": 15,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 15 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastAPI Official Documentation & Tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "domain": "tiangolo.com",
        "is_top_pick": true
      },
      {
        "label": "Docker: Python Application Containerization Best Practices",
        "url": "https://docs.docker.com/language/python/build-images/",
        "domain": "docker.com",
        "is_top_pick": false
      },
      {
        "label": "Uvicorn: Lightning-Fast ASGI Server",
        "url": "https://www.uvicorn.org/",
        "domain": "uvicorn.org",
        "is_top_pick": false
      },
      {
        "label": "Real Python: Containerizing Python Microservices",
        "url": "https://realpython.com/python-docker/",
        "domain": "realpython.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Production Dockerfile & Healthcheck Templates",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 15 milestone",
    "completed_override": null
  },
  {
    "day_number": 102,
    "date": "2026-11-27",
    "week_number": 15,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 15 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastAPI Official Documentation & Tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "domain": "tiangolo.com",
        "is_top_pick": true
      },
      {
        "label": "Docker: Python Application Containerization Best Practices",
        "url": "https://docs.docker.com/language/python/build-images/",
        "domain": "docker.com",
        "is_top_pick": false
      },
      {
        "label": "Uvicorn: Lightning-Fast ASGI Server",
        "url": "https://www.uvicorn.org/",
        "domain": "uvicorn.org",
        "is_top_pick": false
      },
      {
        "label": "Real Python: Containerizing Python Microservices",
        "url": "https://realpython.com/python-docker/",
        "domain": "realpython.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Production Dockerfile & Healthcheck Templates",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 15 milestone",
    "completed_override": null
  },
  {
    "day_number": 103,
    "date": "2026-11-28",
    "week_number": 15,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 15 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastAPI Official Documentation & Tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/",
        "domain": "tiangolo.com",
        "is_top_pick": true
      },
      {
        "label": "Docker: Python Application Containerization Best Practices",
        "url": "https://docs.docker.com/language/python/build-images/",
        "domain": "docker.com",
        "is_top_pick": false
      },
      {
        "label": "Uvicorn: Lightning-Fast ASGI Server",
        "url": "https://www.uvicorn.org/",
        "domain": "uvicorn.org",
        "is_top_pick": false
      },
      {
        "label": "Real Python: Containerizing Python Microservices",
        "url": "https://realpython.com/python-docker/",
        "domain": "realpython.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Production Dockerfile & Healthcheck Templates",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 15 milestone",
    "completed_override": null
  },
  {
    "day_number": 104,
    "date": "2026-11-29",
    "week_number": 15,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 105,
    "date": "2026-11-30",
    "week_number": 15,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 106,
    "date": "2026-12-01",
    "week_number": 16,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 16 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "domain": "owasp.org",
        "is_top_pick": true
      },
      {
        "label": "Guardrails AI: Validation & Security Middleware",
        "url": "https://www.guardrailsai.com/docs",
        "domain": "guardrailsai.com",
        "is_top_pick": false
      },
      {
        "label": "Slowapi: Sliding-Window Rate Limiting for FastAPI",
        "url": "https://slowapi.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": false
      },
      {
        "label": "Render: Free Tier Cloud Deployment Quickstart",
        "url": "https://render.com/docs",
        "domain": "render.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #3 Production AI Assistant API Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 16 milestone",
    "completed_override": null
  },
  {
    "day_number": 107,
    "date": "2026-12-02",
    "week_number": 16,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 16 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "domain": "owasp.org",
        "is_top_pick": true
      },
      {
        "label": "Guardrails AI: Validation & Security Middleware",
        "url": "https://www.guardrailsai.com/docs",
        "domain": "guardrailsai.com",
        "is_top_pick": false
      },
      {
        "label": "Slowapi: Sliding-Window Rate Limiting for FastAPI",
        "url": "https://slowapi.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": false
      },
      {
        "label": "Render: Free Tier Cloud Deployment Quickstart",
        "url": "https://render.com/docs",
        "domain": "render.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #3 Production AI Assistant API Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 16 milestone",
    "completed_override": null
  },
  {
    "day_number": 108,
    "date": "2026-12-03",
    "week_number": 16,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 16 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "domain": "owasp.org",
        "is_top_pick": true
      },
      {
        "label": "Guardrails AI: Validation & Security Middleware",
        "url": "https://www.guardrailsai.com/docs",
        "domain": "guardrailsai.com",
        "is_top_pick": false
      },
      {
        "label": "Slowapi: Sliding-Window Rate Limiting for FastAPI",
        "url": "https://slowapi.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": false
      },
      {
        "label": "Render: Free Tier Cloud Deployment Quickstart",
        "url": "https://render.com/docs",
        "domain": "render.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #3 Production AI Assistant API Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 16 milestone",
    "completed_override": null
  },
  {
    "day_number": 109,
    "date": "2026-12-04",
    "week_number": 16,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 16 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "domain": "owasp.org",
        "is_top_pick": true
      },
      {
        "label": "Guardrails AI: Validation & Security Middleware",
        "url": "https://www.guardrailsai.com/docs",
        "domain": "guardrailsai.com",
        "is_top_pick": false
      },
      {
        "label": "Slowapi: Sliding-Window Rate Limiting for FastAPI",
        "url": "https://slowapi.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": false
      },
      {
        "label": "Render: Free Tier Cloud Deployment Quickstart",
        "url": "https://render.com/docs",
        "domain": "render.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #3 Production AI Assistant API Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 16 milestone",
    "completed_override": null
  },
  {
    "day_number": 110,
    "date": "2026-12-05",
    "week_number": 16,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 16 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "OWASP Top 10 for LLM Applications",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        "domain": "owasp.org",
        "is_top_pick": true
      },
      {
        "label": "Guardrails AI: Validation & Security Middleware",
        "url": "https://www.guardrailsai.com/docs",
        "domain": "guardrailsai.com",
        "is_top_pick": false
      },
      {
        "label": "Slowapi: Sliding-Window Rate Limiting for FastAPI",
        "url": "https://slowapi.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": false
      },
      {
        "label": "Render: Free Tier Cloud Deployment Quickstart",
        "url": "https://render.com/docs",
        "domain": "render.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Project #3 Production AI Assistant API Repo",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 16 milestone",
    "completed_override": null
  },
  {
    "day_number": 111,
    "date": "2026-12-06",
    "week_number": 16,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 112,
    "date": "2026-12-07",
    "week_number": 16,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 113,
    "date": "2026-12-08",
    "week_number": 17,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 17 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Model Context Protocol (MCP) Official Specification",
        "url": "https://modelcontextprotocol.io/introduction",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: MCP Build Rich-Context AI Apps",
        "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "FastMCP: Fast Pythonic MCP Server Framework",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Advanced MCP Architecture",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol GitHub Repository",
        "url": "https://github.com/modelcontextprotocol/python-sdk",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 17 milestone",
    "completed_override": null
  },
  {
    "day_number": 114,
    "date": "2026-12-09",
    "week_number": 17,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 17 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Model Context Protocol (MCP) Official Specification",
        "url": "https://modelcontextprotocol.io/introduction",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: MCP Build Rich-Context AI Apps",
        "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "FastMCP: Fast Pythonic MCP Server Framework",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Advanced MCP Architecture",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol GitHub Repository",
        "url": "https://github.com/modelcontextprotocol/python-sdk",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 17 milestone",
    "completed_override": null
  },
  {
    "day_number": 115,
    "date": "2026-12-10",
    "week_number": 17,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 17 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Model Context Protocol (MCP) Official Specification",
        "url": "https://modelcontextprotocol.io/introduction",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: MCP Build Rich-Context AI Apps",
        "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "FastMCP: Fast Pythonic MCP Server Framework",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Advanced MCP Architecture",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol GitHub Repository",
        "url": "https://github.com/modelcontextprotocol/python-sdk",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 17 milestone",
    "completed_override": null
  },
  {
    "day_number": 116,
    "date": "2026-12-11",
    "week_number": 17,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 17 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Model Context Protocol (MCP) Official Specification",
        "url": "https://modelcontextprotocol.io/introduction",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: MCP Build Rich-Context AI Apps",
        "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "FastMCP: Fast Pythonic MCP Server Framework",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Advanced MCP Architecture",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol GitHub Repository",
        "url": "https://github.com/modelcontextprotocol/python-sdk",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 17 milestone",
    "completed_override": null
  },
  {
    "day_number": 117,
    "date": "2026-12-12",
    "week_number": 17,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 17 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Model Context Protocol (MCP) Official Specification",
        "url": "https://modelcontextprotocol.io/introduction",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": true
      },
      {
        "label": "DeepLearning.AI: MCP Build Rich-Context AI Apps",
        "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic",
        "domain": "deeplearning.ai",
        "is_top_pick": false
      },
      {
        "label": "FastMCP: Fast Pythonic MCP Server Framework",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic Skilljar: Advanced MCP Architecture",
        "url": "https://anthropic.skilljar.com",
        "domain": "skilljar.com",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol GitHub Repository",
        "url": "https://github.com/modelcontextprotocol/python-sdk",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 17 milestone",
    "completed_override": null
  },
  {
    "day_number": 118,
    "date": "2026-12-13",
    "week_number": 17,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 119,
    "date": "2026-12-14",
    "week_number": 17,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 120,
    "date": "2026-12-15",
    "week_number": 18,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 18 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastMCP Official Documentation & Tool Registration",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Claude Desktop: Configuring Custom MCP Servers",
        "url": "https://docs.anthropic.com/en/docs/mcp",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Cursor & Antigravity IDE MCP Integration Guide",
        "url": "https://docs.cursor.com/context/model-context-protocol",
        "domain": "cursor.com",
        "is_top_pick": false
      },
      {
        "label": "Python Asyncio: Subprocess & Stdio Transports",
        "url": "https://docs.python.org/3/library/asyncio-subprocess.html",
        "domain": "python.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Open-Source Mobile Diagnostic MCP Server",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 18 milestone",
    "completed_override": null
  },
  {
    "day_number": 121,
    "date": "2026-12-16",
    "week_number": 18,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 18 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastMCP Official Documentation & Tool Registration",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Claude Desktop: Configuring Custom MCP Servers",
        "url": "https://docs.anthropic.com/en/docs/mcp",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Cursor & Antigravity IDE MCP Integration Guide",
        "url": "https://docs.cursor.com/context/model-context-protocol",
        "domain": "cursor.com",
        "is_top_pick": false
      },
      {
        "label": "Python Asyncio: Subprocess & Stdio Transports",
        "url": "https://docs.python.org/3/library/asyncio-subprocess.html",
        "domain": "python.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Open-Source Mobile Diagnostic MCP Server",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 18 milestone",
    "completed_override": null
  },
  {
    "day_number": 122,
    "date": "2026-12-17",
    "week_number": 18,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 18 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastMCP Official Documentation & Tool Registration",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Claude Desktop: Configuring Custom MCP Servers",
        "url": "https://docs.anthropic.com/en/docs/mcp",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Cursor & Antigravity IDE MCP Integration Guide",
        "url": "https://docs.cursor.com/context/model-context-protocol",
        "domain": "cursor.com",
        "is_top_pick": false
      },
      {
        "label": "Python Asyncio: Subprocess & Stdio Transports",
        "url": "https://docs.python.org/3/library/asyncio-subprocess.html",
        "domain": "python.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Open-Source Mobile Diagnostic MCP Server",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 18 milestone",
    "completed_override": null
  },
  {
    "day_number": 123,
    "date": "2026-12-18",
    "week_number": 18,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 18 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastMCP Official Documentation & Tool Registration",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Claude Desktop: Configuring Custom MCP Servers",
        "url": "https://docs.anthropic.com/en/docs/mcp",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Cursor & Antigravity IDE MCP Integration Guide",
        "url": "https://docs.cursor.com/context/model-context-protocol",
        "domain": "cursor.com",
        "is_top_pick": false
      },
      {
        "label": "Python Asyncio: Subprocess & Stdio Transports",
        "url": "https://docs.python.org/3/library/asyncio-subprocess.html",
        "domain": "python.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Open-Source Mobile Diagnostic MCP Server",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 18 milestone",
    "completed_override": null
  },
  {
    "day_number": 124,
    "date": "2026-12-19",
    "week_number": 18,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 18 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "FastMCP Official Documentation & Tool Registration",
        "url": "https://github.com/jlowin/fastmcp",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Claude Desktop: Configuring Custom MCP Servers",
        "url": "https://docs.anthropic.com/en/docs/mcp",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Cursor & Antigravity IDE MCP Integration Guide",
        "url": "https://docs.cursor.com/context/model-context-protocol",
        "domain": "cursor.com",
        "is_top_pick": false
      },
      {
        "label": "Python Asyncio: Subprocess & Stdio Transports",
        "url": "https://docs.python.org/3/library/asyncio-subprocess.html",
        "domain": "python.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Open-Source Mobile Diagnostic MCP Server",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 18 milestone",
    "completed_override": null
  },
  {
    "day_number": 125,
    "date": "2026-12-20",
    "week_number": 18,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 126,
    "date": "2026-12-21",
    "week_number": 18,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 127,
    "date": "2026-12-22",
    "week_number": 19,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 19 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Google Cloud Run: Serverless Container Deployment",
        "url": "https://cloud.google.com/run/docs/quickstarts",
        "domain": "cloud.google.com",
        "is_top_pick": true
      },
      {
        "label": "AWS Lambda: Container Image Deployment Guide",
        "url": "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
        "domain": "aws.amazon.com",
        "is_top_pick": false
      },
      {
        "label": "Hey: High-Performance HTTP Load Generator",
        "url": "https://github.com/rakyll/hey",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Let's Encrypt: Automated SSL Certificate Management",
        "url": "https://letsencrypt.org/howitworks/",
        "domain": "letsencrypt.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Cloud Provisioning Shell Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 19 milestone",
    "completed_override": null
  },
  {
    "day_number": 128,
    "date": "2026-12-23",
    "week_number": 19,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 19 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Google Cloud Run: Serverless Container Deployment",
        "url": "https://cloud.google.com/run/docs/quickstarts",
        "domain": "cloud.google.com",
        "is_top_pick": true
      },
      {
        "label": "AWS Lambda: Container Image Deployment Guide",
        "url": "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
        "domain": "aws.amazon.com",
        "is_top_pick": false
      },
      {
        "label": "Hey: High-Performance HTTP Load Generator",
        "url": "https://github.com/rakyll/hey",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Let's Encrypt: Automated SSL Certificate Management",
        "url": "https://letsencrypt.org/howitworks/",
        "domain": "letsencrypt.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Cloud Provisioning Shell Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 19 milestone",
    "completed_override": null
  },
  {
    "day_number": 129,
    "date": "2026-12-24",
    "week_number": 19,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 19 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Google Cloud Run: Serverless Container Deployment",
        "url": "https://cloud.google.com/run/docs/quickstarts",
        "domain": "cloud.google.com",
        "is_top_pick": true
      },
      {
        "label": "AWS Lambda: Container Image Deployment Guide",
        "url": "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
        "domain": "aws.amazon.com",
        "is_top_pick": false
      },
      {
        "label": "Hey: High-Performance HTTP Load Generator",
        "url": "https://github.com/rakyll/hey",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Let's Encrypt: Automated SSL Certificate Management",
        "url": "https://letsencrypt.org/howitworks/",
        "domain": "letsencrypt.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Cloud Provisioning Shell Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 19 milestone",
    "completed_override": null
  },
  {
    "day_number": 130,
    "date": "2026-12-25",
    "week_number": 19,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 19 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Google Cloud Run: Serverless Container Deployment",
        "url": "https://cloud.google.com/run/docs/quickstarts",
        "domain": "cloud.google.com",
        "is_top_pick": true
      },
      {
        "label": "AWS Lambda: Container Image Deployment Guide",
        "url": "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
        "domain": "aws.amazon.com",
        "is_top_pick": false
      },
      {
        "label": "Hey: High-Performance HTTP Load Generator",
        "url": "https://github.com/rakyll/hey",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Let's Encrypt: Automated SSL Certificate Management",
        "url": "https://letsencrypt.org/howitworks/",
        "domain": "letsencrypt.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Cloud Provisioning Shell Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 19 milestone",
    "completed_override": null
  },
  {
    "day_number": 131,
    "date": "2026-12-26",
    "week_number": 19,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 19 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Google Cloud Run: Serverless Container Deployment",
        "url": "https://cloud.google.com/run/docs/quickstarts",
        "domain": "cloud.google.com",
        "is_top_pick": true
      },
      {
        "label": "AWS Lambda: Container Image Deployment Guide",
        "url": "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html",
        "domain": "aws.amazon.com",
        "is_top_pick": false
      },
      {
        "label": "Hey: High-Performance HTTP Load Generator",
        "url": "https://github.com/rakyll/hey",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Let's Encrypt: Automated SSL Certificate Management",
        "url": "https://letsencrypt.org/howitworks/",
        "domain": "letsencrypt.org",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Cloud Provisioning Shell Scripts",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 19 milestone",
    "completed_override": null
  },
  {
    "day_number": 132,
    "date": "2026-12-27",
    "week_number": 19,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 133,
    "date": "2026-12-28",
    "week_number": 19,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 134,
    "date": "2026-12-29",
    "week_number": 20,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 20 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Mermaid.js: End-to-End System Architecture Blueprinting",
        "url": "https://mermaid.js.org",
        "domain": "mermaid.js.org",
        "is_top_pick": true
      },
      {
        "label": "Chip Huyen: AI Engineering Capstone Patterns",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic Settings: Production Configuration Management",
        "url": "https://docs.pydantic.dev/latest/concepts/pydantic_settings/",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "Martin Fowler: Evolutionary Software Architecture",
        "url": "https://martinfowler.com/architecture/",
        "domain": "martinfowler.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Repository Scaffold",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 20 milestone",
    "completed_override": null
  },
  {
    "day_number": 135,
    "date": "2026-12-30",
    "week_number": 20,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 20 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Mermaid.js: End-to-End System Architecture Blueprinting",
        "url": "https://mermaid.js.org",
        "domain": "mermaid.js.org",
        "is_top_pick": true
      },
      {
        "label": "Chip Huyen: AI Engineering Capstone Patterns",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic Settings: Production Configuration Management",
        "url": "https://docs.pydantic.dev/latest/concepts/pydantic_settings/",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "Martin Fowler: Evolutionary Software Architecture",
        "url": "https://martinfowler.com/architecture/",
        "domain": "martinfowler.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Repository Scaffold",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 20 milestone",
    "completed_override": null
  },
  {
    "day_number": 136,
    "date": "2026-12-31",
    "week_number": 20,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 20 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Mermaid.js: End-to-End System Architecture Blueprinting",
        "url": "https://mermaid.js.org",
        "domain": "mermaid.js.org",
        "is_top_pick": true
      },
      {
        "label": "Chip Huyen: AI Engineering Capstone Patterns",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic Settings: Production Configuration Management",
        "url": "https://docs.pydantic.dev/latest/concepts/pydantic_settings/",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "Martin Fowler: Evolutionary Software Architecture",
        "url": "https://martinfowler.com/architecture/",
        "domain": "martinfowler.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Repository Scaffold",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 20 milestone",
    "completed_override": null
  },
  {
    "day_number": 137,
    "date": "2027-01-01",
    "week_number": 20,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 20 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Mermaid.js: End-to-End System Architecture Blueprinting",
        "url": "https://mermaid.js.org",
        "domain": "mermaid.js.org",
        "is_top_pick": true
      },
      {
        "label": "Chip Huyen: AI Engineering Capstone Patterns",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic Settings: Production Configuration Management",
        "url": "https://docs.pydantic.dev/latest/concepts/pydantic_settings/",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "Martin Fowler: Evolutionary Software Architecture",
        "url": "https://martinfowler.com/architecture/",
        "domain": "martinfowler.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Repository Scaffold",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 20 milestone",
    "completed_override": null
  },
  {
    "day_number": 138,
    "date": "2027-01-02",
    "week_number": 20,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 20 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Mermaid.js: End-to-End System Architecture Blueprinting",
        "url": "https://mermaid.js.org",
        "domain": "mermaid.js.org",
        "is_top_pick": true
      },
      {
        "label": "Chip Huyen: AI Engineering Capstone Patterns",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": false
      },
      {
        "label": "Pydantic Settings: Production Configuration Management",
        "url": "https://docs.pydantic.dev/latest/concepts/pydantic_settings/",
        "domain": "pydantic.dev",
        "is_top_pick": false
      },
      {
        "label": "Martin Fowler: Evolutionary Software Architecture",
        "url": "https://martinfowler.com/architecture/",
        "domain": "martinfowler.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Repository Scaffold",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 20 milestone",
    "completed_override": null
  },
  {
    "day_number": 139,
    "date": "2027-01-03",
    "week_number": 20,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 140,
    "date": "2027-01-04",
    "week_number": 20,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 141,
    "date": "2027-01-05",
    "week_number": 21,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 21 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex: Advanced RAG Ingestion Pipeline",
        "url": "https://docs.llamaindex.ai",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph: Multi-Agent Supervisor Orchestration",
        "url": "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol: Client-Server Bridge Implementation",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Automated LLM-as-Judge Evaluation Integration",
        "url": "https://langfuse.com",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: High-Concurrency Vector Indexing",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 21 milestone",
    "completed_override": null
  },
  {
    "day_number": 142,
    "date": "2027-01-06",
    "week_number": 21,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 21 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex: Advanced RAG Ingestion Pipeline",
        "url": "https://docs.llamaindex.ai",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph: Multi-Agent Supervisor Orchestration",
        "url": "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol: Client-Server Bridge Implementation",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Automated LLM-as-Judge Evaluation Integration",
        "url": "https://langfuse.com",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: High-Concurrency Vector Indexing",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 21 milestone",
    "completed_override": null
  },
  {
    "day_number": 143,
    "date": "2027-01-07",
    "week_number": 21,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 21 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex: Advanced RAG Ingestion Pipeline",
        "url": "https://docs.llamaindex.ai",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph: Multi-Agent Supervisor Orchestration",
        "url": "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol: Client-Server Bridge Implementation",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Automated LLM-as-Judge Evaluation Integration",
        "url": "https://langfuse.com",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: High-Concurrency Vector Indexing",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 21 milestone",
    "completed_override": null
  },
  {
    "day_number": 144,
    "date": "2027-01-08",
    "week_number": 21,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 21 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex: Advanced RAG Ingestion Pipeline",
        "url": "https://docs.llamaindex.ai",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph: Multi-Agent Supervisor Orchestration",
        "url": "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol: Client-Server Bridge Implementation",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Automated LLM-as-Judge Evaluation Integration",
        "url": "https://langfuse.com",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: High-Concurrency Vector Indexing",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 21 milestone",
    "completed_override": null
  },
  {
    "day_number": 145,
    "date": "2027-01-09",
    "week_number": 21,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 21 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "LlamaIndex: Advanced RAG Ingestion Pipeline",
        "url": "https://docs.llamaindex.ai",
        "domain": "llamaindex.ai",
        "is_top_pick": true
      },
      {
        "label": "LangGraph: Multi-Agent Supervisor Orchestration",
        "url": "https://langchain-ai.github.io/langgraph/concepts/multi_agent/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "Model Context Protocol: Client-Server Bridge Implementation",
        "url": "https://modelcontextprotocol.io",
        "domain": "modelcontextprotocol.io",
        "is_top_pick": false
      },
      {
        "label": "Langfuse: Automated LLM-as-Judge Evaluation Integration",
        "url": "https://langfuse.com",
        "domain": "langfuse.com",
        "is_top_pick": false
      },
      {
        "label": "Qdrant: High-Concurrency Vector Indexing",
        "url": "https://qdrant.tech",
        "domain": "qdrant.tech",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 21 milestone",
    "completed_override": null
  },
  {
    "day_number": 146,
    "date": "2027-01-10",
    "week_number": 21,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 147,
    "date": "2027-01-11",
    "week_number": 21,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 148,
    "date": "2027-01-12",
    "week_number": 22,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 22 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Pytest Asyncio: Comprehensive Async Testing Suite",
        "url": "https://pytest-asyncio.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Google Cloud Run: Auto-Scaling and Custom Domain Setup",
        "url": "https://cloud.google.com/run",
        "domain": "cloud.google.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Production Prompt Calibration",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Make a README: Technical Documentation Best Practices",
        "url": "https://www.makeareadme.com/",
        "domain": "makeareadme.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Project #4 Repository Release",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 22 milestone",
    "completed_override": null
  },
  {
    "day_number": 149,
    "date": "2027-01-13",
    "week_number": 22,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 22 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Pytest Asyncio: Comprehensive Async Testing Suite",
        "url": "https://pytest-asyncio.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Google Cloud Run: Auto-Scaling and Custom Domain Setup",
        "url": "https://cloud.google.com/run",
        "domain": "cloud.google.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Production Prompt Calibration",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Make a README: Technical Documentation Best Practices",
        "url": "https://www.makeareadme.com/",
        "domain": "makeareadme.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Project #4 Repository Release",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 22 milestone",
    "completed_override": null
  },
  {
    "day_number": 150,
    "date": "2027-01-14",
    "week_number": 22,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 22 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Pytest Asyncio: Comprehensive Async Testing Suite",
        "url": "https://pytest-asyncio.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Google Cloud Run: Auto-Scaling and Custom Domain Setup",
        "url": "https://cloud.google.com/run",
        "domain": "cloud.google.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Production Prompt Calibration",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Make a README: Technical Documentation Best Practices",
        "url": "https://www.makeareadme.com/",
        "domain": "makeareadme.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Project #4 Repository Release",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 22 milestone",
    "completed_override": null
  },
  {
    "day_number": 151,
    "date": "2027-01-15",
    "week_number": 22,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 22 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Pytest Asyncio: Comprehensive Async Testing Suite",
        "url": "https://pytest-asyncio.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Google Cloud Run: Auto-Scaling and Custom Domain Setup",
        "url": "https://cloud.google.com/run",
        "domain": "cloud.google.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Production Prompt Calibration",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Make a README: Technical Documentation Best Practices",
        "url": "https://www.makeareadme.com/",
        "domain": "makeareadme.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Project #4 Repository Release",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 22 milestone",
    "completed_override": null
  },
  {
    "day_number": 152,
    "date": "2027-01-16",
    "week_number": 22,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 22 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Pytest Asyncio: Comprehensive Async Testing Suite",
        "url": "https://pytest-asyncio.readthedocs.io/",
        "domain": "readthedocs.io",
        "is_top_pick": true
      },
      {
        "label": "Google Cloud Run: Auto-Scaling and Custom Domain Setup",
        "url": "https://cloud.google.com/run",
        "domain": "cloud.google.com",
        "is_top_pick": false
      },
      {
        "label": "Anthropic: Production Prompt Calibration",
        "url": "https://docs.anthropic.com",
        "domain": "anthropic.com",
        "is_top_pick": false
      },
      {
        "label": "Make a README: Technical Documentation Best Practices",
        "url": "https://www.makeareadme.com/",
        "domain": "makeareadme.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Capstone Project #4 Repository Release",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 22 milestone",
    "completed_override": null
  },
  {
    "day_number": 153,
    "date": "2027-01-17",
    "week_number": 22,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 154,
    "date": "2027-01-18",
    "week_number": 22,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 155,
    "date": "2027-01-19",
    "week_number": 23,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 23 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineer Resume & Career Guide",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Alireza Nezami: Portfolio & Interactive CV",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Optimizing Technical Headline & Experience",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Crafting a High-Impact Profile README",
        "url": "https://docs.github.com/en/account-and-profile",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: Ask HN What Makes a Great AI Portfolio",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 23 milestone",
    "completed_override": null
  },
  {
    "day_number": 156,
    "date": "2027-01-20",
    "week_number": 23,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 23 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineer Resume & Career Guide",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Alireza Nezami: Portfolio & Interactive CV",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Optimizing Technical Headline & Experience",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Crafting a High-Impact Profile README",
        "url": "https://docs.github.com/en/account-and-profile",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: Ask HN What Makes a Great AI Portfolio",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 23 milestone",
    "completed_override": null
  },
  {
    "day_number": 157,
    "date": "2027-01-21",
    "week_number": 23,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 23 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineer Resume & Career Guide",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Alireza Nezami: Portfolio & Interactive CV",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Optimizing Technical Headline & Experience",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Crafting a High-Impact Profile README",
        "url": "https://docs.github.com/en/account-and-profile",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: Ask HN What Makes a Great AI Portfolio",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 23 milestone",
    "completed_override": null
  },
  {
    "day_number": 158,
    "date": "2027-01-22",
    "week_number": 23,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 23 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineer Resume & Career Guide",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Alireza Nezami: Portfolio & Interactive CV",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Optimizing Technical Headline & Experience",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Crafting a High-Impact Profile README",
        "url": "https://docs.github.com/en/account-and-profile",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: Ask HN What Makes a Great AI Portfolio",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 23 milestone",
    "completed_override": null
  },
  {
    "day_number": 159,
    "date": "2027-01-23",
    "week_number": 23,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 23 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Chip Huyen: AI Engineer Resume & Career Guide",
        "url": "https://huyenchip.com",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Alireza Nezami: Portfolio & Interactive CV",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/",
        "domain": "github.io",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Optimizing Technical Headline & Experience",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Crafting a High-Impact Profile README",
        "url": "https://docs.github.com/en/account-and-profile",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: Ask HN What Makes a Great AI Portfolio",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 23 milestone",
    "completed_override": null
  },
  {
    "day_number": 160,
    "date": "2027-01-24",
    "week_number": 23,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 161,
    "date": "2027-01-25",
    "week_number": 23,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 162,
    "date": "2027-01-26",
    "week_number": 24,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 24 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Tool",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Wikipedia: STAR Interview Response Technique",
        "url": "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result",
        "domain": "wikipedia.org",
        "is_top_pick": false
      },
      {
        "label": "Chip Huyen: Machine Learning & AI System Design Handbook",
        "url": "https://github.com/chiphuyen/aie-book",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pramp / Interviewing.io: Technical Mock Interview Strategies",
        "url": "https://www.pramp.com/",
        "domain": "pramp.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: AI Engineering System Design Cheat-Sheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 24 milestone",
    "completed_override": null
  },
  {
    "day_number": 163,
    "date": "2027-01-27",
    "week_number": 24,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 24 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Tool",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Wikipedia: STAR Interview Response Technique",
        "url": "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result",
        "domain": "wikipedia.org",
        "is_top_pick": false
      },
      {
        "label": "Chip Huyen: Machine Learning & AI System Design Handbook",
        "url": "https://github.com/chiphuyen/aie-book",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pramp / Interviewing.io: Technical Mock Interview Strategies",
        "url": "https://www.pramp.com/",
        "domain": "pramp.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: AI Engineering System Design Cheat-Sheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 24 milestone",
    "completed_override": null
  },
  {
    "day_number": 164,
    "date": "2027-01-28",
    "week_number": 24,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 24 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Tool",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Wikipedia: STAR Interview Response Technique",
        "url": "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result",
        "domain": "wikipedia.org",
        "is_top_pick": false
      },
      {
        "label": "Chip Huyen: Machine Learning & AI System Design Handbook",
        "url": "https://github.com/chiphuyen/aie-book",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pramp / Interviewing.io: Technical Mock Interview Strategies",
        "url": "https://www.pramp.com/",
        "domain": "pramp.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: AI Engineering System Design Cheat-Sheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 24 milestone",
    "completed_override": null
  },
  {
    "day_number": 165,
    "date": "2027-01-29",
    "week_number": 24,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 24 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Tool",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Wikipedia: STAR Interview Response Technique",
        "url": "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result",
        "domain": "wikipedia.org",
        "is_top_pick": false
      },
      {
        "label": "Chip Huyen: Machine Learning & AI System Design Handbook",
        "url": "https://github.com/chiphuyen/aie-book",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pramp / Interviewing.io: Technical Mock Interview Strategies",
        "url": "https://www.pramp.com/",
        "domain": "pramp.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: AI Engineering System Design Cheat-Sheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 24 milestone",
    "completed_override": null
  },
  {
    "day_number": 166,
    "date": "2027-01-30",
    "week_number": 24,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 24 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Tool",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Wikipedia: STAR Interview Response Technique",
        "url": "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result",
        "domain": "wikipedia.org",
        "is_top_pick": false
      },
      {
        "label": "Chip Huyen: Machine Learning & AI System Design Handbook",
        "url": "https://github.com/chiphuyen/aie-book",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Pramp / Interviewing.io: Technical Mock Interview Strategies",
        "url": "https://www.pramp.com/",
        "domain": "pramp.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: AI Engineering System Design Cheat-Sheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 24 milestone",
    "completed_override": null
  },
  {
    "day_number": 167,
    "date": "2027-01-31",
    "week_number": 24,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 168,
    "date": "2027-02-01",
    "week_number": 24,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 169,
    "date": "2027-02-02",
    "week_number": 25,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 25 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Platform",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Hacker News: Who is Hiring Monthly Thread",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Direct Engineering Recruiter Outreach",
        "url": "https://www.linkedin.com/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "Wellfound: AI Startup Job Portal",
        "url": "https://wellfound.com/",
        "domain": "wellfound.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Application Funnel Tracking Spreadsheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 25 milestone",
    "completed_override": null
  },
  {
    "day_number": 170,
    "date": "2027-02-03",
    "week_number": 25,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 25 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Platform",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Hacker News: Who is Hiring Monthly Thread",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Direct Engineering Recruiter Outreach",
        "url": "https://www.linkedin.com/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "Wellfound: AI Startup Job Portal",
        "url": "https://wellfound.com/",
        "domain": "wellfound.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Application Funnel Tracking Spreadsheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 25 milestone",
    "completed_override": null
  },
  {
    "day_number": 171,
    "date": "2027-02-04",
    "week_number": 25,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 25 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Platform",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Hacker News: Who is Hiring Monthly Thread",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Direct Engineering Recruiter Outreach",
        "url": "https://www.linkedin.com/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "Wellfound: AI Startup Job Portal",
        "url": "https://wellfound.com/",
        "domain": "wellfound.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Application Funnel Tracking Spreadsheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 25 milestone",
    "completed_override": null
  },
  {
    "day_number": 172,
    "date": "2027-02-05",
    "week_number": 25,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 25 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Platform",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Hacker News: Who is Hiring Monthly Thread",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Direct Engineering Recruiter Outreach",
        "url": "https://www.linkedin.com/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "Wellfound: AI Startup Job Portal",
        "url": "https://wellfound.com/",
        "domain": "wellfound.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Application Funnel Tracking Spreadsheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 25 milestone",
    "completed_override": null
  },
  {
    "day_number": 173,
    "date": "2027-02-06",
    "week_number": 25,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 25 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Visa Sponsorship Daily Jobs Platform",
        "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs",
        "domain": "github.com",
        "is_top_pick": true
      },
      {
        "label": "Hacker News: Who is Hiring Monthly Thread",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Direct Engineering Recruiter Outreach",
        "url": "https://www.linkedin.com/",
        "domain": "linkedin.com",
        "is_top_pick": false
      },
      {
        "label": "Wellfound: AI Startup Job Portal",
        "url": "https://wellfound.com/",
        "domain": "wellfound.com",
        "is_top_pick": false
      },
      {
        "label": "GitHub: Application Funnel Tracking Spreadsheet",
        "url": "https://github.com/AlirezaNezami96",
        "domain": "github.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 25 milestone",
    "completed_override": null
  },
  {
    "day_number": 174,
    "date": "2027-02-07",
    "week_number": 25,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 175,
    "date": "2027-02-08",
    "week_number": 25,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 176,
    "date": "2027-02-09",
    "week_number": 26,
    "day_in_week": 1,
    "day_type": "study",
    "title": "Week 26 \u00b7 Day 1: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Alireza Nezami: The Path AI Roadmap Complete",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/journey.html",
        "domain": "github.io",
        "is_top_pick": true
      },
      {
        "label": "GitHub: Alireza Nezami Portfolio Codebase",
        "url": "https://github.com/AlirezaNezami96/AlirezaNezami",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: AI Engineering Retrospectives",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Journey to Senior AI Engineer",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Celebrating Engineering Milestones",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 26 milestone",
    "completed_override": null
  },
  {
    "day_number": 177,
    "date": "2027-02-10",
    "week_number": 26,
    "day_in_week": 2,
    "day_type": "study",
    "title": "Week 26 \u00b7 Day 2: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Alireza Nezami: The Path AI Roadmap Complete",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/journey.html",
        "domain": "github.io",
        "is_top_pick": true
      },
      {
        "label": "GitHub: Alireza Nezami Portfolio Codebase",
        "url": "https://github.com/AlirezaNezami96/AlirezaNezami",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: AI Engineering Retrospectives",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Journey to Senior AI Engineer",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Celebrating Engineering Milestones",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 26 milestone",
    "completed_override": null
  },
  {
    "day_number": 178,
    "date": "2027-02-11",
    "week_number": 26,
    "day_in_week": 3,
    "day_type": "study",
    "title": "Week 26 \u00b7 Day 3: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Alireza Nezami: The Path AI Roadmap Complete",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/journey.html",
        "domain": "github.io",
        "is_top_pick": true
      },
      {
        "label": "GitHub: Alireza Nezami Portfolio Codebase",
        "url": "https://github.com/AlirezaNezami96/AlirezaNezami",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: AI Engineering Retrospectives",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Journey to Senior AI Engineer",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Celebrating Engineering Milestones",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 26 milestone",
    "completed_override": null
  },
  {
    "day_number": 179,
    "date": "2027-02-12",
    "week_number": 26,
    "day_in_week": 4,
    "day_type": "study",
    "title": "Week 26 \u00b7 Day 4: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Alireza Nezami: The Path AI Roadmap Complete",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/journey.html",
        "domain": "github.io",
        "is_top_pick": true
      },
      {
        "label": "GitHub: Alireza Nezami Portfolio Codebase",
        "url": "https://github.com/AlirezaNezami96/AlirezaNezami",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: AI Engineering Retrospectives",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Journey to Senior AI Engineer",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Celebrating Engineering Milestones",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 26 milestone",
    "completed_override": null
  },
  {
    "day_number": 180,
    "date": "2027-02-13",
    "week_number": 26,
    "day_in_week": 5,
    "day_type": "study",
    "title": "Week 26 \u00b7 Day 5: Deep Dive",
    "description": "Applied AI Engineering curriculum deep-dive study and practical implementation session.",
    "resources": [
      {
        "label": "Alireza Nezami: The Path AI Roadmap Complete",
        "url": "https://alirezanezami96.github.io/AlirezaNezami/journey.html",
        "domain": "github.io",
        "is_top_pick": true
      },
      {
        "label": "GitHub: Alireza Nezami Portfolio Codebase",
        "url": "https://github.com/AlirezaNezami96/AlirezaNezami",
        "domain": "github.com",
        "is_top_pick": false
      },
      {
        "label": "Hacker News: AI Engineering Retrospectives",
        "url": "https://news.ycombinator.com",
        "domain": "ycombinator.com",
        "is_top_pick": false
      },
      {
        "label": "Towards Data Science: Journey to Senior AI Engineer",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com",
        "is_top_pick": false
      },
      {
        "label": "LinkedIn: Celebrating Engineering Milestones",
        "url": "https://www.linkedin.com/in/alireza-nezami/",
        "domain": "linkedin.com",
        "is_top_pick": false
      }
    ],
    "deliverable": "Working codebase implementation for Week 26 milestone",
    "completed_override": null
  },
  {
    "day_number": 181,
    "date": "2027-02-14",
    "week_number": 26,
    "day_in_week": 6,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  },
  {
    "day_number": 182,
    "date": "2027-02-15",
    "week_number": 26,
    "day_in_week": 7,
    "day_type": "rest",
    "title": "Rest & buffer",
    "description": "Catch up on anything from this week, or take the day off \u2014 both are the plan working correctly.",
    "resources": [
      {
        "label": "Chip Huyen AI Engineering Reflections",
        "url": "https://huyenchip.com/",
        "domain": "huyenchip.com",
        "is_top_pick": true
      },
      {
        "label": "Andrej Karpathy AI Perspective",
        "url": "https://karpathy.ai/",
        "domain": "karpathy.ai"
      },
      {
        "label": "Hacker News Weekly Best Tech Articles",
        "url": "https://news.ycombinator.com/",
        "domain": "ycombinator.com"
      },
      {
        "label": "Towards Data Science Weekly Digest",
        "url": "https://towardsdatascience.com",
        "domain": "towardsdatascience.com"
      },
      {
        "label": "GitHub Trending AI Repositories",
        "url": "https://github.com/trending",
        "domain": "github.com"
      }
    ],
    "deliverable": "Rest, reflection, or backlog catch-up",
    "completed_override": null
  }
];
