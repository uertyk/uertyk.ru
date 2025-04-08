"use client"

import { title } from "@/components/primitives";
import {Button, Card, CardFooter, Image, Link} from "@heroui/react";
import React from "react";

export default function AboutPage() {
  return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-1">
          <h1 className={title()}>Все портфолио автора:</h1>
          <Card isFooterBlurred className="border-none" radius="lg">
              <Image
                  isZoomed
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

          <Card isFooterBlurred className="border-none" radius="lg">
              <Image
                  isZoomed
                  isBlurred
                  alt="my lonely girlfriend"
                  className="object-cover"
                  height={400}
                  src="https://uertyk.github.io/huh/kivikoonewstyless0001.png"
                  width={700}
              />
          </Card>
      </section>
  );
}
