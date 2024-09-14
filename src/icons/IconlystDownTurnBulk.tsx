import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownTurnBulk = ({
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
      d="M14.745 15.459h-1.796a1 1 0 0 0-.806 1.594l2.797 3.791c.014.017.036.024.05.041a1 1 0 0 0 .23.195c.035.022.064.052.103.07.13.06.27.1.422.1s.293-.04.422-.1c.037-.018.066-.048.103-.07a1 1 0 0 0 .23-.195c.015-.017.037-.024.05-.041l2.796-3.791a1.001 1.001 0 0 0-.805-1.594h-3.797"
    />
    <Path
      fill={props.color}
      d="M4.459 17.83V9.393a6.15 6.15 0 0 1 6.143-6.143 6.15 6.15 0 0 1 6.142 6.143v6.066h-2V9.393a4.147 4.147 0 0 0-4.142-4.143A4.15 4.15 0 0 0 6.46 9.393v8.437a1 1 0 0 1-2 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDownTurnBulk;
