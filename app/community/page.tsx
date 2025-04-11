"use client"

// NEXT-VIDEO
import Imagen from 'next/image';
import draca from '@/videos/draca.mp4.json';
// @ts-ignore
import Video from 'next-video';
import {UserTwitterCard} from '@/components/cards';

// ALL AND MAIN
import { title } from "@/components/primitives";
import {
    CardHeader,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    Card,
    CardFooter,
    Image,
    Avatar,
    CardBody,
    User,
    Link} from "@heroui/react";
import React from "react";

export default function AboutPage() {

    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-1">

          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">Тест текста</p>
                  <h4 className="text-white/90 font-medium text-xl">Тест текста2</h4>
              </CardHeader>
              <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-1 w-full h-full object-cover"
                  src="https://uertyk.github.io/huh/uertykava.png"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                      <Popover showArrow placement="bottom">
                          <PopoverTrigger>
                              <User
                                  as="button"
                                  avatarProps={{
                                      src: "https://images.unsplash.com/broken",
                                  }}
                                  className="transition-transform"
                                  description="Администратор"
                                  name="KiviK"
                              />
                          </PopoverTrigger>
                          <PopoverContent className="p-1">
                              <UserTwitterCard />
                          </PopoverContent>
                      </Popover>
                  </div>
                  <Button radius="full" size="sm">
                      Изучить
                  </Button>
              </CardFooter>
          </Card>

          <Video src={draca} />;
      </section>
  );
}
