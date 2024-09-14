import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainLight = ({
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
      d="M7.664 14.692c.097 2.175 2.723 2.63 3.997 1.393.603 1.168 1.848 1.163 2.395 1.014l1.196 2.83c.012.03.04.049.07.049h1.689a.08.08 0 0 0 .077-.082v-1.723c5.117-.304 4.46-3.96 3.205-4.601 2.279-2.17.773-4.129 0-4.906-.284-.801-.907-2.007-2.278-2.412"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.202 9.52c-1.251 1.864-.762 4.148.927 5.174 1.123.682 2.713.584 3.534 0 .852-.606 1.334-1.653 1.255-2.478M6.986 5.547c1.177-.693 3.63-2.207 6.76-1.173"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.474 7.816c1.911-2.515-2.51-5.677-4.873-2.152M5.277 11.384c-3.9-.994-1.236-7.724 3.457-5.291M7.778 9.116c.483.79 3.09.912 3.09-1.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.231 9.297c.213.48.916 1.37 2.028 1.095M17.82 11.323l1.294-.284M14.846 9.7c.495.432 1.255 1.568.405 3.303"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.26 13.776c.907-1.42 4.73-1.359 4.866 1.804"
    />
  </Svg>
);
export default IconlystBrainLight;
