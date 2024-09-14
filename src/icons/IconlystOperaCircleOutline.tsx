import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOperaCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12 18.16c-1.58 0-3.16-.6-4.36-1.8A6.14 6.14 0 0 1 5.83 12c0-1.65.64-3.19 1.81-4.36 2.4-2.4 6.31-2.4 8.71 0A6.14 6.14 0 0 1 18.16 12c0 1.65-.64 3.19-1.81 4.36-1.2 1.2-2.78 1.8-4.36 1.8zm0-10.81c-1.19 0-2.39.45-3.3 1.36-.88.88-1.36 2.05-1.36 3.29s.48 2.42 1.36 3.29c1.82 1.81 4.78 1.81 6.59 0 .88-.88 1.36-2.05 1.36-3.29s-.48-2.42-1.36-3.29c-.91-.91-2.1-1.36-3.3-1.36z"
    />
    <Path
      fill={props.color}
      d="M13.5 17.091c-1.26 0-2.44-.54-3.32-1.51-1.77-1.97-1.77-5.16 0-7.13.88-.98 2.06-1.51 3.32-1.51s2.44.54 3.32 1.51c1.77 1.96 1.77 5.16 0 7.13-.88.98-2.06 1.51-3.32 1.51m0-8.66c-.83 0-1.61.36-2.21 1.02-1.27 1.41-1.27 3.7 0 5.11a2.95 2.95 0 0 0 4.41 0c1.27-1.41 1.27-3.71 0-5.11-.59-.66-1.38-1.02-2.21-1.02z"
    />
    <Path
      fill={props.color}
      d="M12 15.881c-.87 0-1.7-.44-2.29-1.21-1.15-1.49-1.15-3.84 0-5.34.59-.77 1.43-1.21 2.3-1.21s1.7.44 2.29 1.21c1.15 1.5 1.15 3.85 0 5.34-.59.77-1.43 1.21-2.29 1.21zm0-6.26c-.4 0-.8.22-1.11.62-.73.96-.73 2.57 0 3.52.62.8 1.59.8 2.21 0 .73-.95.73-2.56 0-3.52-.31-.4-.7-.62-1.11-.62z"
    />
  </Svg>
);
export default IconlystOperaCircleOutline;
