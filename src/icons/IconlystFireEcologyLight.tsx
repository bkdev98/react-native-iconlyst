import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFireEcologyLight = ({
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
      d="M10.82 16.937c.723-.105 1.458.001 2.187-.015 1.692-.041 3.018-1.471 4.306-2.441a1.65 1.65 0 0 1 2.16.154c.647.648.647 1.7 0 2.348-1.39 1.396-2.619 2.692-4.504 3.425-2.616 1.017-5.043.523-7.692 0-1.025-.203-1.97-.215-3.007-.215"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.818 16.896h1.428c1.02 0 1.844-.733 1.844-1.753 0-.847-.574-1.525-1.395-1.731-1.176-.295-2.35-.526-3.577-.498-1.946.048-3.307 1.132-4.848 2.165M16.04 11.68c.894-1.435 1.007-3.445-.301-5.479-.297 1.232-1.357 1.845-1.357 1.845C13.38 5.863 13.065 3 13.065 3c-2.138.95-2.708 3.45-2.479 4.547C9.73 6.495 8.923 5.94 8.372 5.863c0 1.214-.924 2.974-.513 4.71M5.128 8.04c0 .938-.715 2.298-.397 3.64M19.272 7.832c.92 1.428.84 2.84.211 3.849"
    />
  </Svg>
);
export default IconlystFireEcologyLight;
