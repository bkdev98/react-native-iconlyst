import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageGridBroken = ({
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
      d="M3 15.974C3 18.919 4.835 21 7.783 21h8.434C19.166 21 21 18.919 21 15.974V8.026C21 5.081 19.166 3 16.218 3H7.783C4.843 3 3 5.081 3 8.026V12M6.345 6.55h-.056m2.541 0h-.055m2.542 0h-.056M8.805 11.906v9.044M8.838 14.738h9.56M18.076 9.492H3"
    />
  </Svg>
);
export default IconlystWebPageGridBroken;
