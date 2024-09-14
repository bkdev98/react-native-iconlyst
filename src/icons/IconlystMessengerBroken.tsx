import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessengerBroken = ({
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
      d="M21.589 10.285c-.671-3.577-3.547-6.453-7.124-7.124C8.771 2.093 3.75 6.488 3.75 12.001c0 1.419.345 2.77.917 3.991.096.206.126.434.077.656-.155.713-.483 2.14-.72 3.165a.744.744 0 0 0 .908.888c.952-.239 2.26-.565 3.07-.756.238-.056.478-.018.697.092a9.05 9.05 0 0 0 4.05.963c4.372 0 8.042-3.159 8.84-7.306"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.107 9.584 2.74 1.941 2.865-1.456-2.548 4.344-2.74-1.94-2.865 1.454 1.274-2.171"
    />
  </Svg>
);
export default IconlystMessengerBroken;
