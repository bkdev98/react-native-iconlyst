import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone5Broken = ({
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
      d="M10.907 4.95c1.017-1.117 2.836-.857 3.794 1.249l2.661 5.85c.626 1.374-.373 2.916-1.883 2.95-3.596.076-6.606.669-8.506 1.158-1.23.317-2.25-.414-2.776-1.571l-.391-.861c-.525-1.154-.412-2.405.633-3.121a37.6 37.6 0 0 0 4.62-3.762"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.303 15.843 1.715 3.769a1.71 1.71 0 0 0 3.111-1.415l-.335-.736M6.014 9.487l1.327 2.918M20.903 10.827c.718-1.36.82-3.026.134-4.534a5.14 5.14 0 0 0-3.618-2.904M18.678 9.732a2.89 2.89 0 0 0-1.676-3.798"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone5Broken;
