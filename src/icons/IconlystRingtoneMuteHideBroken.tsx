import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneMuteHideBroken = ({
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
      d="M7.24 16.617c-1.224-.487-1.855-1.305-1.962-2.619 0-2.61 1.566-2.449 1.566-5.652M17.788 6.07A5.81 5.81 0 0 0 12.613 3c-1.894 0-3.43.836-4.44 2M18.47 9.537c.328 2.024 1.478 2.23 1.478 4.461-.216 2.62-2.466 3.267-7.335 3.267-.705 0-1.352-.011-1.945-.044M10.546 19.974A2.69 2.69 0 0 0 12.643 21a2.69 2.69 0 0 0 2.106-1.026M4.887 18.974 20.115 3.746"
    />
  </Svg>
);
export default IconlystRingtoneMuteHideBroken;
