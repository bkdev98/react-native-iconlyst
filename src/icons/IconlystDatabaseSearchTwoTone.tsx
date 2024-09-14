import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSearchTwoTone = ({
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
      strokeWidth={1.5}
      d="M11.56 8.937c4.047 0 7.328-1.323 7.328-2.956 0-1.632-3.28-2.956-7.327-2.956S4.233 4.35 4.233 5.981c0 1.633 3.28 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.337 19.544 1.43 1.43m-1.43-1.43a2.668 2.668 0 0 1-4.549-1.886 2.663 2.663 0 0 1 5.325 0c0 .735-.295 1.395-.776 1.886"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.233 5.995v11.592s0 2.912 7.358 2.912"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.888 11.762V5.938"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.233 11.762s0 2.912 7.358 2.912"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDatabaseSearchTwoTone;
