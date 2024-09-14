import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquareTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.918 21.188 1.733-1.738-1.728-1.723M13.079 3.188l-1.733 1.738 1.728 1.724M21.499 12.769l-1.739-1.734-1.723 1.73M3.5 11.61l1.739 1.733 1.723-1.729"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.797 11.133c.044.351.072.712.072 1.074a7.38 7.38 0 0 1-3.078 6.001M13.554 19.486a9 9 0 0 1-1.074.072 7.38 7.38 0 0 1-6.001-3.078M5.203 13.243a9 9 0 0 1-.072-1.074 7.38 7.38 0 0 1 3.077-6.001M11.445 4.888a9 9 0 0 1 1.075-.072 7.38 7.38 0 0 1 6 3.078"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshSquareTwoTone;
