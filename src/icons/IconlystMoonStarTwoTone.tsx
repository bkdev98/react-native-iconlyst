import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.914 17.281a9.14 9.14 0 0 1-1.8-5.458 9.17 9.17 0 0 1 6.647-8.82c.05-.015.092.04.068.085a8.29 8.29 0 0 0 1.467 9.73 8.27 8.27 0 0 0 9.73 1.458c.046-.024.1.018.086.068-1.099 3.843-4.64 6.656-8.82 6.656a9.2 9.2 0 0 1-1.984-.215"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.938 17.332c-1.009.009-1.824.687-1.824 1.84 0 .747.445 1.39 1.083 1.677.269.11.536.151.74.151h4.352c.204 0 .472-.04.744-.148a1.84 1.84 0 0 0 1.081-1.68c0-1.153-.814-1.831-1.823-1.84 0-.726-.57-2.177-2.176-2.177-1.608 0-2.177 1.451-2.177 2.177"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.023 4.178v.007M17.882 3.889A4.86 4.86 0 0 1 14.65 7.12a4.86 4.86 0 0 1 3.232 3.232 4.86 4.86 0 0 1 3.232-3.232 4.86 4.86 0 0 1-3.232-3.232"
    />
  </Svg>
);
export default IconlystMoonStarTwoTone;
