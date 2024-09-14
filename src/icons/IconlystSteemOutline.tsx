import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteemOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.588 6.455a.75.75 0 0 1 .332 1.007l-.54 1.073a1.98 1.98 0 0 0 0 1.785l.003.005 1.02 2.063.008.018a4.77 4.77 0 0 1 .029 3.926l-.373.866a.75.75 0 0 1-1.378-.593l.378-.878a3.27 3.27 0 0 0-.014-2.684l-1.014-2.05a3.48 3.48 0 0 1 .001-3.133l.54-1.072a.75.75 0 0 1 1.008-.333M9.209 7.465a.75.75 0 0 1 .339 1.005l-.43.865a1.42 1.42 0 0 0 0 1.271l.002.002.802 1.612.01.021a3.94 3.94 0 0 1 .023 3.242l-.304.686a.75.75 0 0 1-1.371-.607l.304-.686a2.44 2.44 0 0 0-.01-1.998l-.797-1.6a2.93 2.93 0 0 1 0-2.613l.427-.861a.75.75 0 0 1 1.005-.34M15.959 7.465a.75.75 0 0 1 .339 1.005l-.43.865a1.42 1.42 0 0 0 0 1.271l.002.002.802 1.612.012.026a3.94 3.94 0 0 1 .001 3.24l-.302.683a.75.75 0 0 1-1.372-.607l.306-.691a2.44 2.44 0 0 0 .005-1.996l-.795-1.598a2.93 2.93 0 0 1 0-2.612l.427-.861a.75.75 0 0 1 1.005-.34"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSteemOutline;
