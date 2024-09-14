import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHorizontalMirrorBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.62 16.013a1.43 1.43 0 0 0-1.12-.537 1.43 1.43 0 0 0-1.121.538l-2.726 3.398a1.43 1.43 0 0 0-.176 1.522c.242.503.74.816 1.297.816h5.45c.559 0 1.055-.313 1.297-.816a1.43 1.43 0 0 0-.175-1.522z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.121 11.252H3.878a.75.75 0 0 0 0 1.5h17.243a.75.75 0 0 0 0-1.5M11.378 7.984c.274.343.683.54 1.122.54a1.43 1.43 0 0 0 1.122-.54l2.725-3.397a1.43 1.43 0 0 0 .174-1.522 1.43 1.43 0 0 0-1.296-.815h-5.45c-.557 0-1.054.312-1.296.815a1.43 1.43 0 0 0 .173 1.523z" />
    </G>
  </Svg>
);
export default IconlystHorizontalMirrorBulk;
