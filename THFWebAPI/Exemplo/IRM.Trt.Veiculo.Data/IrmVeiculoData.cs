using RM.Irm.Veiculo.Inf;
using RM.Lib;
using RM.Lib.Server;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace RM.Irm.Veiculo.Data
{
  [ServiceBehavior(IncludeExceptionDetailInFaults = true)]
  [RMSServerSecurityInfo(typeof(Properties.Resources), "IrmVeiculoData", CodSistema.Prj, 0)]
  [RMSServerInfo(typeof(Properties.Resources), nameof(Properties.Resources.IrmVeiculoDataServerInfo), CodSistema.Prj)]
  public class IrmVeiculoData : RMSDataServer
  {
    private const string strSQL = @"SELECT  IDVEICULO, 
		                                        DESCRICAO, 
		                                        MARCA, 
		                                        MODELO, 
		                                        ANOFAB,
		                                        ANOMOD, 
		                                        IDLOCALIDADE,
		                                        GLOCALIDADE.NOME CIDADE, 
		                                        CODESTADO,
		                                        GETD.NOME ESTADO, 
		                                        PRECO, 
		                                        VENDEDOR, 
		                                        DATAATUALIZACAO, 
		                                        STATUS FROM TRTVEICULO (NOLOCK) JOIN GLOCALIDADE 
		                                        ON 
		                                        TRTVEICULO.IDLOCALIDADE = GLOCALIDADE.CODLOCALIDADE
		                                        JOIN GETD (NOLOCK) ON
		                                        TRTVEICULO.CODESTADO = GETD.CODETD /*WHERE*/";
    private const string strSQLEdit = @"SELECT  IDVEICULO, 
		                                        DESCRICAO, 
		                                        MARCA, 
		                                        MODELO, 
		                                        ANOFAB,
		                                        ANOMOD, 
		                                        IDLOCALIDADE,
		                                        GLOCALIDADE.NOME CIDADE, 
		                                        CODESTADO,
		                                        GETD.NOME ESTADO, 
		                                        PRECO, 
		                                        VENDEDOR, 
		                                        DATAATUALIZACAO, 
		                                        STATUS FROM TRTVEICULO (NOLOCK) JOIN GLOCALIDADE 
		                                        ON 
		                                        TRTVEICULO.IDLOCALIDADE = GLOCALIDADE.CODLOCALIDADE
		                                        JOIN GETD (NOLOCK) ON
		                                        TRTVEICULO.CODESTADO = GETD.CODETD WHERE TRTVEICULO.IDVEICULO =:1";

    /// <summary>
    /// 
    /// </summary>
    /// <param name="dataSet"></param>
    protected override void DoGetDataSet(out System.Data.DataSet dataSet)
    {
      dataSet = new IrmVeiculo();
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="dataSet"></param>
    /// <param name="filter"></param>
    /// <param name="ownerData"></param>
    protected override void DoReadView(System.Data.DataSet dataSet, object[] filter, object ownerData)
    {
      this.DBS.QueryFill(dataSet, "TRTVEICULO", strSQL, 0, 0, filter);
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="dataSet"></param>
    /// <param name="primaryKey"></param>
    /// <param name="ownerData"></param>
    protected override void DoReadRecord(System.Data.DataSet dataSet, object[] primaryKey, object ownerData)
    {
      this.DBS.QueryFill(dataSet, "TRTVEICULO", strSQLEdit, primaryKey);

    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="row"></param>
    protected override void ValidateRow(DataRow row)
    {
      base.ValidateRow(row);
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="dataSet"></param>
    /// <param name="rowsAffected"></param>
    /// <param name="ownerData"></param>
    protected override void DoSaveRecord(System.Data.DataSet dataSet, out int rowsAffected, object ownerData)
    {
      this.DBS.SetUpdateParts(dataSet.Tables["TRTVEICULO"], "TRTVEICULO");
      rowsAffected = this.DBS.QueryUpdate(dataSet, "TRTVEICULO");
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="row"></param>
    protected override void SavingRow(DataRow row)
    {
      if (row.RowState == DataRowState.Added)
      {
        row["IDVEICULO"] = RMSConvert.ToInt32(DBS.QueryValue(1, "SELECT(MAX(IDVEICULO) + 1) ID FROM TRTVEICULO"));
      }
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="dataSet"></param>
    /// <param name="filter"></param>
    /// <param name="ownerData"></param>
    protected override void DoReadLookupView(System.Data.DataSet dataSet, object[] filter, object ownerData)
    {
      this.DBS.QueryFill(dataSet, "TRTVEICULO", strSQL, 0, 0, filter);
    }
    /// <summary>
    /// 
    /// </summary>
    /// <param name="dataSet"></param>
    /// <param name="resultFields"></param>
    /// <param name="filter"></param>
    /// <param name="ownerData"></param>
    protected override void DoReadLookupValues(System.Data.DataSet dataSet, string resultFields, object[] filter, object ownerData)
    {
      this.DBS.QueryFill(dataSet, "MPrjDiario", "SELECT " + resultFields + " FROM TRTVEICULO (NOLOCK) /*where*/", 0, 0, filter);
    }
  }
}
