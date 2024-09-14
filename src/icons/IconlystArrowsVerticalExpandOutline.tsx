import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalExpandOutline = ({
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
      d="M17.003 14.197a2.55 2.55 0 0 1 0 3.606l-3.2 3.2a2.55 2.55 0 0 1-3.606 0l-3.2-3.2a2.55 2.55 0 0 1 2.453-4.27v-3.067a2.549 2.549 0 0 1-2.453-4.27l3.2-3.2a2.55 2.55 0 0 1 3.606 0l3.2 3.2a2.55 2.55 0 0 1-2.453 4.27v3.068a2.55 2.55 0 0 1 2.453.663m-1.06 2.545a1.05 1.05 0 1 0-1.485-1.485l-.127.128a.75.75 0 0 1-1.28-.53v-5.71a.75.75 0 0 1 1.28-.53l.127.127a1.05 1.05 0 1 0 1.485-1.484l-3.2-3.2a1.05 1.05 0 0 0-1.485 0l-3.2 3.2a1.05 1.05 0 0 0 1.484 1.484l.128-.127a.75.75 0 0 1 1.28.53v5.71a.75.75 0 0 1-1.28.53l-.128-.127a1.05 1.05 0 0 0-1.484 1.484l3.2 3.2c.41.41 1.074.41 1.485 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsVerticalExpandOutline;
