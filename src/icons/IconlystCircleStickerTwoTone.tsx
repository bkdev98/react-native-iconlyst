import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleStickerTwoTone = ({
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
      d="M12.387 21a9.016 9.016 0 0 0 9.107-8.205c.046-.514-.172-1.018-.537-1.383l-7.87-7.869c-.364-.365-.868-.583-1.382-.537a9.017 9.017 0 0 0-8.204 9.108c.067 4.787 4.098 8.819 8.886 8.885"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.51 3.145c.05 6.341 2.5 8.79 8.84 8.84"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCircleStickerTwoTone;
