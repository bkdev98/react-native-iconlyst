import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChurchBulk = ({
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
      d="M5.103 15.618v5.007c0 .827.673 1.5 1.5 1.5h11.803c.827 0 1.5-.673 1.5-1.5v-5.073l-3.135-1.642a1.75 1.75 0 0 1-.938-1.55v-2.23a.25.25 0 0 0-.108-.206l-3.052-2.102a.25.25 0 0 0-.285.001L9.39 9.92a.25.25 0 0 0-.107.205v2.236c0 .65-.36 1.246-.935 1.549z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.346 4.9V6.48q.09.048.178.108l3.052 2.101c.474.327.757.866.757 1.442v2.23a.25.25 0 0 0 .134.221l4.172 2.185a.75.75 0 1 1-.696 1.33L16.77 13.91a1.75 1.75 0 0 1-.938-1.55v-2.23a.25.25 0 0 0-.108-.206l-3.052-2.102a.25.25 0 0 0-.285.001L9.39 9.92a.25.25 0 0 0-.107.205v2.236c0 .65-.36 1.246-.935 1.549l-4.15 2.184a.75.75 0 1 1-.698-1.327l4.15-2.184a.25.25 0 0 0 .133-.222v-2.236c0-.571.28-1.107.747-1.434l2.999-2.097q.151-.106.316-.176V4.9H10.8a.75.75 0 0 1 0-1.5h1.045v-.63a.75.75 0 0 1 1.5 0v.63h1.134a.75.75 0 0 1 0 1.5zm-.776 9.235a.75.75 0 0 0 .75-.75v-1.72a.75.75 0 0 0-1.5 0v1.72c0 .414.336.75.75.75m-2.018 6.924v1.065h4.037v-2.787c0-1.108-.906-2.01-2.02-2.01a2.016 2.016 0 0 0-2.017 2.01z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChurchBulk;
