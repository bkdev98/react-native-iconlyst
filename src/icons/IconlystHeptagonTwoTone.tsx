import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeptagonTwoTone = ({
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
      d="M11.39 3.414a2.56 2.56 0 0 1 2.22 0M6.225 5.901A2.56 2.56 0 0 0 4.84 7.638m-1.275 5.589c-.175.76.007 1.556.494 2.165m3.574 4.482a2.56 2.56 0 0 0 2.001.964m5.732 0a2.56 2.56 0 0 0 2.001-.964m3.575-4.482c.485-.609.667-1.405.494-2.165m-1.276-5.59a2.56 2.56 0 0 0-1.385-1.736"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.389 3.414 6.225 5.901M4.84 7.638l-1.276 5.588m.495 2.166 3.573 4.482m2.002.964h5.731m2.002-.965 3.574-4.48m.495-2.167L20.16 7.638M18.775 5.9 13.61 3.414"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeptagonTwoTone;
