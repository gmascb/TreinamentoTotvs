using RM.Lib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace RM.Irm.Veiculo.Inf
{
  [ServiceContract(Namespace = "http://www.totvs.com.br/RM/")]
  public interface IIrmVeiculoServer : IRMSServer
  {
    [OperationContract]
    ObjectList<IrmEstadoObjectItem> GetEstados();

    [OperationContract]
    ObjectList<IrmCidadeObjectItem> GetCidade();
  }
}
