import DocumentScanner, {
  type ScanDocumentOptions,
  type ScanDocumentResponse,
} from './NativeDocumentScanner';

export enum AndroidScannerMode {
  ScannerModeFull = 1,
  ScannerModeBaseWithFilter = 2,
  ScannerModeBase = 3,
}

export type {
  ScanDocumentOptions,
  ScanDocumentResponse,
} from './NativeDocumentScanner';

export {
  ResponseType,
  ScanDocumentResponseStatus,
} from './NativeDocumentScanner';

export default {
  /**
   * Opens the camera, and starts the document scan
   */
  scanDocument(
    options: ScanDocumentOptions = {}
  ): Promise<ScanDocumentResponse> {
    return DocumentScanner.scanDocument(options);
  },
};
