import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoapLight = ({
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
      d="M12.473 19.051a7.28 7.28 0 0 0 7.282-7.282v-1.04a1.04 1.04 0 0 0-1.04-1.04H6.232a1.04 1.04 0 0 0-1.04 1.04v1.04a7.28 7.28 0 0 0 7.281 7.282"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.492 18.169v1.836c0 .55.446.995.996.995h5.97c.55 0 .995-.445.995-.995v-1.836M4.246 5.184l4.066 4.504M8.406 3.104l4.066 6.586M13.321 4.94c.44-.787.102-1.656-.753-1.94M17.058 5.1c-.868.242-1.248 1.093-.849 1.9"
    />
  </Svg>
);
export default IconlystSoapLight;
