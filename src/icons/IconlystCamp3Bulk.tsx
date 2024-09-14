import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp3Bulk = ({
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
      d="M21.75 20.489c0 .42-.34.75-.75.75H3a.749.749 0 1 1 0-1.5h.43l7.72-14.31-.84-1.56c-.2-.36-.06-.82.31-1.02.36-.19.82-.06 1.01.31l.37.69.37-.69c.2-.37.65-.5 1.02-.31.36.2.5.66.3 1.02l-.84 1.56 2.65 4.91 5.06 9.4H21c.41 0 .75.34.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.84 21.238h-1.71l-1.88-3.49-1.88 3.49H8.66l2.93-5.42c.26-.49 1.06-.49 1.32 0zM16.29 11.808c-.05.02-.11.03-.17.03H7.69l.81-1.5h7z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp3Bulk;
