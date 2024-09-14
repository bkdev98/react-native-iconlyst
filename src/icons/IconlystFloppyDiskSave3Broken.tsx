import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSave3Broken = ({
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
      d="M12 21H7.781C4.834 21 3 18.919 3 15.974V8.026C3 5.08 4.843 3 7.782 3h6.323c.66 0 1.29.269 1.746.743l4.475 4.662c.433.45.674 1.05.674 1.675v5.894C21 18.919 19.166 21 16.217 21h-1.109"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.696 13.365a1.721 1.721 0 1 1-1.721 1.721M6.975 7.479h6.885"
    />
  </Svg>
);
export default IconlystFloppyDiskSave3Broken;
