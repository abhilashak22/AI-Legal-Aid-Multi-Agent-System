📊 AI Legal Aid — Multi-Agent Legal Intelligence Platform

An intelligent legal assistance web platform powered by IBM watsonx Orchestrate. The platform combines legal document analysis, statutory compliance checks, precedent search, and clear plain-speech explanations into an interactive visual dashboard.

🌟 Key Features & Requirements Alignment

Legal Information Retrieval (RAG): Uses RAG to extract and summarize statutory codes, acts, and constitutional protections from legal corpora.

Document Parsing & Analysis: Automatically scans agreements, contracts, and notices to highlight risky clauses, calculate legal risk scores, and spot liabilities.

Conversational Legal Assistant: Provides empathetic, easy-to-understand explanations of legal terms without jargon, complete with mandatory attorney disclaimers.

Specialized Multi-Agents: Executes functions across four core sub-agents:

📄 Contract Reviewer Agent: Calculates risk scores and flags critical terms.

⚖️ Compliance Checker Agent: Verifies adherence to statutory acts and labor codes.

📚 Q&A RAG Agent: Retrieves specific section numbers and statutory guidelines.

🏛️ Case Research Agent: Fetches relevant Supreme Court precedents and case law.

Interactive Dashboard Output: Delivers structured Markdown outputs featuring:

🛡️ Risk Scorecards (0–100 risk score with color-coded severity badges)

🔤 Legalese vs. Plain Speech Translation Tables

📚 Statutory Citations & Precedents Tracker

📋 Checkable "Next Steps" Action Roadmaps

✉️ Auto-Generated Communication Drafts

📁 Repository Structure

index.html — Web application UI with embedded IBM watsonx Web Chat integration and interactive dashboard preview.

ai_legal_aid_dashboard_behavior_prompt.txt — Complete system behavior prompt for configuring the agent in IBM watsonx.

yourproblemstatement.pdf — Project problem statement document.

yourprojectpresentation.pptx — Hackathon presentation slides.

demo_input_texts.md — Ready-to-use sample contract and student rights inputs for live testing.

🚀 Setup & Integration Instructions

Agent Configuration in IBM Cloud / watsonx:

Copy the contents of ai_legal_aid_dashboard_behavior_prompt.txt.

Paste it into the Behavior / System Instructions setting of your IBM watsonx Orchestrate agent.

Publish the agent.

Web Application Setup:

Open index.html in any web browser.

Ensure the wxOConfiguration script contains your active orchestrationID, hostURL, and agentId.

Click "Start Consultation" or click the widget to launch the embedded AI chat.

⚠️ Legal Disclaimer

AI Legal Aid provides automated document analysis and legal information for educational purposes only. It does not constitute formal legal representation and is not a substitute for professional legal advice from a licensed attorney.
