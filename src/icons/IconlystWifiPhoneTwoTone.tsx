import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiPhoneTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.514 10.182-.002-3.564A3.62 3.62 0 0 0 13.895 3H8.379a3.62 3.62 0 0 0-3.617 3.618v10.764A3.62 3.62 0 0 0 8.38 21h1.915M9.746 6.688h2.784"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.375 16.047a6.3 6.3 0 0 1 7.865 0M14.309 18.478a3.104 3.104 0 0 1 4.003-.006M16.313 20.89v.014"
    />
  </Svg>
);
export default IconlystWifiPhoneTwoTone;
