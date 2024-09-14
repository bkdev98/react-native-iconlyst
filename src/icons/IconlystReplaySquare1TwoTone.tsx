import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare1TwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.494 16.466V8.034c0-2.917-2.071-4.774-5.018-4.784H8.531c-2.946 0-5.027 1.867-5.027 4.784v8.432c0 2.946 2.11 4.784 5.027 4.784h7.945c2.947 0 5.018-1.867 5.018-4.784"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.305 9.971 8.968 8.31 10.63 9.97"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.273 16.205h-1.03a2.276 2.276 0 0 1-2.276-2.276V8.31M17.714 14.54l-1.663 1.663-1.663-1.663"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.745 8.307h1.031a2.275 2.275 0 0 1 2.276 2.275v5.621"
    />
  </Svg>
);
export default IconlystReplaySquare1TwoTone;
