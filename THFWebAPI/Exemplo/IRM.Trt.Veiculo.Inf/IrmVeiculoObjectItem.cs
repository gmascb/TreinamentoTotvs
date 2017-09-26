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
  public class IrmVeiculoObjectItem : ObjectItem
  {
    [Column(Name = "IDVEICULO")]
    [DataMember]
    public int IdVeiculo;
    [Column(Name = "DESCRICAO")]
    [DataMember]
    public string Descricao;
    [Column(Name = "MARCA")]
    [DataMember]
    public string Marca;
    [Column(Name = "MODELO")]
    [DataMember]
    public string Modelo;
    [Column(Name = "ANOFAB")]
    [DataMember]
    public int AnoFab;
    [Column(Name = "ANOMOD")]
    [DataMember]
    public int AnoMod;
    [Column(Name = "IDLOCALIDADE")]
    [DataMember]
    public int IdLocalidade;
    [Column(Name = "CODESTADO")]
    [DataMember]
    public string codEstado;
    [Column(Name = "PRECO")]
    [DataMember]
    public decimal Preco;
    [Column(Name = "VENDEDOR")]
    [DataMember]
    public string Vendedor;
    [Column(Name = "DATAATUALIZACAO")]
    [DataMember]
    public DateTime DataAtualizacao;
    [Column(Name = "STATUS")]
    [DataMember]
    public bool isVendido;
  }
}
