import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp4Broken = ({
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
      d="M3.5 20.493h18M9.3 11.356l1.468 1.539 1.728-1.8 1.728 1.8 1.476-1.54M14.929 20.493l-2.43-4.504-1.213 2.252M4.379 20.49l9.153-16.983M11.47 3.507l5.716 10.614M20.615 20.49l-2.286-4.246"
    />
  </Svg>
);
export default IconlystCamp4Broken;
