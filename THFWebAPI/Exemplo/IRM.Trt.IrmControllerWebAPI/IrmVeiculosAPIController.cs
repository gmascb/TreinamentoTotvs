using RM.Irm.Veiculo.Inf;
using RM.Lib;
using RM.WebAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace IRM.Trt.IrmControllerWebAPI
{
  [RoutePrefix("IrmTreinamento")]
  public class IrmVeiculosAPIController : RMSFrameHtmlController
  {
    [Route("SetVeiculoVendido")]
    [RMIgnoreLicense]    
    public IrmReturnWebAPI SetVeiculoVendido(int idVeiculo)
    {
      IrmReturnWebAPI objReturnWebAPI = new IrmReturnWebAPI();
      try
      {
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Sucess;
      }
      catch (Exception e)
      {
        objReturnWebAPI.ExceptionMessage = e;
        objReturnWebAPI.Message = e.Message;
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Error;
      }

      return objReturnWebAPI;
    }

    [Route("CancelVeiculoVendido")]
    [RMIgnoreLicense]
    public IrmReturnWebAPI CancelVeiculoVendido(int idVeiculo)
    {
      IrmReturnWebAPI objReturnWebAPI = new IrmReturnWebAPI();
      try
      {
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Sucess;
      }
      catch (Exception e)
      {
        objReturnWebAPI.ExceptionMessage = e;
        objReturnWebAPI.Message = e.Message;
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Error;
      }

      return objReturnWebAPI;
    }

    [Route("GetEstado")]
    [RMIgnoreLicense]
    public IrmReturnWebAPI GetEstado()
    {
      IrmReturnWebAPI objReturnWebAPI = new IrmReturnWebAPI();
      try
      {
        objReturnWebAPI.Data = RMSBroker.CreateServer<IIrmVeiculoServer>("IrmVeiculoServer").GetEstados();
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Sucess;
      }
      catch (Exception e)
      {
        objReturnWebAPI.ExceptionMessage = e;
        objReturnWebAPI.Message = e.Message;
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Error;
      }

      return objReturnWebAPI;
    }

    [Route("GetCidade")]
    [RMIgnoreLicense]
    public IrmReturnWebAPI GetCidade()
    {
      IrmReturnWebAPI objReturnWebAPI = new IrmReturnWebAPI();
      try
      {
        objReturnWebAPI.Data = RMSBroker.CreateServer<IIrmVeiculoServer>("IrmVeiculoServer").GetCidade();
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Sucess;
      }
      catch (Exception e)
      {
        objReturnWebAPI.ExceptionMessage = e;
        objReturnWebAPI.Message = e.Message;
        objReturnWebAPI.CodeReturn = IrmReturnWebAPI.TypeReturn.Error;
      }

      return objReturnWebAPI;
    }
  }
}