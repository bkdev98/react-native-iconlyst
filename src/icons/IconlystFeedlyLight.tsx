import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFeedlyLight = ({
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
      d="m8.25 12.902 4-4M10.25 14.902l2-2M12.25 16.902l.5-.5M4.229 9.84l4.958-4.958c1.733-1.733 4.036-1.588 5.767.143l4.672 4.672c1.731 1.732 1.876 4.034.142 5.768l-4.374 4.31a2 2 0 0 1-1.403.576H9.88a2 2 0 0 1-1.424-.597l-4.085-4.147c-1.731-1.731-1.871-4.038-.143-5.766"
    />
  </Svg>
);
export default IconlystFeedlyLight;
