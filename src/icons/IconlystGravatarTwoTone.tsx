import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGravatarTwoTone = ({
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
      d="M14.542 20.626c1.565-.483 3.017-1.368 4.109-2.595a9.1 9.1 0 0 0 1.558-2.463c.858-1.95.976-4.211.337-6.242-.514-1.61-1.452-3.097-2.746-4.193a9.1 9.1 0 0 0-2.504-1.497A8.8 8.8 0 0 0 11.914 3a1.7 1.7 0 0 0-1.2.542c-.32.324-.5.776-.497 1.23v2.28l.001 4.102c.001.803.628 1.55 1.418 1.692.426.076.883.014 1.258-.209.235-.14.442-.333.596-.56.116-.17.202-.359.247-.56.05-.201.05-.407.048-.613V6.889a5.3 5.3 0 0 1 1.923 1.179c.77.744 1.337 1.709 1.557 2.76.215 1.043.143 2.153-.25 3.146a5.37 5.37 0 0 1-2.046 2.515"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.542 20.624a8.9 8.9 0 0 1-3.256.348 8.6 8.6 0 0 1-2.98-.782 9.1 9.1 0 0 1-2.4-1.591 8.7 8.7 0 0 1-1.63-2.06 9.3 9.3 0 0 1-1.051-2.763 9.25 9.25 0 0 1 .091-4.012c.15-.593.313-1.046.58-1.596.002.004.051-.117.053-.112a1.793 1.793 0 0 1 3.323 1.333c.003-.001-.294.678-.32.75a5.4 5.4 0 0 0-.233.807 5.4 5.4 0 0 0 .425 3.372 5.2 5.2 0 0 0 1.798 2.115 5.4 5.4 0 0 0 3.196.935 5.35 5.35 0 0 0 2.83-.88"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGravatarTwoTone;
