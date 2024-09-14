import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallLightsharp = ({
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
      d="M18.066 21.842C8.916 22.26 2.103 11.887 3.05 6.826c.869-1.493 1.982-2.598 3.472-3.472l3.24 4.451L8.12 10.66s.454 1.906 2.162 3.614c1.792 1.792 3.792 2.34 3.792 2.34l2.854-1.643 4.61 3.4c-.857 1.532-1.938 2.614-3.471 3.472Z"
    />
  </Svg>
);
export default IconlystCallLightsharp;
