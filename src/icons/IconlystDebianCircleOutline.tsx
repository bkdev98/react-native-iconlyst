import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDebianCircleOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.77V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.77-5.53 5.77m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.59 1.58 4.27 4.03 4.27h8.43c2.45 0 4.03-1.68 4.03-4.27V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M11.995 17.9c-.09 0-.18-.02-.27-.05-2.72-1.07-4.48-3.55-4.48-6.33 0-2.38 1.07-3.53 1.88-4.18 1.48-1.19 3.55-1.33 5.28-.36 1.68.95 2.57 2.68 2.32 4.51a2.886 2.886 0 0 1-2.85 2.48c-1.58 0-2.87-1.29-2.87-2.87 0-.58.18-1.15.51-1.64.23-.34.7-.43 1.04-.2s.43.7.2 1.04c-.16.24-.25.52-.25.8 0 .75.62 1.37 1.37 1.37.68 0 1.27-.51 1.36-1.18.2-1.45-.68-2.5-1.57-3-1.19-.67-2.6-.58-3.59.22-.39.32-1.32 1.08-1.32 3.02 0 2.16 1.38 4.09 3.52 4.93.38.15.58.59.42.97-.12.29-.4.48-.7.48z"
    />
  </Svg>
);
export default IconlystDebianCircleOutline;
