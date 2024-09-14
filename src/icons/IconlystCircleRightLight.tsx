import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleRightLight = ({
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
      d="M10.881 11.881 14 15l-3.119 3.119"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.794 12.75c1.017-.88 1.407-1.907 1.108-2.912-.3-1.006-1.27-1.931-2.756-2.625s-3.396-1.117-5.423-1.198c-2.026-.082-4.048.182-5.737.748-1.688.566-2.943 1.402-3.56 2.37-.618.969-.562 2.013.16 2.964.721.95 2.065 1.75 3.812 2.27s3.795.729 5.81.592"
    />
  </Svg>
);
export default IconlystCircleRightLight;
