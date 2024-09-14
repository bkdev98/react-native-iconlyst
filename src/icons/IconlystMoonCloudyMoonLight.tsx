import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyMoonLight = ({
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
      d="M3.114 12.87a9.17 9.17 0 0 1 6.647-8.82c.05-.015.092.04.068.085a8.29 8.29 0 0 0 1.467 9.73 8.27 8.27 0 0 0 9.73 1.458c.046-.024.1.018.086.068a9.22 9.22 0 0 1-5.063 5.85"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.29 6.225c1.01.009 1.824.686 1.824 1.84a1.84 1.84 0 0 1-1.083 1.677c-.268.11-.536.15-.739.15H14.94c-.203 0-.472-.039-.744-.148a1.84 1.84 0 0 1-1.08-1.68c0-1.153.814-1.83 1.822-1.84 0-.725.57-2.177 2.177-2.177s2.177 1.452 2.177 2.178"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.767 20.78H3.114m8.523 0H9.81m0-3.386H5.548"
    />
  </Svg>
);
export default IconlystMoonCloudyMoonLight;
