import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseAiLight = ({
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
      strokeWidth={1.5}
      d="M11.066 8.912c4.046 0 7.327-1.323 7.327-2.956 0-1.632-3.28-2.956-7.327-2.956S3.738 4.324 3.738 5.956c0 1.633 3.28 2.956 7.328 2.956Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.738 11.687v5.834s0 2.918 7.37 2.918M18.392 10.896V5.852"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.738 5.852v5.835s0 1.904 3.887 2.635M17.665 15.8l.101.274a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225l-.1.274-.102-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.222-2.225zM12.285 13.066c.227.746.81 1.33 1.554 1.556a2.34 2.34 0 0 0-1.554 1.556 2.34 2.34 0 0 0-1.554-1.556 2.34 2.34 0 0 0 1.554-1.556"
    />
  </Svg>
);
export default IconlystDatabaseAiLight;
