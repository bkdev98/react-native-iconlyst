import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnBackBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.618 15.324a2.71 2.71 0 0 0-2.706 2.706 2.71 2.71 0 0 0 2.706 2.706 2.71 2.71 0 0 0 2.707-2.706 2.71 2.71 0 0 0-2.707-2.706"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.636 6.035H9.47V4.761a1 1 0 0 0-1.593-.806L4.787 6.23a1.005 1.005 0 0 0 0 1.612l3.09 2.274a1.01 1.01 0 0 0 1.045.087 1 1 0 0 0 .549-.893V8.035h3.165a4.99 4.99 0 0 1 4.985 4.986 4.99 4.99 0 0 1-4.985 4.987 1 1 0 1 0 0 2c3.852 0 6.985-3.134 6.985-6.987 0-3.852-3.133-6.986-6.985-6.986"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnBackBold;
