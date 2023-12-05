# Change Management and Doing Work

Here we discuss the common flows involved with creating and managing [units of work](../concepts.md#unit-of-work) and [change control](../concepts.md#change-control).

## Starting work

To start work for an existing issue:
```bash
sdlc work start -- issues=27
```

Where '27' is replaced by your particular issue ID (which, depending on the ticketing system in use, may or may not be a number)

To quickly create an issue and start work in one command (useful for small changes):
```bash
sdlc work start -- issueTitle='Describe the change to be made' issueOverview='Give context where necessary.' issueDeliverables="optionally list individual todos;;separate them with double ';'"
```

To quickly create and submit an issue in one command (useful for small issues where the changes have already been made locally):
```bash
sdlc work start -- issueTtile='Describe the change made' submit
```

Refer to the [`/work/start` user documentation](../work.md#_work_start) for general guidance on creating issues.