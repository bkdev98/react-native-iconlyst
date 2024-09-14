import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalmartBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.972 15.46a.75.75 0 0 1-1.028.264l-2.09-1.24a.75.75 0 1 1 .765-1.291l2.09 1.24a.75.75 0 0 1 .263 1.028M12.75 9.909a.75.75 0 0 1-1.5 0v-2.43a.75.75 0 0 1 1.5 0zm0 7.63a.75.75 0 0 1-1.5 0v-2.43a.75.75 0 0 1 1.5 0zm-2.601-3.054-2.09 1.24a.749.749 0 1 1-.766-1.291l2.09-1.24a.75.75 0 0 1 .766 1.291M7.032 9.556a.75.75 0 0 1 1.027-.262l2.09 1.24a.75.75 0 1 1-.766 1.289l-2.09-1.24a.75.75 0 0 1-.261-1.027m6.822.978 2.09-1.24a.75.75 0 0 1 1.027.262.75.75 0 0 1-.262 1.027l-2.09 1.24a.75.75 0 0 1-.765-1.289m2.363-7.525H7.783c-3.16 0-5.283 2.223-5.283 5.53v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalmartBold;
