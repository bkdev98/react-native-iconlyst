import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMotorTwoTone = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.436 16.607a1 1 0 0 1 .01.162 2.512 2.512 0 0 1-5.023 0c0-.054 0-.108.01-.162"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.58 10.093c-.909.207-2.052-.261-2.268-1.18-.207-.908.603-1.907 1.512-2.114q1.431 1.404.756 3.294"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.869 14.295a2.52 2.52 0 0 1 2.142 2.484 2.512 2.512 0 0 1-5.022 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.407 4.71h2.133c.423 0 .9.325 1.061.712l2.988 7.308c.162.405.063.873-.26 1.16l-2.719 2.448c-.188.171-.44.27-.692.27H3.75v-2.501a3.247 3.247 0 0 1 3.249-3.25h1.836c.81 0 1.548.46 1.908 1.189l.657 1.332c.27.54.819.881 1.413.881h.963a1.23 1.23 0 0 0 1.223-1.151l-.062-4.374a1.416 1.416 0 0 1 1.412-1.44h1.008M19.842 12.846s1.26.135 1.908 1.107M18.501 16.787l-1.053-1.215"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.09 8.086h2.807"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMotorTwoTone;
