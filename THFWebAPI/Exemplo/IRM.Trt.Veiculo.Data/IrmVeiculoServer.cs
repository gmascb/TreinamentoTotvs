using RM.Irm.Veiculo.Data.Properties;
using RM.Irm.Veiculo.Inf;
using RM.Lib;
using RM.Lib.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace RM.Irm.Veiculo.Data
{
  [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
  [RMSServerInfo(typeof(Resources), "SCaptionIrmVeiculoServer", CodSistema.Prj)] //donotlocalize
  public class IrmVeiculoServer : RMSServer, IIrmVeiculoServer
  {
    public ObjectList<IrmEstadoObjectItem> GetEstados()
    {
      InitServer();
      return CreateModule<IrmVeiculoMod>().GetEstados(); 
    }

    public ObjectList<IrmCidadeObjectItem> GetCidade()
    {
      InitServer();
      return CreateModule<IrmVeiculoMod>().GetCidade();
    }
  }
}
