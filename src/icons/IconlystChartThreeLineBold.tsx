import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartThreeLineBold = ({
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
      d="M7.046 11.99H4.242c-.686 0-1.242.556-1.242 1.242v5.962c0 .684.556 1.242 1.242 1.242h2.804c.686 0 1.242-.558 1.242-1.242v-5.961c0-.687-.556-1.242-1.242-1.242M20.758 7.768h-2.783c-.686 0-1.242.556-1.242 1.242v10.183c0 .686.556 1.242 1.242 1.242h2.783c.686 0 1.242-.556 1.242-1.242V9.01c0-.686-.556-1.242-1.242-1.242M14.171 3.504h-3.322c-.686 0-1.242.556-1.242 1.242v14.51c0 .686.556 1.242 1.242 1.242h3.322c.686 0 1.242-.556 1.242-1.242V4.746c0-.686-.556-1.242-1.242-1.242"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartThreeLineBold;
