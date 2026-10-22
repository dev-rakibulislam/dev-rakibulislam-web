export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type ContactSubmissionResult =
  | { ok: true; message: string }
  | { ok: false; error: string };
