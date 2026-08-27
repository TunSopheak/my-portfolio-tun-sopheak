// src/config/assets.ts

// ============================================================
// GOOGLE DRIVE BASE URLs
// ============================================================

/**
 * Preview URL – Opens PDF in Google Drive viewer (new tab)
 * Usage: View certificates
 */
const DRIVE_PREVIEW = 'https://drive.google.com/file/d/';

/**
 * Download URL – Forces download of the file
 * Usage: Download CV
 */
const DRIVE_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=';

/**
 * View URL – Opens images/videos directly
 * Usage: Background videos, profile images (if using Drive)
 */
const DRIVE_VIEW = 'https://drive.google.com/uc?export=view&id=';

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get Google Drive PDF preview URL (opens in viewer)
 */
export const getDrivePdfUrl = (id: string) => `${DRIVE_PREVIEW}${id}/preview`;

/**
 * Get Google Drive download URL (downloads file)
 */
export const getDriveDownloadUrl = (id: string) => `${DRIVE_DOWNLOAD}${id}`;

/**
 * Get Google Drive view URL (for images/videos)
 */
export const getDriveViewUrl = (id: string) => `${DRIVE_VIEW}${id}`;

// ============================================================
// FILE IDs – Replace with your actual Google Drive File IDs
// ============================================================

export const FILE_IDS = {
  /**
   * PDF Certificates – Upload to Google Drive
   * Get File ID from share link:
   * https://drive.google.com/file/d/[FILE_ID]/view
   */
  pdfs: {
    studentCouncilCert: '1fDfN2pot5jXsLp5nq5nOZgrnU_dnXVPf',
  },
};
