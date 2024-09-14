import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike2Outline = ({
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
      d="M11.586 6.482c-.927-1.774-2.808-2.278-4.252-1.818-2.825.911-3.947 4.03-3.018 6.935.758 2.357 2.48 4.349 4.213 5.765a15 15 0 0 0 2.403 1.618c.349.184.651.318.893.404.26.092.393.11.425.11l.01-.001.025-.003q.034-.004.091-.017.117-.026.3-.09c.243-.088.548-.224.899-.41a15 15 0 0 0 2.417-1.633c1.74-1.425 3.46-3.416 4.19-5.74l.002-.003c.929-2.902-.2-6.022-3.026-6.934-1.447-.454-3.293.017-4.244 1.82a.75.75 0 0 1-1.328-.003m.665-1.688c-1.417-1.68-3.617-2.12-5.374-1.558h-.002c-3.838 1.237-5.09 5.373-3.988 8.82v.002c.88 2.73 2.833 4.947 4.692 6.467a16.3 16.3 0 0 0 2.654 1.784 8.6 8.6 0 0 0 1.09.49c.307.11.636.196.927.196.294 0 .624-.088.933-.2a9 9 0 0 0 1.094-.495c.794-.42 1.728-1.03 2.665-1.797 1.863-1.526 3.82-3.743 4.671-6.448 1.103-3.45-.16-7.583-3.997-8.819l-.005-.001c-1.755-.552-3.933-.139-5.36 1.559"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartLike2Outline;
