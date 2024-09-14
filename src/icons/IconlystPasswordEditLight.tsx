import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordEditLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.712V8.474c0-2.945-1.835-5.027-4.783-5.027H7.782C4.843 3.447 3 5.53 3 8.474v4.055c0 2.945 1.834 5.026 4.782 5.026h3.892"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.382 20.147-.81.135a.907.907 0 0 1-1.053-.992l.091-.836c.044-.404.212-.783.483-1.086l3.53-3.853a1.11 1.11 0 0 1 1.572-.06l.745.69a1.11 1.11 0 0 1 .06 1.57l-3.49 3.811a1.94 1.94 0 0 1-1.128.621"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.775 14.428 2.291 2.292M12 10.457v-.064zm-.26-.014a.26.26 0 1 1 .521-.002.26.26 0 0 1-.52.002M15.904 10.457v-.064zm-.26-.014a.26.26 0 1 1 .521-.001.26.26 0 0 1-.52 0M8.094 10.457v-.064zm-.26-.014a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystPasswordEditLight;
