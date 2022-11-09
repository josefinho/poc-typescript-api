## About
A PoC (Proof of Concept) meant to learn typeORM and other thigs related to API development using
typescript. For this project, I'm going to use **Docker** with a PostreSQL image and DBeaver for
graphical management of databases.


#### Functional Requirements

- [ ] Candidates Module
 - [-] POST /cadidates - Creates one candidate. Should not be possible to candidates have same e-mail adress.
 - [X] GET /candidates/{id} - Get candidate by id
 - [ ] PUT /candidates/{id} - Update candidate by id
 - [X] DELETE /candidates/{id} - Delete candidate by id
 - [ ] Registration and Login with JWT Authentication
 - [X] GET /candidates/{id}/jobs/{id} - Apply to a job. One candidate shouldn't apply more than one time to the same job.

- [ ] Jobs Module
 - [X] POST /jobs - Creates one Job
 - [ ] GET /jobs/{id} - Get job by id
 - [ ] PUT /jobs/{id} - Update job by id
 - [ ] DELETE /jobs/{id} - Delete job by id
 - [ ] POST /jobs/{id}/candidates/{id} - apply to a job
 - [ ] GET /jobs?str={str} - Get jobs in which 'title' or 'description' matches the string in query string
 - [ ] Filter by companies
 - [ ] GET /jobs/{id}/candidates - Get candidates that applied to a job

**BR 1:** On jobs creation, each one must be associated to an already registered company.

- [ ] Companies CRUD
 - [ ] POST
 - [ ] GET
 - [ ] PUT
 - [ ] DELETE
 

#### Other possibles Requirements

- Candidate receives an e-mail when his application is accepted or denied