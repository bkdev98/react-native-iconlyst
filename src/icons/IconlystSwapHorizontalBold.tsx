import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapHorizontalBold = ({
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
      d="M15.15 11.45a1.002 1.002 0 0 1-1-1V9.092H5.968a1 1 0 0 1 0-2h8.184V5.735a1 1 0 0 1 1.633-.774l2.832 2.318a1 1 0 0 1 .025 1.608l-2.857 2.336a1 1 0 0 1-.633.226M8.85 19.642a1 1 0 0 1-.634-.226l-2.85-2.332a.998.998 0 0 1 .022-1.615l2.828-2.315a1 1 0 0 1 1.633.774v1.357h8.184a1 1 0 1 1 0 2H9.85v1.357a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapHorizontalBold;
