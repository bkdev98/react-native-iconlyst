import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodCase3Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.765 3.75a3.567 3.567 0 0 0-3.567 3.567v.62h14.103v-.62a3.567 3.567 0 0 0-3.567-3.567zm12.036 3.567c0-2.799-2.27-5.067-5.067-5.067H8.765a5.067 5.067 0 0 0-5.067 5.067v9.365a5.07 5.07 0 0 0 5.067 5.068h6.969a5.07 5.07 0 0 0 5.067-5.068zm-1.5 2.12H5.198v7.245a3.57 3.57 0 0 0 3.567 3.568h6.969a3.57 3.57 0 0 0 3.567-3.568zm-7.052 6.456a.75.75 0 0 1 .75.75v.07a.75.75 0 0 1-1.5 0v-.07a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodCase3Outline;
