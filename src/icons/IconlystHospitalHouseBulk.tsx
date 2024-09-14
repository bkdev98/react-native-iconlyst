import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalHouseBulk = ({
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
      d="m19.761 7.82-5.573-4.54a3.47 3.47 0 0 0-4.375 0L4.238 7.82a3.43 3.43 0 0 0-1.276 2.677v7.18a3.825 3.825 0 0 0 3.822 3.82h10.431a3.825 3.825 0 0 0 3.822-3.82v-7.18a3.43 3.43 0 0 0-1.276-2.677"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.39 14.007c0 .673-.548 1.221-1.22 1.221h-.904v.9c0 .672-.547 1.22-1.22 1.22h-2.094a1.22 1.22 0 0 1-1.219-1.22v-.9h-.905a1.22 1.22 0 0 1-1.219-1.22v-2.1c0-.673.547-1.22 1.22-1.22h.904v-.9a1.22 1.22 0 0 1 1.22-1.22h2.093c.673 0 1.22.546 1.22 1.22v.9h.903c.673 0 1.22.547 1.22 1.22zm-3.624-3.939v1.37c0 .413.336.75.75.75h1.373v1.54h-1.373a.75.75 0 0 0-.75.75v1.37h-1.533v-1.37a.75.75 0 0 0-.75-.75H9.11v-1.54h1.374a.75.75 0 0 0 .75-.75v-1.37z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalHouseBulk;
