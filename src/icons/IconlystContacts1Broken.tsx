import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts1Broken = ({
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
      d="M9.112 21.897c-3.025 0-4.67-1.845-4.67-4.8V8.58c0-2.964 1.645-4.8 4.67-4.79h8.063c3.025 0 4.68 1.836 4.68 4.799v8.508c0 2.955-1.684 4.8-4.756 4.8h-4.233"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.97 17.697c0-1.206.953-2.709 3.695-2.709 2.744 0 3.696 1.492 3.696 2.699M16.025 10.349a2.36 2.36 0 1 1-2.36-2.36M2.854 8.777h3.31m-3.31 8.128h3.31"
    />
  </Svg>
);
export default IconlystContacts1Broken;
