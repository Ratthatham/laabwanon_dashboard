import {
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    PieChartOutline
} from "@mui/icons-material"

const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined/>
    },
    {
      text: "Client Facing",
      icon: null
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined/>
    },
    {
      text: "Customers",
      icon: <Groups2Outlined/>
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined/>
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined/>
    },
    {
      text: "Daily",
      icon: <TodayOutlined/>
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined/>
    },
    {
      text: "Breakdown",
      icon: <PieChartOutline/>
    },
    {
      text: "Management",
      icon: null
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined/>
    },
    {
      text: "Performance",
      icon: <AdminPanelSettingsOutlined/>
    },
  ]

export default navItems;
