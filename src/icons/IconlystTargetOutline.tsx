import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetOutline = ({
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
      d="M19.02 2.533a.75.75 0 0 1 .75.75v1.48h1.48a.75.75 0 0 1 0 1.5h-1.919l-6.054 6.055h1.217a.75.75 0 0 1 0 1.5h-3.027a.75.75 0 0 1-.75-.748m1.5-1.813 6.054-6.054v-1.92a.75.75 0 0 1 .75-.75m-8.304 10.535V10.04a.75.75 0 0 1 1.5 0v1.216"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.514 5.506a7.514 7.514 0 1 0 7.139 5.165.75.75 0 1 1 1.425-.468c.291.887.448 1.834.448 2.816a9.013 9.013 0 1 1-2.772-6.503.75.75 0 1 1-1.038 1.082 7.5 7.5 0 0 0-5.202-2.092"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetOutline;
