import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoreCircleBulkcurved = ({
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
      d="M12.25 2.785c-7.199 0-9.75 2.55-9.75 9.75 0 7.198 2.551 9.75 9.75 9.75S22 19.733 22 12.535c0-7.2-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.46 14.435a1.003 1.003 0 0 0 2.003 0 1 1 0 0 0-1-1h-.009a.995.995 0 0 0-.995 1M11.46 10.435a1.003 1.003 0 0 0 2.003 0 1 1 0 0 0-1-1h-.009a.995.995 0 0 0-.995 1M8.45 14.435c0 .553.453 1 1.005 1a1 1 0 1 0 0-2h-.009a.996.996 0 0 0-.996 1"
    />
  </Svg>
);
export default IconlystMoreCircleBulkcurved;
