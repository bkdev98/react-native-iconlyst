import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaleTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.035 15.064-1.446 3.468c-.52 1.249-.78 1.873-1.1 2.126a1.58 1.58 0 0 1-1.959.002c-.32-.252-.58-.876-1.104-2.123L8.97 15.069c-.351-.836-.526-1.254-.518-1.593.016-.605.377-1.149.93-1.398.309-.139.762-.139 1.669-.139h2.9c.905 0 1.357 0 1.666.14.552.247.913.79.93 1.395.01.338-.165.755-.513 1.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.734 5.783a2.783 2.783 0 1 0 5.566 0 2.783 2.783 0 0 0-5.566 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMaleTwoTone;
