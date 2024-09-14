import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoriesBold = ({
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
      d="M12.992 13.632a3.7 3.7 0 0 1-1.86-.505l-5.545-3.25a2.08 2.08 0 0 1-1.038-1.81c0-.754.388-1.43 1.038-1.812l5.545-3.25a3.69 3.69 0 0 1 3.719-.002v.001l5.546 3.251a2.08 2.08 0 0 1 1.038 1.811c0 .754-.388 1.431-1.04 1.811l-5.543 3.25a3.7 3.7 0 0 1-1.86.505"
    />
    <Path
      fill={props.color}
      d="m15.583 14.421 2.91-1.706 2.12 1.385c.612.401.966 1.077.948 1.808a2.09 2.09 0 0 1-1.037 1.76l-5.675 3.325a3.67 3.67 0 0 1-3.719 0l-5.694-3.338A2.08 2.08 0 0 1 4.4 15.906a2.09 2.09 0 0 1 .934-1.808l2.115-1.407 2.95 1.73a5.13 5.13 0 0 0 5.184 0"
    />
  </Svg>
);
export default IconlystCategoriesBold;
