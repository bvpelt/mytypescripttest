//
// Run jobs with generics
//
// Autocomplete support on job since this is of a generic type
//
type Job = {
    name: string,
    start: () => void,
    state: 'incomplete' | 'success' | 'failure'
};

type JobRun<J extends Job> = {
    job: J,
    state: 'queued' | 'running' | 'completed',
    onComplete: (cb: (job: J) => void) => void
};

type SendEmailJob = Job & {
    recipientEmail: string,
    subject: string
};

type PostCardJob = Job & {
    address: string,
    poststampValue: number,
    expectedDeliveryDays: number
};

function enqueueJob<T extends Job>(job: T): JobRun<T> {
    // queue logic
    job.start();
    return {
        job,
        state: 'queued',
        onComplete: (cb: (job: T) => void) => cb(job)
    };
};

const j: SendEmailJob = {
    recipientEmail: 'jane@doe.com',
    subject: 'hi there',
    name: 'send-email',
    start: () => null,
    state: 'incomplete' 
};

const run1 = enqueueJob(j);

run1.onComplete((job) => {
    console.log('job completed ', job.name, ' recipientEmail: ', job.recipientEmail);
});

const p: PostCardJob = {
    address: 'Laan van Westenenk 701 Apeldoorn',
    poststampValue: 1,
    expectedDeliveryDays: 3,
    name: 'send-postcard',
    start: () => null,
    state: 'incomplete' 
};

const run2 = enqueueJob(p);
run2.onComplete((job) => {
    console.log('job completed ', job.name, ' address:', job.address);
});

// const run3 = enqueueJob("do it"); now fails because "do it" is a string and does not implement Job requirements