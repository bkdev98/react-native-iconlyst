import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven2Broken = ({
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
      d="M12 21h3.787c2.649 0 4.296-1.868 4.296-4.514V7.514C20.083 4.869 18.436 3 15.788 3H8.214c-2.64 0-4.295 1.87-4.295 4.514v8.972C3.919 19.132 5.566 21 8.214 21h.695M8.235 6.03h-.01M15.785 6.03h-.01M12.01 6.03H12M3.918 8.481h13.097M15.077 12.677H8.93m-.005 3.503h6.152"
    />
  </Svg>
);
export default IconlystOven2Broken;
