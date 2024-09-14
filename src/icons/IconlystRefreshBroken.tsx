import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshBroken = ({
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
      d="m10.385 21.251-1.78-2.477 2.464-1.77M3.326 5.422l3.034-.32.318 3.016M20.675 7.246l-1.278 2.77-2.754-1.27"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.857 18.492a8 8 0 0 1-6.12.28M19.078 13.672a8 8 0 0 1-.671 1.53 8 8 0 0 1-1.266 1.677M3.52 10.585a8 8 0 0 1 2.778-5.37M5.613 16.726a8 8 0 0 1-.998-1.341 8 8 0 0 1-.851-2.006M16.602 5.129A8 8 0 0 1 19.33 9.9M9.791 3.421a8 8 0 0 1 1.663-.171c.959 0 1.877.169 2.728.478"
    />
  </Svg>
);
export default IconlystRefreshBroken;
