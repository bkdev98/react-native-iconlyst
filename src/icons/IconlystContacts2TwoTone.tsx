import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystContacts2TwoTone = ({
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
      d="M8.633 4h8.043c2.799 0 4.532 1.554 4.524 4.411v8.669c0 2.857-1.733 4.42-4.532 4.42H8.633c-2.79 0-4.532-1.59-4.532-4.492V8.411C4.1 5.554 5.842 4 8.633 4"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.65 14.852c-1.907 0-3.533.287-3.533 1.442 0 1.154 1.618 1.452 3.533 1.452 1.906 0 3.533-.289 3.533-1.442s-1.617-1.452-3.533-1.452M14.893 10.345a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.493 2.5v3.126M8.816 2.5v3.126"
    />
  </Svg>
);
export default IconlystContacts2TwoTone;
