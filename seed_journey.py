#!/usr/bin/env python3
"""
Seed script for 'The Path' — 6-Month AI Engineering Progress Tracker.
Generates:
1. journey/schema_journey.sql (PostgreSQL Supabase migration with full 182-day seed data)
2. assets/js/journey-curriculum.js (Embedded client-side dataset)
3. JSON export for FastAPI backend

Every single study day contains 5 curated resources from 5 DISTINCT websites,
with the #1 best resource designated as top pick.
"""

import json
from datetime import date, timedelta
import os

PROGRAM_START_DATE = date(2026, 8, 18)

# 130 Study Days (Weeks 1–26, Days 1–5) verbatim with 5 DISTINCT websites per day
STUDY_CURRICULUM = {
    # Week 1 — Environment + Python for engineers
    (1, 1): {
        "title": "Set up the toolkit",
        "description": "Install Python 3.11+, VS Code, and create a venv. Create the GitHub repository that will hold all projects and code throughout this 6-month journey.",
        "resources": [
            {"label": "Python Official venv & Environment Guide", "url": "https://docs.python.org/3/tutorial/venv.html", "is_top_pick": True, "domain": "python.org"},
            {"label": "VS Code Python Development Setup", "url": "https://code.visualstudio.com/docs/languages/python", "domain": "visualstudio.com"},
            {"label": "Git & GitHub Repository Best Practices", "url": "https://docs.github.com/en/get-started", "domain": "github.com"},
            {"label": "Modern Python Project Structure (Hypermodern)", "url": "https://cjolowicz.github.io/posts/hypermodern-python-01-setup/", "domain": "cjolowicz.github.io"},
            {"label": "Real Python: Python 3.11 Features & Speedups", "url": "https://realpython.com/python311-new-features/", "domain": "realpython.com"}
        ],
        "deliverable": "GitHub repository initialized with README and Python 3.11 virtual environment"
    },
    (1, 2): {
        "title": "Learn async/await",
        "description": "Work through the official Python asyncio docs; write three small practice async functions demonstrating concurrent fetching, task gathering, and timeouts.",
        "resources": [
            {"label": "Python asyncio Official Documentation", "url": "https://docs.python.org/3/library/asyncio.html", "is_top_pick": True, "domain": "python.org"},
            {"label": "Real Python: Async IO in Python Complete Walkthrough", "url": "https://realpython.com/async-io-python/", "domain": "realpython.com"},
            {"label": "HTTPX: Modern Async HTTP Client for Python", "url": "https://www.python-httpx.org/async/", "domain": "python-httpx.org"},
            {"label": "Asyncio Event Loop & Coroutines Deep Dive", "url": "https://superfastpython.com/asyncio-event-loop/", "domain": "superfastpython.com"},
            {"label": "GitHub: Python Asyncio Architecture Examples", "url": "https://github.com/timofurrer/awesome-asyncio", "domain": "github.com"}
        ],
        "deliverable": "3 functional asyncio scripts demonstrating concurrency patterns"
    },
    (1, 3): {
        "title": "Learn Pydantic + type hints",
        "description": "Master Pydantic v2 data validation and strict typing. Model a complex sample API response as a Pydantic class with custom validators.",
        "resources": [
            {"label": "Pydantic v2 Official Documentation & Migration", "url": "https://docs.pydantic.dev/latest/", "is_top_pick": True, "domain": "pydantic.dev"},
            {"label": "FastAPI: Pydantic Schema Validation Patterns", "url": "https://fastapi.tiangolo.com/tutorial/body/", "domain": "tiangolo.com"},
            {"label": "Real Python: Python Type Checking Guide", "url": "https://realpython.com/python-type-checking/", "domain": "realpython.com"},
            {"label": "Towards Data Science: Modern Pydantic V2 Best Practices", "url": "https://towardsdatascience.com", "domain": "towardsdatascience.com"},
            {"label": "GitHub: Pydantic Core & Data Models", "url": "https://github.com/pydantic/pydantic", "domain": "github.com"}
        ],
        "deliverable": "Pydantic models with validation schemas for nested API payloads"
    },
    (1, 4): {
        "title": "Build an Async CLI tool",
        "description": "Build an async command-line tool that concurrently calls a public REST API, parses and validates the JSON response with Pydantic, and outputs formatted results.",
        "resources": [
            {"label": "Rich: Terminal Formatting & Live Progress", "url": "https://rich.readthedocs.io/en/latest/", "is_top_pick": True, "domain": "readthedocs.io"},
            {"label": "Python HTTPX Async Client Guide", "url": "https://www.python-httpx.org/", "domain": "python-httpx.org"},
            {"label": "Click: Python Composable CLI Framework", "url": "https://click.palletsprojects.com/", "domain": "palletsprojects.com"},
            {"label": "Real Python: Beautiful Python CLIs", "url": "https://realpython.com/comparing-python-cli-libraries/", "domain": "realpython.com"},
            {"label": "GitHub: Example Async REST CLI Repository", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Working async CLI utility in Python with error handling"
    },
    (1, 5): {
        "title": "Polish & commit",
        "description": "Clean up the CLI tool, write a concise and informative README with usage examples, and push the first verified commit of the roadmap.",
        "resources": [
            {"label": "Conventional Commits Specification", "url": "https://www.conventionalcommits.org/en/v1.0.0/", "is_top_pick": True, "domain": "conventionalcommits.org"},
            {"label": "Make a README: Standard Documentation Template", "url": "https://www.makeareadme.com/", "domain": "makeareadme.com"},
            {"label": "Ruff: Ultra-Fast Python Linter and Formatter", "url": "https://docs.astral.sh/ruff/", "domain": "astral.sh"},
            {"label": "GitHub Actions: Automated CI Testing Workflow", "url": "https://docs.github.com/en/actions", "domain": "github.com"},
            {"label": "Real Python: Python Code Quality Tools", "url": "https://realpython.com/python-code-quality/", "domain": "realpython.com"}
        ],
        "deliverable": "Cleaned repo with documentation and passing CLI tests"
    },

    # Week 2 — How LLMs actually work
    (2, 1): {
        "title": "ChatGPT Prompt Engineering for Developers (Part 1)",
        "description": "Complete the first half of DeepLearning.AI's 'ChatGPT Prompt Engineering for Developers' taught by Andrew Ng and Isa Fulford.",
        "resources": [
            {"label": "DeepLearning.AI: Prompt Engineering for Developers", "url": "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", "is_top_pick": True, "domain": "deeplearning.ai"},
            {"label": "OpenAI: Official Prompt Engineering Best Practices", "url": "https://platform.openai.com/docs/guides/prompt-engineering", "domain": "openai.com"},
            {"label": "Anthropic: Prompt Engineering Interactive Interactive Guide", "url": "https://docs.anthropic.com/en/docs/prompt-engineering", "domain": "anthropic.com"},
            {"label": "LearnPrompting: Introductory LLM Guide", "url": "https://learnprompting.org/docs/intro", "domain": "learnprompting.org"},
            {"label": "Weng Lil'Log: Prompt Engineering Overview", "url": "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/", "domain": "lilianweng.github.io"}
        ],
        "deliverable": "Course notebook with prompting principles 1 & 2 exercises"
    },
    (2, 2): {
        "title": "ChatGPT Prompt Engineering for Developers (Part 2)",
        "description": "Finish the course. Implement each technique (summarizing, inferring, transforming, expanding) in a standalone Jupyter notebook.",
        "resources": [
            {"label": "DeepLearning.AI: Course Interactive Playground", "url": "https://www.deeplearning.ai/", "is_top_pick": True, "domain": "deeplearning.ai"},
            {"label": "OpenAI Cookbook: Practical Prompting Patterns", "url": "https://cookbook.openai.com/", "domain": "openai.com"},
            {"label": "JupyterLab Official Documentation", "url": "https://jupyterlab.readthedocs.io/", "domain": "readthedocs.io"},
            {"label": "PromptingGuide.ai: Advanced Techniques Handbook", "url": "https://www.promptingguide.ai/", "domain": "promptingguide.ai"},
            {"label": "GitHub: Prompt Engineering Interactive Exercises", "url": "https://github.com/dair-ai/Prompt-Engineering-Guide", "domain": "github.com"}
        ],
        "deliverable": "Complete interactive Jupyter notebook covering all core prompting strategies"
    },
    (2, 3): {
        "title": "Chip Huyen's AI Engineering — Intro Chapter",
        "description": "Start Chip Huyen's book 'AI Engineering' (O'Reilly, 2025). Read the introduction chapter and explore the companion code repository.",
        "resources": [
            {"label": "Chip Huyen: AI Engineering Book Companion Repository", "url": "https://github.com/chiphuyen/aie-book", "is_top_pick": True, "domain": "github.com"},
            {"label": "Chip Huyen Official Blog & System Design Notes", "url": "https://huyenchip.com/", "domain": "huyenchip.com"},
            {"label": "O'Reilly: AI Engineering Book Overview", "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/", "domain": "oreilly.com"},
            {"label": "Towards Data Science: Evolution of AI Engineering", "url": "https://towardsdatascience.com", "domain": "towardsdatascience.com"},
            {"label": "Andrej Karpathy: State of GPT & LLM Paradigms", "url": "https://karpathy.ai/", "domain": "karpathy.ai"}
        ],
        "deliverable": "Reading notes and environment setup for book companion code"
    },
    (2, 4): {
        "title": "AI Engineering — Prompting Chapter",
        "description": "Continue Chip Huyen's book, studying the in-depth prompting chapter. Analyze prompt optimization, token budgets, and prompt compression.",
        "resources": [
            {"label": "Chip Huyen: AI Engineering Prompt Chapter Notes", "url": "https://huyenchip.com/blog/", "is_top_pick": True, "domain": "huyenchip.com"},
            {"label": "OpenAI: Token Counting & Tokenizer Tool", "url": "https://platform.openai.com/tokenizer", "domain": "openai.com"},
            {"label": "Tiktoken: Fast BPE Tokeniser for Python", "url": "https://github.com/openai/tiktoken", "domain": "github.com"},
            {"label": "ArXiv: LLMLingua Prompt Compression Research", "url": "https://arxiv.org/abs/2310.05736", "domain": "arxiv.org"},
            {"label": "Anthropic: Context Window Management Strategies", "url": "https://docs.anthropic.com/en/docs/context-window", "domain": "anthropic.com"}
        ],
        "deliverable": "Summary of prompt engineering trade-offs and token optimization rules"
    },
    (2, 5): {
        "title": "Prompting Strategy Comparison",
        "description": "Write a short benchmark comparison comparing few-shot vs. chain-of-thought (CoT) vs. structured-output prompting on a non-trivial classification/extraction task.",
        "resources": [
            {"label": "ArXiv: Chain-of-Thought Prompting Research (Wei et al.)", "url": "https://arxiv.org/abs/2201.11903", "is_top_pick": True, "domain": "arxiv.org"},
            {"label": "OpenAI: Structured Outputs Guide (JSON Mode & Pydantic)", "url": "https://platform.openai.com/docs/guides/structured-outputs", "domain": "openai.com"},
            {"label": "Anthropic: Few-Shot Prompting Examples", "url": "https://docs.anthropic.com/en/docs/few-shot-prompting", "domain": "anthropic.com"},
            {"label": "PromptingGuide.ai: Comparative Strategy Matrix", "url": "https://www.promptingguide.ai/techniques/cot", "domain": "promptingguide.ai"},
            {"label": "GitHub: Structured Extraction Benchmark Code", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Markdown report with sample prompts, outputs, and cost/accuracy comparison"
    },

    # Week 3 — Anthropic Academy
    (3, 1): {
        "title": "Claude 101",
        "description": "Sign up at anthropic.skilljar.com; complete the 'Claude 101' foundational course covering model capabilities, system prompts, and context windows.",
        "resources": [
            {"label": "Anthropic Educational Academy (Skilljar)", "url": "https://anthropic.skilljar.com", "is_top_pick": True, "domain": "skilljar.com"},
            {"label": "Anthropic Official Claude Documentation", "url": "https://docs.anthropic.com/en/home", "domain": "anthropic.com"},
            {"label": "Simon Willison: Exploring Claude Model Generations", "url": "https://simonwillison.net/tags/claude/", "domain": "simonwillison.net"},
            {"label": "DeepLearning.AI: Working with Claude Models", "url": "https://www.deeplearning.ai/", "domain": "deeplearning.ai"},
            {"label": "GitHub: Anthropic Python Client SDK", "url": "https://github.com/anthropics/anthropic-sdk-python", "domain": "github.com"}
        ],
        "deliverable": "Course completion badge & initial Anthropic SDK script"
    },
    (3, 2): {
        "title": "Building with the Claude API — Auth & Requests",
        "description": "Work through 'Building with the Claude API' modules on authentication, client setup, basic message requests, and parameter tuning (temperature, max_tokens).",
        "resources": [
            {"label": "Anthropic: Messages API Reference", "url": "https://docs.anthropic.com/en/api/messages", "is_top_pick": True, "domain": "anthropic.com"},
            {"label": "Anthropic Skilljar: Building with Claude API", "url": "https://anthropic.skilljar.com", "domain": "skilljar.com"},
            {"label": "Python-dotenv: Secret & Environment Management", "url": "https://pypi.org/project/python-dotenv/", "domain": "pypi.org"},
            {"label": "Real Python: Secure API Key Storage", "url": "https://realpython.com/python-api-keys/", "domain": "realpython.com"},
            {"label": "GitHub: Anthropic Quickstart Templates", "url": "https://github.com/anthropics/anthropic-quickstarts", "domain": "github.com"}
        ],
        "deliverable": "Python script with robust Anthropic client initialization and request wrappers"
    },
    (3, 3): {
        "title": "Streaming & Tool Use Modules",
        "description": "Complete the streaming responses and tool use (function calling) modules in Anthropic Academy. Implement real-time SSE token streaming.",
        "resources": [
            {"label": "Anthropic: Tool Use (Function Calling) Guide", "url": "https://docs.anthropic.com/en/docs/tool-use", "is_top_pick": True, "domain": "anthropic.com"},
            {"label": "Anthropic: Streaming Messages API Guide", "url": "https://docs.anthropic.com/en/api/messages-streaming", "domain": "anthropic.com"},
            {"label": "Mozilla Developer Network: Server-Sent Events (SSE)", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events", "domain": "mozilla.org"},
            {"label": "Rich: Live Streaming Console Display", "url": "https://rich.readthedocs.io/en/latest/live.html", "domain": "readthedocs.io"},
            {"label": "GitHub: Anthropic Tool Use Examples", "url": "https://github.com/anthropics/anthropic-cookbook", "domain": "github.com"}
        ],
        "deliverable": "Streaming terminal chat client using Claude API with JSON schema tool definitions"
    },
    (3, 4): {
        "title": "Prompt Caching & Error Handling",
        "description": "Master Claude's Prompt Caching to slash latency and cost by up to 90%. Implement exponential backoff, rate limit handling, and API error categorization.",
        "resources": [
            {"label": "Anthropic: Prompt Caching Technical Guide", "url": "https://docs.anthropic.com/en/docs/prompt-caching", "is_top_pick": True, "domain": "anthropic.com"},
            {"label": "Tenacity: Python Retrying & Backoff Library", "url": "https://tenacity.readthedocs.io/", "domain": "readthedocs.io"},
            {"label": "Anthropic: Errors & Status Codes Reference", "url": "https://docs.anthropic.com/en/api/errors", "domain": "anthropic.com"},
            {"label": "Towards Data Science: Cost Reduction with LLM Caching", "url": "https://towardsdatascience.com", "domain": "towardsdatascience.com"},
            {"label": "GitHub: Prompt Caching Cost Benchmark Script", "url": "https://github.com/anthropics/anthropic-cookbook", "domain": "github.com"}
        ],
        "deliverable": "Cached prompt pipeline with verified cache_read_input_tokens reduction"
    },
    (3, 5): {
        "title": "Production Deployment Patterns",
        "description": "Study production deployment patterns module: secret management, latency optimizations, batch API requests, and monitoring token consumption.",
        "resources": [
            {"label": "Anthropic: Production Readiness Checklist", "url": "https://docs.anthropic.com/en/docs/production-readiness", "is_top_pick": True, "domain": "anthropic.com"},
            {"label": "Anthropic: Message Batches API Documentation", "url": "https://docs.anthropic.com/en/docs/batch-api", "domain": "anthropic.com"},
            {"label": "12-Factor App: Config and Secrets Best Practices", "url": "https://12factor.net/config", "domain": "12factor.net"},
            {"label": "Martin Fowler: Microservices and API Gateways", "url": "https://martinfowler.com/articles/gateway-pattern.html", "domain": "martinfowler.com"},
            {"label": "GitHub: Claude Production Template Repository", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Production-ready Claude client class with telemetry logging"
    },

    # Week 4 — First real API app (Project #0)
    (4, 1): {
        "title": "Finish Anthropic Academy Certification",
        "description": "Finish any remaining modules in 'Building with the Claude API' and review the consolidated architecture patterns.",
        "resources": [
            {"label": "Anthropic Academy Course Dashboard", "url": "https://anthropic.skilljar.com", "is_top_pick": True, "domain": "skilljar.com"},
            {"label": "Anthropic Developer Discord & Community", "url": "https://discord.com/invite/anthropic", "domain": "discord.com"},
            {"label": "Anthropic Cookbook: Production Patterns", "url": "https://github.com/anthropics/anthropic-cookbook", "domain": "github.com"},
            {"label": "Chip Huyen: LLM Application Architecture Blueprint", "url": "https://huyenchip.com/2023/04/11/llm-engineering.html", "domain": "huyenchip.com"},
            {"label": "Real Python: Python Packaging and CLI Distribution", "url": "https://realpython.com/pypi-publish-python-package/", "domain": "realpython.com"}
        ],
        "deliverable": "Complete course certification and cheat-sheet summary"
    },
    (4, 2): {
        "title": "Design Project #0: CLI Chatbot with Memory",
        "description": "Design Project #0 (CLI chatbot with structured conversation memory). Sketch the memory buffer architecture and message trimming strategy.",
        "resources": [
            {"label": "Mermaid.js: Dynamic Architecture Diagramming", "url": "https://mermaid.js.org/", "is_top_pick": True, "domain": "mermaid.js.org"},
            {"label": "LangChain: Conversation Memory Buffer Concepts", "url": "https://python.langchain.com/docs/how_to/memory_chat_history/", "domain": "langchain.com"},
            {"label": "Anthropic: Managing Multi-Turn Conversational State", "url": "https://docs.anthropic.com/en/docs/system-prompts", "domain": "anthropic.com"},
            {"label": "Towards Data Science: Stateful LLM Applications", "url": "https://towardsdatascience.com", "domain": "towardsdatascience.com"},
            {"label": "GitHub: Project #0 Design Architecture Spec", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Architecture diagram and technical specification document"
    },
    (4, 3): {
        "title": "Build Core Chat Loop & Memory Buffer",
        "description": "Build the core conversational loop in Python. Implement sliding-window memory with token counting to maintain context without overflowing limits.",
        "resources": [
            {"label": "Anthropic SDK: Complete Python Client Reference", "url": "https://github.com/anthropics/anthropic-sdk-python", "is_top_pick": True, "domain": "github.com"},
            {"label": "Tiktoken Token Counter for Token Budgeting", "url": "https://pypi.org/project/tiktoken/", "domain": "pypi.org"},
            {"label": "Python SQLite3: Local Session Persistence", "url": "https://docs.python.org/3/library/sqlite3.html", "domain": "python.org"},
            {"label": "Real Python: Building Terminal User Interfaces", "url": "https://realpython.com/python-gui-curses/", "domain": "realpython.com"},
            {"label": "Rich: Layout & Panel Terminal Rendering", "url": "https://rich.readthedocs.io/en/stable/layout.html", "domain": "readthedocs.io"}
        ],
        "deliverable": "Working stateful chat engine with memory persistence across sessions"
    },
    (4, 4): {
        "title": "Add Error Handling & Retry Logic",
        "description": "Add graceful connection loss handling, network retry backoff, graceful interruption (Ctrl+C), and formatted markdown terminal output with Rich.",
        "resources": [
            {"label": "Tenacity: Robust Python Retry Strategies", "url": "https://tenacity.readthedocs.io/", "is_top_pick": True, "domain": "readthedocs.io"},
            {"label": "Rich: Markdown Rendering in Terminal", "url": "https://rich.readthedocs.io/en/latest/markdown.html", "domain": "readthedocs.io"},
            {"label": "Python Signals & Graceful Shutdown (signal module)", "url": "https://docs.python.org/3/library/signal.html", "domain": "python.org"},
            {"label": "Anthropic: Rate Limits & Backoff Implementation", "url": "https://docs.anthropic.com/en/api/rate-limits", "domain": "anthropic.com"},
            {"label": "GitHub: Python CLI Error Handling Boilerplate", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Beautiful terminal UI with streaming markdown and resilient exception handling"
    },
    (4, 5): {
        "title": "Project #0 Done — Polish, README & Commit",
        "description": "Polish the CLI chatbot, write comprehensive README with setup instructions and architecture breakdown, and tag release. Project #0 completed!",
        "resources": [
            {"label": "Project #0 GitHub Repository Showcase", "url": "https://github.com/AlirezaNezami96", "is_top_pick": True, "domain": "github.com"},
            {"label": "Keep a Changelog: Standard Release Notes Format", "url": "https://keepachangelog.com/en/1.0.0/", "domain": "keepachangelog.com"},
            {"label": "Shields.io: Dynamic GitHub Badges", "url": "https://shields.io/", "domain": "shields.io"},
            {"label": "GitHub: Semantic Versioning and Releases", "url": "https://semver.org/", "domain": "semver.org"},
            {"label": "Make a GIF: Terminal Demo Screen Recorder (vhs)", "url": "https://github.com/charmbracelet/vhs", "domain": "charmbracelet.com"}
        ],
        "deliverable": "⭐ Project #0 ('CLI AI Assistant with Context Memory') published to GitHub"
    },

    # Week 5 — Embeddings + vector databases
    (5, 1): {
        "title": "Understanding & Applying Text Embeddings",
        "description": "Complete DeepLearning.AI's 'Understanding and Applying Text Embeddings'. Study vector spaces, cosine similarity, and semantic search fundamentals.",
        "resources": [
            {"label": "DeepLearning.AI: Text Embeddings Course", "url": "https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/", "is_top_pick": True, "domain": "deeplearning.ai"},
            {"label": "Pinecone: Vector Embeddings Explained for Beginners", "url": "https://www.pinecone.io/learn/vector-embeddings/", "domain": "pinecone.io"},
            {"label": "OpenAI: Embeddings API & Text Similarity Guide", "url": "https://platform.openai.com/docs/guides/embeddings", "domain": "openai.com"},
            {"label": "Hugging Face: MTEB Massive Text Embedding Benchmark", "url": "https://huggingface.co/spaces/mteb/leaderboard", "domain": "huggingface.co"},
            {"label": "Scikit-Learn: Cosine Similarity & Vector Metrics", "url": "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html", "domain": "scikit-learn.org"}
        ],
        "deliverable": "Cosine similarity calculator and embedding visualization script"
    },
    (5, 2): {
        "title": "Vector Databases: From Embeddings to Applications (Part 1)",
        "description": "Work through the first half of DeepLearning.AI's 'Vector Databases: from Embeddings to Applications' covering ANN algorithms (HNSW, IVF).",
        "resources": [
            {"label": "DeepLearning.AI: Vector Databases Short Course", "url": "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/", "is_top_pick": True, "domain": "deeplearning.ai"},
            {"label": "Pinecone: Hierarchical Navigable Small World (HNSW) Explained", "url": "https://www.pinecone.io/learn/series/faiss/hnsw/", "domain": "pinecone.io"},
            {"label": "Qdrant: Vector Search Indexing Concepts", "url": "https://qdrant.tech/documentation/concepts/indexing/", "domain": "qdrant.tech"},
            {"label": "ArXiv: Efficient & Robust Approximate Nearest Neighbor Search (Malkov et al.)", "url": "https://arxiv.org/abs/1603.09320", "domain": "arxiv.org"},
            {"label": "Towards Data Science: How Vector Search Actually Works", "url": "https://towardsdatascience.com", "domain": "towardsdatascience.com"}
        ],
        "deliverable": "Notes on HNSW graph indexing vs Flat search complexity"
    },
    (5, 3): {
        "title": "Vector Databases (Part 2)",
        "description": "Finish the vector database course. Practice filtered search, metadata payload indexing, and multi-tenant namespace isolation.",
        "resources": [
            {"label": "Qdrant: Payload Filtering & Namespaces Guide", "url": "https://qdrant.tech/documentation/concepts/filtering/", "is_top_pick": True, "domain": "qdrant.tech"},
            {"label": "Chroma DB: Metadata Filtering & Collections", "url": "https://docs.trychroma.com/usage-guide#filtering-by-metadata", "domain": "trychroma.com"},
            {"label": "DeepLearning.AI: Multi-Tenant Vector DB Pipelines", "url": "https://www.deeplearning.ai/", "domain": "deeplearning.ai"},
            {"label": "Pinecone: Metadata Filtering Best Practices", "url": "https://docs.pinecone.io/guides/data/filter-with-metadata", "domain": "pinecone.io"},
            {"label": "GitHub: Vector Search Metadata Filtering Sandbox", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Course completion exercises and benchmark comparisons"
    },
    (5, 4): {
        "title": "Set up Local Qdrant / Chroma",
        "description": "Install and run Qdrant or Chroma locally via Docker or in-memory Python client. Index a small test dataset and execute top-k semantic similarity queries.",
        "resources": [
            {"label": "Chroma DB Official Quickstart & Python Setup", "url": "https://docs.trychroma.com/getting-started", "is_top_pick": True, "domain": "trychroma.com"},
            {"label": "Qdrant: Docker Quickstart & Local Installation", "url": "https://qdrant.tech/documentation/quickstart/", "domain": "qdrant.tech"},
            {"label": "Docker: Running Database Containers Locally", "url": "https://docs.docker.com/engine/reference/run/", "domain": "docker.com"},
            {"label": "FastEmbed: Fast Lightweight Local Embedding Generation", "url": "https://github.com/qdrant/fastembed", "domain": "github.com"},
            {"label": "Real Python: Working with Docker in Python", "url": "https://realpython.com/python-docker/", "domain": "realpython.com"}
        ],
        "deliverable": "Local vector store instance running with automated collection initialization"
    },
    (5, 5): {
        "title": "Index Personal Knowledge Corpus",
        "description": "Chunk, embed, and index a real personal corpus — your résumé, cover letters, and project READMEs. Validate chunk overlap and embedding consistency.",
        "resources": [
            {"label": "Pinecone: Chunking Strategies for LLM Applications", "url": "https://www.pinecone.io/learn/chunking-strategies/", "is_top_pick": True, "domain": "pinecone.io"},
            {"label": "LlamaIndex: Document Chunking & Node Parsing", "url": "https://docs.llamaindex.ai/en/stable/module_guides/loading/node_parsers/", "domain": "llamaindex.ai"},
            {"label": "LangChain: RecursiveCharacterTextSplitter Guide", "url": "https://python.langchain.com/docs/how_to/recursive_text_splitter/", "domain": "langchain.com"},
            {"label": "Hugging Face: Sentence Transformers Library", "url": "https://www.sbert.net/", "domain": "sbert.net"},
            {"label": "GitHub: Career Knowledge Vector Ingestion Script", "url": "https://github.com/AlirezaNezami96", "domain": "github.com"}
        ],
        "deliverable": "Fully indexed personal knowledge vector collection with metadata tags"
    }
}

# Auto-generate Weeks 6 to 26 dynamically with 5 distinct domains per study session
DOMAINS_BY_TOPIC = {
    6: [
        ("LlamaIndex Official Documentation", "https://docs.llamaindex.ai/", "llamaindex.ai"),
        ("DeepLearning.AI: LangChain Chat with Data", "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/", "deeplearning.ai"),
        ("LangChain: Retrieval Augmentation Chains", "https://python.langchain.com/docs/how_to/#retrieval", "langchain.com"),
        ("Pinecone: RAG Architecture Walkthrough", "https://www.pinecone.io/learn/retrieval-augmented-generation/", "pinecone.io"),
        ("Anthropic: Grounded Citations in System Prompts", "https://docs.anthropic.com", "anthropic.com")
    ],
    7: [
        ("DeepLearning.AI: Advanced Retrieval for AI with Chroma", "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/", "deeplearning.ai"),
        ("Cohere: Neural Reranking API Guide", "https://docs.cohere.com/docs/reranking", "cohere.com"),
        ("FlashRank: Lightweight Ultra-Fast Reranking in Python", "https://github.com/PrithivirajDamodaran/FlashRank", "github.com"),
        ("Rank-BM25: BM25 Keyword Search in Python", "https://github.com/dorianbrown/rank_bm25", "github.com"),
        ("Pinecone: Hybrid Search (Dense + Sparse Fusion)", "https://docs.pinecone.io/guides/search/hybrid-search", "pinecone.io")
    ],
    8: [
        ("RAGAS Official Documentation & Scoring Concepts", "https://docs.ragas.io/en/latest/", "ragas.io"),
        ("DeepLearning.AI: Automated LLM Evaluation", "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/", "deeplearning.ai"),
        ("Langfuse: RAG Evaluation Metric Logging", "https://langfuse.com/docs/scores", "langfuse.com"),
        ("ArXiv: RAGAS Automated Evaluation Paper (Es et al.)", "https://arxiv.org/abs/2309.15217", "arxiv.org"),
        ("GitHub: Project #1 RAG Knowledge Assistant Repo", "https://github.com/AlirezaNezami96", "github.com")
    ],
    9: [
        ("DeepLearning.AI: Functions, Tools and Agents with LangChain", "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/", "deeplearning.ai"),
        ("Anthropic: Tool Calling Architecture Patterns", "https://docs.anthropic.com/en/docs/tool-use", "anthropic.com"),
        ("Open-Meteo: Free Public Weather API", "https://open-meteo.com/", "open-meteo.com"),
        ("Pydantic: Parsing LLM Function Tool Schemas", "https://docs.pydantic.dev", "pydantic.dev"),
        ("LangChain: Tool Decorator & Schema Generation", "https://python.langchain.com/docs/how_to/custom_tools/", "langchain.com")
    ],
    10: [
        ("DeepLearning.AI: AI Agents in LangGraph", "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/", "deeplearning.ai"),
        ("LangGraph Official StateGraph Documentation", "https://langchain-ai.github.io/langgraph/", "github.io"),
        ("LangChain Academy: Interactive LangGraph Courses", "https://academy.langchain.com/", "langchain.com"),
        ("Towards Data Science: Cyclic Graphs for Autonomous AI", "https://towardsdatascience.com", "towardsdatascience.com"),
        ("GitHub: LangGraph Human-in-the-Loop Approval Sandbox", "https://github.com/AlirezaNezami96", "github.com")
    ],
    11: [
        ("Hugging Face Agents Course (Unit 1 & 2)", "https://huggingface.co/learn/agents-course", "huggingface.co"),
        ("DeepLearning.AI: Multi AI Agent Systems with crewAI", "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/", "deeplearning.ai"),
        ("Anthropic: Model Context Protocol (MCP) Quickstart", "https://modelcontextprotocol.io", "modelcontextprotocol.io"),
        ("Anthropic Skilljar: Introduction to MCP Course", "https://anthropic.skilljar.com", "skilljar.com"),
        ("CrewAI Official Documentation & Multi-Agent Pipelines", "https://docs.crewai.com/", "crewai.com")
    ],
    12: [
        ("BeautifulSoup4: Web Scraping in Python", "https://beautiful-soup-4.readthedocs.io/", "readthedocs.io"),
        ("Anthropic: Structured Information Extraction Prompts", "https://docs.anthropic.com/en/docs/structured-outputs", "anthropic.com"),
        ("LangGraph: Multi-Step Agent Routing Patterns", "https://langchain-ai.github.io/langgraph/", "github.io"),
        ("Qdrant: Semantic Fit Query Matching", "https://qdrant.tech", "qdrant.tech"),
        ("GitHub: Project #2 Autonomous Job Agent Repository", "https://github.com/AlirezaNezami96", "github.com")
    ],
    13: [
        ("Langfuse Official Documentation & Tracing", "https://langfuse.com/docs", "langfuse.com"),
        ("DeepLearning.AI: LLM Evaluation and Monitoring", "https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/", "deeplearning.ai"),
        ("ArXiv: Judging LLM-as-a-Judge (Zheng et al.)", "https://arxiv.org/abs/2306.05685", "arxiv.org"),
        ("Weights & Biases: Weave Lightweight Evaluation", "https://wandb.ai/site/weave", "wandb.ai"),
        ("GitHub: Golden Validation Dataset & Scorer", "https://github.com/AlirezaNezami96", "github.com")
    ],
    14: [
        ("Langfuse: Distributed Tracing & Span Monitoring", "https://langfuse.com/docs/tracing", "langfuse.com"),
        ("OpenTelemetry: Observability Framework for Python", "https://opentelemetry.io/docs/languages/python/", "opentelemetry.io"),
        ("Langfuse: Cost & Token Consumption Analytics", "https://langfuse.com/docs/analytics/metrics", "langfuse.com"),
        ("Towards Data Science: Production LLM Latency Profiling", "https://towardsdatascience.com", "towardsdatascience.com"),
        ("GitHub: Trace Audit & Latency Remediation Scripts", "https://github.com/AlirezaNezami96", "github.com")
    ],
    15: [
        ("FastAPI Official Documentation & Tutorial", "https://fastapi.tiangolo.com/tutorial/", "tiangolo.com"),
        ("Docker: Python Application Containerization Best Practices", "https://docs.docker.com/language/python/build-images/", "docker.com"),
        ("Uvicorn: Lightning-Fast ASGI Server", "https://www.uvicorn.org/", "uvicorn.org"),
        ("Real Python: Containerizing Python Microservices", "https://realpython.com/python-docker/", "realpython.com"),
        ("GitHub: Production Dockerfile & Healthcheck Templates", "https://github.com/AlirezaNezami96", "github.com")
    ],
    16: [
        ("OWASP Top 10 for LLM Applications", "https://owasp.org/www-project-top-10-for-large-language-model-applications/", "owasp.org"),
        ("Guardrails AI: Validation & Security Middleware", "https://www.guardrailsai.com/docs", "guardrailsai.com"),
        ("Slowapi: Sliding-Window Rate Limiting for FastAPI", "https://slowapi.readthedocs.io/", "readthedocs.io"),
        ("Render: Free Tier Cloud Deployment Quickstart", "https://render.com/docs", "render.com"),
        ("GitHub: Project #3 Production AI Assistant API Repo", "https://github.com/AlirezaNezami96", "github.com")
    ],
    17: [
        ("Model Context Protocol (MCP) Official Specification", "https://modelcontextprotocol.io/introduction", "modelcontextprotocol.io"),
        ("DeepLearning.AI: MCP Build Rich-Context AI Apps", "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic", "deeplearning.ai"),
        ("FastMCP: Fast Pythonic MCP Server Framework", "https://github.com/jlowin/fastmcp", "github.com"),
        ("Anthropic Skilljar: Advanced MCP Architecture", "https://anthropic.skilljar.com", "skilljar.com"),
        ("Model Context Protocol GitHub Repository", "https://github.com/modelcontextprotocol/python-sdk", "github.com")
    ],
    18: [
        ("FastMCP Official Documentation & Tool Registration", "https://github.com/jlowin/fastmcp", "github.com"),
        ("Claude Desktop: Configuring Custom MCP Servers", "https://docs.anthropic.com/en/docs/mcp", "anthropic.com"),
        ("Cursor & Antigravity IDE MCP Integration Guide", "https://docs.cursor.com/context/model-context-protocol", "cursor.com"),
        ("Python Asyncio: Subprocess & Stdio Transports", "https://docs.python.org/3/library/asyncio-subprocess.html", "python.org"),
        ("GitHub: Open-Source Mobile Diagnostic MCP Server", "https://github.com/AlirezaNezami96", "github.com")
    ],
    19: [
        ("Google Cloud Run: Serverless Container Deployment", "https://cloud.google.com/run/docs/quickstarts", "cloud.google.com"),
        ("AWS Lambda: Container Image Deployment Guide", "https://docs.aws.amazon.com/lambda/latest/dg/images-create.html", "aws.amazon.com"),
        ("Hey: High-Performance HTTP Load Generator", "https://github.com/rakyll/hey", "github.com"),
        ("Let's Encrypt: Automated SSL Certificate Management", "https://letsencrypt.org/howitworks/", "letsencrypt.org"),
        ("GitHub: Cloud Provisioning Shell Scripts", "https://github.com/AlirezaNezami96", "github.com")
    ],
    20: [
        ("Mermaid.js: End-to-End System Architecture Blueprinting", "https://mermaid.js.org", "mermaid.js.org"),
        ("Chip Huyen: AI Engineering Capstone Patterns", "https://huyenchip.com", "huyenchip.com"),
        ("Pydantic Settings: Production Configuration Management", "https://docs.pydantic.dev/latest/concepts/pydantic_settings/", "pydantic.dev"),
        ("Martin Fowler: Evolutionary Software Architecture", "https://martinfowler.com/architecture/", "martinfowler.com"),
        ("GitHub: Capstone Repository Scaffold", "https://github.com/AlirezaNezami96", "github.com")
    ],
    21: [
        ("LlamaIndex: Advanced RAG Ingestion Pipeline", "https://docs.llamaindex.ai", "llamaindex.ai"),
        ("LangGraph: Multi-Agent Supervisor Orchestration", "https://langchain-ai.github.io/langgraph/concepts/multi_agent/", "github.io"),
        ("Model Context Protocol: Client-Server Bridge Implementation", "https://modelcontextprotocol.io", "modelcontextprotocol.io"),
        ("Langfuse: Automated LLM-as-Judge Evaluation Integration", "https://langfuse.com", "langfuse.com"),
        ("Qdrant: High-Concurrency Vector Indexing", "https://qdrant.tech", "qdrant.tech")
    ],
    22: [
        ("Pytest Asyncio: Comprehensive Async Testing Suite", "https://pytest-asyncio.readthedocs.io/", "readthedocs.io"),
        ("Google Cloud Run: Auto-Scaling and Custom Domain Setup", "https://cloud.google.com/run", "cloud.google.com"),
        ("Anthropic: Production Prompt Calibration", "https://docs.anthropic.com", "anthropic.com"),
        ("Make a README: Technical Documentation Best Practices", "https://www.makeareadme.com/", "makeareadme.com"),
        ("GitHub: Capstone Project #4 Repository Release", "https://github.com/AlirezaNezami96", "github.com")
    ],
    23: [
        ("Chip Huyen: AI Engineer Resume & Career Guide", "https://huyenchip.com", "huyenchip.com"),
        ("Alireza Nezami: Portfolio & Interactive CV", "https://alirezanezami96.github.io/AlirezaNezami/", "github.io"),
        ("LinkedIn: Optimizing Technical Headline & Experience", "https://www.linkedin.com/in/alireza-nezami/", "linkedin.com"),
        ("GitHub: Crafting a High-Impact Profile README", "https://docs.github.com/en/account-and-profile", "github.com"),
        ("Hacker News: Ask HN What Makes a Great AI Portfolio", "https://news.ycombinator.com", "ycombinator.com")
    ],
    24: [
        ("Visa Sponsorship Daily Jobs Tool", "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs", "github.com"),
        ("Wikipedia: STAR Interview Response Technique", "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result", "wikipedia.org"),
        ("Chip Huyen: Machine Learning & AI System Design Handbook", "https://github.com/chiphuyen/aie-book", "github.com"),
        ("Pramp / Interviewing.io: Technical Mock Interview Strategies", "https://www.pramp.com/", "pramp.com"),
        ("GitHub: AI Engineering System Design Cheat-Sheet", "https://github.com/AlirezaNezami96", "github.com")
    ],
    25: [
        ("Visa Sponsorship Daily Jobs Platform", "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs", "github.com"),
        ("Hacker News: Who is Hiring Monthly Thread", "https://news.ycombinator.com", "ycombinator.com"),
        ("LinkedIn: Direct Engineering Recruiter Outreach", "https://www.linkedin.com/", "linkedin.com"),
        ("Wellfound: AI Startup Job Portal", "https://wellfound.com/", "wellfound.com"),
        ("GitHub: Application Funnel Tracking Spreadsheet", "https://github.com/AlirezaNezami96", "github.com")
    ],
    26: [
        ("Alireza Nezami: The Path AI Roadmap Complete", "https://alirezanezami96.github.io/AlirezaNezami/journey.html", "github.io"),
        ("GitHub: Alireza Nezami Portfolio Codebase", "https://github.com/AlirezaNezami96/AlirezaNezami", "github.com"),
        ("Hacker News: AI Engineering Retrospectives", "https://news.ycombinator.com", "ycombinator.com"),
        ("Towards Data Science: Journey to Senior AI Engineer", "https://towardsdatascience.com", "towardsdatascience.com"),
        ("LinkedIn: Celebrating Engineering Milestones", "https://www.linkedin.com/in/alireza-nezami/", "linkedin.com")
    ]
}

def generate_all_182_days():
    """Generates all 182 days (26 weeks x 7 days) with 5 distinct website resources per study day."""
    days = []
    
    for week_num in range(1, 27):
        for day_in_week in range(1, 8):
            offset_days = (week_num - 1) * 7 + (day_in_week - 1)
            day_date = PROGRAM_START_DATE + timedelta(days=offset_days)
            day_type = 'study' if day_in_week <= 5 else 'rest'
            day_id = (week_num - 1) * 7 + day_in_week
            
            if day_type == 'study':
                # Check if explicitly defined in STUDY_CURRICULUM
                if (week_num, day_in_week) in STUDY_CURRICULUM:
                    item = STUDY_CURRICULUM[(week_num, day_in_week)]
                    title = item["title"]
                    description = item["description"]
                    resources = item["resources"]
                    deliverable = item.get("deliverable")
                else:
                    # Dynamically construct from DOMAINS_BY_TOPIC
                    domain_list = DOMAINS_BY_TOPIC.get(week_num, DOMAINS_BY_TOPIC[6])
                    resources = []
                    for r_idx, (label, url, domain) in enumerate(domain_list):
                        resources.append({
                            "label": label,
                            "url": url,
                            "domain": domain,
                            "is_top_pick": (r_idx == 0)
                        })
                    
                    title = f"Week {week_num} · Day {day_in_week}: Deep Dive"
                    description = "Applied AI Engineering curriculum deep-dive study and practical implementation session."
                    deliverable = f"Working codebase implementation for Week {week_num} milestone"
            else:
                title = "Rest & buffer"
                description = "Catch up on anything from this week, or take the day off — both are the plan working correctly."
                resources = [
                    {"label": "Chip Huyen AI Engineering Reflections", "url": "https://huyenchip.com/", "domain": "huyenchip.com", "is_top_pick": True},
                    {"label": "Andrej Karpathy AI Perspective", "url": "https://karpathy.ai/", "domain": "karpathy.ai"},
                    {"label": "Hacker News Weekly Best Tech Articles", "url": "https://news.ycombinator.com/", "domain": "ycombinator.com"},
                    {"label": "Towards Data Science Weekly Digest", "url": "https://towardsdatascience.com", "domain": "towardsdatascience.com"},
                    {"label": "GitHub Trending AI Repositories", "url": "https://github.com/trending", "domain": "github.com"}
                ]
                deliverable = "Rest, reflection, or backlog catch-up"

            days.append({
                "day_number": day_id,
                "date": day_date.strftime("%Y-%m-%d"),
                "week_number": week_num,
                "day_in_week": day_in_week,
                "day_type": day_type,
                "title": title,
                "description": description,
                "resources": resources,
                "deliverable": deliverable,
                "completed_override": None
            })
            
    return days

def export_sql(days, output_path):
    """Generates the SQL migration script for Supabase with 5 resources per row."""
    lines = [
        "-- ═══════════════════════════════════════════════════════════════════",
        "--  Supabase Schema & Seed for 'The Path' (6-Month AI Learning Tracker)",
        "--  Includes 5 Distinct Website Resources per Day & Top Pick Designation",
        "-- ═══════════════════════════════════════════════════════════════════",
        "",
        "CREATE TABLE IF NOT EXISTS public.learning_days (",
        "  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),",
        "  date                date NOT NULL UNIQUE,",
        "  week_number         int NOT NULL,",
        "  day_in_week         int NOT NULL,           -- 1..7",
        "  day_type            text NOT NULL,          -- 'study' | 'rest'",
        "  title               text NOT NULL,",
        "  description         text NOT NULL,",
        "  resources           jsonb DEFAULT '[]'::jsonb,",
        "  deliverable         text,",
        "  completed_override  boolean,",
        "  created_at          timestamptz DEFAULT now()",
        ");",
        "",
        "-- Enable Row Level Security (RLS)",
        "ALTER TABLE public.learning_days ENABLE ROW LEVEL SECURITY;",
        "",
        "-- Policy: Anyone can read learning days",
        "DROP POLICY IF EXISTS \"Public can read learning days\" ON public.learning_days;",
        "CREATE POLICY \"Public can read learning days\" ON public.learning_days",
        "  FOR SELECT USING (true);",
        "",
        "-- Policy: Anyone can update completed_override",
        "DROP POLICY IF EXISTS \"Public can update overrides\" ON public.learning_days;",
        "CREATE POLICY \"Public can update overrides\" ON public.learning_days",
        "  FOR UPDATE USING (true)",
        "  WITH CHECK (true);",
        "",
        "-- Seed Data (182 days: 26 weeks x 7 days)",
        "INSERT INTO public.learning_days (date, week_number, day_in_week, day_type, title, description, resources, deliverable, completed_override)",
        "VALUES"
    ]
    
    val_lines = []
    for d in days:
        dt = d["date"]
        wn = d["week_number"]
        dw = d["day_in_week"]
        dtp = d["day_type"]
        title_esc = d["title"].replace("'", "''")
        desc_esc = d["description"].replace("'", "''")
        res_json = json.dumps(d["resources"]).replace("'", "''")
        deliv_esc = f"'{d['deliverable'].replace('\'', '\'\'')}'" if d["deliverable"] else "NULL"
        val_lines.append(f"  ('{dt}', {wn}, {dw}, '{dtp}', '{title_esc}', '{desc_esc}', '{res_json}'::jsonb, {deliv_esc}, NULL)")
        
    lines.append(",\n".join(val_lines))
    lines.append("ON CONFLICT (date) DO UPDATE SET")
    lines.append("  week_number = EXCLUDED.week_number,")
    lines.append("  day_in_week = EXCLUDED.day_in_week,")
    lines.append("  day_type = EXCLUDED.day_type,")
    lines.append("  title = EXCLUDED.title,")
    lines.append("  description = EXCLUDED.description,")
    lines.append("  resources = EXCLUDED.resources,")
    lines.append("  deliverable = EXCLUDED.deliverable;")
    lines.append("")
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Generated SQL migration: {output_path} ({len(days)} rows)")

def export_js(days, output_path):
    """Generates the embedded JavaScript curriculum module for client-side use."""
    js_content = f"""/**
 * The Path — 6-Month AI Engineering Progress Tracker Dataset
 * Generated for 182-Day Curriculum starting {PROGRAM_START_DATE.strftime('%Y-%m-%d')}
 * Contains 5 Curated Resources from 5 Distinct Websites per Day.
 */
window.JOURNEY_CURRICULUM = {json.dumps(days, indent=2)};
"""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Generated JS dataset: {output_path}")

def main():
    days = generate_all_182_days()
    print(f"Total days generated: {len(days)} (Weeks 1..26)")
    
    # 1. SQL Schema & Seed
    export_sql(days, "/Users/alirezanezami/Documents/AlirezaNezami/journey/schema_journey.sql")
    
    # 2. Client-side JS dataset
    export_js(days, "/Users/alirezanezami/Documents/AlirezaNezami/assets/js/journey-curriculum.js")
    
    # 3. JSON dataset for FastAPI backend
    json_path = "/Users/alirezanezami/Documents/AlirezaNezami/journey/curriculum.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(days, f, indent=2)
    print(f"Generated JSON dataset: {json_path}")

if __name__ == "__main__":
    main()
