import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPythonBroken = ({
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
      d="M8.709 7.96V5.542A2.543 2.543 0 0 1 11.251 3h2.997a2.543 2.543 0 0 1 2.543 2.543v4.114A2.35 2.35 0 0 1 14.448 12h-.803M11.052 12a2.35 2.35 0 0 0-2.343 2.343v4.115A2.543 2.543 0 0 0 11.251 21h2.997a2.543 2.543 0 0 0 2.543-2.542V16.04M13.95 18.5h-.01M11.55 5.5h.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 7.959H6.292a2.543 2.543 0 0 0-2.542 2.542v2.997a2.543 2.543 0 0 0 2.542 2.543M19.208 7.959a2.543 2.543 0 0 1 2.542 2.542v2.997a2.543 2.543 0 0 1-2.542 2.543H12.75"
    />
  </Svg>
);
export default IconlystPythonBroken;
