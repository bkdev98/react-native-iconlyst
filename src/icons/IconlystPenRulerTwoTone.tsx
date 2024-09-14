import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenRulerTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.437 20.097a1.27 1.27 0 0 0 1.144 1.115 5.17 5.17 0 0 0 4.18-1.54L20.61 8.784a2.718 2.718 0 1 0-3.895-3.794L5.867 15.878a5.17 5.17 0 0 0-1.43 4.219M12.16 9.58l3.823 3.837"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.686 11.684-1.053-1.052a3.26 3.26 0 0 1 0-4.603l1.182-1.183a3.243 3.243 0 0 1 4.604 0l1.053 1.052M19.685 14.11l1.039 1.039a3.243 3.243 0 0 1 0 4.604l-1.183 1.182a3.26 3.26 0 0 1-4.603 0l-1.04-1.04"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPenRulerTwoTone;
