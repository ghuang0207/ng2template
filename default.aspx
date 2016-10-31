<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="ng2Template._default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://unpkg.com/zone.js@0.6.25?main=browser"></script>
    <script src="https://unpkg.com/reflect-metadata@0.1.3"></script>

        <!-- 2. Configure SystemJS For DEV debugging -->
        <%--<script src="node_modules/systemjs/dist/system.src.js"></script>
        <script src="systemjs.config.js"></script>
        <script>
          System.import('app').catch(function(err){ console.error(err); });
        </script>--%>
        
        <!-- For Prod after gulp script-->
        <script src="app/index.min.js"></script>
        
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
  <div>

      <init-app>Loading...</init-app>
  </div>  
    
  
</asp:Content>
