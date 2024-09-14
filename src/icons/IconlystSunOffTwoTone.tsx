import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunOffTwoTone = ({
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
      d="M12.055 19.628V21m9-9h-1.372m-1.264 6.364-.97-.97"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.055 3v1.372M4.427 12H3.055M6.66 6.606l-.97-.97M18.419 5.636 5.69 18.364M15.022 9.034a4.195 4.195 0 1 0-5.934 5.933" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.207 16.11a4.19 4.19 0 0 0 3.815-1.142 4.19 4.19 0 0 0 1.177-3.63"
    />
  </Svg>
);
export default IconlystSunOffTwoTone;
