import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger1Outline = ({
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
      fill={props.color}
      d="M18.71 19.494H5.292a3.093 3.093 0 0 1-1.186-5.928c2.148-1.193 7.981-4.425 8.333-4.637 1.256-.756 1-1.634.922-1.922a1.34 1.34 0 0 0-.93-.952 1.41 1.41 0 0 0-1.24.25 1.56 1.56 0 0 0-.61 1.224.75.75 0 1 1-1.5 0 3.07 3.07 0 0 1 1.194-2.412 2.92 2.92 0 0 1 2.54-.513 2.82 2.82 0 0 1 1.986 1.99 3.07 3.07 0 0 1-1.59 3.62c-.447.268-8.124 4.517-8.45 4.7a1.6 1.6 0 0 0 .531 3.08H18.71a1.541 1.541 0 0 0 .59-2.965l-5.53-2.289a.75.75 0 0 1 .572-1.386l5.532 2.29a3.04 3.04 0 0 1-1.164 5.85"
    />
  </Svg>
);
export default IconlystCoatHanger1Outline;
