import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketSearchBroken = ({
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
      d="M9.569 10.354h3.25M20.095 17.576l1.723 1.722M14.62 15.308a3.21 3.21 0 0 0 5.475 2.27 3.23 3.23 0 0 0 .935-2.27 3.205 3.205 0 0 0-4.557-2.908M7.642 4.703c-.913 0-1.37 0-1.744.104a2.84 2.84 0 0 0-1.973 1.976c-.104.374-.104.83-.103 1.744 0 .236 0 .355.012.427.051.327.014.249.237.493.05.054.343.288.93.756.41.329.671.829.671 1.404v.055a1.8 1.8 0 0 1-.638 1.31c-.622.523-.932.784-.98.837-.225.256-.175.148-.225.486-.01.07-.01.183-.01.41 0 .902 0 1.353.1 1.722a2.84 2.84 0 0 0 1.986 1.985c.37.102.82.102 1.721.102h4.22M20.806 9.196c.012-.077.012-.203.012-.454v-.449c0-.548 0-.822-.035-1.051a3 3 0 0 0-2.503-2.503c-.23-.036-.177-.036-.73-.036-.14 0-.21 0-.277.005a2 2 0 0 0-1.09.414 4 4 0 0 0-.21.18c-.232.207-.348.31-.46.385a2 2 0 0 1-2.23 0 5 5 0 0 1-.461-.385 4 4 0 0 0-.21-.18 2 2 0 0 0-1.09-.414c-.067-.005-.137-.005-.277-.005h-.642"
    />
  </Svg>
);
export default IconlystTicketSearchBroken;
