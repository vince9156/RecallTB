var follow_up_datedialog = {
doOK : function()
{
  window.arguments[0].out = document.getElementById("selDate").dateValue+"|"+document.getElementById("day").value;
  
  return true;
},

doCancel : function()
{
  return true;
},
};