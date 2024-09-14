import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOffLight = ({
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
      d="M3.6 14.976c1.263-.525 3.757-1.596 5.04-2.129L6.287 7.142c.638-.226 1.221-.491 1.833-.638.714-.17 1.33.154 1.855.614a190 190 0 0 1 3.587 3.2c.298.275.533.3.89.143 1.024-.451 2.052-.9 3.104-1.281 1.217-.44 2.95-.485 3.38 1.05.34 1.21-.703 2.242-1.73 2.675a645 645 0 0 1-10.251 4.24c-2.444.98-4.378.123-5.415-2.308-.092-.218-.449-1.081-.539-1.3"
    />
  </Svg>
);
export default IconlystPlaneTakeOffLight;
