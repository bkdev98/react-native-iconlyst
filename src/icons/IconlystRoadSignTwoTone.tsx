import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadSignTwoTone = ({
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
      d="m13.519 20.942-.34-2.981M11.709 5.045l-.227-1.987M12.613 12.992l-.339-2.98"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.86 6.048a1 1 0 0 1 .703-.416l10.611-1.211a1 1 0 0 1 1.107.88l.341 2.984a1 1 0 0 1-.88 1.108l-10.61 1.211a1 1 0 0 1-.779-.246l-1.506-1.34a1 1 0 0 1-.151-1.325zM18.534 12.65a1 1 0 0 0-.779-.247l-10.61 1.214a1 1 0 0 0-.88 1.107l.341 2.985a1 1 0 0 0 1.107.88l10.61-1.214a1 1 0 0 0 .703-.416l1.165-1.645a1 1 0 0 0-.152-1.325z"
    />
  </Svg>
);
export default IconlystRoadSignTwoTone;
