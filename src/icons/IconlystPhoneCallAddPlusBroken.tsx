import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallAddPlusBroken = ({
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
      d="M8.794 15.63c8.082 8.079 10.382 4.579 10.744 4.289 2.89-2.89 1.578-3.346-.703-5.627-2.365-2.363-3.47 2.196-7.185-1.519s.841-4.821-1.524-7.187c-2.28-2.279-2.73-3.597-5.626-.7-.256.317-2.985 2.132 1.835 8.047M18.655 3.08v5.69M21.5 5.925h-5.69"
    />
  </Svg>
);
export default IconlystPhoneCallAddPlusBroken;
