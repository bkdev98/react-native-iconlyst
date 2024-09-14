import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMicroscopeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.632 3a8.418 8.418 0 1 1-4.135 1.084M6.965 9.505l-.027-.02M13.598 16.064h-.024M17.1 9.504h.021M11.335 15.511l-1.466.652M12.358 11.226l-1.133 1.134M9.864 8.116 8.73 6.982"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.534 13.203a1.07 1.07 0 1 0-1.695.866M12.99 7.452a1.07 1.07 0 1 1 1.771.806"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.845 12.765a1.07 1.07 0 1 1-2.139 0 1.07 1.07 0 0 1 2.139 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.361 17.584 20.786 21"
    />
  </Svg>
);
export default IconlystSearchMicroscopeBroken;
