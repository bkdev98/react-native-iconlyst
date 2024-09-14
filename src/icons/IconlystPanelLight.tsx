import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPanelLight = ({
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
      d="M7.081 8.951h9.837c2.077 0 3.371 1.467 3.371 3.543v4.963c0 2.077-1.294 3.543-3.372 3.543H7.08c-2.077 0-3.37-1.466-3.37-3.543v-4.963c0-2.075 1.299-3.543 3.37-3.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.014 4.28a1.28 1.28 0 1 0 2.558 0 1.28 1.28 0 0 0-2.558 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.905 8.95-3.63-3.85m-1.958 0-3.64 3.85M8.777 13.144h3.224m-3.224 3.6h6.447"
    />
  </Svg>
);
export default IconlystPanelLight;