import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpBold = ({
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
      fillRule="evenodd"
      d="M4.459 15.107V6.67a1 1 0 0 1 2 0v8.437a4.15 4.15 0 0 0 4.143 4.143 4.147 4.147 0 0 0 4.143-4.143V9.041h-1.796a1 1 0 0 1-.806-1.594l2.797-3.791c.014-.017.036-.024.05-.041a1 1 0 0 1 .23-.195c.035-.022.064-.052.103-.07.13-.06.27-.1.422-.1s.293.04.422.1c.037.018.066.048.103.07a1 1 0 0 1 .23.195c.015.017.037.024.05.041l2.796 3.791a1.001 1.001 0 0 1-.805 1.594h-1.797v6.066a6.15 6.15 0 0 1-6.142 6.143 6.15 6.15 0 0 1-6.143-6.143"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUpBold;
