import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLeftLayoutBroken = ({
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
      d="M12.25 3h3.974c2.945 0 5.026 1.835 5.026 4.783v8.435c0 2.94-2.081 4.782-5.026 4.782H8.276c-2.945 0-5.026-1.834-5.026-4.782V7.784C3.25 4.835 5.331 3 8.276 3h.353M7.142 12.73h7.297M7.142 17.11h3.368"
    />
  </Svg>
);
export default IconlystDownLeftLayoutBroken;
