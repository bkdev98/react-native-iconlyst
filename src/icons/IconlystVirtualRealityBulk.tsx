import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirtualRealityBulk = ({
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
      d="M16.25 2.495H7.815c-3.159 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.16 0 5.284-2.22 5.284-5.526V8.021c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m9.723 14.933 2.205-5.298a.75.75 0 0 0-1.385-.576L9.03 12.694 7.517 9.059a.749.749 0 1 0-1.385.576l2.206 5.298a.749.749 0 0 0 1.385 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.413 14.347a.75.75 0 1 1-1.283.778l-1.112-1.832h-.563v1.443a.75.75 0 0 1-1.5 0V9.253a.75.75 0 0 1 .75-.75H15.6a2.397 2.397 0 0 1 2.394 2.395 2.39 2.39 0 0 1-1.366 2.153zm-1.815-4.344a.895.895 0 0 1 0 1.79h-1.143v-1.79z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVirtualRealityBulk;
