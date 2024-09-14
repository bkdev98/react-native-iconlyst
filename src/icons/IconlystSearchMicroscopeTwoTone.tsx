import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMicroscopeTwoTone = ({
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
      d="m7.465 9.505-.027-.02M14.098 16.064h-.024M17.6 9.504h.021M11.835 15.511l-1.466.652M12.858 11.226l-1.133 1.134M10.364 8.116 9.23 6.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.034 13.203a1.07 1.07 0 1 1-2.138 0 1.07 1.07 0 0 1 2.138 0M15.628 7.452a1.07 1.07 0 1 1-2.139 0 1.07 1.07 0 0 1 2.139 0M17.345 12.765a1.07 1.07 0 1 1-2.139 0 1.07 1.07 0 0 1 2.139 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.861 17.584 21.286 21M12.132 3a8.418 8.418 0 1 1-.001 16.836A8.418 8.418 0 0 1 12.132 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSearchMicroscopeTwoTone;
