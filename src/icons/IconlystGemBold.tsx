import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.213 11.638a.19.19 0 0 0-.19-.23H8.976a.19.19 0 0 0-.19.23q.037.169.089.314l2.935 8.29a.2.2 0 0 0 .377 0l2.937-8.29q.05-.145.088-.314M13.649 3.77a.2.2 0 0 0-.194-.149H10.55a.2.2 0 0 0-.193.149l-1.54 5.804-.022.1a.2.2 0 0 0 .2.234h6.012a.2.2 0 0 0 .198-.231 1 1 0 0 0-.023-.104zM16.633 9.19q.068.261.106.543c.014.1.1.175.2.175h4.258c.127 0 .222-.117.185-.238a2.4 2.4 0 0 0-.31-.65l-2.94-4.319a2.45 2.45 0 0 0-2.035-1.08h-.676a.2.2 0 0 0-.194.252zM7.461 12.453a4.5 4.5 0 0 1-.196-.868.203.203 0 0 0-.2-.177H3.023c-.145 0-.24.15-.167.274a2.4 2.4 0 0 0 .284.388l6.178 6.78c.147.161.41.004.337-.201zM7.06 9.908a.203.203 0 0 0 .201-.176 5 5 0 0 1 .107-.544l1.41-5.316a.2.2 0 0 0-.194-.25h-.673c-.817 0-1.577.403-2.032 1.077L2.93 9.02c-.14.204-.242.424-.31.651-.037.122.058.238.184.238zM16.935 11.408a.203.203 0 0 0-.2.177c-.043.31-.104.606-.197.868l-2.192 6.191c-.073.206.19.363.336.202l6.176-6.788q.16-.176.28-.375c.075-.125-.021-.275-.167-.275z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGemBold;
