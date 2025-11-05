
# ✅ DevSecOps: CI/CD Pipeline with Security Integration

This project demonstrates how DevSecOps principles are applied by integrating security into a CI/CD pipeline using **GitHub Actions**. It covers:

✔ Continuous Integration (CI)  
✔ Continuous Deployment/Delivery (CD) *(optional)*  
✔ Static & Dynamic Security Scanning (DevSecOps)  

---

## 📁 Project Structure

```
devsecops-intro/
├── app/                 # Simple Node.js application
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── Dockerfile           # Optional containerization
└── .github/workflows/  # GitHub Actions pipelines
    ├── ci.yml           # Build, Test, Trivy SAST + Image Scan, Docker push
    ├── codeql.yml       # CodeQL SAST (Static Analysis)
    └── dast-zap.yml     # OWASP ZAP DAST (Dynamic Web Scan)
```

---

## ⚙️ What the Pipeline Does

| Stage          | Tool Used         | Purpose                                     |
|----------------|--------------------|---------------------------------------------|
| Build & Test   | GitHub Actions     | Install dependencies & run app test         |
| SAST (Code)    | **CodeQL**         | Scan JavaScript for code vulnerabilities    |
| SAST (Deps)    | **Trivy FS**       | Scan source & dependencies for CVEs         |
| Container Scan | **Trivy Image**    | Scan built Docker image (optional)          |
| DAST (Runtime) | **OWASP ZAP**      | Test running app for web vulnerabilities    |
| Deploy (Opt.)  | Docker + GHCR      | Push image to GitHub Container Registry     |

---

## 🚀 How to Run

### 1️⃣ Clone & install locally

```bash
git clone <your-repo-url>
cd devsecops-intro
npm install --prefix app
npm start --prefix app
```

Test:
```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

---

### 2️⃣ GitHub Actions Pipelines

| Workflow File       | Trigger              | What It Does |
|---------------------|-----------------------|--------------|
| `.github/workflows/ci.yml` | On push/PR to main       | Build, Test, Trivy Scan, Docker build/push |
| `.github/workflows/codeql.yml` | Push/PR & Weekly        | CodeQL static analysis (SAST)              |
| `.github/workflows/dast-zap.yml` | Manual + push to main  | Runs OWASP ZAP against live app            |

---

## 🔐 GitHub Secrets Required (Optional for Docker Push)

| Secret Name      | Purpose                            |
|------------------|-------------------------------------|
| `GHCR_USERNAME`  | Your GitHub username                |
| `GHCR_TOKEN`     | PAT (classic) with `write:packages` |

---

## 📸 Required Screenshots for Submission

✔ 1. Running app locally (`/` and `/health`)  
✔ 2. GitHub Actions → CI workflow successful run  
✔ 3. Security → Code Scanning Alerts (CodeQL + Trivy findings)  
✔ 4. OWASP ZAP run → Artifact `zap-report` visible  
✔ 5. (Optional) GitHub Packages → Docker image pushed to GHCR  

---

## ✅ Why This Is DevSecOps?

- **Shift Left Security** — CodeQL & Trivy scan during build, before deployment  
- **Shift Right Security** — OWASP ZAP scans the running application  
- **Automation** — No manual scanning; everything runs automatically on push  
- **Transparency** — All issues visible under GitHub Security Dashboard  
- **Continuous Feedback** — Developers get immediate alerts on vulnerabilities  

---

## 🌟 Next Enhancements (Optional)

- Enforce failure when critical vulnerabilities exist (`exit-code: '1'` in Trivy)  
- Add Slack / Teams notifications on pipeline failures  
- Integrate dependency review & secret scanning  
- Automate deployment to AWS / Azure / DigitalOcean server  

---

## 🧑‍💻 Author

DevSecOps CI/CD Assignment  
Built using: **Node.js · GitHub Actions · CodeQL · Trivy · OWASP ZAP · Docker**

---