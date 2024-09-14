import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleOutlinesharp = ({
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
      d="M12.25 4a8.5 8.5 0 0 0-8.5 8.5 8.5 8.5 0 0 0 8.5 8.5 8.5 8.5 0 0 0 8.5-8.5 8.5 8.5 0 0 0-8.5-8.5m-10 8.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.662 7.596v5.171l4.048 2.415-.768 1.289-4.78-2.852V7.596z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimeCircleOutlinesharp;
