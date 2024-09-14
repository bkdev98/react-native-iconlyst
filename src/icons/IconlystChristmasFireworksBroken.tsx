import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasFireworksBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.935 21.082 9.404-9.405M14.609 3.9c-.424.031-.58.45-.315.847 1.54 2.092 3.385 4.095 5.587 5.587.361.245.816.11.848-.315l.449-6.036a.497.497 0 0 0-.533-.533l-3.018.225M14.718 5.606l-6.47 6.47c-.4.4-.4 1.047 0 1.447l2.007 2.007M11.878 8.465h3.232M8.411 11.923h5.184M9.056 14.394c.213.509.25 1.896-2.406 1.682-2.656-.215-3.428.783-3.872 1.473M4.638 12.509v.01"
    />
  </Svg>
);
export default IconlystChristmasFireworksBroken;
