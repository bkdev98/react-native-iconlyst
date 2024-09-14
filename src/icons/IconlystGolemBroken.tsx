import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGolemBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.265 9.267a1.872 1.872 0 1 0-3.745 0 1.872 1.872 0 0 0 3.745 0M14.265 15.188a1.872 1.872 0 1 0-3.745 0 1.872 1.872 0 0 0 3.745 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.48 6.94-.824.95M12.393 11.139v2.178M12.5 21a9 9 0 1 1 4.172-1.023"
    />
  </Svg>
);
export default IconlystGolemBroken;
