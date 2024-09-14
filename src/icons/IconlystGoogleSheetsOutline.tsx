import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleSheetsOutline = ({
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
      d="M14.238 2.344a.75.75 0 0 1 .75.75v3.462c0 .414.336.75.75.75H19.2a.75.75 0 0 1 0 1.5h-3.462a2.25 2.25 0 0 1-2.25-2.25V3.094a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.799 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h10.4c.692 0 1.25-.559 1.25-1.248V8.352c0-.33-.13-.643-.365-.88l-3.357-3.356a1.24 1.24 0 0 0-.88-.366zM4.049 5A2.75 2.75 0 0 1 6.8 2.25h7.047c.73 0 1.427.29 1.941.805l3.357 3.357c.515.515.806 1.209.806 1.94v10.65a2.75 2.75 0 0 1-2.75 2.748H6.8A2.75 2.75 0 0 1 4.05 19z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.223 12.031c0-.966.783-1.75 1.75-1.75h6.054c.966 0 1.75.784 1.75 1.75v4.221a1.75 1.75 0 0 1-1.75 1.75H8.973a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v4.221c0 .139.112.25.25.25h6.054a.25.25 0 0 0 .25-.25v-4.22a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.223 14.14a.75.75 0 0 1 .75-.75h8.054a.75.75 0 0 1 0 1.5H7.973a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 10.281a.75.75 0 0 1 .75.75v6.221a.75.75 0 0 1-1.5 0v-6.22a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleSheetsOutline;
