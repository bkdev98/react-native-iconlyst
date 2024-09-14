import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplaySearchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.295 13.234a3.937 3.937 0 0 1-3.937 3.937H7.643a3.937 3.937 0 0 1-3.938-3.937V11.41M12.904 3.965h4.454A3.937 3.937 0 0 1 21.296 7.9v2.667M17.332 21H7.67M10.433 17.172 9.811 21M14.568 17.172 15.191 21M4.072 5.65a2.65 2.65 0 1 0 1.366-2.319M8.526 7.592l1.334 1.33"
    />
  </Svg>
);
export default IconlystMonitorDisplaySearchBroken;
