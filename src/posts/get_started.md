## 🚀 Quick Start (Self-Deployment)

```bash
git clone https://github.com/soz223/UniBrainAssistant.git
cd UniBrainAssistant
python3 -m venv .venv && source .venv/bin/activate      # optional
pip install -r requirements.txt
export OPENAI_API_KEY="sk-..."                         # for LLM chat & RAG
streamlit run app.py
````

Open [http://localhost:8501](http://localhost:8501/) → upload a NIfTI (or DICOM) → pick processing steps → **Run**.
Then interact with your scan:

```
❯ skip segmentation             # run without the Segmentation step
❯ what does a high dice score mean?
❯ show only the network analysis stage
```

---

## 🔑 Environment Variables

| Var              | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| `OPENAI_API_KEY` | Required for chat, command-parser LLM, and RAG          |
| `IMG_SIZE`       | (optional) override default 96³ voxel input size        |
| `ATLAS`          | (optional) specify brain atlas (e.g., “Desikan”, “AAL”) |

---

## 📦 Core Dependencies

* **UI & Workflow:** `streamlit ≥1.32`
* **Imaging & ML:** `torch`, `numpy`, `nibabel`, `SimpleITK`, `plotly`, `networkx`
* **LLM & RAG:** `langchain`, `langchain-openai`, `faiss-cpu`, `openai (≥1.0)`

See `requirements.txt` for exact version pins.

---

## 🤖 Command Grammar (for reference)

| Intent           | Examples (case-insensitive)                                        |
| ---------------- | ------------------------------------------------------------------ |
| **Skip step**    | `skip segmentation`, `no parcellation`, `without network`          |
| **Enable step**  | `enable analysis`, `turn on registration`, `enable classification` |
| **Reset**        | `reset steps`, `reset pipeline`                                    |
| **General chat** | anything else → routed to the UniBrain chat assistant              |

**Processing flow:**

1. **Regex fast-path**
2. if unresolved → **GPT-4o-mini** (`CMD_SYS_PROMPT`) → JSON command

---


---

## 🌐 Try the Demo Website

1. Visit the live demo at [Ongoing Website](https://unibrain-assistant.demo)
2. Enter your `OPENAI_API_KEY` in the sidebar API key field
3. Upload a `.nii` or `.nii.gz` file
4. Use the sidebar menu to enable/disable steps, then click **Run**
5. Chat with your data right in the browser:

   ```
   ❯ skip segmentation and do the whole preprocessing
   ❯ how does parcellation work?
   ❯ 
   ```
