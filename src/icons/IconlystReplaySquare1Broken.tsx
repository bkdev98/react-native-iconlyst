import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare1Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.805 9.971 8.468 8.31 10.13 9.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.773 16.205h-1.03a2.275 2.275 0 0 1-2.276-2.276V8.31M17.214 14.54l-1.663 1.662-1.663-1.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.245 8.309h1.031a2.275 2.275 0 0 1 2.276 2.275v5.62"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.198 21.25h.776c2.945 0 5.026-1.835 5.026-4.783V8.032c0-2.94-2.081-4.782-5.026-4.782H8.026C5.081 3.25 3 5.084 3 8.032v8.434c0 2.949 2.081 4.784 5.026 4.784h3.736"
    />
  </Svg>
);
export default IconlystReplaySquare1Broken;
