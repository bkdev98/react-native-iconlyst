import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHipchatLight = ({
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
      d="M17.802 17.327s.077-.055.2-.149C19.845 15.753 21 13.688 21 11.389c0-4.286-4.03-7.764-8.998-7.764C7.032 3.625 3 7.103 3 11.389c0 4.288 4.03 7.646 9 7.646q.636 0 2.088-.084c1.262.82 2.675 1.423 4.287 1.423.498 0 .733-.41.413-.828-.486-.596-.726-1.48-.986-2.219"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.498 13.5a4.93 4.93 0 0 0 7.003 0"
    />
  </Svg>
);
export default IconlystHipchatLight;
