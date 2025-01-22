interface BasicFetch{
    method: string;
    headers?: {
      Authorization?: string;
    };
    body?: string;
}

export type {
    BasicFetch,
};
