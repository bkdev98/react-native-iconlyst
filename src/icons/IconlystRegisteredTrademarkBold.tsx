import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegisteredTrademarkBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.33 12.164h-2.192V9.098h2.191a1.534 1.534 0 0 1 .24 3.047 1.526 1.526 0 0 1-.239.018"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.923 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.931.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.782c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.494-2.962 1.423-3.958m5.465 3.53a.75.75 0 0 0-.75.75v7.306a.75.75 0 0 0 1.5 0v-1.99h1.983l.955 2.28a.75.75 0 1 0 1.384-.58l-.834-1.99a3.035 3.035 0 0 0-1.297-5.776z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRegisteredTrademarkBold;
