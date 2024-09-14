import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraDisbaleBroken = ({
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
      d="M8.743 5.047h4.232a3.857 3.857 0 0 1 3.857 3.857v4.187c0 .503.226.98.615 1.299l2.613 2.141a1.232 1.232 0 0 0 2.012-.95l.006-3.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.824 10.038 3.249-2.658a1.231 1.231 0 0 1 2.01.954v.918M4.235 5.902c-.789.681-1.222 1.737-1.222 3v3.052M3.013 15.008c0 2.26 1.41 3.857 3.669 3.857h6.48c1.017 0 1.865-.325 2.486-.889M17.907 20.368 2.084 3.628"
    />
  </Svg>
);
export default IconlystVideoCameraDisbaleBroken;
