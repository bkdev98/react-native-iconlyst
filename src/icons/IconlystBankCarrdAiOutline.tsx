import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdAiOutline = ({
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
      d="M4.615 6.042c-.535.574-.865 1.422-.865 2.489v3.293a.75.75 0 1 1-1.5 0V8.531c0-1.376.43-2.612 1.267-3.511.842-.905 2.04-1.407 3.448-1.407h10.07c1.404 0 2.602.502 3.445 1.407.838.898 1.27 2.134 1.27 3.51v6.588c0 1.375-.43 2.611-1.267 3.51-.843.905-2.04 1.407-3.448 1.407h-5.412a.75.75 0 0 1 0-1.5h5.412c1.037 0 1.821-.36 2.35-.93.535-.573.865-1.421.865-2.487V8.53c0-1.066-.331-1.914-.867-2.489-.53-.568-1.315-.929-2.348-.929H6.965c-1.037 0-1.821.361-2.35.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 9.658a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M5.596 13.336a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1A3.01 3.01 0 0 0 6.4 19.272l-.1.274a.75.75 0 0 1-1.408 0l-.1-.274a3.01 3.01 0 0 0-1.78-1.781l-.273-.101a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 .704-.49m0 4.299c.267-.362.587-.682.948-.95a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.949.95c.362.268.682.588.949.95M11.409 12.668a.75.75 0 0 1 .718.532c.099.326.353.58.677.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.677.68.75.75 0 0 1-1.436 0 1.02 1.02 0 0 0-.677-.68.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .677-.679.75.75 0 0 1 .718-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdAiOutline;
