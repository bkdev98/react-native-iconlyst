import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentSignalsOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.36 3.87a3.276 3.276 0 0 0-3.276 3.275v9.539a3.276 3.276 0 0 0 3.276 3.275.75.75 0 0 1 0 1.5 4.776 4.776 0 0 1-4.776-4.775V7.145A4.776 4.776 0 0 1 8.36 2.37h6.935a4.776 4.776 0 0 1 4.775 4.776v6.152a.75.75 0 1 1-1.5 0V7.145a3.276 3.276 0 0 0-3.275-3.276z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.994 14.06a.75.75 0 0 0 .75-.75V8.343a.75.75 0 0 0-1.5 0v4.967c0 .414.335.75.75.75m-4.337 0a.75.75 0 0 0 .75-.75v-2.593a.75.75 0 0 0-1.5 0v2.593c0 .414.336.75.75.75M21.18 16.893a.75.75 0 0 1 .034 1.06l-2.61 2.788a.75.75 0 0 1-.955.116l-2.515-1.633-2.238 2.406a.75.75 0 1 1-1.098-1.022l2.667-2.867a.75.75 0 0 1 .958-.118l2.516 1.634 2.18-2.329a.75.75 0 0 1 1.06-.035"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentSignalsOutline;
