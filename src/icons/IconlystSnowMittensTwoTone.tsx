import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowMittensTwoTone = ({
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
      d="M9.948 19.455v.395M6.907 19.455v.395M12.99 19.455v.395M9.783 7.583v4.663m2.018-3.496L7.762 11.08m4.039 0L7.762 8.749"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.71 17.44V8.436a5.07 5.07 0 0 1 10.141 0v3.86"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.852 10.857 1.04-1.038a2.234 2.234 0 0 1 3.157 3.162l-4.254 4.25M13.793 17.44h-7.69c-.998 0-1.807.592-1.807 1.57l-.001 1.285c0 .978.81 1.57 1.807 1.57h7.69c.999 0 1.808-.592 1.808-1.57V19.01c0-.978-.808-1.57-1.807-1.57"
    />
  </Svg>
);
export default IconlystSnowMittensTwoTone;
