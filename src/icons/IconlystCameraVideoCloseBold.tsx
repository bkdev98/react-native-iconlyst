import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoCloseBold = ({
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
      d="M23.098 7.057a1.796 1.796 0 0 0-2.52-.249L19.35 7.812c-.257.21-.375.534-.36.867q.004.057.004.115v6.401q0 .062-.004.123c-.016.33.102.653.358.864l1.215.998c.316.261.719.404 1.134.404.986 0 1.79-.802 1.794-1.789l.012-7.598a1.8 1.8 0 0 0-.406-1.14M11.956 13.06c.29.29.29.76 0 1.06-.15.14-.34.22-.53.22s-.39-.08-.53-.22l-1.06-1.06-1.06 1.06c-.29.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06l1.06-1.07-1.06-1.05c-.3-.3-.3-.77 0-1.07.29-.29.77-.29 1.06 0l1.06 1.06 1.06-1.06c.29-.29.77-.29 1.06 0 .29.3.29.77 0 1.07l-1.06 1.05zm1.35-8.81h-6.79c-2.6 0-4.35 1.82-4.35 4.54v6.41c0 2.72 1.75 4.55 4.35 4.55h6.79c2.6 0 4.35-1.83 4.35-4.55V8.79c0-2.72-1.75-4.54-4.35-4.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraVideoCloseBold;
