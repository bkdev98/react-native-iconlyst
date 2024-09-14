import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelebrationBold = ({
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
      d="M2.58 5.463c.37.2.8.419 1.278.629l1.421 4.553a.5.5 0 0 0 .906.111l1.957-3.222c.37.089.76.169 1.158.239l1.92 4.17c.07.16.23.27.41.29h.04c.17 0 .33-.08.42-.22l2.54-3.79c.32-.01.64-.02.96-.05h.005l1.882 3.538a.5.5 0 0 0 .441.265h.021a.5.5 0 0 0 .44-.303l1.883-4.407.008-.003c.42-.13.84-.29 1.26-.46a.74.74 0 0 0 .41-.98.75.75 0 0 0-.97-.41c-7.02 2.88-14.62.43-17.66-1.26a.744.744 0 0 0-1.02.29c-.2.36-.07.82.29 1.02M20.69 13.093c-3.04 1.7-10.64 4.14-17.66 1.27a.74.74 0 0 0-.97.41c-.16.38.02.82.41.98q.435.18.87.33l1.9 4.66c.07.18.24.3.43.31h.03c.18 0 .35-.1.44-.26l2.04-3.7c.27.03.52.04.79.05h.004l2.553 3.811a.5.5 0 0 0 .415.221l.04-.001a.5.5 0 0 0 .414-.29l1.886-4.091c.43-.07.84-.15 1.238-.25l1.91 3.16c.1.15.26.24.43.24.02 0 .04 0 .06-.01.2-.02.36-.15.42-.34l1.36-4.37c.67-.27 1.25-.56 1.72-.82.36-.2.49-.66.29-1.02a.753.753 0 0 0-1.02-.29"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelebrationBold;
