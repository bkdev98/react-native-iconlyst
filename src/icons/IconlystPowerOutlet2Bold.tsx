import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutlet2Bold = ({
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
      d="M17.553 8.957V7.43c0-.894-.727-1.621-1.621-1.621h-.641V3a.75.75 0 0 0-1.5 0v2.809h-3.582V3a.75.75 0 0 0-1.5 0v2.809h-.641c-.894 0-1.621.727-1.621 1.621v1.744c0 1.561.663 3.059 1.818 4.11a5.5 5.5 0 0 0 2.985 1.376v2.931c.008 1.547 1.292 2.811 2.866 2.818h1.057c.34 0 .618.265.618.591a.75.75 0 0 0 1.5 0c0-1.153-.95-2.091-2.118-2.091h-1.054c-.751-.003-1.365-.598-1.369-1.322V14.66c2.707-.37 4.803-2.824 4.803-5.703"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerOutlet2Bold;
