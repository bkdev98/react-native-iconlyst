import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCovid19CoronaTwoTone = ({
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
      d="M12.266 6.028c.571-.11 1.106-1.464.086-2.266M12.267 18.223c.747.105.956 1.555-.11 2.017M17.054 8.184c2.583 0 3.181-1.854 2.464-3.407"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.96 16.469c0 1.249-.952 3.266-3.514 2.257M21.41 12.12c-.908-.84-2.515-.606-3.048 0-.353.408-1.333 1.144-2.428.827M9.086 12.191c.792.159 1.797 1.433 1.524 2.64"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.168 12.12c-.91-.605-1.231.707-2.758.17M16.576 16.438c1.35.103 2.786 1.317 2.204 3.581"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.952 7.812c-2.728 0-.732-2.532-2.915-2.703"
      opacity={0.4}
    />
    <Circle
      cx={12.265}
      cy={12.124}
      r={6.097}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.72 10.007h.027m.482-.096a.481.481 0 1 0-.963 0 .481.481 0 0 0 .963 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.662 14.777h.004m.071-.014a.071.071 0 1 0-.142 0 .071.071 0 0 0 .142 0"
    />
  </Svg>
);
export default IconlystCovid19CoronaTwoTone;
