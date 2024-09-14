import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteemLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 7.125-.54 1.072a2.73 2.73 0 0 0 0 2.46l1.02 2.063a4.02 4.02 0 0 1 .023 3.311l-.375.87M8.626 8.137l-.428.862a2.17 2.17 0 0 0 0 1.943l.803 1.612a3.2 3.2 0 0 1 .018 2.625l-.303.687M15.376 8.137l-.428.862a2.17 2.17 0 0 0 0 1.943l.803 1.612a3.2 3.2 0 0 1 0 2.625l-.304.687"
    />
  </Svg>
);
export default IconlystSteemLight;
