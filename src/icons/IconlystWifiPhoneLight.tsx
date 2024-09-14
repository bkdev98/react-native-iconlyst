import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiPhoneLight = ({
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
      d="m17.014 10.182-.002-3.564A3.62 3.62 0 0 0 13.395 3H7.879a3.62 3.62 0 0 0-3.617 3.618v10.764A3.62 3.62 0 0 0 7.88 21h1.915M9.246 6.688h2.784"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.875 16.047a6.3 6.3 0 0 1 7.865 0M13.809 18.478a3.104 3.104 0 0 1 4.003-.006M15.813 20.89v.014"
    />
  </Svg>
);
export default IconlystWifiPhoneLight;
