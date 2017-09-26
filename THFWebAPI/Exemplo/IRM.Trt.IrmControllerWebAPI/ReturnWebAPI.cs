using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IRM.Trt.IrmControllerWebAPI
{
  /// <summary>
  /// Classe de Retorno
  /// </summary>
  public class IrmReturnWebAPI
  {
    /// <summary>
    /// construtor
    /// </summary>
    public IrmReturnWebAPI()
    {
      CodeReturn = TypeReturn.Sucess;
    }
    /// <summary>
    /// Enumerado que guarda o tipo de retorno
    /// </summary>
    public enum TypeReturn
    {
      /// <summary>
      /// Sucesso
      /// </summary>
      Sucess = 1,
      /// <summary>
      /// Ressalva
      /// </summary>
      warning = 2,
      /// <summary>
      /// Erro
      /// </summary>
      Error = 3,
      /// <summary>
      /// Retorno customizado para alguma validação
      /// </summary>
      Custom1 = 4
    }
    /// <summary>
    /// Classe com a Exceção lançada
    /// </summary>
    public Exception ExceptionMessage { get; set; }
    /// <summary>
    /// Objeto com retorno dos itens solicitados
    /// </summary>
    public object Data { get; set; }
    /// <summary>
    /// Resultado da Execução
    /// </summary>
    public TypeReturn CodeReturn { get; set; }
    /// <summary>
    /// Mensagem de feedback ou log
    /// </summary>
    public string Message { get; set; }
  }
}