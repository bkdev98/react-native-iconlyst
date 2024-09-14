import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFlashTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M20.049 11.554a8.417 8.417 0 0 0-8.417-8.417 8.418 8.418 0 1 0 8.417 8.417M17.361 17.719l3.425 3.417" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.285 7.26-3.347 4.612a.497.497 0 0 0 .402.79h2.738v2.894c0 .482.618.683.9.292l3.348-4.61a.498.498 0 0 0-.402-.79h-2.739V7.553a.497.497 0 0 0-.9-.292"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchFlashTwoTone;
