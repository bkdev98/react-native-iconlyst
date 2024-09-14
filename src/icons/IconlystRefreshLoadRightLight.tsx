import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLoadRightLight = ({
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
      d="m13.023 4 .008.043m3.84 1.517.008.007m2.531 3.267.007.006m.564 4.09.008.008m-1.566 3.841.007.006M8.808 4.64a8.014 8.014 0 0 0-4.205 10.358c1.673 4.105 6.354 6.08 10.449 4.406"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.14 4.3 4.674.065-.063 4.647"
    />
  </Svg>
);
export default IconlystRefreshLoadRightLight;
