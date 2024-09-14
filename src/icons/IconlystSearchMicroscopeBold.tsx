import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMicroscopeBold = ({
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
      d="m20.992 19.792-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416M15.295 11.95a.31.31 0 0 0-.318.31c0 .182.136.32.318.32a.313.313 0 0 0 .32-.32c0-.174-.14-.31-.32-.31M6.985 12.38a.32.32 0 0 0-.318.32.32.32 0 1 0 .318-.32"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.642 9.75A.76.76 0 0 1 15.88 9c0-.414.325-.75.74-.75h.022a.75.75 0 0 1 0 1.5m-1.347 4.33a1.82 1.82 0 0 1-1.818-1.82c0-.998.815-1.81 1.818-1.81s1.82.812 1.82 1.81c0 1.004-.817 1.82-1.82 1.82m-2.177 2.23h-.024a.75.75 0 0 1 0-1.5.76.76 0 0 1 .762.75.74.74 0 0 1-.738.75m-1.96-.615-1.465.65a.749.749 0 1 1-.608-1.371l1.465-.65a.749.749 0 1 1 .608 1.371M6.985 14.52a1.82 1.82 0 0 1-1.82-1.82c0-1.004.817-1.82 1.82-1.82s1.819.816 1.819 1.82c0 1.003-.816 1.82-1.82 1.82M5.858 8.529a.75.75 0 0 1 1.05-.149.763.763 0 0 1 .163 1.059.75.75 0 0 1-.601.307.72.72 0 0 1-.435-.146l-.028-.021a.75.75 0 0 1-.15-1.05m1.864-2.582a.75.75 0 0 1 1.06.004l1.134 1.141a.75.75 0 1 1-1.064 1.056l-1.134-1.14a.75.75 0 0 1 .004-1.061m3.627 4.251a.75.75 0 1 1 1.059 1.063l-1.134 1.131a.75.75 0 0 1-1.061-.002.75.75 0 0 1 .002-1.061zm2.23-5.068c1.002 0 1.819.816 1.819 1.82 0 1.003-.817 1.82-1.82 1.82a1.82 1.82 0 0 1-1.818-1.82c0-1.004.816-1.82 1.819-1.82M11.132 2.5a8.42 8.42 0 0 0-8.417 8.42 8.418 8.418 0 1 0 16.835 0 8.42 8.42 0 0 0-8.418-8.42"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.578 7.27a.32.32 0 0 0 0-.64.32.32 0 0 0 0 .64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchMicroscopeBold;
