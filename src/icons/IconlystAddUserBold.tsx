import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBold = ({
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
      fill={props.color}
      d="M5.88 7.675a4.055 4.055 0 0 0 4.05 4.049 4.055 4.055 0 0 0 4.05-4.049 4.054 4.054 0 0 0-4.05-4.05 4.054 4.054 0 0 0-4.05 4.05M18.53 13.544a1 1 0 0 1-1-1v-1.32h-1.36a1 1 0 1 1 0-2h1.36V7.901a1 1 0 1 1 2 0v1.321h1.37a1 1 0 1 1 0 2h-1.37v1.321a1 1 0 0 1-1 1M5.22 20.377h9.41c1.6 0 2.732-1.068 2.82-2.682.017-3.943-5.656-3.997-7.532-4.015h-.006c-1.862.014-7.512.056-7.511 4.036.076 1.592 1.209 2.66 2.82 2.66"
    />
  </Svg>
);
export default IconlystAddUserBold;
