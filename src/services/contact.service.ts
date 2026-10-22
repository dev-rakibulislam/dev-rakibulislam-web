import type { ContactMessage, ContactSubmissionResult } from "@/types/contact";

export interface ContactService {
  submit(message: ContactMessage): Promise<ContactSubmissionResult>;
}

/** Local placeholder for UI development; it does not send or store messages. */
export const mockContactService: ContactService = {
  async submit() {
    return {
      ok: true,
      message: "Mock submission complete. No message was sent or stored.",
    };
  },
};
