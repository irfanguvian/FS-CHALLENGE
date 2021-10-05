import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dasboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["PREMIER INDEX ALPHA"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Update NAV",
    to: "/Update",
    icon: <CIcon name="cil-chart-line" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Transfers",
    to: "/Transfers",
    icon: (
      <CIcon name="cil-swap-horizontal" customClasses="c-sidebar-nav-icon" />
    ),
  },
  {
    _tag: "CSidebarNavItem",
    name: "Fund",
    to: "/Fund",
    icon: "cil-dollar",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Maturity Date",
    to: "/Maturity",
    icon: "cil-calendar",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["PERFORMANCE FEE"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Subscription",
    to: "/Subscription",
    icon: "cil-dollar",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Expected Performance Fee",
    to: "/Performance",
    icon: "cil-dollar",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Actual Performance Fee",
    to: "/Performance",
    icon: "cil-dollar",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["INQUERY"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "New Client",
    to: "/inquiries/AddClient",
    icon: "cil-address-book",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Exiting Client",
    to: "/inquiries/AddClient",
    icon: "cil-address-book",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
