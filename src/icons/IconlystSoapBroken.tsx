import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoapBroken = ({
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
      d="M19.755 11.77v-1.04a1.04 1.04 0 0 0-1.04-1.04H6.232a1.04 1.04 0 0 0-1.04 1.04v1.04a7.282 7.282 0 0 0 13.898 3.044M16.453 18.169v1.836c0 .55-.445.995-.995.995h-2.574"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.492 18.169v1.836c0 .55.446.995.996.995h1.062M4.246 5.184l4.066 4.504M8.406 3.104l4.066 6.586M13.321 4.94c.44-.787.102-1.656-.753-1.94M17.058 5.1c-.868.242-1.248 1.093-.849 1.9"
    />
  </Svg>
);
export default IconlystSoapBroken;
