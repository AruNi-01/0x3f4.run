"use client";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export function ProjectCard() {
  return (
    <Card className="flex w-[360px]">
      <CardHeader color="blue-gray" className="relative h-32">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot;
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
