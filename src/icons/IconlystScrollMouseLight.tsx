import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollMouseLight = ({
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
      d="M18.697 14.703C18.697 18.18 15.7 21 12.002 21s-6.695-2.818-6.696-6.294l-.001-5.409C5.304 5.82 8.3 3 12 3c3.697 0 6.695 2.818 6.696 6.295z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.688 11.453 1.311 1.312 1.313-1.312M10.688 7.782l1.311-1.311 1.313 1.311M12 6.492v6.276"
    />
  </Svg>
);
export default IconlystScrollMouseLight;
