import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPerviousLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 5.773V18.23"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.492 9.757A19.4 19.4 0 0 1 15.19 6.15c1.84-.731 3.38.181 3.606 2.011.275 2.697.27 5.28 0 7.689-.247 1.9-1.944 2.709-3.606 2.002-2.128-.88-4.037-2.073-5.697-3.608-1.418-1.296-1.451-3.139 0-4.486"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPerviousLight;
