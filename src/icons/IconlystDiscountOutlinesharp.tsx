import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.444 10.694 9.908 16.23l-1.06-1.06 5.535-5.536zM13.566 14.356h1.508v1.5h-1.508zM9.215 10.004h1.507v1.5H9.215z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.25 2.543.598.789a6.26 6.26 0 0 0 5.84 2.419l.98-.135-.134.98a6.26 6.26 0 0 0 2.42 5.841l.787.598-.788.597a6.26 6.26 0 0 0-2.42 5.841l.136.98-.98-.135a6.26 6.26 0 0 0-5.841 2.42l-.598.788-.598-.788a6.26 6.26 0 0 0-5.84-2.42l-.98.135.134-.98a6.26 6.26 0 0 0-2.42-5.84l-.787-.598.788-.598a6.26 6.26 0 0 0 2.42-5.84l-.135-.98.98.134a6.26 6.26 0 0 0 5.84-2.42zM6.523 7.308a7.76 7.76 0 0 1-2.372 5.727 7.76 7.76 0 0 1 2.372 5.726 7.76 7.76 0 0 1 5.727 2.372 7.76 7.76 0 0 1 5.727-2.372 7.76 7.76 0 0 1 2.372-5.726 7.76 7.76 0 0 1-2.372-5.727 7.76 7.76 0 0 1-5.727-2.372 7.76 7.76 0 0 1-5.727 2.372"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountOutlinesharp;
