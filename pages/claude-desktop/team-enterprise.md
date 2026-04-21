# Team & Enterprise Controls

As AI becomes mission-critical, companies need control over how their data is used. Claude Team and Enterprise plans provide the security, administrative control, and collaborative features required by large organizations.

## Claude Team vs. Enterprise

| Feature | Pro (Individual) | Team Plan | Enterprise Plan |
| :--- | :--- | :--- | :--- |
| **Context Window** | 200k | 200k | 500k+ |
| **Admin Console** | No | Yes | Advanced |
| **SSO (Single Sign-On)**| No | No | Yes (SAML, Okta) |
| **Data Retention** | Standard | Configurable | Zero Retention Available |
| **SOC2 Compliant** | Yes | Yes | Yes + HIPAA |

## Key Enterprise Features

### 1. Claude Cowork (Team Workspaces)
As covered in the Projects lesson, Cowork allows teams to share Projects. In the Enterprise plan, admins can set granular permissions:
- **Read-Only:** Users can chat with the Project but cannot alter the knowledge base.
- **Contributors:** Users can upload new documents to the shared brain.

### 2. Zero Data Retention
For highly regulated industries (Finance, Healthcare, Defense), Anthropic offers a zero-retention policy on Enterprise plans. This guarantees that:
1. Your prompts and data are **never** used to train Anthropic's future models.
2. Your chat data is instantly deleted after the session ends, leaving no trace on Anthropic's servers.

### 3. The Admin Console
IT administrators have a centralized dashboard to manage the AI deployment:
- **Usage Analytics:** See which teams are getting the most value out of the AI and monitor token consumption.
- **Seat Management:** Easily provision and de-provision user licenses via SCIM provisioning.
- **Audit Logs:** Track high-level usage patterns for compliance purposes.

## Security Best Practices for Teams

> **Expert Tip:** Even with Enterprise security, you should implement an internal "AI Acceptable Use Policy." Train your team on the difference between PII (Personally Identifiable Information), which should be anonymized, and general business data, which is safe to upload.

## Setting Up SSO

If you are an Enterprise Admin, setting up SSO ensures that when an employee leaves the company, their access to the corporate Claude environment is instantly revoked. This is done by integrating Anthropic with your Identity Provider (IdP) like Okta or Microsoft Entra ID.
