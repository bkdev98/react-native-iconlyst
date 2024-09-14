import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapVerticalOutline = ({
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
      d="M9.089 5.289a.75.75 0 0 1 1.06 0l7.523 7.523.61-3.807a.75.75 0 0 1 1.481.237l-.842 5.257a.75.75 0 0 1-1.27.412L9.088 6.35a.75.75 0 0 1 0-1.061m-3.5 3.617a.75.75 0 0 1 .76.183l8.562 8.561a.75.75 0 0 1-1.06 1.06l-7.523-7.522-.61 3.807a.75.75 0 0 1-1.481-.237l.842-5.257a.75.75 0 0 1 .51-.595"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapVerticalOutline;
