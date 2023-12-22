import React from "react";
import Image from "next/image";
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const stc = require("string-to-color");

export function BlogPostCard({ props }: any) {
  const url = props.link;
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-52">
        <Link
          href={url ? url : "#"}
          target={url ? "_blank" : "_self"}
          className={url ? "cursor-pointer" : "cursor-default"}
        >
          <Image
            width={768}
            height={768}
            src={`/image/games/` + props.image}
            alt={props.name}
            className="h-full w-full object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody className="p-0">
        <a
          href={url}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {props.name}
          </Typography>
        </a>
        <Typography className="mb-3 font-normal !text-gray-500">
          <span dangerouslySetInnerHTML={{ __html: props.description }}></span>
        </Typography>
        {url && (
          <Link href={url} target="_blank">
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Jogar
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </Link>
        )}
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
