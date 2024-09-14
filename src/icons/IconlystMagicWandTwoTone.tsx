import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandTwoTone = ({
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
      d="M10.851 11.073a1.514 1.514 0 0 1 2.262 2.012l-6.717 7.407a1.514 1.514 0 1 1-2.262-2.012z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.14 8.812-.113-.306a4.2 4.2 0 0 0-2.483-2.487l-.306-.113.306-.113a4.2 4.2 0 0 0 2.483-2.487L16.14 3l.113.306a4.2 4.2 0 0 0 2.483 2.487l.306.113-.306.113a4.2 4.2 0 0 0-2.483 2.487zM8.328 8.323a2.22 2.22 0 0 0-1.477-1.48 2.22 2.22 0 0 0 1.477-1.479c.216.709.77 1.264 1.478 1.48a2.22 2.22 0 0 0-1.478 1.48M19.042 14.24a1.82 1.82 0 0 0-1.207-1.209 1.82 1.82 0 0 0 1.207-1.209c.176.58.628 1.033 1.207 1.21a1.82 1.82 0 0 0-1.207 1.208"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.535 12.6 2.206 1.962M15.797 17.353h-.01"
    />
  </Svg>
);
export default IconlystMagicWandTwoTone;
