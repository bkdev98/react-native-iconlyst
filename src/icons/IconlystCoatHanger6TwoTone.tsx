import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger6TwoTone = ({
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
      d="m10.24 11.975-5.206 2.202a2.25 2.25 0 0 0-1.373 2.072v.085a2.25 2.25 0 0 0 2.25 2.25h13.177a2.25 2.25 0 0 0 .86-4.328l-7.43-3.076.001-.478c.001-.504.32-.942.79-1.125a2.16 2.16 0 0 0 1.28-2.625 2.12 2.12 0 0 0-1.48-1.457 2.158 2.158 0 0 0-2.741 2.075"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.764 7.56H21.5m-18 0h4.312"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoatHanger6TwoTone;
