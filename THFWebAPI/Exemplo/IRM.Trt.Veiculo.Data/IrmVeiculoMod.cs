using RM.Irm.Veiculo.Inf;
using RM.Lib;
using RM.Lib.Server;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RM.Irm.Veiculo.Data
{
  public class IrmVeiculoMod : RMSModule
  {
    public ObjectList<IrmEstadoObjectItem> GetEstados()
    {
      DataTable dt = DBS.QuerySelect("GETD", "SELECT CODETD, NOME FROM GETD (NOLOCK)");
      return new DataObjects().GetFromTable<IrmEstadoObjectItem>(dt);
    }

    public ObjectList<IrmCidadeObjectItem> GetCidade()
    {
      DataTable dt = DBS.QuerySelect("GLOCALIDADE", "SELECT CODLOCALIDADE, NOME, UF FROM GLOCALIDADE (NOLOCK)");
      return new DataObjects().GetFromTable<IrmCidadeObjectItem>(dt);
    }
  }
}
