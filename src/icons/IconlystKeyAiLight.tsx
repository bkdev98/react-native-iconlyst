import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.487 21H7.889a4.12 4.12 0 0 1-4.12-4.12V7.119A4.12 4.12 0 0 1 7.89 3h7.096a4.12 4.12 0 0 1 4.12 4.119v5.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.633 10.422A1.801 1.801 0 1 0 7.83 8.62v.004a1.8 1.8 0 0 0 1.802 1.798"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.635 10.47v5.676h1.802M11.437 13.394H9.635M17.646 15.722l-.103.277a3.82 3.82 0 0 1-2.255 2.26l-.277.102.277.103a3.82 3.82 0 0 1 2.255 2.259l.103.277.102-.277a3.82 3.82 0 0 1 2.256-2.26l.277-.102-.277-.103A3.82 3.82 0 0 1 17.748 16z"
    />
  </Svg>
);
export default IconlystKeyAiLight;
