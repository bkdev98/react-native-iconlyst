import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m13.183 7.89 3.8 3.8L6.82 21.855l-3.797-.004-.003-3.797z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m13.183 7.89 3.8 3.8L6.82 21.855l-3.797-.003-.003-3.798zM13.743 14.097l-2.986-2.986"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M3.02 12.05V3.354h18.46v18.5h-8.536"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEditSquareTwoTonesharp;
