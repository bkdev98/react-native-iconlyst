import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KDisplayOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.004 20.344a.75.75 0 0 1 .75-.75h8.99a.75.75 0 1 1 0 1.5h-8.99a.75.75 0 0 1-.75-.75M2.5 7.685c0-2.639 2.14-4.779 4.778-4.779h9.943A4.78 4.78 0 0 1 22 7.686v5.456c0 2.64-2.14 4.779-4.78 4.779H7.279A4.78 4.78 0 0 1 2.5 13.14zm4.778-3.279A3.28 3.28 0 0 0 4 7.686v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.686a3.28 3.28 0 0 0-3.28-3.279z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.309 7.216c.31.1.52.388.52.714v3.085h.208a.75.75 0 0 1 0 1.5h-.208v.382a.75.75 0 0 1-1.5 0v-.382H7.32a.75.75 0 0 1-.609-1.188L9.47 7.492a.75.75 0 0 1 .839-.276m-.98 3.8v-.759l-.545.758zM13.297 7.336a.75.75 0 0 1 .75.75v4.65a.75.75 0 1 1-1.5 0v-4.65a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.015 7.772a.75.75 0 0 1-.092 1.057l-1.889 1.583 1.889 1.583a.75.75 0 0 1-.964 1.15l-2.574-2.158a.75.75 0 0 1 0-1.15L15.96 7.68a.75.75 0 0 1 1.056.093"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4KDisplayOutline;
