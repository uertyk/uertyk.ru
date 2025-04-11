"use client"

// NEXT-VIDEO
import Imagen from 'next/image';
import draca from '@/videos/draca.mp4.json';
// @ts-ignore
import Video from 'next-video';

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

export const UserKiviCard = () => {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="max-w-[300px] border-none bg-transparent" shadow="none">
            <CardHeader className="justify-between">
                <div className="flex gap-3">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://images.unsplash.com/broken"
                    />
                    <div className="flex flex-col items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">KiviK</h4>
                        <h5 className="text-small tracking-tight text-default-500">@KiviKscreenager</h5>
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "отписаться" : "Подписаться"}
                </Button>
            </CardHeader>
            <CardBody className="px-3 py-0">
                <p className="text-small pl-px text-default-500">
                    KiviKscreenager, самая активная девушка, а так же администратор XL-servers
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-600 text-small">0</p>
                    <p className=" text-default-500 text-small">Подписок</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-600 text-small">0</p>
                    <p className="text-default-500 text-small">Подписчиков</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default function AboutPage() {
    const [isFollowed, setIsFollowed] = React.useState(false);

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
                              <UserKiviCard />
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
