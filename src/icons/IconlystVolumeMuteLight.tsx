import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeMuteLight = ({
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
      d="M9.416 6.797c.439 0 .953-.124 1.326-.357l3.207-2.005c1.925-1.203 4.275.241 4.411 2.483a70 70 0 0 1 0 10.164c-.117 2.239-2.486 3.687-4.412 2.484l-3.206-2.005c-.373-.234-.88-.357-1.32-.357-1.644-.124-2.172.07-3.079-.678-.959-.803-.888-2.95-.888-4.526s-.073-3.722.888-4.526c.9-.748 1.437-.556 3.073-.677"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeMuteLight;
