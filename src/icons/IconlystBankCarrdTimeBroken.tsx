import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdTimeBroken = ({
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
      d="M21.25 10.649V7.725c0-2.441-1.52-4.166-3.965-4.166H12.25M10.521 18.48H7.215c-2.444 0-3.965-1.725-3.965-4.167V7.725c0-2.441 1.528-4.166 3.965-4.166h1.517M5.537 8.856H21.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.15 16.653a3.787 3.787 0 1 1-7.575 0 3.787 3.787 0 0 1 7.574 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.54 17.641-1.197-.715v-1.54"
    />
  </Svg>
);
export default IconlystBankCarrdTimeBroken;
