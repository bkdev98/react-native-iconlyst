import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMittensLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.853 8.655-1.69 1.493-1.689-1.493-1.689 1.493-1.689-1.493-1.69 1.493-1.688-1.493M9.948 20.15v1.715M6.873 20.15v1.715M13.024 20.15v1.715"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.712 17.44V8.435a5.07 5.07 0 0 1 10.14 0v3.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.853 10.857 1.04-1.038a2.234 2.234 0 0 1 3.157 3.162l-4.255 4.25M13.793 17.44h-7.69c-.998 0-1.807.592-1.807 1.57l-.001 1.285c0 .978.81 1.57 1.807 1.57h7.69c.999 0 1.808-.592 1.808-1.57V19.01c0-.978-.808-1.57-1.807-1.57"
    />
  </Svg>
);
export default IconlystChristmasMittensLight;
