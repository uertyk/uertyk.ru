"use client"

import React from "react";
import {
    Avatar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
    User,
} from "@heroui/react";

export const UserTwitterCard = () => {
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