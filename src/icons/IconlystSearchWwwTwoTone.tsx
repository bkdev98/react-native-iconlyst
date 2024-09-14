import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchWwwTwoTone = ({
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
      d="M18.683 15.211a8.058 8.058 0 1 1-.858-8.836"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.043 17.346 3.279 3.27M6.78 10.16l.864 1.974.98-1.693.992 1.693.854-1.974M12.293 10.16l.865 1.974.98-1.693.991 1.693.854-1.974M17.809 10.16l.865 1.974.98-1.693.99 1.693.855-1.974"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchWwwTwoTone;
