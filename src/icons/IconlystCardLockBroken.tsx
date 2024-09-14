import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLockBroken = ({
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
      d="M10.157 18.962H7.215c-2.444 0-3.965-1.726-3.965-4.168V8.207c0-2.442 1.528-4.166 3.965-4.166h1.372M21.25 11.5V8.204c0-2.442-1.52-4.166-3.965-4.166H12.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.21 20.609h-3.193a1.584 1.584 0 0 1-1.585-1.586v-1.791c0-.875.709-1.585 1.585-1.585h3.193c.876 0 1.585.71 1.585 1.585v1.791c0 .877-.71 1.585-1.585 1.585"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.519 15.677v-1.179a1.906 1.906 0 0 0-3.812-.009v1.188M6.543 9.338H21.25"
    />
  </Svg>
);
export default IconlystCardLockBroken;
