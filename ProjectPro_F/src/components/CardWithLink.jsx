import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BsBorderAll } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

export function CardWithLink({ title }) {
  return (
    <Card className="mt-6 w-96 text-center">
      <CardBody className=" flex justify-center flex-col items-center">
        {title == "Organize" && (
          <BsBorderAll className="mb-4 h-12 w-12 text-gray-900" />
        )}
        {title == "Collaborate" && (
          <RiTeamFill className="mb-4 h-12 w-12 text-gray-900" />
        )}
        {title == "Customize" && (
          <RiEdit2Fill className="mb-4 h-12 w-12 text-gray-900" />
        )}

        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* <a href="#" className="inline-block"> */}
        <Button size="sm" variant="text" className="flex items-center gap-2">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
        {/* </a> */}
      </CardFooter>
    </Card>
  );
}
