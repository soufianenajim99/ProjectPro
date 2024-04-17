import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export function TimelineHome() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className=" font-extrabold text-4xl my-10 pb-6">
          What People Says About Us
        </h1>
        <div className="w-[32rem]">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="sm"
                    src="https://docs.material-tailwind.com/img/team-1.jpg"
                    alt="user 1"
                    withBorder
                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Person
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="sm"
                    src="https://docs.material-tailwind.com/img/team-2.jpg"
                    alt="user 2"
                    withBorder
                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Demo
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="sm"
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="user 3"
                    withBorder
                  />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Marco
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography color="gray" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
