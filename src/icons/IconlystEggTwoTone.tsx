import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEggTwoTone = ({
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
      d="M13.004 20.983c3.931-.268 6.991-3.565 6.96-7.157-.025-1.543-.256-2.71-.647-3.842-.762-2.208-1.849-4.22-3.687-5.729-2.023-1.66-4.176-1.672-6.216-.042-1.615 1.29-2.648 3.005-3.412 4.89-.705 1.742-1.14 3.54-.901 5.437.483 3.857 3.991 6.71 7.903 6.443"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.846 14.006a3.347 3.347 0 1 0-6.693 0 3.347 3.347 0 0 0 6.693 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEggTwoTone;
