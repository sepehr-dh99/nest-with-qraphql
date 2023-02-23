import Image from "next/image";

import { ILoading } from "./loading.types";

const Loading = ({
  height = 40,
  width = 170,
}: Partial<ILoading>): JSX.Element => {
  return (
    <Image
      src="/images/loading.svg"
      alt="loading"
      width={width}
      height={height}
    />
  );
};

export default Loading;
