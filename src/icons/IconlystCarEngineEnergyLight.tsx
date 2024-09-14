import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarEngineEnergyLight = ({
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
      d="M12.149 4.021v3.034m-2.022-3.034h4.044M3.25 10.21v6.067m2.831-3.034H3.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.081 9.866a1 1 0 0 1 1-1h.64a1 1 0 0 0 .667-.255l1.453-1.3a1 1 0 0 1 .667-.256h3.66a1 1 0 0 1 .885.534l1.741 3.3h1.422V9.866a1 1 0 0 1 1-1h1.034a1 1 0 0 1 1 1v8.102a1 1 0 0 1-1 1h-1.034a1 1 0 0 1-1-1v-1.023h-2.207v2.034a1 1 0 0 1-1 1h-4.245a1 1 0 0 1-.816-.424l-1.546-2.187a1 1 0 0 0-.816-.423H7.08a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.254 15.837 1.411-2.592H10.17l1.411-2.596"
    />
  </Svg>
);
export default IconlystCarEngineEnergyLight;
