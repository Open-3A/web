export function getFormattedStatus(status: string) {
    if (status.toUpperCase() == "TO_CONTINUE") {
      return ["Em andamento", "bg-yellow-400"];
    }
  
    if (status.toUpperCase() == "COMPLETED") {
      return ["Concluído", "bg-green-400"];
    }
  
    // status = BLOCKED
    return ["Bloqueado", "bg-red-400"];
  }