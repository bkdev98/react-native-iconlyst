import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoldsBold = ({
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
      d="m21.47 18.735-.63-3.182a1.505 1.505 0 0 0-1.474-1.2h-4.402c-.716 0-1.335.505-1.473 1.201l-.631 3.18c-.09.444.026.9.313 1.25.286.348.709.548 1.16.548h5.666c.45 0 .873-.2 1.16-.55s.4-.805.312-1.247M10.512 15.554a1.505 1.505 0 0 0-1.474-1.202H4.635c-.716 0-1.335.506-1.474 1.203l-.632 3.18a1.5 1.5 0 0 0 .315 1.249 1.5 1.5 0 0 0 1.16.548H9.67c.45 0 .873-.2 1.16-.55s.4-.805.312-1.247zM8.81 12.932h5.665c.451 0 .874-.2 1.16-.549.287-.349.402-.805.313-1.249l-.63-3.18a1.506 1.506 0 0 0-1.474-1.212H9.44c-.713 0-1.333.51-1.473 1.211l-.63 3.181a1.5 1.5 0 0 0 1.473 1.798M3.023 6.07c.628.2 1.127.695 1.333 1.327a.5.5 0 0 0 .95 0A2.07 2.07 0 0 1 6.64 6.07a.5.5 0 0 0 .006-.95 2.1 2.1 0 0 1-1.34-1.34c-.132-.414-.817-.414-.95 0a2.1 2.1 0 0 1-1.34 1.34.501.501 0 0 0 .007.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoldsBold;
