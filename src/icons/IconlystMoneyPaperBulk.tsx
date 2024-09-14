import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperBulk = ({
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
      fillRule="evenodd"
      d="M18.424 13.46V7.23c0-1.986-1.28-3.32-3.185-3.32H5.453c-1.874 0-3.183 1.365-3.183 3.32v6.23c0 1.955 1.309 3.32 3.183 3.32h9.785c1.905 0 3.186-1.334 3.186-3.32"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.35 13.021a2.676 2.676 0 0 1-2.677-2.67 2.68 2.68 0 0 1 2.677-2.68 2.675 2.675 0 0 1 0 5.35m-1.177-2.67a1.18 1.18 0 0 1 1.177-1.18 1.175 1.175 0 1 1 0 2.351 1.176 1.176 0 0 1-1.177-1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.658 14.09H5.477a.75.75 0 1 1 0-1.5h1.181a.75.75 0 0 1 0 1.5M14.038 8.111a.75.75 0 0 1 0-1.5h1.182a.75.75 0 0 1 0 1.5z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.671 7.417c-.123-.043-.247.052-.247.183v5.86c0 2.503-1.761 4.32-4.186 4.32H5.969a.19.19 0 0 0-.184.249c.428 1.266 1.513 2.06 2.979 2.06h9.777c1.907 0 3.189-1.333 3.189-3.32v-6.23c0-1.53-.81-2.69-2.059-3.122"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperBulk;
