import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExpandRightStopOutline = ({
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
      fillRule="evenodd"
      d="M5.687 5.444a.75.75 0 0 0-.437.681v12a.75.75 0 0 0 1.238.57l7-6a.75.75 0 0 0 0-1.14l-7-6a.75.75 0 0 0-.801-.111M6.75 7.756l5.098 4.369-5.098 4.37zM17.25 6.125v12a.75.75 0 0 0 1.5 0v-12a.75.75 0 0 0-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExpandRightStopOutline;
