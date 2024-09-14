import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftCircleOutlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2c5.522 0 10 4.477 10 10s-4.478 10-10 10-10-4.478-10-10 4.478-10 10-10m8.5 10a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.753 8.531 11.27 12l3.484 3.469-1.058 1.063L9.143 12l4.552-4.532z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftCircleOutlinesharp;
