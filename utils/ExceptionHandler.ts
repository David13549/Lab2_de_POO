export class ExceptionHandler {
    static handle(error: unknown): void {
      if (error instanceof Error) {
        console.error(`[ERROR]: ${error.message}`);
      } else {
        console.error("[ERROR]: Ha ocurrido un error desconocido.");
      }
    }
  }
  