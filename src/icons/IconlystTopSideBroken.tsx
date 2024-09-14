import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTopSideBroken = ({
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
      d="M12.25 3H8.276C5.331 3 3.25 4.835 3.25 7.783v8.435C3.25 19.158 5.331 21 8.276 21h7.948c2.945 0 5.026-1.834 5.026-4.782V7.784C21.25 4.835 19.169 3 16.224 3h-.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.854 15.648-2.604-2.804-2.604 2.804M21.25 8.541h-18"
    />
  </Svg>
);
export default IconlystTopSideBroken;
