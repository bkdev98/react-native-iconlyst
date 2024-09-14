import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLockTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 8.662-1.333 2.816-2.8-1.325"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.198 11.405a8.422 8.422 0 1 0-.654 5.148"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.097 13.145c.496-.365.821-.95.821-1.614a2.01 2.01 0 0 0-4.02 0c0 .664.325 1.249.821 1.614l-.623 1.873a.853.853 0 0 0 .81 1.12h2.005a.853.853 0 0 0 .81-1.12z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshLockTwoTone;
