import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Driving School Owner'];
  const roles = ['Student', 'Driving School Owner', 'Driving Instructor', 'Administrator'];
  const applicationName = `Klinkenberg`;
  const tenantName = `School`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `1. As a Driving School Owner, I want to create a School profile, so that I can manage my driving school's appointments and instructors.

2. As a Driving School Owner, I want to invite Driving Instructors and Administrators to join my School, so that they can manage appointments and students.

3. As a Driving Instructor, I want to set my availability for appointments, so that students can book appointments with me based on my schedule.

4. As a Driving Instructor, I want to view and manage my appointments, so that I can keep track of my schedule and make changes if necessary.

5. As an Administrator, I want to manage the School's appointments, so that I can ensure appointments are scheduled correctly and efficiently.

6. As an Administrator, I want to manage the School's Driving Instructors, so that I can keep track of their schedules and availability.

7. As a Student, I want to create an account, so that I can book appointments with Driving Instructors from the driving school.

8. As a Student, I want to view available Driving Instructors and their schedules, so that I can choose an instructor and book an appointment.

9. As a Student, I want to book an appointment with a Driving Instructor, so that I can schedule my driving lessons.

10. As a Student, I want to view and manage my appointments, so that I can keep track of my schedule and make changes if necessary.

11. As a Student, I want to sync my appointments with my Gmail, Apple, or Microsoft calendar, so that I can easily keep track of my appointments.

12. As a Driving Instructor, I want my appointments to be synced with my Gmail, Apple, or Microsoft calendar, so that I can easily keep track of my appointments.

13. As a Student, I want to pay for my appointments using the payment gateway, so that I can complete the booking process.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
