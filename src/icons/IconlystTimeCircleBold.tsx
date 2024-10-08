import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M12 2c5.53 0 10 4.48 10 10 0 5.53-4.47 10-10 10-5.52 0-10-4.47-10-10C2 6.48 6.48 2 12 2m-.35 4.93c-.41 0-.75.33-.75.75v5.05c0 .26.14.5.37.64l3.92 2.34a.742.742 0 0 0 1.03-.26c.21-.35.1-.81-.26-1.03L12.4 12.3V7.68c0-.42-.34-.75-.75-.75"
    />
  </Svg>
);
export default IconlystTimeCircleBold;
