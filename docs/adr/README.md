# Architecture Decision Records (ADRs)

Architectural decisions are choices made by a developer or (more typically) an engineering/design team regarding specific, *significant*[^1] design issues and requirements which have several possible options or solutions.

> An **architecture decision record** (ADR) is a document that captures an important architecture decision made along with its context and consequences.
>
> [Source](https://github.com/joelparkerhenderson/architecture-decision-record)

In other words, an *architectural design record* documents an architectural decision (a design choice) which is usually made as a collective with all stakeholders.

In the situation of a solo developer, these records can be used to keep track of a project's current and past design choices to maintain consistency.

**One ADR should map to exactly one architectural decision.**

## Definitions and Abbreviations

- **architecture decision** (AD): a software or project design choice that addresses a significant requirement
- **architecture decision log** (ADL): the collection of all ADRs for a particular project or organization; This directory is an ADL
- **architecturally-significant requirement** (ASR): a requirement that has a *measurable effect* on a system's architecture
- **architecture knowledge management** (AKM): a branch of knowledge management that refers to the systems and processes used to document, organize, and share knowledge about architectural issues

## General ADR Guidelines

### wRist

- *R*ationale: Explain the reasons for implementing the decision. This includes context (see below).
- *I*mmutable: Don't alter existing entries within an ADR. If something needs to be change, *amend* the ADR with new information or create a new ADR which supercedes the previous one. If you create a new, superceding ADR, be sure to note this in the original deprecated ADR.
- *S*pecific: One ADR -> one AD. A single ADR should not map to multiple ADs.
- *T*imestamped: Identify when each item within an ADR was created or updated.[^2]

I use the mnemonic "flick of the RIST" to remember what makes a good ADR. With the "flick of a wRIST" you should be able to locate a decision and understand its context.

### Content

A good ADR document should include:

- Explain the project's/org's situation and business priorities
- Include the rationale behind the decision and what factors were considered (i.e., skill of developers/designers, financial restrictions)
- Include pros and cons or cost/benefit analysis that ties directly to the project's needs and goals
- Explain outcomes of the decision, such as effects, outputs, follow ups, etc.,
- Include information about any subsequent or superceding ADRs and where to find them
- Include any review processes, if relevant. It's common to review ADRs one month later to decide if they are accomplishing what you had intended them to accomplish.

## CCDP-Specific ADR Guideliens

These are project-specific guidelines that this repo is following for ADR creation & management.

- Keep ADRs in the project repo under doc/decisions/adr-###.md
- Use Markdown for formatting language to keep the files lightweight and easy to read by non-technical stakeholders
- ADRs will be numbered sequentially and numbers will not be reused
- If an AD is reversed, the ADR stays in place but it will be marked as *"deprecated"* (see: [Status](#status)). Old decisions are still relevant so that we know why they are not in place anymore/didn't work out
- Use a simple format since we have a simple team made up primarily of non-technical stakeholders

## CCDP ADR Template

This section describes the ADR template used within this project/repo.

The document will have the following elements:

- [Title](#title-section)
- [Basic Info](#basic-info-section)
  - [Status](#status)
  - [Created](#time)
  - [Updated](#time)
  - [Stakeholders](#stakeholders)
- [Context and Problem Statement](#context-section)
- [Factors](#factors-section)
- [Options](#options-section)
- [Pros and Cons](#pros-and-cons-section)
- [Decision](#decision-section)
- [Outcome](#outcome-section)
- [Links](#links-section)

### Title section

The format of the title section will be "ADR ###: Title name". For example:
"ADR 001: Deployment on Cloudflare"

The document title should use simple, easy to remember noun phrases such as "Deployment on Cloudflare", "GitHub Actions for CI/CD", or "Keystatic for CMS".

### Basic Info section

This section includes the [Status](#status), time [Created](#time), time [Updated](#time) and [Stakeholders](#stakeholders).

#### Status

A decision have any one of the following statuses:

- **Proposed**: The decision has not yet been approved or implemented
- **Accepted**: The decision has been approved and implemented
- **Deprecated**: The decision has been superceded by another ADR. Include a reference to the replacement next to this status as well as in the context.
- **Rejected**: The decision wasn't approved or implemented. DO NOT use this for old decisions that were formerly implemented, use "Deprecated" for those situations.

#### Time

This is made up of two fields ("Created" and "Updated") will have a timestamp showing when the decision was created and when it was last updated using the format YYYY-MM-DD.

#### Stakeholders

This field will list out all the stakeholders who contributed to the decision.

### Context section

This section clearly state the problem being addressed and the solution being considered. It should describe facts only, not values. Can be posed as a question.

### Factors section

This is an optional section that can include the business/project's priorities, needs, and goals as well as factors such as the skillset of the developers and designers, financial restrictions, etc.

### Options section

This section will list out all the options considered using an unorderd list.

### Pros and Cons section

This section will list out all the options from the [Options](#options-section) section and will include pros and cons for each option.

### Decision section

This section describes the project's response to the facts provided in the "Context" section and uses an active voice.

For example:
"We will utilize Cloudflare to deploy this project due to {factor-one} and {factor-two}."

### Outcome section

This section explains the resulting context after applying the decision. List all consequences here, positive *and* negative, using an unordered list.

### Links section

This section will include all references and links to relevant information and source material.

## Conclusion

This is a living document.

*For more detailed info on ADRs and architecture knowledge management, visit [@joelparkerhenderson](https://github.com/joelparkerhenderson)'s awesome[architecture-decision-record](https://github.com/joelparkerhenderson/architecture-decision-record) repository. Most of the content in this document was sourced from that repo.*

[^1]: To be *significant*, a decision must affect the structure, non-functional characteristics, dependencies, interfaces, or construction techniques. See also *architectually-significant requirement (ASR)* under [Definitions and Abbreviations](#definitions-and-abbreviations)
