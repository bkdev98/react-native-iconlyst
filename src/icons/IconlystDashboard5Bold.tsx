import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard5Bold = ({
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
      d="M12.98 5.71a.75.75 0 0 1-.75-.75V2.854a.293.293 0 0 0-.323-.294 9.52 9.52 0 0 0-8.366 8.367.293.293 0 0 0 .293.324h2.107a.75.75 0 1 1 0 1.5H3.834a.293.293 0 0 0-.293.323 9.52 9.52 0 0 0 8.366 8.366.293.293 0 0 0 .323-.294v-1.865a.75.75 0 0 1 1.5 0v1.865c0 .175.15.314.324.294a9.52 9.52 0 0 0 8.366-8.366.293.293 0 0 0-.293-.323h-1.865a.75.75 0 0 1 0-1.5h1.865c.175 0 .313-.15.293-.324a9.52 9.52 0 0 0-8.366-8.367.293.293 0 0 0-.324.294V4.96a.75.75 0 0 1-.75.75m.001 9.677c-1.04 0-1.652-.49-1.982-.902-.579-.723-.696-1.682-.555-2.312.228-1.02 1.203-2.473 2.221-3.305l.127-.103a.3.3 0 0 1 .38 0l.125.103c1.017.832 1.992 2.284 2.22 3.304.141.63.024 1.59-.555 2.313-.33.412-.94.902-1.98.902"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard5Bold;
