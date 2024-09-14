import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot1Light = ({
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
      d="M4.8 16.538c0 2.358 1.468 4.024 3.828 4.024h6.753c2.36 0 3.828-1.666 3.828-4.024l-.01-4.643c0-3.977-3.223-6.164-7.2-6.164-3.976 0-7.2 2.187-7.2 6.164z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.094 3.438V5.73m-1.276-2.292h2.372M3 10.8h18"
    />
  </Svg>
);
export default IconlystPot1Light;
