import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterOldOutline = ({
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
      fillRule="evenodd"
      d="M7.838 3.75c-.935 0-1.692.758-1.692 1.693v8.717a6.09 6.09 0 0 0 6.09 6.09h3.925a1.693 1.693 0 0 0 0-3.386h-3.925A2.704 2.704 0 0 1 9.53 14.16v-1.954a.75.75 0 0 1 .75-.75h5.88a1.693 1.693 0 0 0 0-3.386h-5.88a.75.75 0 0 1-.75-.75V5.443c0-.935-.758-1.693-1.693-1.693M4.646 5.443a3.193 3.193 0 1 1 6.385 0V6.57h5.13a3.193 3.193 0 1 1 0 6.386h-5.13v1.204c0 .665.54 1.204 1.205 1.204h3.925a3.193 3.193 0 1 1 0 6.386h-3.925a7.59 7.59 0 0 1-7.59-7.59z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwitterOldOutline;
