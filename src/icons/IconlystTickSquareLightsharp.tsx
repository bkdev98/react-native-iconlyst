import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareLightsharp = ({
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
      d="M8.62 11.793c2.09 1.32 3.65 3.68 3.65 3.68h.032s3.316-5.867 9.477-9.476"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.971 21.785a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTickSquareLightsharp;
