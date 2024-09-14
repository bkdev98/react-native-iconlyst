import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosTwoTone = ({
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
      d="M7.5 6.246a4.5 4.5 0 0 1 4.5 4.5V12H3v-1.254a4.5 4.5 0 0 1 4.5-4.5M16.5 17.755a4.5 4.5 0 0 1-4.5-4.5V12h9v1.255a4.5 4.5 0 0 1-4.5 4.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.244 16.5a4.5 4.5 0 0 1 4.5-4.5h1.254v9h-1.254a4.5 4.5 0 0 1-4.5-4.5M17.754 7.5a4.5 4.5 0 0 1-4.5 4.5H12V3h1.254a4.5 4.5 0 0 1 4.5 4.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGooglePhotosTwoTone;
