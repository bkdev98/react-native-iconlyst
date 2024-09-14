import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleTagmanagerLight = ({
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
      d="m12 16.027 4.028-4.029-5.484-5.484a2.06 2.06 0 0 1 2.912-2.911l6.94 6.94a2.054 2.054 0 0 1 0 2.909l-6.946 6.942"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.998 7.965-4.029 4.029 5.484 5.484a2.06 2.06 0 0 1-2.912 2.912l-6.94-6.94a2.054 2.054 0 0 1 0-2.91l6.946-6.942"
    />
  </Svg>
);
export default IconlystGoogleTagmanagerLight;
