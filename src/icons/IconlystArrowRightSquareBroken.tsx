import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBroken = ({
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
      d="M16.086 12H7.914M12.322 8.252l.941.937.47.469M16.087 12l-3.764 3.748"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 12V7.916c0-3.027 1.885-5.166 4.915-5.166h8.669c3.03 0 4.916 2.139 4.916 5.166v8.168c0 3.027-1.886 5.166-4.916 5.166H7.665c-3.02 0-4.915-2.139-4.915-5.166v-.768"
    />
  </Svg>
);
export default IconlystArrowRightSquareBroken;
