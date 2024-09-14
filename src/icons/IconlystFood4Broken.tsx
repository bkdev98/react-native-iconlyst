import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood4Broken = ({
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
      d="M3 17.422h18M3.87 17.422l.27.883a2.33 2.33 0 0 0 2.228 1.651h2.006M20.131 17.422l-.27.883a2.33 2.33 0 0 1-2.227 1.651H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.163 5.206a1.163 1.163 0 1 0-2.325 0 1.163 1.163 0 0 0 2.325 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.004 14.772C3.776 10.2 7.421 6.367 12 6.367c1.389 0 2.692.353 3.827.972M18.297 9.43a7.97 7.97 0 0 1 1.699 5.342"
    />
  </Svg>
);
export default IconlystFood4Broken;
