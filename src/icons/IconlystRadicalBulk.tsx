import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadicalBulk = ({
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
      d="M11.304 7.466a4.79 4.79 0 0 1 4.613-3.493H21a1 1 0 0 1 0 2h-5.083c-1.25 0-2.349.83-2.688 2.036l-3 10.634c-.5 1.774-2.982 1.864-3.609.13l-1.985-5.511a2.53 2.53 0 0 0-1.845-1.614 1 1 0 0 1 .42-1.955 4.53 4.53 0 0 1 3.307 2.89l1.875 5.206z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.853 12.047a1 1 0 0 1 1.398.211l1.472 1.996 1.472-1.996a1 1 0 1 1 1.61 1.187l-1.84 2.494 1.84 2.494a1 1 0 1 1-1.61 1.187l-1.472-1.996-1.472 1.996a1 1 0 0 1-1.61-1.187l1.84-2.494-1.84-2.494a1 1 0 0 1 .212-1.398"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRadicalBulk;
