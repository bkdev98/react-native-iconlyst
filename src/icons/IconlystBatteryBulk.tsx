import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryBulk = ({
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
      d="M7.343 5.245c0-.36.3-.65.65-.65.36 0 .65.29.65.65v.9h-1.3zm8.08 0c0-.36.29-.65.65-.65.35 0 .64.29.64.65v.9h-1.29zm2.79.97v-.97a2.145 2.145 0 1 0-4.29 0v.9h-3.78v-.9c0-1.19-.96-2.15-2.15-2.15-1.18 0-2.15.96-2.15 2.15v.97c-2 .32-3.31 1.92-3.31 4.2v5.96c0 2.55 1.64 4.27 4.09 4.27h10.82c2.45 0 4.09-1.72 4.09-4.27v-5.96c0-2.28-1.31-3.88-3.32-4.2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.833 14.155h3.6a.749.749 0 1 0 0-1.5h-3.6c-.42 0-.75.33-.75.75 0 .41.33.75.75.75M9.183 14.155h1.05a.749.749 0 1 0 0-1.5h-1.05v-1.05a.749.749 0 1 0-1.5 0v1.05h-1.05c-.41 0-.75.34-.75.75s.34.75.75.75h1.05v1.05a.749.749 0 1 0 1.5 0z"
    />
  </Svg>
);
export default IconlystBatteryBulk;
