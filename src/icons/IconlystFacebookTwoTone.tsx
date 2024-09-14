import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookTwoTone = ({
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
      d="M9.75 10.2V7.5c0-1.197.474-2.34 1.318-3.186A4.52 4.52 0 0 1 14.25 3h2.2a.5.5 0 0 1 .5.5v2.6a.5.5 0 0 1-.5.5h-2.2c-.238 0-.468.1-.636.26a.9.9 0 0 0-.264.64v2.7m-3.6 3.6v6.7a.5.5 0 0 0 .5.5h2.6a.5.5 0 0 0 .5-.5v-6.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 10.2h-2.2a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5h2.2m3.6 0h3.1a.5.5 0 0 0 .5-.5v-2.6a.5.5 0 0 0-.5-.5h-3.1"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFacebookTwoTone;
