import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetroTwoTone = ({
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
      d="m5.676 6.121-.9 6.564a3.61 3.61 0 0 0 2.079 3.773 3.6 3.6 0 0 0 1.492.326h8.805a3.598 3.598 0 0 0 3.57-4.099l-.9-6.564A3.6 3.6 0 0 0 16.252 3H9.267a3.61 3.61 0 0 0-3.59 3.121"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.396 16.783 5.51 21m11.563-4.217L19.96 21m-.989-1.448H6.497"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.114 9.888H9.266a.977.977 0 0 1-.978-1.213l.371-1.869a.98.98 0 0 1 .978-.822h6.076a.98.98 0 0 1 .978.822l.372 1.869a.98.98 0 0 1-.95 1.213"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.556 13.105v.048m.195-.037a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMetroTwoTone;
