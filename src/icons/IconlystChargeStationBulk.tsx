import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeStationBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M17.16 6.565v13.81H3.81V6.565c0-2.36 1.52-3.94 3.78-3.94h5.79c2.26 0 3.78 1.58 3.78 3.94"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.559 8.073-1.84-1.85a.767.767 0 0 0-1.07 0c-.29.3-.29.77 0 1.06l1.63 1.64v7.21c0 .21-.16.38-.37.38a.38.38 0 0 1-.38-.38v-1.43c0-1.03-.84-1.88-1.88-1.88h-.49v1.5h.49c.21 0 .38.18.38.38v1.43a1.876 1.876 0 1 0 3.75 0v-7.53c0-.19-.07-.38-.22-.53M17.846 20.369H2.971a.75.75 0 0 0 0 1.5h14.875a.75.75 0 0 0 0-1.5M7.783 8.048c0-.328.113-.72.65-.72h4.1c.537 0 .65.392.65.72v2.33c0 .328-.113.72-.65.72h-1.27l.529-1.535a.75.75 0 0 0-1.418-.49l-.698 2.025H8.433c-.537 0-.65-.392-.65-.72zm.65 4.55h4.1c1.266 0 2.15-.913 2.15-2.22v-2.33c0-1.307-.884-2.22-2.15-2.22h-4.1c-1.246 0-2.15.934-2.15 2.22v2.33c0 1.307.884 2.22 2.15 2.22M10.272 18.697a.751.751 0 0 0 1.018-.3l.877-1.61a.752.752 0 0 0-.66-1.109H10.6l.273-.5a.75.75 0 0 0-1.318-.719l-.877 1.61a.752.752 0 0 0 .659 1.11h.91l-.274.5a.75.75 0 0 0 .3 1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChargeStationBulk;
