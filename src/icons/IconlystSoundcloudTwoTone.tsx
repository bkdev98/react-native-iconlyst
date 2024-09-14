import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoundcloudTwoTone = ({
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
      d="M2 14.676v2.946M5.535 10.91v6.712M9.068 8.227v9.396"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.684 16.62a1 1 0 0 0 1 1h5.131a3.192 3.192 0 0 0 3.067-4.063 3.13 3.13 0 0 0-2.084-2.16c-.79-.24-1.226-.177-1.883.1-.223-2.535-1.84-4.587-4.236-5.034"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSoundcloudTwoTone;
