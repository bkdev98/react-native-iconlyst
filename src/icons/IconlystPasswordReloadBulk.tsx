import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordReloadBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.942 12.534c.582 0 1.142.103 1.671.282.09.03.19.018.273-.028a1.97 1.97 0 0 1 1.12-.247c.193.018.379-.115.383-.309.029-1.284.006-2.573.006-3.858 0-3.308-2.123-5.53-5.283-5.53H7.677c-3.159 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53h4.713c.17 0 .305-.142.31-.312.067-2.783 2.422-5.108 5.242-5.108"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.98 10.326a1.012 1.012 0 0 0 2.021 0c0-.556-.454-1.01-1.01-1.01-.558 0-1.012.454-1.012 1.01M10.886 10.326a1.011 1.011 0 0 0 2.02 0c0-.556-.453-1.01-1.01-1.01-.558 0-1.01.454-1.01 1.01M15.802 9.316a1.011 1.011 0 1 1-1.011 1.01c0-.556.454-1.01 1.01-1.01M19.052 17.086a.75.75 0 0 1 0-1.5h.044a2.5 2.5 0 0 0-1.153-.3 2.51 2.51 0 0 0-2.508 2.51 2.51 2.51 0 0 0 2.508 2.51c.885 0 1.688-.452 2.147-1.208a.75.75 0 1 1 1.282.777 3.98 3.98 0 0 1-3.43 1.93 4.014 4.014 0 0 1-4.007-4.01 4.014 4.014 0 0 1 4.008-4.01c.795 0 1.546.236 2.183.65a.74.74 0 0 1 .729-.65.75.75 0 0 1 .75.75v1.8a.77.77 0 0 1-.203.506.8.8 0 0 1-.547.245z"
    />
  </Svg>
);
export default IconlystPasswordReloadBulk;
