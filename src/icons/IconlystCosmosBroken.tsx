import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCosmosBroken = ({
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
      strokeWidth={1.5}
      d="M7.796 14.715a1.07 1.07 0 0 1 .392-1.461l7.555-4.363a1.07 1.07 0 0 1 1.07 1.854l-7.556 4.362a1.07 1.07 0 0 1-1.461-.392Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M7.796 9.283a1.07 1.07 0 0 0 .392 1.462l7.555 4.363a1.07 1.07 0 0 0 1.07-1.854L9.257 8.891a1.07 1.07 0 0 0-1.461.392Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.5 17.433a1.07 1.07 0 0 1-1.07-1.07V7.637a1.07 1.07 0 0 1 2.14 0v8.724c0 .592-.48 1.07-1.07 1.07Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21a9 9 0 1 1 4.172-1.023"
    />
  </Svg>
);
export default IconlystCosmosBroken;
