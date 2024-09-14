import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRefresh2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.129 15.9v1.868s0 2.608 6.203 2.9M18.783 10.934V6.049M10.332 14.81c-6.203-.293-6.203-2.902-6.203-2.902V6.047M15.825 19.065h-1.954v1.817M19.871 14.285v1.954h-1.953"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.941 16.084a3.16 3.16 0 0 1 2.756-1.594c2.12 0 3.174 1.76 3.174 1.76M19.44 19.248a3.17 3.17 0 0 1-2.745 1.582c-1.75 0-2.824-1.758-2.824-1.758"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.456 3.12C7.41 3.12 4.13 4.442 4.13 6.074s3.28 2.956 7.327 2.956 7.327-1.324 7.327-2.956c0-.983-1.189-1.854-3.019-2.391"
    />
  </Svg>
);
export default IconlystDatabaseRefresh2Broken;