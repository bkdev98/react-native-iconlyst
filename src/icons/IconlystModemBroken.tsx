import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystModemBroken = ({
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
      d="M12.043 18.882H5.549a2.506 2.506 0 0 1-2.506-2.507v-1.607a2.506 2.506 0 0 1 2.506-2.506h12.988a2.506 2.506 0 0 1 2.506 2.506v1.607a2.506 2.506 0 0 1-2.506 2.507H16.29M6.8 15.572H6.29m3.564 0h-.51M12.043 9.02v3.242M7.357 12.263V5.117M16.729 12.263V5.117"
    />
  </Svg>
);
export default IconlystModemBroken;
