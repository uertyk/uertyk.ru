"use client"

import React from "react";
import { Snippet } from "@heroui/snippet"
import {Alert} from "@heroui/react";
import { Code } from "@heroui/code"
import { button as buttonStyles } from "@heroui/theme"

import { siteConfig } from "@/config/site"
import { title, subtitle } from "@/components/primitives"
import { GithubIcon } from "@/components/icons"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Button,
    Avatar,
} from "@heroui/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@heroui/react";
import {addToast, ToastProvider} from "@heroui/toast";

export default function Home() {
    const [isFollowed, setIsFollowed] = React.useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState("opaque");
    const backdrops = ["opaque", "blur", "transparent"];

    const [isVisible, setIsVisible] = React.useState(true);
    const title = "Заказы закрыты";
    const description =
        "uertyk_ не берет заказы, не пишите ему в тг или discord на счет заказов";



    return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-1">
          <Alert
              color="danger"
              description={description}
              isVisible={isVisible}
              title={title}
              variant="faded"
              onClose={() => setIsVisible(false)}
          />

          <Card isFooterBlurred className="border-none" radius="lg">
              <Image
                  isBlurred
                  alt="my lonely girlfriend"
                  className="object-cover"
                  height={400}
                  src="https://uertyk.github.io/huh/instyleslove0001.png"
                  width={1000}
              />
              <CardFooter
                  className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Хит рендер за 2025г</p>
                  <Link href="https://t.me/uertykk">
                      <Button
                          className="text-tiny text-white bg-black/20"
                          color="default"
                          radius="lg"
                          size="sm"
                          variant="flat"
                      >
                          Наш тгк
                      </Button>
                  </Link>
              </CardFooter>
          </Card>
          <div className="inline-block max-w-xl text-center justify-center">
              <Card className="max-w-[600px]">
                  <CardHeader className="flex gap-3">
                      <Image
                          isBlurred
                          alt="uertyk_ avatar"
                          height={40}
                          radius="sm"
                          src="https://uertyk.github.io/huh/uertykava.png"
                          width={40}
                      />
                      <div className="flex flex-col">
                          <p className="text-md">uertyk_</p>
                          <p className="text-small text-default-500">uertyk.ru</p>
                      </div>
                  </CardHeader>
                  <Divider/>
                  <CardBody>
                      <p>Дизайнер, рендермейкер, аниматор, программист, да и просто добрый человек</p>
                  </CardBody>
                  <Divider/>
                  <CardBody>
                      <p>Blender 3D, Figma, BlockBench</p>
                  </CardBody>
                  <Divider/>
                  <CardBody>
                      <Button variant="light" onPress={onOpen}>Подробнее об авторе</Button>
                      <Modal backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange}>
                          <ModalContent>
                              {(onClose) => (
                                  <>
                                      <ModalHeader className="flex flex-col gap-1">Об авторе</ModalHeader>
                                      <ModalBody>
                                          <p>
                                              Начнем с основного:
                                              <br/>Я - uertyk_ , активный творец в сфере рендеров и анимиации в Minecraft стилистике.
                                              <br/>
                                              <br/>
                                              <Divider/>
                                              <br/>
                                              <p>
                                                  Окей, а теперь то, чем я занимаюсь!
                                                  <br/>Во первых я активно изучаю программы Adobe After Effects/Premier
                                                  Pro, Figma + Blender 3D
                                                  <br/>Во вторых, я позиционирую себя, как рендермейкера, дизайнера и
                                                  аниматора
                                              </p>
                                          </p>
                                      </ModalBody>
                                      <ModalFooter>
                                          <Button color="danger" variant="light" onPress={onClose}>
                                              Закрыть
                                          </Button>
                                      </ModalFooter>
                                  </>
                              )}
                          </ModalContent>
                      </Modal>
                  </CardBody>
              </Card>

              <Divider className="my-4"/>
          </div>

          <div className="flex gap-3">
              <Card className="max-w-[600px]">
                  <CardHeader className="flex gap-3">
                      <Image
                          isBlurred
                          alt="Telegram"
                          height={40}
                          radius="sm"
                          src="https://uertyk.github.io/huh/tg.png"
                          width={40}
                      />
                      <div className="flex flex-col">
                          <p className="text-md">Telegram</p>
                          <p className="text-small text-default-500">Мой главный тгк, с новостями!</p>
                      </div>
                      <div className="flex flex-col">
                          <Link href="https://t.me/uertykk">
                              <Button
                                  variant="shadow"
                                  className="bg-gradient-to-tr from-indigo-500 to-indigo-400 text-white shadow-lg"
                                  radius="full"
                              >
                                  Узнать новости
                              </Button>
                          </Link>
                      </div>
                  </CardHeader>
              </Card>
          </div>
          <div className="flex gap-3">
              <Card className="max-w-[600px]">
                  <CardHeader className="flex gap-3">
                      <Image
                          isBlurred
                          alt="Discord сервер"
                          height={40}
                          radius="sm"
                          src="https://uertyk.github.io/huh/ds.png"
                          width={40}
                      />
                      <div className="flex flex-col">
                          <p className="text-md">Discord сервер</p>
                          <p className="text-small text-default-500">Discord сервер XL-servers</p>
                      </div>
                      <div className="flex flex-col">
                          <Link href="https://discord.gg/zFkXA9ETq5">
                              <Button
                                  variant="shadow"
                                  className="bg-gradient-to-tr from-indigo-800 to-indigo-700 text-white shadow-lg"
                                  radius="full"
                              >
                                  Перейти в сообщество
                              </Button>
                          </Link>
                      </div>
                  </CardHeader>
              </Card>
          </div>
          <div className="flex gap-3">
              <Card className="max-w-[600px]">
                  <CardHeader className="flex gap-3">
                      <Image
                          isBlurred
                          alt="YouTube канал"
                          height={40}
                          radius="sm"
                          src="https://uertyk.github.io/huh/yt.png"
                          width={60}
                      />
                      <div className="flex flex-col">
                          <p className="text-md">YouTube канал</p>
                          <p className="text-small text-default-500">Мой ютуб канал с проектами!</p>
                      </div>
                      <div className="flex flex-col">
                          <Link href="https://www.youtube.com/@uertyk_">
                              <Button
                                  variant="shadow"
                                  className="bg-gradient-to-tr from-red-700 to-red-500 text-white shadow-lg"
                                  radius="full"
                              >
                                  Перейти к масштабу
                              </Button>
                          </Link>
                      </div>
                  </CardHeader>
              </Card>
          </div>
          <div className="flex gap-3">

              <Card className="max-w-[600px]">
                  <CardHeader className="flex gap-3">
                      <Image
                          isBlurred
                          alt="Twitch канал"
                          height={40}
                          radius="sm"
                          src="https://uertyk.github.io/huh/twich.png"
                          width={40}
                      />
                      <div className="flex flex-col">
                          <p className="text-md">Twitch</p>
                          <p className="text-small text-default-500">Twitch канал с моими стримами!</p>
                      </div>
                      <div className="flex flex-col">
                          <Link href="https://m.twitch.tv/uertyk_/home">
                              <Button
                                  variant="shadow"
                                  className="bg-gradient-to-tr from-purple-700 to-purple-600 text-white shadow-lg"
                                  radius="full"
                              >
                                  Смотреть стримы
                              </Button>
                          </Link>
                      </div>
                  </CardHeader>
              </Card>
          </div>

          <div className="mt-8">
          </div>
      </section>
  );
}
