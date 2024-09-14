import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableKeyboradBulk = ({
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
      d="M7.5 6.414c-3.137.104-5 2.02-5 5.169v4.873c-.005 1.563.464 2.863 1.356 3.758.918.92 2.268 1.407 3.906 1.407h8.467c3.3 0 5.271-1.93 5.271-5.163v-4.8c0-3.286-1.971-5.248-5.271-5.248h-.532v.004z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.894 6.41v-.14a2.697 2.697 0 0 0-2.684-2.652H9.202a.5.5 0 0 1-.5-.495.75.75 0 0 0-1.5.014 2 2 0 0 0 1.992 1.98h1.001c.607-.015 1.19.523 1.2 1.165v.128zM6.004 10.854a.867.867 0 0 0 1.732 0 .866.866 0 0 0-1.732 0M17.12 11.72a.867.867 0 0 1 0-1.732.866.866 0 0 1 0 1.732M15.411 14.6a.867.867 0 0 1 0-1.733.867.867 0 0 1 0 1.733M9.178 18.159h5.645a.75.75 0 0 0 0-1.5H9.178a.75.75 0 0 0 0 1.5M7.713 13.733a.867.867 0 1 1 1.734.002.867.867 0 0 1-1.734-.002M10.288 9.988a.866.866 0 1 1 0 1.733.866.866 0 0 1 0-1.733M12.861 13.733a.867.867 0 1 0-1.734.002.867.867 0 0 0 1.734-.002M13.702 9.988a.866.866 0 1 1 0 1.733.866.866 0 0 1 0-1.733"
    />
  </Svg>
);
export default IconlystCableKeyboradBulk;
