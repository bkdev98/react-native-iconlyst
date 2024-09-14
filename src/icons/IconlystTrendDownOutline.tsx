import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownOutline = ({
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
      d="M21.5 11.37a.75.75 0 0 1 .75.749v4.909a.75.75 0 0 1-.75.75h-4.91a.75.75 0 1 1 0-1.5h4.16v-4.159a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.97 6.678a.75.75 0 0 1 1.06 0l5.607 5.606 3.56-3.56a.75.75 0 0 1 1.06 0l7.773 7.772a.75.75 0 0 1-1.06 1.061l-7.243-7.242-3.56 3.56a.75.75 0 0 1-1.06 0L2.97 7.74a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendDownOutline;
