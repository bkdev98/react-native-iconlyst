import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMicroscopeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.132 2.5a8.42 8.42 0 0 0-8.417 8.42 8.418 8.418 0 1 0 16.835 0 8.42 8.42 0 0 0-8.418-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.985 14.52a1.82 1.82 0 0 1-1.82-1.82c0-1.003.817-1.82 1.82-1.82s1.819.817 1.819 1.82-.816 1.82-1.82 1.82m-.319-1.82a.32.32 0 1 1 .318.32.32.32 0 0 1-.318-.32"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.858 8.53a.75.75 0 0 1 1.05-.15.763.763 0 0 1 .163 1.06.75.75 0 0 1-.601.307.72.72 0 0 1-.435-.146l-.028-.021a.75.75 0 0 1-.15-1.05M7.722 5.948a.75.75 0 0 1 1.06.004l1.134 1.14A.75.75 0 1 1 8.852 8.15l-1.134-1.14a.75.75 0 0 1 .004-1.061"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.579 5.13c1.002 0 1.819.817 1.819 1.82s-.817 1.82-1.82 1.82a1.82 1.82 0 0 1-1.819-1.82c0-1.003.816-1.82 1.82-1.82m.318 1.821a.319.319 0 0 1-.637 0 .32.32 0 0 1 .318-.32.32.32 0 0 1 .319.32"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.642 9.75A.76.76 0 0 1 15.88 9c0-.413.324-.75.74-.75h.021a.75.75 0 0 1 0 1.5M11.349 10.199a.75.75 0 1 1 1.059 1.063l-1.134 1.13a.75.75 0 0 1-1.061-.001.75.75 0 0 1 .002-1.061zM11.158 15.696l-1.465.65a.749.749 0 1 1-.608-1.371l1.465-.65a.749.749 0 1 1 .608 1.371M13.118 16.31h-.024a.75.75 0 0 1 0-1.5.76.76 0 0 1 .761.75.74.74 0 0 1-.738.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.295 14.08a1.82 1.82 0 0 1-1.819-1.82c0-.997.815-1.81 1.818-1.81s1.82.813 1.82 1.81c0 1.005-.817 1.82-1.82 1.82m-.318-1.819a.31.31 0 0 1 .318-.31c.179 0 .319.136.319.31 0 .182-.137.32-.32.32a.31.31 0 0 1-.317-.32M20.991 19.793l-1.984-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMicroscopeBulk;
