import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordEditTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 10.712V8.474c0-2.945-1.835-5.027-4.783-5.027H8.282C5.343 3.447 3.5 5.53 3.5 8.474v4.055c0 2.945 1.834 5.026 4.782 5.026h3.892"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.882 20.147-.81.135a.907.907 0 0 1-1.053-.992l.091-.836c.044-.404.212-.783.483-1.086l3.53-3.853a1.11 1.11 0 0 1 1.572-.06l.745.69a1.11 1.11 0 0 1 .06 1.57l-3.49 3.811a1.94 1.94 0 0 1-1.128.621"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.275 14.428 2.291 2.292M12.5 10.457v-.064zm-.26-.014a.26.26 0 1 1 .521-.002.26.26 0 0 1-.52.002M16.404 10.457v-.064zm-.26-.014a.26.26 0 1 1 .521-.001.26.26 0 0 1-.52 0M8.594 10.457v-.064zm-.26-.014a.261.261 0 1 1 .523 0 .261.261 0 0 1-.523 0"
    />
  </Svg>
);
export default IconlystPasswordEditTwoTone;
