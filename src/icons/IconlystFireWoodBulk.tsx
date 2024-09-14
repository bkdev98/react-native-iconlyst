import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireWoodBulk = ({
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
      d="M19.42 14.363a.75.75 0 0 0-.995-.368l-13.476 6.2a.75.75 0 1 0 .627 1.363l13.476-6.2a.75.75 0 0 0 .367-.995"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m19.05 20.194-3.857-1.771a.755.755 0 0 0-.995.369.75.75 0 0 0 .37.995l3.857 1.77a.75.75 0 1 0 .625-1.363M4.948 15.356l3.249 1.5a.75.75 0 0 0 .995-.367.75.75 0 0 0-.366-.995l-3.25-1.5a.75.75 0 0 0-.629 1.362" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.87 6.03c-.71-1.49-1.95-2.7-3.68-3.6a.49.49 0 0 0-.51.03c-.16.11-.24.29-.21.48.16 1.24-.07 3.03-.72 3.77-.15.17-.3.27-.48.31-.16-.44-.31-1.58-.31-1.84 0-.18-.11-.36-.28-.44a.49.49 0 0 0-.52.04c-.26.19-.85.75-.88.77-1.59 1.52-1.96 3.74-.94 5.66.85 1.61 2.42 2.54 4.16 2.54.35 0 .71-.04 1.08-.11 1.49-.25 2.68-1.14 3.36-2.49.79-1.55.76-3.52-.07-5.12"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.62 11.04c1.29 0 2.03-.9 2.25-1.43a.734.734 0 0 0-.39-.97c-.37-.17-.81 0-.98.37-.05.1-.32.63-1.1.51-.4-.06-.79.22-.85.63s.22.79.63.86c.15.02.3.03.44.03"
    />
  </Svg>
);
export default IconlystFireWoodBulk;
