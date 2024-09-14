import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone3Bold = ({
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
      d="M12 20.25c-.96 0-1.76-.66-1.98-1.55h3.96c-.22.89-1.02 1.55-1.98 1.55m-.85-15.64c0-.47.38-.86.85-.86s.86.39.86.86v.16a6.1 6.1 0 0 0-1.71 0zm8.12 10.44-.43-.9c-.26-.56-.4-1.19-.4-1.82l-.01-1.19a6.43 6.43 0 0 0-4.07-5.98v-.55c0-1.3-1.06-2.36-2.36-2.36S9.65 3.31 9.65 4.61v.55a6.425 6.425 0 0 0-4.08 5.98v1.19c0 .63-.14 1.26-.41 1.82l-.42.9c-.38.8-.32 1.72.15 2.47.48.74 1.28 1.18 2.17 1.18H8.5c.25 1.72 1.71 3.05 3.5 3.05s3.26-1.33 3.5-3.05h1.45c.88 0 1.69-.44 2.16-1.19.47-.74.53-1.66.16-2.46"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtone3Bold;
