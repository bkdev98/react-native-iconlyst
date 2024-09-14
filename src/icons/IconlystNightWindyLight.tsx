import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNightWindyLight = ({
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
      d="M4.833 14.327h5.234a3.102 3.102 0 1 1-2.194 5.297M3.114 9.187h7.597a2.756 2.756 0 1 0-1.948-4.704M14.828 12.04h3.57a2.288 2.288 0 1 1-1.618 3.905"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.251 5.732a3.78 3.78 0 0 1 2.431 2.432 3.78 3.78 0 0 1 2.432-2.432A3.78 3.78 0 0 1 18.682 3.3a3.78 3.78 0 0 1-2.431 2.432"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.004 20.212q.005 0 .005-.005t-.005-.005q-.003 0-.004.005 0 .005.004.005M4.579 5.244q.003 0 .004-.005 0-.005-.004-.005-.005 0-.005.005t.005.005"
    />
  </Svg>
);
export default IconlystNightWindyLight;
