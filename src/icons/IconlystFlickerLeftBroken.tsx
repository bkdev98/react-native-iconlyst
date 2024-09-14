import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerLeftBroken = ({
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
      d="M19.648 13.665a6.4 6.4 0 0 0-.765-2.251l-1.688-2.928a1.167 1.167 0 0 0-1.594-.427 2.04 2.04 0 0 0-.747 2.787l.036.06M11.652 20.788a6.425 6.425 0 0 0 7.833-4.522M7.234 10.512a1.63 1.63 0 0 0-2.196-.59 1.63 1.63 0 0 0-.589 2.196l3.302 5.722a6.4 6.4 0 0 0 1.466 1.709M16.016 12.87 12.268 6.37a1.606 1.606 0 0 0-2.196-.589 1.61 1.61 0 0 0-.589 2.195"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.159 12.619 8.768 6.746a1.6 1.6 0 0 0-.976-.75A1.605 1.605 0 0 0 6.1 6.57a1.62 1.62 0 0 0-.32 1.188q.044.317.203.594l3.391 5.873M15.684 3l-1.621 1.051 1.051 1.621"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.063 4.05c1.898.102 4.428.939 5.696 2.914"
    />
  </Svg>
);
export default IconlystFlickerLeftBroken;
