import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletDoublleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.11 6.18H8.067A5.07 5.07 0 0 0 3 11.24v6.17a5.07 5.07 0 0 0 5.066 5.06h9.045c2.846 0 4.751-2.294 4.882-5.01a.29.29 0 0 0-.293-.3h-5.224a2.843 2.843 0 0 1-2.839-2.84c0-1.56 1.274-2.83 2.84-2.83H21.7a.29.29 0 0 0 .293-.3c-.131-2.717-2.036-5.01-4.882-5.01"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.172 4.803c.179.036.324-.162.227-.316l-.742-1.191a3.78 3.78 0 0 0-5.195-1.2L8.928 4.312c-.17.107-.094.37.107.37h7.899q.636.002 1.238.122M15.138 14.321c0 .74.6 1.34 1.339 1.34H21.7a.3.3 0 0 0 .3-.3v-2.07a.3.3 0 0 0-.3-.3h-5.223c-.738 0-1.34.597-1.34 1.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.364 15.541a.75.75 0 0 1-1.5 0v-2.43a.75.75 0 0 1 1.5 0z"
    />
  </Svg>
);
export default IconlystWalletDoublleBulk;
