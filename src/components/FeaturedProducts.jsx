import React from 'react'
import Product from './Product'

const FeaturedProducts = () => {
  return (
    <div className='mt-5'>
      <div className='flex justify-center items-center text-2xl font-bold'>
        FEATURED PRODUCTS
      </div>
      <div className='flex flex-wrap p-5 justify-center items-center'>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Brother-MFCL2750DW-Monochrome-All-in-One-Wireless-Laser-Printer-Duplex-Copy-Scan-Amazon-Dash-Replenishment-Enabled.png" Name="Brother MFC-J5830DW" Price={243}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Brother-MFC-J5830DW-All-in-One-Color-Inkjet-Printer-Wireless-Connectivity-Automatic-Duplex-Printing-Amazon-Dash-Replenishment-Enabled.png" Name="Brother MFCL2750DW" Price={234}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Brother-Monochrome-Laser-Printer-HL-L6200DW-Wireless-Networking-Mobile-Printing-Duplex-Printing-Large-Paper-Capacity-Amazon-Dash-Replenishment-Enabled.png" Name="Brother Monochrome Laser Printer" Price={287.5}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Brother-Monochrome-Laser-Printer-Compact-All-In-One-Printer-Multifunction-Printer-MFCL2710DW-Wireless-Networking-and-Duplex-Printing-Amazon-Dash-Replenishment-Enabled.png" Name="Brother Monochrome " Price={187.5}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/CANON-PIXMA-iX6820-Wireless-Business-Printer-with-AirPrint-and-Cloud-Compatible-Black.png" Name="Brother-Monochrome-Laser-Printer-Compact" Price={212.5}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Canon-PIXMA-TR8520-Wireless-All-in-One-Printer-Mobile-Printing-Photo-and-Document-Printing-AirPrint-and-Google-Cloud-Printing-Black.png" Name="Canon-PIXMA-TR8520" Price={150}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Canon-2986C002-PIXMA-TS6220-Wireless-All-in-One-Photo-Printer-with-Copier-Scanner-and-Mobile-Printing-Black.png" Name="Canon-2986C002-PIXMA" Price={112}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/Canon-TS9120-Wireless-All-In-One-Printer-with-Scanner-and-Copier-Mobile-and-Tablet-Printing-with-AirprintTM-and-Google-Cloud-Print-compatible-Gray.png" Name="canon-ts9120" Price={137}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/HP-DeskJet-3755-Compact-All-in-One-Wireless-Printer-with-Mobile-Printing-Instant-Ink-ready-Seagrass-Accent-J9V92A.png" Name="HP-desk-Jet" Price={100}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/HP-OfficeJet-5255-Wireless-All-in-One-Printer-Instant-Ink-Ready-M2U75A.png" Name="HP-OfficeJet-5255" Price={112}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/HP-LaserJet-Pro-M402n-Laser-Printer-with-Built-in-Ethernet-Amazon-Dash-Replenishment-ready-C5F93A.png" Name="HP-LaserJet-Pro" Price={375}/>
        <Product imgLink="https://copynsupplies.com/wp-content/uploads/2019/03/HP-DeskJet-1112-Compact-Printer-F5S23A.png" Name="HP desk jet" Price={75}/>
        {/* <Product imgLink="" Name="" Price={}/> */}
      </div>
    </div>
  )
}

export default FeaturedProducts
