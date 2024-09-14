import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafariLight = ({
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
      strokeWidth={1.5}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v1.35M12 21v-1.35M21 12h-1.35M3 12h1.35M10.01 10.012l3.979 3.978"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.24 13.585 1.748-5.243a.26.26 0 0 0-.328-.329l-5.243 1.748c-.31.103-.554.347-.657.657L8.012 15.66a.26.26 0 0 0 .329.328l5.243-1.748c.31-.103.553-.346.656-.656"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSafariLight;
