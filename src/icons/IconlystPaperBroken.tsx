import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperBroken = ({
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
      d="M4.25 11.5V6.49a3.82 3.82 0 0 1 3.835-3.728h6.653l5.065 5.276v9.166a3.887 3.887 0 0 1-3.73 3.91H8.086q-.046.001-.092 0a3.83 3.83 0 0 1-3.742-3.91V15"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.475 2.75v2.909a2.574 2.574 0 0 0 2.568 2.575M14.288 15.359h-5.4M12.243 11.606H8.887"
    />
  </Svg>
);
export default IconlystPaperBroken;
