using RM.Lib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace RM.Irm.Veiculo.Inf
{
  [Serializable]
  [DataContract(Namespace = "http://www.totvs.com.br/RM/")]
  public class IrmEstadoObjectItem : ObjectItem
  {
    [Column(Name = "CODETD")]
    [DataMember]
    public string CodEstado;
    [Column(Name = "NOME")]
    [DataMember]
    public string Nome;
  }
}
