import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCropTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.667 3.943h-3.963M3.686 14.925v-3.962M21.686 14.925v-3.962M3.713 17.86c.312 2.232 1.794 3.803 4.046 4.065M17.578 21.925c2.253-.263 3.725-1.833 4.037-4.066M14.668 21.943h-3.963M3.713 8.039c.312-2.233 1.794-3.812 4.046-4.076M17.578 3.963c2.253.264 3.725 1.843 4.037 4.076"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.07 16.03h-5.68A1.79 1.79 0 0 1 9.6 14.24v-5.68M15.768 17.329v-1.297m-6.17-6.17H8.302M12.092 9.861h1.884c.99 0 1.79.801 1.79 1.79v1.916"
    />
  </Svg>
);
export default IconlystCropTwoTone;
