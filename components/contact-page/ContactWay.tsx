import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { contactWays } from "@/config/contact-ways";
import { EmailIcon } from "../icons";

export default function ContactWay() {
  return (
    <div className="flex justify-start w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        color="primary"
        variant="solid"
        items={contactWays}
      >
        {(item) => (
          <Tab
            key={item.name}
            title={
              <div className="flex items-center space-x-2">
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
                {/* <EmailIcon /> */}
                <span>{item.name}</span>
              </div>
            }
          >
            <Card>
              <CardBody>{item.link}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
