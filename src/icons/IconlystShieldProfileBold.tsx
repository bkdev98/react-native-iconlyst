import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldProfileBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.978 16.67c-3.075 0-4.082 1.34-4.412 2.229a.28.28 0 0 0 .094.313c2.012 1.577 4.155 2.255 4.194 2.268a.5.5 0 0 0 .291 0c.04-.013 2.166-.687 4.171-2.25a.28.28 0 0 0 .095-.312c-.329-.898-1.336-2.247-4.433-2.247M11.983 8.4a2.1 2.1 0 0 0-2.1 2.101c0 1.158.943 2.1 2.1 2.1a2.101 2.101 0 0 0 0-4.2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.983 14.1a3.604 3.604 0 0 1-3.6-3.6c0-1.985 1.616-3.6 3.6-3.6a3.604 3.604 0 0 1 3.599 3.6c0 1.985-1.615 3.6-3.6 3.6m7.373-8.964C18.65 4.431 13.025 2.5 12 2.5S5.349 4.431 4.644 5.137c-.56.563-.553.996-.51 3.398.019.973.043 2.299.043 4.135 0 2.064.794 3.702 1.867 4.985.136.162.392.125.503-.055.833-1.344 2.53-2.43 5.432-2.43 2.922 0 4.625 1.094 5.456 2.45.111.18.368.218.504.056 1.082-1.286 1.885-2.93 1.885-5.006 0-1.831.024-3.155.042-4.129.043-2.407.05-2.84-.51-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldProfileBold;
