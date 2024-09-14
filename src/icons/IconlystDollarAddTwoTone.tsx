import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarAddTwoTone = ({
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
      d="M21.5 12.063c0 4.967-4.032 9-9 9s-9-4.032-9-9c0-4.969 4.032-9 9-9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.106 5.456 2.365.001m-2.365 0-2.366-.002m2.366.001v2.365m0-2.365V3.09M14.313 9.2h-2.611a1.406 1.406 0 1 0 0 2.812h1.607a1.406 1.406 0 0 1 0 2.813h-2.612M12.504 14.824v1.182m0-7.994v1.19"
    />
  </Svg>
);
export default IconlystDollarAddTwoTone;
