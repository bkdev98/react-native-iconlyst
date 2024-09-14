import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCcEmailTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12c0 4.968 4.032 9 9 9s9-4.032 9-9-4.032-9-9-9-9 4.032-9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.8 14.017a2.59 2.59 0 0 1-3.377-.234 2.57 2.57 0 0 1 0-3.648 2.57 2.57 0 0 1 3.376-.234M17.069 14.017a2.59 2.59 0 0 1-3.376-.234 2.57 2.57 0 0 1 0-3.648 2.57 2.57 0 0 1 3.376-.234"
    />
  </Svg>
);
export default IconlystCcEmailTwoTone;
