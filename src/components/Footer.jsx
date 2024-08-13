import React from 'react';

function Footer() {
  return (
    <div className="Footer">
     <div className="info-section">
        <h3>How can you calculate GST with this tool?</h3>
        <div className="calculation-steps">
          <ol>
            <li>Enter the price of the goods or services in the Amount field.</li>
            <li>Enter the percentage of GST, or the slab that the product comes under, in the GST % field.</li>
            <li>Choose if the price that you entered is inclusive or exclusive of tax in the Tax field.</li>
          </ol>
          <p>
            If the price you've entered is inclusive of tax, the tool automatically calculates, and displays the original price of the goods or service after subtracting the GST.
          </p>
          <p>
            If the price you've entered is exclusive of tax, the tool automatically calculates, and displays the gross price after adding the GST.
          </p>
          <p className="note">
            Warning!!! Currently, history is stored in website cookies, hence a maximum of 20 entries are registered.
          </p>
        </div>

        <hr />

        <h2>GST - Goods and Services Tax</h2>
        <p className="text-center">
          GST was implemented mainly to bring about uniformity in tax collection. In the GST regime, tax is collected cumulatively at the end stage of production of goods or services. There are five slabs to collect GST that are 5%, 12%, 18%, and 28%, and different goods and services fall under different tax slabs. Additionally, there are goods that do not attract any GST.
        </p>
        <h3>There are four types of GST active in India. They are:</h3>
        <div className="gst-types">
          <div className="gst-type">
            <h4 className="text-primary">CGST</h4>
            <p>
              Central Goods and Services Tax, or CGST, is collected by the central government for intra-state supply of goods and services and is governed by the CGST Act.
            </p>
          </div>
          <div className="gst-type">
            <h4 className="text-primary">SGST</h4>
            <p>
              State Goods and Services Tax, or SGST, is collected by the state government for intra-state supply of goods and services and is governed by the SGST Act.
            </p>
          </div>
          <div className="gst-type">
            <h4 className="text-primary">IGST</h4>
            <p>
              Integrated Goods and Services Tax, or IGST, is collected by the central government on inter-state supply of goods and services as well as imports.
            </p>
          </div>
          <div className="gst-type">
            <h4 className="text-primary">UTGST</h4>
            <p>
              Union Territory Goods and Services Tax, or UTGST, is applicable on the supply of goods or services that take place in any of the seven union territories in India.
            </p>
          </div>
        </div>
      </div>
    </div>
 
  );
};
    
 

export default Footer;