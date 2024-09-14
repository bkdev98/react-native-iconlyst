import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowMittensBroken = ({
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
      d="M9.783 7.583v4.663M9.948 19.455v.395M6.907 19.455v.395M12.99 19.455v.395M11.8 8.75 7.763 11.08M11.8 11.08 7.763 8.75M14.851 12.295v-3.86a5.07 5.07 0 1 0-10.14 0v3.251"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.852 10.857 1.04-1.038a2.234 2.234 0 0 1 3.157 3.162l-4.254 4.25M8.947 21.865H6.102c-.998 0-1.807-.592-1.807-1.57V19.01c0-.978.81-1.57 1.808-1.57h7.69c.999 0 1.808.592 1.808 1.57l-.001 1.285c0 .978-.81 1.57-1.807 1.57H11.87M4.71 17.44v-2.502"
    />
  </Svg>
);
export default IconlystSnowMittensBroken;
