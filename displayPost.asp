<%
dim name,clg
name=Request.Form("name")
clg=Request.Form("clg")
Response.Write("Holla!!! I'm " & name & "from" & clg & ".")
%>