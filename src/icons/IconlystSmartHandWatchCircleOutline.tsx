import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartHandWatchCircleOutline = ({
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
      d="M12.249 19.46a7.71 7.71 0 1 1 7.711-7.71 7.72 7.72 0 0 1-7.711 7.71m0-13.92a6.21 6.21 0 1 0 6.211 6.21 6.217 6.217 0 0 0-6.211-6.21"
    />
    <Path
      fill={props.color}
      d="M14.202 22.5H10.04a2.67 2.67 0 0 1-2.6-2.111l-.723-3.445a.75.75 0 0 1 1.468-.308l.723 3.445a1.164 1.164 0 0 0 1.134.92h4.162a1.164 1.164 0 0 0 1.134-.918l.682-3.18a.75.75 0 1 1 1.466.315l-.68 3.179a2.674 2.674 0 0 1-2.604 2.104M17.05 7.461a.75.75 0 0 1-.733-.6l-.724-3.445a1.16 1.16 0 0 0-1.133-.92h-4.161a1.165 1.165 0 0 0-1.134.918l-.682 3.18a.75.75 0 0 1-1.466-.314l.68-3.18a2.67 2.67 0 0 1 2.6-2.1h4.163a2.67 2.67 0 0 1 2.6 2.112l.723 3.445a.75.75 0 0 1-.735.9z"
    />
  </Svg>
);
export default IconlystSmartHandWatchCircleOutline;
