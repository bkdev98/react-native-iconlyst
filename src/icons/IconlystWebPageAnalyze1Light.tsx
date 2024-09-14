import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageAnalyze1Light = ({
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
      d="M8.601 3h8.435c2.948 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.601c-2.948 0-4.783-2.081-4.783-5.026V8.026C3.818 5.081 5.662 3 8.601 3M9.512 16.997v-2.36m3.306 2.36V13.22m3.308 3.777v-1.109M21.818 9.491h-18M7.163 6.55h-.056m2.542 0h-.055m2.541 0h-.055"
    />
  </Svg>
);
export default IconlystWebPageAnalyze1Light;
