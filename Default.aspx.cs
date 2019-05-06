using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {


        string fName = Request.QueryString["fname"];
        string LName = Request.QueryString["lName"];
        string myEmail = Request.QueryString["Email"];
        string mycantry = Request.QueryString["cantry"];
        string myage = Request.QueryString["age"];
        string mygender = Request.QueryString["gender"];
        string myQ1 = Request.QueryString["Q1"];
        string myQ2A1 = Request.QueryString["Q2A0"];
        string myQ2A2 = Request.QueryString["Q2A1"];
        string myQ2A3 = Request.QueryString["Q2A2"];
        string myQ2A4 = Request.QueryString["Q2A3"];
        string myQ2A5 = Request.QueryString["Q2A4"];
        string myQ3= Request.QueryString["Q3"];
        string myQ4 = Request.QueryString["Q4"];
        //Response.Write(myQ2A1);
        //Response.Write(myQ2A2);
        //Response.Write(myQ2A3);
        //Response.Write(myQ2A4);
        //Response.Write(myQ2A5);

        creatUser(fName,LName,myEmail, mycantry, myage, mygender,myQ1, myQ2A1, myQ2A2, myQ2A3, myQ2A4, myQ2A5,myQ3,myQ4);

    }
    public static string GetDate()
    {

        return DateTime.Now.ToString();
    }
    public void creatUser(string firstName , string lastName, string email, string myContry,string age, string gender,string Q1,string Q2A1,string Q2A2,string Q2A3 ,string Q2A4, string Q2A5,string Q3,string Q4)
    {
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("Data/XMLFile.xml"));
        XmlElement myuser = myDoc.CreateElement("user");

        XmlElement firsNameXml = myDoc.CreateElement("FirstName");
        firsNameXml.InnerXml = firstName.ToString();

        XmlElement lastNameXml = myDoc.CreateElement("LastName");
        lastNameXml.InnerXml = lastName.ToString();

        XmlElement emailXml = myDoc.CreateElement("Email");
        emailXml.InnerXml = email.ToString();

        XmlElement myContryXml = myDoc.CreateElement("Country"); 
        myContryXml.InnerXml = myContry.ToString();

        XmlElement myageXml = myDoc.CreateElement("age");
        myageXml.InnerXml = age.ToString();

        XmlElement mygenderXml = myDoc.CreateElement("gender");
        mygenderXml.InnerXml = gender.ToString();

        XmlElement myQ1Xml = myDoc.CreateElement("Q1");
        myQ1Xml.InnerXml = Q1.ToString();


        myuser.AppendChild(lastNameXml);
        myuser.AppendChild(firsNameXml);
        myuser.AppendChild(emailXml);
        myuser.AppendChild(myContryXml);
        myuser.AppendChild(myageXml);
        myuser.AppendChild(mygenderXml);
        myuser.AppendChild(myQ1Xml);

        XmlElement myQ2Xml = myDoc.CreateElement("Q2");
        
        if (Q2A1 != "")
        {
            XmlElement myQ2A1Xml = myDoc.CreateElement("Q2A");
            myQ2A1Xml.InnerXml = Q2A1.ToString();
            myQ2Xml.AppendChild(myQ2A1Xml);
        }
        if (Q2A2 != "")
        {
            XmlElement myQ2A2Xml = myDoc.CreateElement("Q2A");
            myQ2A2Xml.InnerXml = Q2A2.ToString();
            myQ2Xml.AppendChild(myQ2A2Xml);
        }
        if (Q2A3 != "")
        {
            XmlElement myQ2A3Xml = myDoc.CreateElement("Q2A");
            myQ2A3Xml.InnerXml = Q2A3.ToString();
            myQ2Xml.AppendChild(myQ2A3Xml);
        }
        if (Q2A4 != "")
        {
            XmlElement myQ2A4Xml = myDoc.CreateElement("Q2A");
            myQ2A4Xml.InnerXml = Q2A4.ToString();
            myQ2Xml.AppendChild(myQ2A4Xml);
        }
        if (Q2A5 != "")
        {
            XmlElement myQ2A5Xml = myDoc.CreateElement("Q2A");
            myQ2A5Xml.InnerXml = Q2A5.ToString();
            myQ2Xml.AppendChild(myQ2A5Xml);
        }
        myuser.AppendChild(myQ2Xml);

        XmlElement myQ3Xml = myDoc.CreateElement("Q3");
        myQ3Xml.InnerXml = Q3.ToString();

        XmlElement myQ4Xml = myDoc.CreateElement("Q4");
        myQ4Xml.InnerXml = Q4.ToString();

        myuser.AppendChild(myQ3Xml);
        myuser.AppendChild(myQ4Xml);

        XmlNode myusers = myDoc.SelectSingleNode("//users");
        myusers.AppendChild(myuser);
        myDoc.Save(MapPath("Data/XMLFile.xml"));//שמירה לעץ
        DataBind();
    }



}