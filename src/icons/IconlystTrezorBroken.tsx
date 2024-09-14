import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrezorBroken = ({
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
      d="M18.56 13.376v-1.62c0-.69-.47-1.3-1.15-1.47l-2.15-.54c-1.81-.45-3.71-.45-5.52 0l-2.15.54c-.67.17-1.15.77-1.15 1.47v5.46c0 .57.32 1.1.84 1.35l4.54 2.27c.43.21.93.21 1.35 0l4.54-2.27c.51-.26.84-.78.84-1.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3.006c1.21 0 2.36.48 3.21 1.33a4.55 4.55 0 0 1 1.33 3.21v2.65M7.96 10.206v-2.65c0-1.21.48-2.36 1.33-3.21"
    />
  </Svg>
);
export default IconlystTrezorBroken;
