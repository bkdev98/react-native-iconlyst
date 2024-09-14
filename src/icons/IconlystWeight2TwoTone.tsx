import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeight2TwoTone = ({
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
      d="M6.866 17.725 4.94 15.798m1.084 4.56a1.324 1.324 0 0 0 1.872 0l.802-.803s.632.636.94.939c.655.644 1.438.679 2.111.068q.598-.542 1.14-1.14c.545-.6.521-1.525-.05-2.098q-2.835-2.843-5.678-5.678a1.505 1.505 0 0 0-2.104-.019c-.383.369-.762.743-1.127 1.13-.583.617-.57 1.438.022 2.05.312.322.992.993.992.993l-.802.804a1.324 1.324 0 0 0 0 1.872zM18.228 6.367 16.3 4.441m4.557 1.083a1.324 1.324 0 0 1 0 1.872l-.803.802s.637.632.94.94c.643.655.68 1.438.069 2.111-.361.397-.744.78-1.142 1.14-.6.545-1.524.521-2.098-.05a2606 2606 0 0 1-5.677-5.678 1.506 1.506 0 0 1-.02-2.104q.553-.578 1.13-1.127c.618-.583 1.438-.57 2.05.022.323.312.995.992.995.992l.802-.802a1.32 1.32 0 0 1 1.872 0z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.773 13.166 4.862-4.863M16.204 10.872l-4.862 4.863m.031-.032 4.863-4.863"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWeight2TwoTone;
