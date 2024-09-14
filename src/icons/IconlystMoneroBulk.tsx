import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneroBulk = ({
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
      d="M6.487 14.6a.3.3 0 0 0 .3-.3V8.4c0-.303.183-.576.463-.693a.75.75 0 0 1 .817.163l4.218 4.218a.3.3 0 0 0 .424 0l4.226-4.218a.75.75 0 0 1 1.28.53v5.9a.3.3 0 0 0 .3.3h2.888a.294.294 0 0 0 .286-.218A9.4 9.4 0 0 0 22 12c0-5.238-4.262-9.5-9.5-9.5S3 6.762 3 12c0 .823.112 1.62.31 2.382.034.13.152.218.286.218z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.465 16.099a.75.75 0 0 1-.75-.75v-4.417a.3.3 0 0 0-.512-.213l-3.176 3.171a.75.75 0 0 1-1.06 0l-3.168-3.168a.3.3 0 0 0-.512.212v4.415a.75.75 0 0 1-.75.75H4.42a.29.29 0 0 0-.26.425c1.612 2.959 4.74 4.975 8.34 4.975s6.729-2.016 8.339-4.975a.29.29 0 0 0-.26-.425z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoneroBulk;
