import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetflixCircleLight = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.5 15-5.917-7.173a.9.9 0 0 0-.695-.327H8.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h1.2a.9.9 0 0 0 .9-.9v-2.964"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.5 9 5.918 7.173a.9.9 0 0 0 .694.327H15.6a.9.9 0 0 0 .9-.9V8.4a.9.9 0 0 0-.9-.9h-1.2a.9.9 0 0 0-.9.9v2.962"
    />
  </Svg>
);
export default IconlystNetflixCircleLight;
