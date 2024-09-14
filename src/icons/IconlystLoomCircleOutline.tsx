import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoomCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.992 10.664a1.338 1.338 0 1 0 0 2.676 1.338 1.338 0 0 0 0-2.676m-2.838 1.338a2.838 2.838 0 1 1 5.676 0 2.838 2.838 0 0 1-5.676 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.25a.75.75 0 0 1 .75.75v2.912a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 13.336a.75.75 0 0 1 .75.75v2.912a.75.75 0 1 1-1.5 0v-2.912a.75.75 0 0 1 .75-.75M17.75 12a.75.75 0 0 1-.75.75h-2.912a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75M10.662 12a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h2.912a.75.75 0 0 1 .75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.875 7.022a.75.75 0 0 1 .275 1.025l-1.457 2.522a.75.75 0 0 1-1.299-.75l1.457-2.522a.75.75 0 0 1 1.024-.275M11.331 13.16a.75.75 0 0 1 .275 1.024l-1.457 2.522a.75.75 0 0 1-1.299-.75l1.457-2.522a.75.75 0 0 1 1.024-.275M16.98 14.875a.75.75 0 0 1-1.025.274l-2.522-1.456a.75.75 0 0 1 .75-1.299l2.522 1.457a.75.75 0 0 1 .275 1.024M10.84 11.332a.75.75 0 0 1-1.024.274L7.294 10.15a.75.75 0 0 1 .75-1.299l2.522 1.456a.75.75 0 0 1 .275 1.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.98 9.125a.75.75 0 0 1-.275 1.024l-2.522 1.457a.75.75 0 1 1-.75-1.3l2.522-1.456a.75.75 0 0 1 1.025.275M10.84 12.668a.75.75 0 0 1-.274 1.025l-2.522 1.456a.75.75 0 0 1-.75-1.3l2.522-1.456a.75.75 0 0 1 1.025.275M14.875 16.978a.75.75 0 0 1-1.025-.275l-1.456-2.522a.75.75 0 1 1 1.3-.75l1.455 2.522a.75.75 0 0 1-.274 1.025M11.33 10.84a.75.75 0 0 1-1.024-.274L8.85 8.044a.75.75 0 0 1 1.3-.75l1.455 2.522a.75.75 0 0 1-.274 1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoomCircleOutline;
