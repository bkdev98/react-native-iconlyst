import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRemoveTwoTone = ({
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
      d="M12.912 19.112H6.689c-1.966 0-3.189-1.387-3.189-3.35v-7.4c0-1.963 1.223-3.35 3.188-3.35h11.624c1.96 0 3.188 1.387 3.188 3.35v2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.715 8.514h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.213 12.065a2.287 2.287 0 1 1 4.575 0 2.287 2.287 0 0 1-4.575 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.08 14.674-1.908 1.91m0 0-1.908 1.909m1.908-1.91-1.908-1.91m1.908 1.91 1.908 1.91"
    />
  </Svg>
);
export default IconlystMoneyPaperRemoveTwoTone;
