#!/usr/bin/env python3
"""
Seed script for 'The Path' — 6-Month AI Engineering Progress Tracker.
Generates:
1. journey/schema_journey.sql (PostgreSQL Supabase migration with full 182-day seed data)
2. assets/js/journey-curriculum.js (Embedded client-side dataset)
3. JSON export for FastAPI backend
"""

import json
from datetime import date, timedelta
import os

PROGRAM_START_DATE = date(2026, 8, 18)

# 130 Study Days (Weeks 1–26, Days 1–5) verbatim from Curriculum specification
STUDY_CURRICULUM = {
    # Week 1 — Environment + Python for engineers
    (1, 1): {
        "title": "Set up the toolkit",
        "description": "Install Python 3.11+, VS Code, and create a venv. Create the GitHub repository that will hold all projects and code throughout this 6-month journey.",
        "resources": [{"label": "Python Official Docs", "url": "https://docs.python.org/3/tutorial/venv.html"}],
        "deliverable": "GitHub repository initialized with README and Python 3.11 virtual environment"
    },
    (1, 2): {
        "title": "Learn async/await",
        "description": "Work through the official Python asyncio docs; write three small practice async functions demonstrating concurrent fetching, task gathering, and timeouts.",
        "resources": [{"label": "Python asyncio Documentation", "url": "https://docs.python.org/3/library/asyncio.html"}],
        "deliverable": "3 functional asyncio scripts demonstrating concurrency patterns"
    },
    (1, 3): {
        "title": "Learn Pydantic + type hints",
        "description": "Master Pydantic v2 data validation and strict typing. Model a complex sample API response as a Pydantic class with custom validators.",
        "resources": [{"label": "Pydantic v2 Docs", "url": "https://docs.pydantic.dev/latest/"}],
        "deliverable": "Pydantic models with validation schemas for nested API payloads"
    },
    (1, 4): {
        "title": "Build an Async CLI tool",
        "description": "Build an async command-line tool that concurrently calls a public REST API, parses and validates the JSON response with Pydantic, and outputs formatted results.",
        "resources": [{"label": "HTTPX Async Client", "url": "https://www.python-httpx.org/async/"}],
        "deliverable": "Working async CLI utility in Python with error handling"
    },
    (1, 5): {
        "title": "Polish & commit",
        "description": "Clean up the CLI tool, write a concise and informative README with usage examples, and push the first verified commit of the roadmap.",
        "resources": [{"label": "Conventional Commits", "url": "https://www.conventionalcommits.org/"}],
        "deliverable": "Cleaned repo with documentation and passing CLI tests"
    },

    # Week 2 — How LLMs actually work
    (2, 1): {
        "title": "ChatGPT Prompt Engineering for Developers (Part 1)",
        "description": "Complete the first half of DeepLearning.AI's 'ChatGPT Prompt Engineering for Developers' taught by Andrew Ng and Isa Fulford.",
        "resources": [{"label": "DeepLearning.AI Prompt Engineering", "url": "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"}],
        "deliverable": "Course notebook with prompting principles 1 & 2 exercises"
    },
    (2, 2): {
        "title": "ChatGPT Prompt Engineering for Developers (Part 2)",
        "description": "Finish the course. Implement each technique (summarizing, inferring, transforming, expanding) in a standalone Jupyter notebook.",
        "resources": [{"label": "OpenAI Prompt Engineering Guide", "url": "https://platform.openai.com/docs/guides/prompt-engineering"}],
        "deliverable": "Complete interactive Jupyter notebook covering all core prompting strategies"
    },
    (2, 3): {
        "title": "Chip Huyen's AI Engineering — Intro Chapter",
        "description": "Start Chip Huyen's book 'AI Engineering' (O'Reilly, 2025). Read the introduction chapter and explore the companion code repository.",
        "resources": [{"label": "Chip Huyen AI Engineering Companion", "url": "https://github.com/chiphuyen/aie-book"}],
        "deliverable": "Reading notes and environment setup for book companion code"
    },
    (2, 4): {
        "title": "AI Engineering — Prompting Chapter",
        "description": "Continue Chip Huyen's book, studying the in-depth prompting chapter. Analyze prompt optimization, token budgets, and prompt compression.",
        "resources": [{"label": "AI Engineering Book", "url": "https://huyenchip.com/"}],
        "deliverable": "Summary of prompt engineering trade-offs and token optimization rules"
    },
    (2, 5): {
        "title": "Prompting Strategy Comparison",
        "description": "Write a short benchmark comparison comparing few-shot vs. chain-of-thought (CoT) vs. structured-output prompting on a non-trivial classification/extraction task.",
        "resources": [{"label": "Chain-of-Thought Paper (Wei et al.)", "url": "https://arxiv.org/abs/2201.11903"}],
        "deliverable": "Markdown report with sample prompts, outputs, and cost/accuracy comparison"
    },

    # Week 3 — Anthropic Academy
    (3, 1): {
        "title": "Claude 101",
        "description": "Sign up at anthropic.skilljar.com; complete the 'Claude 101' foundational course covering model capabilities, system prompts, and context windows.",
        "resources": [{"label": "Anthropic Educational Academy", "url": "https://anthropic.skilljar.com"}],
        "deliverable": "Course completion badge & initial Anthropic SDK script"
    },
    (3, 2): {
        "title": "Building with the Claude API — Auth & Requests",
        "description": "Work through 'Building with the Claude API' modules on authentication, client setup, basic message requests, and parameter tuning (temperature, max_tokens).",
        "resources": [{"label": "Anthropic API Quickstart", "url": "https://docs.anthropic.com/en/api/getting-started"}],
        "deliverable": "Python script with robust Anthropic client initialization and request wrappers"
    },
    (3, 3): {
        "title": "Streaming & Tool Use Modules",
        "description": "Complete the streaming responses and tool use (function calling) modules in Anthropic Academy. Implement real-time SSE token streaming.",
        "resources": [{"label": "Claude Tool Use Guide", "url": "https://docs.anthropic.com/en/docs/tool-use"}],
        "deliverable": "Streaming terminal chat client using Claude API with JSON schema tool definitions"
    },
    (3, 4): {
        "title": "Prompt Caching & Error Handling",
        "description": "Master Claude's Prompt Caching to slash latency and cost by up to 90%. Implement exponential backoff, rate limit handling, and API error categorization.",
        "resources": [{"label": "Prompt Caching Documentation", "url": "https://docs.anthropic.com/en/docs/prompt-caching"}],
        "deliverable": "Cached prompt pipeline with verified cache_read_input_tokens reduction"
    },
    (3, 5): {
        "title": "Production Deployment Patterns",
        "description": "Study production deployment patterns module: secret management, latency optimizations, batch API requests, and monitoring token consumption.",
        "resources": [{"label": "Anthropic Production Best Practices", "url": "https://docs.anthropic.com/en/docs/production-readiness"}],
        "deliverable": "Production-ready Claude client class with telemetry logging"
    },

    # Week 4 — First real API app (Project #0)
    (4, 1): {
        "title": "Finish Anthropic Academy Certification",
        "description": "Finish any remaining modules in 'Building with the Claude API' and review the consolidated architecture patterns.",
        "resources": [{"label": "Anthropic Interactive Tutorials", "url": "https://github.com/anthropics/anthropic-sdk-python"}],
        "deliverable": "Complete course certification and cheat-sheet summary"
    },
    (4, 2): {
        "title": "Design Project #0: CLI Chatbot with Memory",
        "description": "Design Project #0 (CLI chatbot with structured conversation memory). Sketch the memory buffer architecture and message trimming strategy.",
        "resources": [{"label": "System Architecture Sketching", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Architecture diagram and technical specification document"
    },
    (4, 3): {
        "title": "Build Core Chat Loop & Memory Buffer",
        "description": "Build the core conversational loop in Python. Implement sliding-window memory with token counting to maintain context without overflowing limits.",
        "resources": [{"label": "Tiktoken / Anthropic Tokenizer", "url": "https://github.com/openai/tiktoken"}],
        "deliverable": "Working stateful chat engine with memory persistence across sessions"
    },
    (4, 4): {
        "title": "Add Error Handling & Retry Logic",
        "description": "Add graceful connection loss handling, network retry backoff, graceful interruption (Ctrl+C), and formatted markdown terminal output with Rich.",
        "resources": [{"label": "Rich Terminal Library", "url": "https://rich.readthedocs.io/"}],
        "deliverable": "Beautiful terminal UI with streaming markdown and resilient exception handling"
    },
    (4, 5): {
        "title": "Project #0 Done — Polish, README & Commit",
        "description": "Polish the CLI chatbot, write comprehensive README with setup instructions and architecture breakdown, and tag release. Project #0 completed!",
        "resources": [{"label": "Project #0 GitHub Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "⭐ Project #0 ('CLI AI Assistant with Context Memory') published to GitHub"
    },

    # Week 5 — Embeddings + vector databases
    (5, 1): {
        "title": "Understanding & Applying Text Embeddings",
        "description": "Complete DeepLearning.AI's 'Understanding and Applying Text Embeddings'. Study vector spaces, cosine similarity, and semantic search fundamentals.",
        "resources": [{"label": "DeepLearning.AI Text Embeddings", "url": "https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/"}],
        "deliverable": "Cosine similarity calculator and embedding visualization script"
    },
    (5, 2): {
        "title": "Vector Databases: From Embeddings to Applications (Part 1)",
        "description": "Work through the first half of DeepLearning.AI's 'Vector Databases: from Embeddings to Applications' covering ANN algorithms (HNSW, IVF).",
        "resources": [{"label": "DeepLearning.AI Vector Databases", "url": "https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/"}],
        "deliverable": "Notes on HNSW graph indexing vs Flat search complexity"
    },
    (5, 3): {
        "title": "Vector Databases (Part 2)",
        "description": "Finish the vector database course. Practice filtered search, metadata payload indexing, and multi-tenant namespace isolation.",
        "resources": [{"label": "Qdrant Vector Database Docs", "url": "https://qdrant.tech/documentation/"}],
        "deliverable": "Course completion exercises and benchmark comparisons"
    },
    (5, 4): {
        "title": "Set up Local Qdrant / Chroma",
        "description": "Install and run Qdrant or Chroma locally via Docker or in-memory Python client. Index a small test dataset and execute top-k semantic similarity queries.",
        "resources": [{"label": "Chroma DB Quickstart", "url": "https://docs.trychroma.com/"}],
        "deliverable": "Local vector store instance running with automated collection initialization"
    },
    (5, 5): {
        "title": "Index Personal Knowledge Corpus",
        "description": "Chunk, embed, and index a real personal corpus — your résumé, cover letters, and project READMEs. Validate chunk overlap and embedding consistency.",
        "resources": [{"label": "Chunking Strategies Guide", "url": "https://www.pinecone.io/learn/chunking-strategies/"}],
        "deliverable": "Fully indexed personal knowledge vector collection with metadata tags"
    },

    # Week 6 — RAG v1
    (6, 1): {
        "title": "LangChain / LlamaIndex: Chat with Your Data (Part 1)",
        "description": "Start DeepLearning.AI's 'LangChain: Chat with Your Data' / LlamaIndex quickstart. Study document loaders, text splitters, and vector store retrievers.",
        "resources": [{"label": "LangChain Chat with Data", "url": "https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/"}],
        "deliverable": "Document ingestion script with semantic sentence-splitting"
    },
    (6, 2): {
        "title": "LangChain / LlamaIndex (Part 2)",
        "description": "Finish the course. Master retrieval augmentation chains, question-answering with sources, and conversational retrieval with chat history.",
        "resources": [{"label": "LlamaIndex Documentation", "url": "https://docs.llamaindex.ai/"}],
        "deliverable": "End-to-end RAG chain combining query rewriting and context assembly"
    },
    (6, 3): {
        "title": "Scaffold RAG Pipeline v1",
        "description": "Scaffold a clean Python RAG architecture: query processing → similarity retrieval → prompt injection → grounded generation.",
        "resources": [{"label": "RAG Architecture Blueprint", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Modular RAG v1 pipeline with clean separation of retriever and generator"
    },
    (6, 4): {
        "title": "Connect Personal Career Corpus",
        "description": "Connect the RAG pipeline to the personal corpus indexed in Week 5. Tune prompt templates to cite source documents with exact line/section references.",
        "resources": [{"label": "Grounding and Citation Prompts", "url": "https://docs.anthropic.com"}],
        "deliverable": "Interactive Q&A assistant answering questions about Alireza's career and projects"
    },
    (6, 5): {
        "title": "Test RAG v1 & Document Failure Cases",
        "description": "Test with 10 challenging sample questions. Document failure cases: hallucinated details, missing context, and chunk boundary truncations.",
        "resources": [{"label": "RAG Failure Modes Analysis", "url": "https://arxiv.org/abs/2312.10997"}],
        "deliverable": "Evaluation log of 10 test queries with identified retrieval bottlenecks"
    },

    # Week 7 — RAG v2: hybrid search + reranking
    (7, 1): {
        "title": "Advanced Retrieval for AI (Part 1)",
        "description": "Start DeepLearning.AI's 'Advanced Retrieval for AI with Chroma'. Study query expansion, cross-encoder rerankers, and dense + sparse hybrid search.",
        "resources": [{"label": "DeepLearning.AI Advanced Retrieval", "url": "https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/"}],
        "deliverable": "Course notebook with cross-encoder re-ranking experiments"
    },
    (7, 2): {
        "title": "Advanced Retrieval for AI (Part 2)",
        "description": "Finish the advanced retrieval course. Learn Reciprocal Rank Fusion (RRF) and contextual compression techniques.",
        "resources": [{"label": "FlashRank / Cohere Rerank", "url": "https://github.com/PrithivirajDamodaran/FlashRank"}],
        "deliverable": "RRF fusion implementation script combining BM25 and vector scores"
    },
    (7, 3): {
        "title": "Implement Hybrid Retrieval (BM25 + Vector)",
        "description": "Add BM25 keyword search alongside vector embeddings (hybrid retrieval). Combine scores with rank fusion to handle exact keywords & acronyms.",
        "resources": [{"label": "Rank-BM25 Python Package", "url": "https://github.com/dorianbrown/rank_bm25"}],
        "deliverable": "Hybrid retriever returning balanced semantic and keyword search hits"
    },
    (7, 4): {
        "title": "Add FlashRank / Cohere Reranking Step",
        "description": "Integrate a neural re-ranking step (FlashRank for local or Cohere Rerank API). Filter top-25 candidate chunks down to top-5 high-relevance chunks.",
        "resources": [{"label": "Cohere Rerank Docs", "url": "https://docs.cohere.com/docs/reranking"}],
        "deliverable": "Re-ranking module integrated into retrieval pipeline with latency benchmarks"
    },
    (7, 5): {
        "title": "Benchmark RAG v1 vs. RAG v2",
        "description": "Run the 10 sample questions from Week 6 against RAG v2. Compare answer precision, citation accuracy, and hallucination reduction.",
        "resources": [{"label": "RAG v1 vs v2 Benchmark", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Side-by-side comparative evaluation sheet highlighting v2 improvements"
    },

    # Week 8 — Evaluation, finish Project #1
    (8, 1): {
        "title": "RAGAS Framework Setup",
        "description": "Study the RAGAS (Retrieval Augmented Generation Assessment) documentation. Install and configure the RAGAS Python evaluation suite.",
        "resources": [{"label": "RAGAS Documentation", "url": "https://docs.ragas.io/en/latest/"}],
        "deliverable": "RAGAS environment configured with automated evaluation metrics"
    },
    (8, 2): {
        "title": "Create 20-Pair Golden Q&A Test Set",
        "description": "Author a 20-pair golden ground-truth test dataset: question, ground-truth context, and expected answer covering edge cases and complex queries.",
        "resources": [{"label": "Synthetic Test Data Generation", "url": "https://docs.ragas.io/en/stable/concepts/test_data_generation/"}],
        "deliverable": "JSON golden dataset containing 20 curated query-answer validation pairs"
    },
    (8, 3): {
        "title": "Execute Faithfulness & Answer Relevance Scoring",
        "description": "Run automated RAGAS evaluation: measure context precision, context recall, faithfulness, and answer relevance across the test set.",
        "resources": [{"label": "RAGAS Metrics Guide", "url": "https://docs.ragas.io/en/latest/concepts/metrics/"}],
        "deliverable": "Evaluation report with numerical scores for Faithfulness and Relevance"
    },
    (8, 4): {
        "title": "Remediate Retrieval Weaknesses",
        "description": "Address weaknesses identified by RAGAS scores: tune chunk size/overlap, refine re-ranking thresholds, and enhance grounding prompt constraints.",
        "resources": [{"label": "Prompt Optimization for RAG", "url": "https://docs.anthropic.com"}],
        "deliverable": "Optimized RAG pipeline achieving >0.85 faithfulness score"
    },
    (8, 5): {
        "title": "Project #1 Done — RAG Knowledge Assistant",
        "description": "Write a comprehensive README showcasing architecture, hybrid retrieval, and RAGAS eval metrics. Project #1 ('RAG Knowledge Assistant') completed!",
        "resources": [{"label": "Project #1 GitHub Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "⭐ Project #1 ('RAG Knowledge Assistant') completed, documented, and pushed"
    },

    # Week 9 — Tool / function calling
    (9, 1): {
        "title": "Functions, Tools and Agents with LangChain (Part 1)",
        "description": "Complete the first half of DeepLearning.AI's 'Functions, Tools and Agents with LangChain'. Study OpenAI and Anthropic tool schema definitions.",
        "resources": [{"label": "DeepLearning.AI Tools and Agents", "url": "https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/"}],
        "deliverable": "Course notebook with basic tool definitions and schema generation"
    },
    (9, 2): {
        "title": "Functions, Tools and Agents (Part 2)",
        "description": "Finish the course. Build tool-calling loops that parse tool arguments, invoke Python functions safely, and return results to the LLM.",
        "resources": [{"label": "Anthropic Tool Calling Tutorial", "url": "https://docs.anthropic.com/en/docs/tool-use"}],
        "deliverable": "Robust function-calling dispatcher supporting multiple registered tools"
    },
    (9, 3): {
        "title": "Build Calculator & Weather Tools",
        "description": "Implement two concrete tools: a safe mathematical calculator tool (using AST parsing) and a real-time weather API integration tool.",
        "resources": [{"label": "Open-Meteo Free API", "url": "https://open-meteo.com/"}],
        "deliverable": "Validated Python tool modules with Pydantic argument schemas"
    },
    (9, 4): {
        "title": "Connect Vector DB as a Third Tool",
        "description": "Wrap the Week 5–8 RAG vector knowledge base as an agent tool (`query_career_knowledge`), allowing the LLM to decide dynamically when to retrieve context.",
        "resources": [{"label": "Tool as a Retriever Pattern", "url": "https://python.langchain.com/docs/how_to/tools_as_retrievers/"}],
        "deliverable": "Knowledge retrieval tool callable by LLM agent with structured search args"
    },
    (9, 5): {
        "title": "Test Multi-Tool Agent Loop",
        "description": "Test all three tools together with complex multi-intent questions requiring math, weather, and career facts in single conversations. Commit codebase.",
        "resources": [{"label": "Multi-Tool Agent Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Interactive agent capable of multi-step tool routing and synthesis"
    },

    # Week 10 — LangGraph
    (10, 1): {
        "title": "AI Agents in LangGraph (Part 1)",
        "description": "Start DeepLearning.AI's 'AI Agents in LangGraph' taught by Harrison Chase and Rotem Weiss. Understand StateGraph, nodes, and edges.",
        "resources": [{"label": "DeepLearning.AI LangGraph Course", "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/"}],
        "deliverable": "First minimal LangGraph state graph executing conditional branching"
    },
    (10, 2): {
        "title": "AI Agents in LangGraph (Part 2)",
        "description": "Finish the LangGraph course. Master cyclic graphs, memory persistence, time-travel debugging, and state schema inheritance.",
        "resources": [{"label": "LangGraph Official Docs", "url": "https://langchain-ai.github.io/langgraph/"}],
        "deliverable": "Stateful agent graph with persistent checkpointer backend"
    },
    (10, 3): {
        "title": "LangChain Academy: Graphs & Routers",
        "description": "Complete the LangChain Academy LangGraph module on dynamic routing, subgraphs, and map-reduce agentic workflows.",
        "resources": [{"label": "LangChain Academy", "url": "https://academy.langchain.com/"}],
        "deliverable": "Router subgraph directing tasks between specialized worker nodes"
    },
    (10, 4): {
        "title": "Rebuild Multi-Tool Agent in LangGraph",
        "description": "Refactor the Week 9 multi-tool agent into a proper LangGraph state machine with explicit message state, agent node, and tool execution node.",
        "resources": [{"label": "LangGraph ToolNode Pattern", "url": "https://langchain-ai.github.io/langgraph/how-tos/tool-calling/"}],
        "deliverable": "LangGraph implementation of multi-tool assistant with clear visualization graph"
    },
    (10, 5): {
        "title": "Add Human-in-the-Loop Checkpoint Node",
        "description": "Add an interrupt/human-approval checkpoint node before executing destructive or high-cost tool actions. Verify state resumption.",
        "resources": [{"label": "LangGraph Human-in-the-Loop Guide", "url": "https://langchain-ai.github.io/langgraph/how-tos/human-in-the-loop/"}],
        "deliverable": "Interactive approval flow pausing graph execution until user approval"
    },

    # Week 11 — A second framework + MCP intro
    (11, 1): {
        "title": "Hugging Face Agents Course (Unit 1)",
        "description": "Start the Hugging Face Agents Course (huggingface.co/learn/agents-course). Study agent reasoning loops (ReAct, CodeAgents) and open-weight models.",
        "resources": [{"label": "Hugging Face Agents Course", "url": "https://huggingface.co/learn/agents-course"}],
        "deliverable": "Smolagents notebook running open-weights tool calling locally"
    },
    (11, 2): {
        "title": "Multi AI Agent Systems with CrewAI",
        "description": "Complete DeepLearning.AI's 'Multi AI Agent Systems with crewAI' or Hugging Face Unit 2. Learn role-playing agents, delegation, and sequential pipelines.",
        "resources": [{"label": "DeepLearning.AI CrewAI Course", "url": "https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/"}],
        "deliverable": "CrewAI 3-agent team (Researcher, Writer, Reviewer) producing collaborative output"
    },
    (11, 3): {
        "title": "Introduction to MCP (Part 1)",
        "description": "Start Anthropic Academy's 'Introduction to Model Context Protocol (MCP)'. Understand the MCP client-host-server architecture specification.",
        "resources": [{"label": "Model Context Protocol Docs", "url": "https://modelcontextprotocol.io"}],
        "deliverable": "Notes on MCP primitives: Tools, Resources, and Prompts"
    },
    (11, 4): {
        "title": "Introduction to MCP (Part 2)",
        "description": "Finish 'Introduction to MCP'. Inspect stdio and SSE transport protocols. Test connecting Claude Desktop to standard reference MCP servers.",
        "resources": [{"label": "Anthropic Academy MCP Course", "url": "https://anthropic.skilljar.com"}],
        "deliverable": "Claude Desktop configured with local filesystem and SQLite MCP servers"
    },
    (11, 5): {
        "title": "Weekly Synthesis & Architecture Review",
        "description": "Review and consolidate notes from Weeks 9–11. Compare LangGraph vs CrewAI vs Smolagents vs MCP. Prepare for Project #2 build.",
        "resources": [{"label": "Agent Frameworks Comparison Matrix", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Comparative technical matrix of leading AI agent orchestration frameworks"
    },

    # Week 12 — Project #2: multi-step agent
    (12, 1): {
        "title": "Design Project #2: Job-Search Intelligence Agent",
        "description": "Design an autonomous job-search agent: 1. Fetch live posting -> 2. Extract technical requirements -> 3. Compare with résumé -> 4. Draft personalized outreach note.",
        "resources": [{"label": "Project #2 Architecture Spec", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Detailed flowchart and LangGraph state schema for the job-search agent"
    },
    (12, 2): {
        "title": "Build Steps 1 & 2 (Fetch & Extract Requirements)",
        "description": "Build pipeline steps 1 & 2: async job scraping from Greenhouse/Lever/Ashby URLs, followed by structured extraction of requirements using Claude.",
        "resources": [{"label": "BeautifulSoup & Pydantic Extraction", "url": "https://docs.pydantic.dev"}],
        "deliverable": "Job posting parser outputting typed requirements and qualifications"
    },
    (12, 3): {
        "title": "Build Step 3 (Semantic Résumé Gap Analysis)",
        "description": "Build step 3: query the career vector database to evaluate candidate fit, highlighting matched strengths and missing technical gaps.",
        "resources": [{"label": "Semantic Gap Analysis Module", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Fit scoring module generating evidence-backed match analysis"
    },
    (12, 4): {
        "title": "Build Step 4 (Draft Outreach) & Wire into LangGraph",
        "description": "Build step 4: generate tailored outreach emails and cover notes addressing specific company needs. Wire all 4 stages into a robust LangGraph state machine.",
        "resources": [{"label": "LangGraph StateGraph Builder", "url": "https://langchain-ai.github.io/langgraph/"}],
        "deliverable": "End-to-end LangGraph job application assistant executing full 4-stage pipeline"
    },
    (12, 5): {
        "title": "Project #2 Done — Test, Document & Tag",
        "description": "Run comprehensive end-to-end tests across 5 real job postings. Write README with sample outputs and architecture diagrams. Project #2 completed!",
        "resources": [{"label": "Project #2 GitHub Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "⭐ Project #2 ('Autonomous Job-Search Agent') completed and published"
    },

    # Week 13 — Real evals
    (13, 1): {
        "title": "Langfuse Evaluation Guide",
        "description": "Study the Langfuse evaluation guide. Set up a free Langfuse cloud account (or local Docker self-host) and generate API keys.",
        "resources": [{"label": "Langfuse Documentation", "url": "https://langfuse.com/docs"}],
        "deliverable": "Langfuse project created and connected to local development environment"
    },
    (13, 2): {
        "title": "Connect Langfuse Tracing to Project #2",
        "description": "Instrument the LangGraph job-search agent with Langfuse callbacks. Verify automated capture of prompts, responses, latencies, and token counts.",
        "resources": [{"label": "Langfuse LangGraph Integration", "url": "https://langfuse.com/docs/integrations/langchain"}],
        "deliverable": "Live Langfuse dashboard populating spans and traces for agent runs"
    },
    (13, 3): {
        "title": "Design LLM-as-a-Judge Evaluation Pipeline",
        "description": "Design an LLM-as-a-Judge evaluation prompt to evaluate the requirements extraction step on criteria: completeness, accuracy, and hallucination absence.",
        "resources": [{"label": "LLM-as-a-Judge Research (Zheng et al.)", "url": "https://arxiv.org/abs/2306.05685"}],
        "deliverable": "Structured judge prompt with few-shot calibration rubrics"
    },
    (13, 4): {
        "title": "Build Golden Dataset for Extraction Step",
        "description": "Construct a golden validation dataset of 15 diverse job descriptions paired with expert-annotated required skills and qualifications.",
        "resources": [{"label": "Langfuse Datasets Guide", "url": "https://langfuse.com/docs/datasets"}],
        "deliverable": "Versioned Langfuse evaluation dataset with 15 ground-truth records"
    },
    (13, 5): {
        "title": "Run Eval Pipeline & Review Scores",
        "description": "Execute the evaluation pipeline against the golden dataset in Langfuse. Analyze precision scores, iterate on extractor prompt, and commit improvements.",
        "resources": [{"label": "Evaluation Run Results", "url": "https://langfuse.com"}],
        "deliverable": "Evaluation summary report demonstrating measurable prompt performance gains"
    },

    # Week 14 — Observability
    (14, 1): {
        "title": "Langfuse Tracing Deep-Dive",
        "description": "Study Langfuse tracing primitives: traces, spans, generations, and events. Implement custom span contexts for granular latency profiling.",
        "resources": [{"label": "Langfuse Tracing SDK", "url": "https://langfuse.com/docs/tracing"}],
        "deliverable": "Hierarchical tracing helper module for custom Python agent functions"
    },
    (14, 2): {
        "title": "Instrument All LLM Calls in Project #2",
        "description": "Ensure 100% of LLM calls across all agent stages carry model metadata, temperature parameters, and session tags for user tracking.",
        "resources": [{"label": "Observability Best Practices", "url": "https://langfuse.com/docs/analytics"}],
        "deliverable": "Fully instrumented agent pipeline with comprehensive session analytics"
    },
    (14, 3): {
        "title": "Instrument Tool Calls & Retrieval Spans",
        "description": "Instrument web scraper tool calls, vector DB similarity queries, and re-ranking steps as discrete child spans with duration logging.",
        "resources": [{"label": "Custom Span Monitoring", "url": "https://langfuse.com/docs/sdk/python/low-level-sdk"}],
        "deliverable": "Full trace tree reflecting both LLM generations and external I/O actions"
    },
    (14, 4): {
        "title": "Add Cost & Latency Dashboard Tracking",
        "description": "Configure token pricing models in Langfuse to track cost per run, cumulative expenditures, p50/p95 latency distributions, and error rates.",
        "resources": [{"label": "Cost Tracking Documentation", "url": "https://langfuse.com/docs/analytics/metrics"}],
        "deliverable": "Live analytics view tracking real-time API dollar spend and latency curves"
    },
    (14, 5): {
        "title": "End-to-End Trace Audit & Remediation",
        "description": "Review a complete agent trace end-to-end. Identify and resolve any bottlenecks (e.g. redundant queries, bloated system prompts). Commit changes.",
        "resources": [{"label": "Trace Audit Report", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Optimized codebase with 25% lower latency and verified clean traces"
    },

    # Week 15 — Deployment basics
    (15, 1): {
        "title": "Official FastAPI Tutorial (Part 1)",
        "description": "Work through the official FastAPI tutorial: path parameters, query parameters, request bodies with Pydantic, and automatic Swagger docs.",
        "resources": [{"label": "FastAPI Official Tutorial", "url": "https://fastapi.tiangolo.com/tutorial/"}],
        "deliverable": "Basic FastAPI server running with interactive /docs UI"
    },
    (15, 2): {
        "title": "Official FastAPI Tutorial (Part 2)",
        "description": "Finish the FastAPI tutorial: dependency injection, async route handlers, background tasks, CORS configuration, and exception handlers.",
        "resources": [{"label": "FastAPI Dependencies", "url": "https://fastapi.tiangolo.com/tutorial/dependencies/"}],
        "deliverable": "Production-patterned FastAPI structure with modular APIRouters"
    },
    (15, 3): {
        "title": "Wrap Project #1 in a FastAPI Service",
        "description": "Wrap Project #1 (RAG Knowledge Assistant) in clean FastAPI endpoints: `POST /api/chat`, `POST /api/query`, and `GET /api/health`.",
        "resources": [{"label": "Streaming Responses in FastAPI", "url": "https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse"}],
        "deliverable": "RESTful API service exposing RAG assistant with streaming SSE support"
    },
    (15, 4): {
        "title": "Docker Setup & Containerization",
        "description": "Review Docker fundamentals. Author an optimized multi-stage `Dockerfile` with slim Python base, non-root user, and cached pip layers.",
        "resources": [{"label": "Docker Python Best Practices", "url": "https://docs.docker.com/language/python/build-images/"}],
        "deliverable": "Production Dockerfile and .dockerignore for the FastAPI AI application"
    },
    (15, 5): {
        "title": "Build & Validate Local Container",
        "description": "Build the Docker image locally, run the container, test API endpoints via curl, and confirm memory and startup performance. Commit Dockerfile.",
        "resources": [{"label": "Container Testing Checklist", "url": "https://docs.docker.com"}],
        "deliverable": "Verified lightweight container image (<250MB) passing healthcheck endpoints"
    },

    # Week 16 — Guardrails, finish Project #3
    (16, 1): {
        "title": "Prompt Injection Defense & Input Validation",
        "description": "Study prompt injection attack vectors (direct injection, indirect injection). Implement strict input length caps and delimiter sanitization.",
        "resources": [{"label": "OWASP Top 10 for LLMs", "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"}],
        "deliverable": "Input validation guardrail intercepting prompt injection payloads"
    },
    (16, 2): {
        "title": "Output Filtering & Content Safety",
        "description": "Add output filtering guardrails to prevent PII leakage, system prompt extraction, and unintended role assumptions in API responses.",
        "resources": [{"label": "Guardrails AI Documentation", "url": "https://www.guardrailsai.com/docs"}],
        "deliverable": "Output verification middleware scanning LLM outputs before client delivery"
    },
    (16, 3): {
        "title": "Implement Sliding-Window Rate Limiting",
        "description": "Add IP and API-key rate limiting (slowapi / Redis token-bucket) to protect backend endpoints from abuse and runaway costs.",
        "resources": [{"label": "Slowapi Rate Limiter", "url": "https://slowapi.readthedocs.io/"}],
        "deliverable": "Rate-limited API endpoints returning HTTP 429 upon threshold breach"
    },
    (16, 4): {
        "title": "Wire Langfuse Telemetry into Production API",
        "description": "Integrate the Week 13–14 Langfuse observability and evaluation hooks into the FastAPI application middleware.",
        "resources": [{"label": "Langfuse FastAPI Integration", "url": "https://langfuse.com"}],
        "deliverable": "Unified production service with automated tracing and guardrail metrics"
    },
    (16, 5): {
        "title": "Project #3 Done — Enterprise Production Service",
        "description": "Deploy containerized service to free-tier cloud host (e.g. Render / Railway), write API documentation. Project #3 completed!",
        "resources": [{"label": "Project #3 GitHub Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "⭐ Project #3 ('Production AI Assistant API with Guardrails') deployed and live"
    },

    # Week 17 — MCP server, part 1
    (17, 1): {
        "title": "MCP: Advanced Topics (Part 1)",
        "description": "Complete the first half of Anthropic Academy's 'MCP: Advanced Topics'. Learn dynamic resource templates, notifications, and sampling.",
        "resources": [{"label": "Anthropic Academy MCP Advanced", "url": "https://anthropic.skilljar.com"}],
        "deliverable": "Notes on advanced MCP server architectures and subscription protocols"
    },
    (17, 2): {
        "title": "MCP: Advanced Topics (Part 2)",
        "description": "Finish the advanced MCP course. Master bi-directional sampling, roots, security sandboxing, and enterprise client connections.",
        "resources": [{"label": "MCP Specification", "url": "https://spec.modelcontextprotocol.io"}],
        "deliverable": "Course completion certificate and reference MCP client script"
    },
    (17, 3): {
        "title": "Build Rich-Context AI Apps with MCP (Part 1)",
        "description": "Start DeepLearning.AI's 'MCP: Build Rich-Context AI Apps with Anthropic'. Study MCP server design for enterprise workflows.",
        "resources": [{"label": "DeepLearning.AI MCP Course", "url": "https://www.deeplearning.ai/courses/mcp-build-rich-context-ai-apps-with-anthropic"}],
        "deliverable": "Course implementation notebook with multi-resource MCP server"
    },
    (17, 4): {
        "title": "Build Rich-Context AI Apps with MCP (Part 2)",
        "description": "Finish the DeepLearning.AI MCP course. Build MCP servers exposing custom tools and live context to Claude Desktop and AI IDEs.",
        "resources": [{"label": "FastMCP Python SDK", "url": "https://github.com/jlowin/fastmcp"}],
        "deliverable": "Functional FastMCP server exposing system tools and dynamic resources"
    },
    (17, 5): {
        "title": "Design Custom Domain MCP Server",
        "description": "Design a bespoke MCP server exposing real domain tools (e.g. mobile app-store analytics API, GitHub CI/CD build inspector, or Flutter diagnostic engine).",
        "resources": [{"label": "Custom MCP Server Spec", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Architecture specification defining tools, schemas, and resource URIs"
    },

    # Week 18 — MCP server, part 2
    (18, 1): {
        "title": "Scaffold Custom MCP Server with FastMCP",
        "description": "Scaffold the server using FastMCP / official MCP Python SDK. Implement core tool primitives with strict Pydantic parameter schemas.",
        "resources": [{"label": "Model Context Protocol Python SDK", "url": "https://github.com/modelcontextprotocol/python-sdk"}],
        "deliverable": "Clean server codebase with registered tools and stdio transport entrypoint"
    },
    (18, 2): {
        "title": "Implement Core Tool Business Logic",
        "description": "Implement the core tool business logic: async external API querying, response transformation, error formatting, and resource subscriptions.",
        "resources": [{"label": "Async Python Tool Logic", "url": "https://docs.python.org/3/library/asyncio.html"}],
        "deliverable": "Fully implemented MCP tools with unit tests for each action"
    },
    (18, 3): {
        "title": "Test with Claude Desktop & Cursor / Antigravity",
        "description": "Configure Claude Desktop, Cursor, and Antigravity IDE to connect to the custom MCP server. Verify interactive tool calls in live chat.",
        "resources": [{"label": "Claude Desktop MCP Configuration", "url": "https://docs.anthropic.com"}],
        "deliverable": "Verified live demonstration of Claude executing custom MCP tools"
    },
    (18, 4): {
        "title": "Handle Edge Cases, Rate Limits & Exceptions",
        "description": "Add defensive error handling: formatted MCP tool error messages, timeout safety, credential validation, and logging.",
        "resources": [{"label": "MCP Error Handling Best Practices", "url": "https://modelcontextprotocol.io"}],
        "deliverable": "Robust MCP server handling network timeouts and malformed parameters gracefully"
    },
    (18, 5): {
        "title": "Custom MCP Server Done — Package & Publish",
        "description": "Package the MCP server, write comprehensive installation and usage documentation in README, tag release. MCP Server completed!",
        "resources": [{"label": "MCP Server GitHub Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "⭐ Custom MCP Server published and open-sourced on GitHub"
    },

    # Week 19 — Cloud deployment
    (19, 1): {
        "title": "Select Cloud Target & Study Deployment Architecture",
        "description": "Select target cloud platform (GCP Cloud Run / AWS Lambda / Azure Container Apps). Study serverless container hosting, IAM, and scale-to-zero.",
        "resources": [{"label": "GCP Cloud Run Quickstart", "url": "https://cloud.google.com/run/docs/quickstarts"}],
        "deliverable": "Cloud architecture diagram with environment variable and secret topology"
    },
    (19, 2): {
        "title": "Set Up Cloud Account & CLI Tooling",
        "description": "Configure cloud provider CLI (`gcloud` / `aws`), authenticate credentials, and set up a dedicated project container registry (Artifact Registry).",
        "resources": [{"label": "GCP Artifact Registry Docs", "url": "https://cloud.google.com/artifact-registry/docs"}],
        "deliverable": "Authenticated CLI toolchain configured for automated image push"
    },
    (19, 3): {
        "title": "Deploy Project #3 to Cloud Run / Lambda",
        "description": "Build container image, push to cloud registry, and deploy to Cloud Run / Container Apps with HTTPS, custom domain, and auto-scaling configured.",
        "resources": [{"label": "Cloud Run Deploy Guide", "url": "https://cloud.google.com/run/docs/deploying"}],
        "deliverable": "Live production service running on managed serverless container cloud"
    },
    (19, 4): {
        "title": "Verify Public SSL Endpoint & Latency",
        "description": "Verify public endpoint health, test SSL certificate, measure cold-start vs warm latency, and confirm CORS compatibility with web frontends.",
        "resources": [{"label": "HTTP Load Benchmarking", "url": "https://github.com/rakyll/hey"}],
        "deliverable": "Performance benchmark report verifying public URL uptime and SLA"
    },
    (19, 5): {
        "title": "Document Cloud Deployment Pipeline",
        "description": "Document complete cloud provisioning and deployment workflow with step-by-step shell scripts in repo README. Commit deployment files.",
        "resources": [{"label": "Cloud Deployment Guide", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Reproducible cloud deployment scripts and infrastructure documentation"
    },

    # Week 20 — Scope the capstone (Project #4)
    (20, 1): {
        "title": "Capstone Ideation: RAG + Agents + MCP + Evals",
        "description": "Brainstorm ambitious capstone project ideas combining Advanced RAG + LangGraph multi-agent orchestration + MCP tools + Langfuse evals + Cloud deployment.",
        "resources": [{"label": "Capstone Project Brainstorming", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "3 distinct capstone concept pitches with pros/cons and complexity analysis"
    },
    (20, 2): {
        "title": "Select Concept & Author System Architecture Diagram",
        "description": "Select the final capstone concept. Author a detailed end-to-end system architecture diagram specifying data flow, agents, tools, and UI.",
        "resources": [{"label": "Mermaid.js Architecture Diagram", "url": "https://mermaid.js.org"}],
        "deliverable": "Comprehensive system architecture diagram and component interaction map"
    },
    (20, 3): {
        "title": "Author Detailed Day-by-Day Capstone Roadmap",
        "description": "Draft concrete modular build milestones and day-by-day task breakdown for Weeks 21 & 22 build phase. Define acceptance criteria.",
        "resources": [{"label": "Capstone Technical Spec", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Written technical roadmap with interface definitions and deliverables"
    },
    (20, 4): {
        "title": "Initialize Capstone Repository & Project Skeleton",
        "description": "Initialize dedicated GitHub repository with mono-repo structure: `/backend`, `/frontend`, `/evals`, `/mcp`, and configure pre-commit hooks.",
        "resources": [{"label": "Clean Architecture Project Template", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Scaffolded repository with dependencies, linting, and CI workflow"
    },
    (20, 5): {
        "title": "Commence First Capstone Build Step",
        "description": "Implement core domain data models, configuration loader, and database connectivity. First foundational commit of the capstone project.",
        "resources": [{"label": "Pydantic Settings Management", "url": "https://docs.pydantic.dev/latest/concepts/pydantic_settings/"}],
        "deliverable": "Working baseline domain layer with passing configuration tests"
    },

    # Week 21 — Capstone build, part 1
    (21, 1): {
        "title": "Build Capstone Hybrid Retrieval / RAG Engine",
        "description": "Build the advanced retrieval layer: contextual chunking, dense vector indexing, BM25 sparse index, and cross-encoder re-ranking pipeline.",
        "resources": [{"label": "Advanced RAG Pipeline", "url": "https://docs.llamaindex.ai"}],
        "deliverable": "High-accuracy retrieval engine returning grounded context with confidence scores"
    },
    (21, 2): {
        "title": "Build Multi-Agent LangGraph Orchestration Layer",
        "description": "Construct the core LangGraph state machine: supervisor router agent coordinating specialized worker agents with shared memory.",
        "resources": [{"label": "LangGraph Multi-Agent Architecture", "url": "https://langchain-ai.github.io/langgraph/concepts/multi_agent/"}],
        "deliverable": "Orchestrator graph coordinating multi-step planning and synthesis"
    },
    (21, 3): {
        "title": "Integrate Custom MCP Server into Capstone",
        "description": "Connect the custom MCP server built in Week 18 to the capstone agent graph as a primary external tool provider.",
        "resources": [{"label": "MCP Client-Server Bridge", "url": "https://modelcontextprotocol.io"}],
        "deliverable": "Agent successfully querying live external tools through MCP protocol"
    },
    (21, 4): {
        "title": "Wire Langfuse Automated Evaluation Suite",
        "description": "Integrate automated LLM-as-a-judge evaluation scoring into the capstone pipeline, assessing answer accuracy and tool selection correctness.",
        "resources": [{"label": "Continuous LLM Evaluation", "url": "https://langfuse.com"}],
        "deliverable": "Automated evaluation hooks logging quality metrics to Langfuse on each run"
    },
    (21, 5): {
        "title": "Wire Production Observability & Tracing",
        "description": "Implement complete distributed tracing, token cost accounting, and user feedback capture loops in the capstone backend.",
        "resources": [{"label": "Langfuse User Feedback Capture", "url": "https://langfuse.com/docs/scores"}],
        "deliverable": "Full observability dashboard capturing live agent execution telemetry"
    },

    # Week 22 — Capstone build, part 2
    (22, 1): {
        "title": "End-to-End System Integration Testing",
        "description": "Execute comprehensive end-to-end integration tests covering complex multi-turn workflows, tool failures, and edge-case inputs.",
        "resources": [{"label": "Pytest Asyncio Testing", "url": "https://pytest-asyncio.readthedocs.io/"}],
        "deliverable": "Comprehensive integration test suite with >80% code coverage"
    },
    (22, 2): {
        "title": "Remediate Bugs & Polish Output Quality",
        "description": "Address integration edge cases: optimize prompt reasoning instructions, tune tool retry parameters, and polish response formatting.",
        "resources": [{"label": "Prompt Optimization Loop", "url": "https://docs.anthropic.com"}],
        "deliverable": "Rock-solid agent pipeline generating crisp, formatted, cited responses"
    },
    (22, 3): {
        "title": "Deploy Capstone to Production Cloud",
        "description": "Deploy capstone containerized backend and interactive web interface to production cloud infrastructure with HTTPS and telemetry enabled.",
        "resources": [{"label": "Serverless Cloud Deployment", "url": "https://cloud.google.com/run"}],
        "deliverable": "Live public URL of the complete deployed capstone AI application"
    },
    (22, 4): {
        "title": "Author Technical README & Architecture Diagram",
        "description": "Draft comprehensive technical documentation: high-res architecture diagrams, setup guide, eval benchmarks, and API documentation.",
        "resources": [{"label": "Technical Documentation Standards", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Polished README with demo GIF, architecture breakdown, and live link"
    },
    (22, 5): {
        "title": "Project #4 Done — Capstone Retrospective",
        "description": "Write a reflective 'How I built this / what I learned / what I'd change' technical post. Capstone Project #4 officially completed!",
        "resources": [{"label": "Capstone Project GitHub Repo", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "⭐ Project #4 ('Production Multi-Agent Capstone') completed & published"
    },

    # Week 23 — Résumé + LinkedIn repositioning
    (23, 1): {
        "title": "Rewrite Résumé Summary for Senior AI Engineer",
        "description": "Rewrite résumé headline & summary: Senior Mobile Engineer (9+ yrs) with deep Applied AI/LLM engineering expertise (LangGraph, RAG, MCP, Evals).",
        "resources": [{"label": "AI Engineer Résumé Guidelines", "url": "https://huyenchip.com"}],
        "deliverable": "Compelling, impact-driven résumé summary positioning mobile + AI strengths"
    },
    (23, 2): {
        "title": "Add 4 AI Projects to Résumé Experience",
        "description": "Update résumé experience with all four flagship AI projects, detailing exact technologies, architecture decisions, and evaluation metrics.",
        "resources": [{"label": "Alireza Nezami Résumé PDF", "url": "https://alirezanezami96.github.io/AlirezaNezami/"}],
        "deliverable": "Updated 2-page PDF résumé featuring production mobile and AI achievements"
    },
    (23, 3): {
        "title": "Update LinkedIn Headline & About Section",
        "description": "Update LinkedIn profile: headline, about section, and featured skills (LLM Application Development, LangGraph, RAG, MCP, Python, Kotlin).",
        "resources": [{"label": "Alireza Nezami LinkedIn", "url": "https://www.linkedin.com/in/alireza-nezami/"}],
        "deliverable": "Refreshed LinkedIn profile aligning with Senior Mobile + AI Engineering roles"
    },
    (23, 4): {
        "title": "Design GitHub Profile Showcase",
        "description": "Author a beautiful GitHub profile README pinning all 4 portfolio projects with architecture badges, live links, and evaluation highlights.",
        "resources": [{"label": "GitHub Profile README Guide", "url": "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile"}],
        "deliverable": "Polished GitHub profile landing page showcasing all portfolio repos"
    },
    (23, 5): {
        "title": "Peer Review & Iteration",
        "description": "Have one trusted mentor, peer, or technical recruiter review the updated résumé and profile materials. Incorporate feedback and finalize.",
        "resources": [{"label": "Resume Feedback Checklist", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Final polished portfolio package ready for global application pipeline"
    },

    # Week 24 — Interview prep
    (24, 1): {
        "title": "Analyze 5 Target Job Postings",
        "description": "Deeply analyze 3–5 real job postings for Senior AI / LLM / Mobile AI roles. Catalog recurring technical topics and required system design patterns.",
        "resources": [{"label": "AI Engineering Job Boards", "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs"}],
        "deliverable": "Catalog of 25 core interview questions and company-specific requirements"
    },
    (24, 2): {
        "title": "System Design Trade-offs for Projects #1 & #2",
        "description": "Write out detailed technical architecture decisions and trade-offs for Project #1 (RAG) and Project #2 (LangGraph Agent) in STAR format.",
        "resources": [{"label": "STAR Interview Method Guide", "url": "https://en.wikipedia.org/wiki/Situation,_task,_action_and_result"}],
        "deliverable": "Written interview study guide with architecture diagrams and failure analysis"
    },
    (24, 3): {
        "title": "System Design Trade-offs for Projects #3 & #4",
        "description": "Write out detailed technical architecture decisions, scalability limits, and security trade-offs for Project #3 (API) and Project #4 (Capstone).",
        "resources": [{"label": "LLM System Design Patterns", "url": "https://github.com/chiphuyen/aie-book"}],
        "deliverable": "Comprehensive system design interview cheat-sheet covering all 4 projects"
    },
    (24, 4): {
        "title": "Mock Technical Interview: Project #2 (Agent)",
        "description": "Conduct a mock technical interview (with an AI partner or peer) specifically grilling architecture, state management, and error handling of Project #2.",
        "resources": [{"label": "Mock Interview Framework", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Recorded interview transcript and self-critique notes on communication clarity"
    },
    (24, 5): {
        "title": "Mock System Design: Project #4 (Capstone)",
        "description": "Conduct an intensive mock system design interview on Project #4 (Capstone): scaling, latency minimization, cost boundaries, and eval metrics.",
        "resources": [{"label": "System Design Rubric", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Refined whiteboard explanation of enterprise multi-agent architectures"
    },

    # Week 25 — Apply
    (25, 1): {
        "title": "Batch 1 Applications Submission",
        "description": "Submit personalized applications to first batch of 5 top-tier companies offering visa sponsorship / remote senior engineering roles.",
        "resources": [{"label": "Visa Sponsorship Daily Jobs Tool", "url": "https://github.com/AlirezaNezami96/Visa-Sponsorship-Daily-Jobs"}],
        "deliverable": "5 submitted applications logged in job tracking spreadsheet"
    },
    (25, 2): {
        "title": "Batch 2 Applications & Outreach",
        "description": "Submit Batch 2 applications; send direct personalized connection notes to engineering managers and technical recruiters on LinkedIn.",
        "resources": [{"label": "Direct Outreach Templates", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "5 additional applications submitted and 5 personalized recruiter messages sent"
    },
    (25, 3): {
        "title": "Follow-Up & Pipeline Maintenance",
        "description": "Follow up on any applications and outreach messages sent 7+ days ago with polite, value-adding updates showcasing latest project evals.",
        "resources": [{"label": "Pipeline Tracking Sheet", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Application tracker updated with response rates and interview dates"
    },
    (25, 4): {
        "title": "Batch 3 Applications Submission",
        "description": "Submit Batch 3 applications targeting high-growth AI startups and established tech scale-ups building agentic platforms.",
        "resources": [{"label": "Hiring Thread & Job Portals", "url": "https://news.ycombinator.com"}],
        "deliverable": "5 additional tailored applications submitted with project links"
    },
    (25, 5): {
        "title": "Weekly Application Retro & Strategy Tuning",
        "description": "Review the week's response metrics: identify what messaging resonates best with hiring managers, and adjust résumé highlights accordingly.",
        "resources": [{"label": "Application Funnel Metrics", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Weekly retrospective notes with strategic resume and portfolio tweaks"
    },

    # Week 26 — Apply & close out
    (26, 1): {
        "title": "Continue Active Application Submissions",
        "description": "Continue steady application outreach, tailoring cover notes to specific company tech stacks (e.g. Claude tool calling, LangGraph, vector search).",
        "resources": [{"label": "Application Tracker", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Daily application submissions logged with status notes"
    },
    (26, 2): {
        "title": "Project Enhancements from Interview Feedback",
        "description": "Incorporate any technical feedback or challenging interview questions back into the project codebases (e.g. adding additional eval metrics).",
        "resources": [{"label": "Continuous Code Improvement", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Codebase commits addressing real interview technical prompts"
    },
    (26, 3): {
        "title": "Active Interviewing & Take-Home Execution",
        "description": "Execute active interview rounds, technical coding screens, and take-home engineering assignments with senior-level polish.",
        "resources": [{"label": "Technical Screen Best Practices", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Completed technical screen solutions and follow-up debriefs"
    },
    (26, 4): {
        "title": "Pipeline Expansion & Offer Evaluation",
        "description": "Continue application momentum, evaluate incoming opportunities, and conduct reverse-interviewing on engineering culture and roadmap.",
        "resources": [{"label": "Offer Evaluation Matrix", "url": "https://github.com/AlirezaNezami96"}],
        "deliverable": "Comparative offer and opportunity evaluation spreadsheet"
    },
    (26, 5): {
        "title": "6-Month Retrospective & Roadmap Complete",
        "description": "Write a comprehensive 6-month retrospective: lessons learned, key architectural insights, and advice for the journey ahead. Roadmap complete!",
        "resources": [{"label": "Alireza Nezami AI Engineering Journey", "url": "https://alirezanezami96.github.io/AlirezaNezami/journey.html"}],
        "deliverable": "🎉 6-Month Applied AI Engineering Roadmap officially completed!"
    }
}

def generate_all_182_days():
    """Generates the full 182 days (26 weeks x 7 days) adhering to the date computation rule."""
    days = []
    
    for week_num in range(1, 27):
        for day_in_week in range(1, 8):
            offset_days = (week_num - 1) * 7 + (day_in_week - 1)
            day_date = PROGRAM_START_DATE + timedelta(days=offset_days)
            day_type = 'study' if day_in_week <= 5 else 'rest'
            day_id = (week_num - 1) * 7 + day_in_week
            
            if day_type == 'study':
                item = STUDY_CURRICULUM.get((week_num, day_in_week), {
                    "title": f"Study Session {week_num}.{day_in_week}",
                    "description": "Applied AI Engineering deep-dive study session.",
                    "resources": [],
                    "deliverable": None
                })
                title = item["title"]
                description = item["description"]
                resources = item.get("resources", [])
                deliverable = item.get("deliverable")
            else:
                title = "Rest & buffer"
                description = "Catch up on anything from this week, or take the day off — both are the plan working correctly."
                resources = []
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
    """Generates the SQL migration script for Supabase."""
    lines = [
        "-- ═══════════════════════════════════════════════════════════════════",
        "--  Supabase Schema & Seed for 'The Path' (6-Month AI Learning Tracker)",
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
