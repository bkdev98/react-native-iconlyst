import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTwoTone = ({
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
      d="M8.924 4.953a2 2 0 0 1 1.827-1.187h3.497a2 2 0 0 1 1.827 1.187l.424.952a1 1 0 0 0 .913.593h1.877a1.563 1.563 0 1 1 0 3.126H5.71a1.563 1.563 0 1 1 0-3.126h1.878a1 1 0 0 0 .913-.593zM14.852 13.508h-4.706"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.07 9.625-.774 9.388a3 3 0 0 1-2.99 2.753H9.693a3 3 0 0 1-2.99-2.753L5.93 9.625"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeleteTwoTone;
