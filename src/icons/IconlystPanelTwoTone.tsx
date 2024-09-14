import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPanelTwoTone = ({
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
      d="M7.581 8.951h9.837c2.077 0 3.371 1.467 3.371 3.543v4.963c0 2.077-1.294 3.543-3.372 3.543H7.58c-2.077 0-3.37-1.466-3.37-3.543v-4.963c0-2.075 1.299-3.543 3.37-3.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.514 4.28a1.28 1.28 0 1 0 2.558 0 1.28 1.28 0 0 0-2.558 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.405 8.95-3.63-3.85m-1.958 0-3.64 3.85M9.277 13.144h3.224m-3.224 3.6h6.447"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPanelTwoTone;
