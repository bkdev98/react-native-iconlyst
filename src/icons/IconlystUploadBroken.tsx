import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadBroken = ({
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
      d="M16.655 8.984h.943a3.675 3.675 0 0 1 3.674 3.675v4.885a3.685 3.685 0 0 1-3.685 3.684h-1.783M7.39 8.984h-.934a3.685 3.685 0 0 0-3.685 3.685v4.875a3.685 3.685 0 0 0 3.685 3.684h5.565M12.022 2.19v12.042M9.106 5.119l.73-.732M12.02 2.19l2.916 2.928"
    />
  </Svg>
);
export default IconlystUploadBroken;
