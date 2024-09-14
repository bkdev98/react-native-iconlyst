import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoneCircleLight = ({
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
      d="M12 21.3a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.505 7.53a1.584 1.584 0 0 0 0 2.24l-3.037 3.037a1.583 1.583 0 1 0-2.239 2.239c.45.45 1.102.567 1.662.364a1.58 1.58 0 0 0 2.603 1.66 1.58 1.58 0 0 0 0-2.238l3.037-3.037a1.584 1.584 0 0 0 2.239-2.24 1.58 1.58 0 0 0-1.662-.363 1.58 1.58 0 0 0-2.603-1.662"
    />
  </Svg>
);
export default IconlystBoneCircleLight;
