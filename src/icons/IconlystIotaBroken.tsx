import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIotaBroken = ({
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
      d="M7.57 12.94s-.63 5.43 2.58 7.65M9.28 12.71s-.45 4.55 4.94 8.12M14.84 18.02c.98.78 2.19 1.51 3.71 2.11M10.97 12.11s.24 1.63 1.61 3.54M6.36 10.8c-.91.49-1.87 1.14-2.86 2M13.83 9.84s-1.58-.65-4.01-.25M14.17 7.99s-3.48-2.69-9.09.48M14.67 6.28s-4.11-3.31-7.53-1.47M16.85 8.03c.19-1.37.21-2.99-.08-4.86M14.02 14.15s1.03-.88 1.87-2.75M15.36 15.41s3.94-1.86 4.15-8.6M16.55 16.72s4.75-2.14 4.95-6.2"
    />
  </Svg>
);
export default IconlystIotaBroken;
