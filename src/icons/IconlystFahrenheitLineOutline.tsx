import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFahrenheitLineOutline = ({
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
      d="M6.969 5.545a1.41 1.41 0 1 0 0 2.82 1.41 1.41 0 0 0 0-2.82m-2.91 1.41a2.91 2.91 0 1 1 5.82 0 2.91 2.91 0 0 1-5.82 0M12.748 6.94c0-.945.766-1.711 1.711-1.711h5.96a.75.75 0 0 1 0 1.5h-5.96a.21.21 0 0 0-.211.211v12.265a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.748 13.151a.75.75 0 0 1 .75-.75h6.92a.75.75 0 0 1 0 1.5h-6.92a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFahrenheitLineOutline;
