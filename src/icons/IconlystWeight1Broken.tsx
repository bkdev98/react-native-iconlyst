import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeight1Broken = ({
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
      d="M14.807 3.452c-.612-.592-1.432-.605-2.05-.022-.386.364-.76.743-1.13 1.127a1.506 1.506 0 0 0 .02 2.104q2.835 2.842 5.677 5.678a1.525 1.525 0 0 0 2.098.05q.599-.541 1.14-1.14c.612-.673.577-1.457-.068-2.112-.186-.19-2.183-2.189-3.762-3.767M9.137 20.492c.656.645 1.44.68 2.113.069q.597-.543 1.14-1.141c.543-.6.52-1.525-.052-2.098q-2.834-2.842-5.677-5.677a1.505 1.505 0 0 0-2.103-.02 33 33 0 0 0-1.128 1.13c-.583.618-.57 1.438.023 2.05l3.697 3.7M3.328 18.16l2.518 2.518M18.16 3.328l2.518 2.518M15.702 10.872l-4.862 4.863m.033-.033 4.862-4.862M8.271 13.167l4.862-4.862m.032-.032-4.862 4.863"
    />
  </Svg>
);
export default IconlystWeight1Broken;
