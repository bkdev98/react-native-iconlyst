import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinStarOutline = ({
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
      d="M12.25 21.749c-1.8 0-8.276-5.57-8.276-11.223a8.276 8.276 0 1 1 16.552 0c-.001 5.653-6.476 11.223-8.276 11.223m0-18a6.784 6.784 0 0 0-6.776 6.777c0 4.846 5.749 9.557 6.805 9.724 1-.168 6.747-4.879 6.747-9.724a6.784 6.784 0 0 0-6.776-6.777"
    />
    <Path
      fill={props.color}
      d="M10.423 14.05a1.22 1.22 0 0 1-1.205-1.408l.241-1.386-1.015-.973a1.212 1.212 0 0 1 .674-2.073l1.41-.2.63-1.257a1.222 1.222 0 0 1 2.177 0l.63 1.257 1.41.2a1.209 1.209 0 0 1 .671 2.073l-1.012.97.24 1.376a1.217 1.217 0 0 1-1.769 1.279l-1.256-.651-1.265.655c-.173.091-.365.139-.56.139m-.129-1.468h-.006zm-.38-2.966.7.67a1.2 1.2 0 0 1 .352 1.08l-.166.957.89-.46a1.21 1.21 0 0 1 1.125 0l.886.459-.167-.96a1.2 1.2 0 0 1 .354-1.078l.7-.67-.975-.14a1.21 1.21 0 0 1-.916-.661l-.448-.887-.444.887a1.22 1.22 0 0 1-.92.66z"
    />
  </Svg>
);
export default IconlystPinStarOutline;
