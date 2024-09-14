import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowmanLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.01 13.709-3.1-2.442"
    />
    <Circle
      r={4.446}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 11.997 7.81)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.307 11.374a5.6 5.6 0 0 0-2.911 4.915c0 2.12 1.227 4.047 2.91 4.916s3.488.89 5.389 0a5.6 5.6 0 0 0 2.91-4.916c0-.916-.222-1.799-.612-2.563l3.098-2.46M10.639 12.214v2.3M13.321 6.577v.01M12.492 15.432v.01M12.492 17.965v.01M10.677 6.577v.01M6.217 21.865h11.566M12 8.41l-.829.465"
    />
  </Svg>
);
export default IconlystSnowmanLight;
