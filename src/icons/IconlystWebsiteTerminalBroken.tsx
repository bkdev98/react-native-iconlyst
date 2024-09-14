import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteTerminalBroken = ({
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
      d="M12.318 21h4.217c2.948 0 4.782-2.082 4.782-5.027V8.026C21.317 5.081 19.483 3 16.535 3H8.102C5.162 3 3.318 5.081 3.318 8.026v7.947c0 2.945 1.835 5.026 4.783 5.026h.685M18.366 9.492H3.318M12.992 17.209h2.736"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.773 12.805 1.964 1.964-1.964 1.964M6.55 6.55h-.01m4.981 0h-.01m-2.476 0h-.01"
    />
  </Svg>
);
export default IconlystWebsiteTerminalBroken;
