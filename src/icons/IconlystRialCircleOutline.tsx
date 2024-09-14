import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.768 15.502a.75.75 0 0 1 .75-.75h1.241a.75.75 0 1 1 0 1.5h-1.241a.75.75 0 0 1-.75-.75M12.518 7.873a.75.75 0 0 1 .75.75v3.672c0 .29.234.524.523.524h.205a.524.524 0 0 0 .524-.524v-.98a.75.75 0 0 1 1.5 0v.98a2.024 2.024 0 0 1-2.024 2.024h-.205a2.024 2.024 0 0 1-2.023-2.024V8.623a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.178 10.469a.75.75 0 0 1 .75.75v2.18a3.05 3.05 0 0 1-2.01 2.808.75.75 0 0 1-.512-1.41 1.55 1.55 0 0 0 1.022-1.422V11.22a.75.75 0 0 1 .75-.75M10.53 7.875a.75.75 0 0 1 .75.75v4.991a2.354 2.354 0 1 1-4.71 0v-.885a.75.75 0 0 1 1.5 0v.885a.854.854 0 1 0 1.71 0V8.625a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRialCircleOutline;
