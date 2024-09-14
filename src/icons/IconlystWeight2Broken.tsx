import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeight2Broken = ({
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
      d="M6.366 17.724 4.44 15.797m1.084 4.56a1.324 1.324 0 0 0 1.872 0l.802-.803s.632.636.94.939c.655.644 1.438.679 2.111.068q.598-.542 1.14-1.14c.545-.6.521-1.525-.05-2.098q-2.835-2.844-5.678-5.677a1.505 1.505 0 0 0-2.104-.02c-.383.369-.762.743-1.127 1.13-.583.617-.57 1.438.022 2.05.312.322.992.993.992.993l-.802.804a1.324 1.324 0 0 0 0 1.872zM17.728 6.367 15.8 4.441m4.557 1.083a1.324 1.324 0 0 1 0 1.872l-.803.802s.637.632.94.94c.643.655.68 1.438.069 2.111-.361.397-.744.78-1.142 1.14-.6.545-1.524.521-2.098-.05a2606 2606 0 0 1-5.677-5.678 1.506 1.506 0 0 1-.02-2.104q.553-.578 1.13-1.127c.618-.583 1.438-.57 2.05.022.323.312.995.992.995.992l.802-.802a1.32 1.32 0 0 1 1.872 0zM8.273 13.166l2.423-2.423.141-.141M15.704 10.872l-4.862 4.863m.031-.032 4.863-4.863"
    />
  </Svg>
);
export default IconlystWeight2Broken;
