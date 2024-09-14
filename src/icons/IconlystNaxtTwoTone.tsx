import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNaxtTwoTone = ({
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
      d="M19.5 5.773V18.23"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.007 9.757A19.4 19.4 0 0 0 9.31 6.15c-1.84-.731-3.38.181-3.606 2.011-.275 2.697-.27 5.28 0 7.689.247 1.9 1.944 2.708 3.606 2.002 2.128-.88 4.038-2.073 5.697-3.608 1.418-1.296 1.452-3.139 0-4.486"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNaxtTwoTone;
