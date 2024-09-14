import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookGamingOutline = ({
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
      d="M9.361 10.582c0-.675.548-1.223 1.223-1.223h9.444c.675 0 1.222.548 1.222 1.223v9.444c0 .675-.547 1.222-1.222 1.222h-2.833a1.22 1.22 0 0 1-1.223-1.222v-5.389h-5.388a1.22 1.22 0 0 1-1.223-1.222zm1.5.277v2.278h5.861a.75.75 0 0 1 .75.75v5.861h2.278V10.86z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 3.972c0-.675.547-1.222 1.222-1.222h16.056c.675 0 1.222.547 1.222 1.222v2.834c0 .675-.547 1.222-1.222 1.222h-12v7.944h5.389c.675 0 1.222.547 1.222 1.222v2.834c0 .675-.547 1.222-1.222 1.222H3.972a1.22 1.22 0 0 1-1.222-1.222zm1.5.278v15.5h8.889v-2.278H7.278a.75.75 0 0 1-.75-.75V7.278a.75.75 0 0 1 .75-.75H19.75V4.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookGamingOutline;
