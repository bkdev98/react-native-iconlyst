import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger6Light = ({
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
      d="m9.74 11.975-5.206 2.202a2.25 2.25 0 0 0-1.372 2.072v.085a2.25 2.25 0 0 0 2.25 2.249h13.177a2.25 2.25 0 0 0 .86-4.328l-7.432-3.075.003-.478c0-.504.32-.942.789-1.126a2.16 2.16 0 0 0 1.281-2.624 2.12 2.12 0 0 0-1.48-1.457A2.158 2.158 0 0 0 9.868 7.57M14.264 7.56H21m-18 0h4.312"
    />
  </Svg>
);
export default IconlystCoatHanger6Light;
