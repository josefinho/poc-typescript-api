## About
A PoC (Proof of Concept) meant to learn typeORM and other thigs related to API development using
typescript. For this project, I'm going to use **Docker** with a PostreSQL image and DBeaver for
graphical management of databases.


### Specs

#### Planning:

- [X] Define ER model
- [ ] Define API routes
- [ ] Implement first using Data Mapper Patterns (TypeORM)
 - [ ] Refactor to Repository Pattern latter
- [ ] Implement error handling techniques
- [ ] Learn and implement migrations
- [ ] Unitary tests
- [ ] Separation of Functional Requirements in Modules

#### Functional Requirements

- [ ] Candidates CRUD
 - [X] POST
 - [ ] GET
 - [ ] PUT
 - [ ] DELETE
 - [ ] JWT Authentication
 - [ ] Candidate apply to a job

- [ ] jobs CRUD
 - [ ] POST
 - [ ] GET
 - [ ] PUT
 - [ ] DELETE
 - [ ] Filter by string/terms
 - [ ] Filter by companies

**BR 1:** On jobs creation, each one must be associated to an already registered company.

- [ ] job_candidates CRUD
 - [ ] POST
 - [ ] GET
 - [ ] PUT
 - [ ] DELETE
 
- [ ] Companies CRUD
 - [ ] POST
 - [ ] GET
 - [ ] PUT
 - [ ] DELETE
 
