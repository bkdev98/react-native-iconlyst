import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordCloseTwoTone = ({
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
      d="M21.085 10.573V8.386c0-2.877-1.793-4.911-4.673-4.911h-8.24C5.3 3.475 3.5 5.509 3.5 8.385v3.963c0 2.877 1.791 4.91 4.672 4.91h2.027"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.842 17.262a3.83 3.83 0 1 0 7.659-.001 3.83 3.83 0 0 0-7.66 0M18.75 18.338l-2.16-2.16m2.16 0-2.16 2.16zM12.293 10.319v-.064zm-.26-.013a.261.261 0 0 1 .522 0 .26.26 0 0 1-.26.26.26.26 0 0 1-.262-.26M16.197 10.319v-.064zm-.26-.013a.26.26 0 1 1 .521-.001.26.26 0 0 1-.52 0M8.386 10.319v-.064zm-.259-.013a.261.261 0 0 1 .522 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordCloseTwoTone;
