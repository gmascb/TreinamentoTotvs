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
  public class IrmCidadeObjectItem : ObjectItem
  {
    [Column(Name = "CODLOCALIDADE")]
    [DataMember]
    public int CodLocalidade;
    [Column(Name = "NOME")]
    [DataMember]
    public string Nome;
    [Column(Name = "UF")]
    [DataMember]
    public string Uf;
  }
}
