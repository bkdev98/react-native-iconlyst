import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCamera2Bold = ({
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
      d="M22.264 7.064a1.796 1.796 0 0 0-2.52-.249L18.517 7.82c-.257.21-.376.534-.36.867q.003.057.003.115v6.401q0 .062-.003.123c-.017.33.102.653.358.864l1.215.998c.316.261.718.404 1.133.404.986 0 1.791-.802 1.794-1.789l.012-7.598a1.8 1.8 0 0 0-.405-1.14M9.302 15.56h-2.84a.749.749 0 1 1 0-1.5h2.84c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m3.17-11.31h-6.79c-2.6 0-4.35 1.83-4.35 4.55v6.4c0 2.72 1.75 4.55 4.35 4.55h6.79c2.6 0 4.35-1.83 4.35-4.55V8.8c0-2.72-1.75-4.55-4.35-4.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCamera2Bold;
