import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoundcloudBroken = ({
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
      d="M2.75 14.676v2.946M6.285 10.912v6.712M9.818 8.227v9.396M13.434 17.622h6.131a3.192 3.192 0 0 0 3.067-4.063 3.13 3.13 0 0 0-2.084-2.16c-.79-.24-1.226-.177-1.883.1-.253-2.872-2.295-5.124-5.231-5.124"
    />
  </Svg>
);
export default IconlystSoundcloudBroken;
