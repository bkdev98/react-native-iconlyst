import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeaWaveTwoTone = ({
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
      d="M21.114 9.448c-.557.515-1.312.842-2.088.811a1.83 1.83 0 0 1 0-3.66c.57 0 .855.077 1.32.214-.569-2.641-3.846-3.174-5.664.179-1.008 1.654-2.024 3.335-3.75 3.267a1.83 1.83 0 0 1 0-3.66c.57 0 .855.077 1.32.214-.569-2.641-3.865-3.174-5.683.179C5 9.569 3.755 10.205 3.114 10.347M2.865 14.153c2.517 1.53 4.684-1.53 7.2 0s4.684-1.53 7.2 0a3.49 3.49 0 0 0 3.6 0M2.865 18.847c2.517 1.53 4.684-1.53 7.2 0s4.684-1.53 7.2 0a3.49 3.49 0 0 0 3.6 0"
    />
  </Svg>
);
export default IconlystSeaWaveTwoTone;
