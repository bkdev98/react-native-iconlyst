import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStockAnalysisTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.485 19.119h1.531c.82 0 1.484-.662 1.484-1.48v-5.042a1.48 1.48 0 0 0-1.484-1.478h-1.531A1.48 1.48 0 0 0 17 12.597v5.043c0 .817.665 1.479 1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 21.118v-2m0-8v-2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.735 11.619h1.531c.82 0 1.484-.662 1.484-1.48v-.042a1.48 1.48 0 0 0-1.484-1.478h-1.531a1.48 1.48 0 0 0-1.485 1.478v.043c0 .817.665 1.479 1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 17.118v-5.5m0-3v-2.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.985 12.619h1.531c.82 0 1.484-.662 1.484-1.48V7.098a1.48 1.48 0 0 0-1.484-1.478H4.985A1.48 1.48 0 0 0 3.5 7.097v4.043c0 .817.664 1.479 1.485 1.479"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 15.118v-2.5m0-7v-2.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStockAnalysisTwoTone;
