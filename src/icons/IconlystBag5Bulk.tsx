import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag5Bulk = ({
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
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M17.2 5.914H6.79c-2.53 0-4.25 1.76-4.29 4.4h19c-.04-2.64-1.76-4.4-4.3-4.4M2.5 15.164h19v-3.35h-19zM2.5 16.704c0 2.68 1.73 4.49 4.29 4.49H17.2c2.57 0 4.3-1.81 4.3-4.49v-.04h-19z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.39 5.775c0-.81.66-1.47 1.47-1.47h2.28c.81 0 1.47.66 1.47 1.47v.14h1.5v-.14a2.97 2.97 0 0 0-2.97-2.97h-2.28a2.97 2.97 0 0 0-2.97 2.97v.14h1.5zM2.5 16.665h19v-1.5h-19zM2.5 11.815h19v-1.5h-19z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag5Bulk;
