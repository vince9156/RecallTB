var follow_up_datedialog = {
doOK : function()
{
  window.arguments[0].out = document.getElementById("selDate").dateValue+"|"+document.getElementById("hour").value+"|"+document.getElementById("min").value;
  
  return true;
},

doCancel : function()
{
  return true;
},
};