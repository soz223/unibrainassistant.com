```markdown
## ✨ Key Features

| UI / UX                         | Details                                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------------------- |
| **Drag & Drop NIfTI**          | Upload `.nii` / `.nii.gz` files via drag-&-drop—stored under `uploads/<8-char-id>/` for easy cleanup. |
| **Smart Reruns**               | Uploaded data persists across Streamlit reruns—viewers and cards never vanish on refresh.     |
| **Collapsible Output Cards**   | Keep your workspace tidy—expand only the results you need.                                     |
| **2D ↔ 3D Switch**             | Toggle between a fast slice-slider or a Plotly volume render (with quality slider & colour map). |
| **Adjacency Exploration**      | Inspect connectivity via heat-map or interactive network graph (edge-density slider).          |
| **Download Everywhere**        | Export NIfTI (`.nii.gz`) or raw PyTorch tensors (`.pt`) at each stage.                         |
| **Sidebar “⚙️ Pipeline steps”** | Tick/untick Extraction, Registration, Parcellation, Network Analysis, etc., before running.   |
| **Natural-Language Controller**| Commands like `skip segmentation`, `reset steps`, `enable classification`.                     |
| **Chat Assistant**             | GPT-4o-mini by default—answers neuroscience queries via RAG and can invoke `run_unibrain_inference`. |

---

## 🏗️ Project Layout

```

UniBrainAssistant/
├─ app.py                      ← Streamlit entrypoint (self-contained)
├─ assets/
│  ├─ tpl\_img.npy              ← template volume
│  ├─ tpl\_gm.npy               ← template gray-matter mask
│  └─ tpl\_aal.npy              ← template AAL labels
├─ model.py                    ← UniBrain graph-neural network module
├─ prompts/
│  └─ unibrain\_system\_prompt.md
├─ unibrain.pdf                ← paper for RAG retrieval
└─ extra\_knowledge.txt         ← supplementary text corpus for RAG

```

---

## 🔬 Method Structure

<p align="center">
  <img src="./images/unibrainstructure.png" alt="End-to-end processing pipeline" width="100%"/>
</p>

> **No UniBrain weights?**  
> If `assets/unibrain.pth` is missing, the app loads a dummy stub so you can still explore the UI.
```
