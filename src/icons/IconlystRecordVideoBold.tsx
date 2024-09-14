import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRecordVideoBold = ({
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
      d="M23.097 7.064a1.796 1.796 0 0 0-2.52-.249L19.351 7.82c-.258.21-.376.534-.36.867q.003.057.003.115v6.401l-.003.123c-.017.33.102.653.358.864l1.214.998c.316.261.72.404 1.134.404.986 0 1.791-.802 1.794-1.789l.012-7.598a1.8 1.8 0 0 0-.406-1.14M11.606 12c0 .96-.78 1.74-1.73 1.74-.96 0-1.74-.78-1.74-1.74s.78-1.73 1.74-1.73c.95 0 1.73.77 1.73 1.73"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.876 15.24c-1.79 0-3.24-1.46-3.24-3.24s1.45-3.23 3.24-3.23c1.78 0 3.23 1.45 3.23 3.23s-1.45 3.24-3.23 3.24m3.43-10.99h-6.79c-2.6 0-4.35 1.83-4.35 4.55v6.4c0 2.72 1.75 4.55 4.35 4.55h6.79c2.6 0 4.35-1.83 4.35-4.55V8.8c0-2.72-1.75-4.55-4.35-4.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRecordVideoBold;
